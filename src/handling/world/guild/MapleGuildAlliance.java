/*
 This file is part of the ZeroFusion MapleStory Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 ZeroFusion organized by "RMZero213" <RMZero213@hotmail.com>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.world.guild;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import handling.world.World;
import net.DatabaseConnection;
import tools.packet.CWvsContext;
import tools.packet.CWvsContext.AlliancePacket;

public class MapleGuildAlliance implements java.io.Serializable {

    private static enum GAOp {

        NONE, DISBAND, NEWGUILD
    }
    public static final long serialVersionUID = 24081985245L;
    public static final int CHANGE_CAPACITY_COST = 10000000;
    private final int[] guilds = new int[5];
    private int allianceid, leaderid, capacity; //make SQL for this auto-increment
    private String name, notice;
    private String ranks[] = new String[5];

    public MapleGuildAlliance(final int id) {
        super();

        try {
            Connection con = DatabaseConnection.getConnection();
            try (PreparedStatement ps = con.prepareStatement("SELECT * FROM alliances WHERE id = ?")) {
                ps.setInt(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (!rs.first()) {
                        rs.close();
                        ps.close();
                        allianceid = -1;
                        return;
                    }
                    allianceid = id;
                    name = rs.getString("name");
                    capacity = rs.getInt("capacity");
                    for (int i = 1; i < 6; i++) {
                        guilds[i - 1] = rs.getInt("guild" + i);
                        ranks[i - 1] = rs.getString("rank" + i);
                    }
                    leaderid = rs.getInt("leaderid");
                    notice = rs.getString("notice");
                }
            }
        } catch (SQLException se) {
            System.err.println("unable to read guild information from sql");
        }
    }

    public static final Collection<MapleGuildAlliance> loadAll() {
        final Collection<MapleGuildAlliance> ret = new ArrayList<>();
        MapleGuildAlliance g;
        try {
            Connection con = DatabaseConnection.getConnection();
            try (PreparedStatement ps = con.prepareStatement("SELECT id FROM alliances"); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    g = new MapleGuildAlliance(rs.getInt("id"));
                    if (g.getId() > 0) {
                        ret.add(g);
                    }
                }
            }
        } catch (SQLException se) {
            System.err.println("unable to read guild information from sql");
        }
        return ret;
    }

    public int getNoGuilds() {
        int ret = 0;
        for (int i = 0; i < capacity; i++) {
            if (guilds[i] > 0) {
                ret++;
            }
        }
        return ret;
    }

    public static final int createToDb(final int leaderId, final String name, final int guild1, final int guild2) {
        int ret = -1;
        if (name.length() > 12) {
            return ret;
        }
        Connection con = DatabaseConnection.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("SELECT id FROM alliances WHERE name = ?");
            ps.setString(1, name);
            ResultSet rs = ps.executeQuery();

            if (rs.first()) {// name taken
                rs.close();
                ps.close();
                return ret;
            }
            ps.close();
            rs.close();

            ps = con.prepareStatement("insert into alliances (name, guild1, guild2, leaderid) VALUES (?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, name);
            ps.setInt(2, guild1);
            ps.setInt(3, guild2);
            ps.setInt(4, leaderId);
            ps.execute();
            rs = ps.getGeneratedKeys();
            if (rs.next()) {
                ret = rs.getInt(1);
            }
            rs.close();
            ps.close();
        } catch (SQLException SE) {
            System.err.println("SQL THROW");
        }
        return ret;
    }

    public final boolean deleteAlliance() {
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement ps;
            for (int i = 0; i < getNoGuilds(); i++) {
                ps = con.prepareStatement("UPDATE characters SET alliancerank = 5 WHERE guildid = ?");
                ps.setInt(1, guilds[i]);
                ps.execute();
                ps.close();
            }

            ps = con.prepareStatement("delete from alliances where id = ?");
            ps.setInt(1, allianceid);
            ps.execute();
            ps.close();
        } catch (SQLException SE) {
            System.err.println("SQL THROW" + SE);
            return false;
        }
        return true;
    }

    public final void broadcast(final byte[] packet) {
        broadcast(packet, -1, GAOp.NONE, false);
    }

    public final void broadcast(final byte[] packet, final int exception) {
        broadcast(packet, exception, GAOp.NONE, false);
    }

    public final void broadcast(final byte[] packet, final int exceptionId, final GAOp op, final boolean expelled) {
        if (op == GAOp.DISBAND) {
            World.Alliance.setOldAlliance(exceptionId, expelled, allianceid); //-1 = alliance gone, exceptionId = guild left/expelled
        } else if (op == GAOp.NEWGUILD) {
            World.Alliance.setNewAlliance(exceptionId, allianceid); //exceptionId = guild that just joined
        } else {
            World.Alliance.sendGuild(packet, exceptionId, allianceid); //exceptionId = guild to broadcast to only
        }

    }

    public final boolean disband() {
        final boolean ret = deleteAlliance();
        if (ret) {
            broadcast(null, -1, GAOp.DISBAND, false);
        }
        return ret;
    }

    public final void saveToDb() {
        Connection con = DatabaseConnection.getConnection();
        try {
            try (PreparedStatement ps = con.prepareStatement("UPDATE alliances set guild1 = ?, guild2 = ?, guild3 = ?, guild4 = ?, guild5 = ?, rank1 = ?, rank2 = ?, rank3 = ?, rank4 = ?, rank5 = ?, capacity = ?, leaderid = ?, notice = ? where id = ?")) {
                for (int i = 0; i < 5; i++) {
                    ps.setInt(i + 1, guilds[i] < 0 ? 0 : guilds[i]);
                    ps.setString(i + 6, ranks[i]);
                }
                ps.setInt(11, capacity);
                ps.setInt(12, leaderid);
                ps.setString(13, notice);
                ps.setInt(14, allianceid);
                ps.executeUpdate();
            }
        } catch (SQLException SE) {
            System.err.println("SQL THROW");
        }
    }

    public void setRank(String[] ranks) {
        this.ranks = ranks;
        broadcast(AlliancePacket.allianceRankChange(allianceid, ranks));
        saveToDb();
    }

    public String getRank(int rank) {
        return ranks[rank - 1];
    }

    public String[] getRanks() {
        return ranks;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String newNotice) {
        this.notice = newNotice;
        broadcast(AlliancePacket.changeAllianceNotice(allianceid, newNotice));
        saveToDb();
    }

    public int getGuildId(int i) {
        return guilds[i];
    }

    public int getId() {
        return allianceid;
    }

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return this.capacity;
    }

    public boolean setCapacity() {
        if (capacity >= 5) {
            return false;
        }
        this.capacity += 1;
        broadcast(AlliancePacket.getAllianceUpdate(this));
        saveToDb();
        return true;
    }

    public boolean addGuild(final int guildid) {
        if (getNoGuilds() >= getCapacity()) {
            return false;
        }
        guilds[getNoGuilds()] = guildid;
        saveToDb();
        broadcast(null, guildid, GAOp.NEWGUILD, false);
        return true;
    }

    public boolean removeGuild(final int guildid, final boolean expelled) {
        return removeGuild(guildid, expelled, false);
    }

    public boolean removeGuild(final int guildid, final boolean expelled, final boolean isNull) {
        for (int i = 0; i < getNoGuilds(); i++) {
            if (guilds[i] == guildid) {
                if (!isNull) {
                    broadcast(null, guildid, GAOp.DISBAND, expelled);
                }
                if (i > 0 && i != getNoGuilds() - 1) { // if guild isnt the last guild.. damnit
                    for (int x = i + 1; x < getNoGuilds(); x++) {
                        if (guilds[x] > 0) {
                            guilds[x - 1] = guilds[x];
                            if (x == getNoGuilds() - 1) {
                                guilds[x] = -1;
                            }
                        }
                    }
                } else {
                    guilds[i] = -1;
                }
                if (i == 0) { //leader guild.
                    return disband();
                } else {
                    broadcast(AlliancePacket.getAllianceUpdate(this));
                    broadcast(AlliancePacket.getGuildAlliance(this));
                    saveToDb();
                    return true;
                }
            }
        }
        return false;
    }

    public int getLeaderId() {
        return leaderid;
    }

    public boolean setLeaderId(final int c) {
        return setLeaderId(c, false);
    }

    public boolean setLeaderId(final int c, boolean sameGuild) {
        if (leaderid == c) {
            return false;
        }
        //re-arrange the guilds so guild1 is always the leader guild
        int g = -1; //this shall be leader
        String leaderName = null;
        for (int i = 0; i < getNoGuilds(); i++) {
            MapleGuild g_ = World.Guild.getGuild(guilds[i]);
            if (g_ != null) {
                MapleGuildCharacter newLead = g_.getMGC(c);
                MapleGuildCharacter oldLead = g_.getMGC(leaderid);
                if (newLead != null && oldLead != null && !sameGuild) { //same guild
                    return false;
                }
                if (newLead != null && newLead.getGuildRank() == 1 && newLead.getAllianceRank() == 2) { //guild1 should always be leader so no worries about g being -1
                    g_.changeARank(c, 1);
                    g = i;
                    leaderName = newLead.getName();
                }
                if (oldLead != null && oldLead.getGuildRank() == 1 && oldLead.getAllianceRank() == 1) {
                    g_.changeARank(leaderid, 2);
                }
            }
        }
        if (g == -1) {
            return false; //nothing was done
        }
        final int oldGuild = guilds[g];
        guilds[g] = guilds[0];
        guilds[0] = oldGuild;
        if (leaderName != null) {
            broadcast(CWvsContext.broadcastMsg(5, leaderName + " has become the leader of the alliance."));
        }
        broadcast(AlliancePacket.changeAllianceLeader(allianceid, leaderid, c));
        broadcast(AlliancePacket.updateAllianceLeader(allianceid, leaderid, c));
        broadcast(AlliancePacket.getAllianceUpdate(this));
        broadcast(AlliancePacket.getGuildAlliance(this));
        this.leaderid = c;
        saveToDb();
        return true;
    }

    public boolean changeAllianceRank(final int cid, final int change) {
        if (leaderid == cid || change < 0 || change > 1) {
            return false;
        }
        for (int i = 0; i < getNoGuilds(); i++) {
            MapleGuild g_ = World.Guild.getGuild(guilds[i]);
            if (g_ != null) {
                MapleGuildCharacter chr = g_.getMGC(cid);
                if (chr != null && chr.getAllianceRank() > 2) {
                    if ((change == 0 && chr.getAllianceRank() >= 5) || (change == 1 && chr.getAllianceRank() <= 3)) {
                        return false;
                    }
                    g_.changeARank(cid, chr.getAllianceRank() + (change == 0 ? 1 : -1));
                    return true;
                }
            }
        }
        return false;
    }
}
