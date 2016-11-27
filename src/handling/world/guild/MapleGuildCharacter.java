/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

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

import client.MapleCharacter;

public class MapleGuildCharacter implements java.io.Serializable { // alias for a character

    public static final long serialVersionUID = 2058609046116597760L;
    private byte channel = -1, guildrank, allianceRank;
    private short level;
    private int id, jobid, guildid, guildContribution;
    private boolean online;
    private final String name;

    // Get the details of the character that is currently online.
    public MapleGuildCharacter(final MapleCharacter mc) {
        name = mc.getName();
        level = mc.getLevel();
        id = mc.getId();
        channel = (byte) mc.getClient().getChannel();
        jobid = mc.getJob();
        guildrank = mc.getGuildRank();
        guildid = mc.getGuildId();
        guildContribution = mc.getGuildContribution();
        allianceRank = mc.getAllianceRank();
        online = true;
    }

    // Read the character from the database.
    MapleGuildCharacter(final int id, final short lv, final String name, final byte channel, final int job, final byte rank, final int guildContribution, final byte allianceRank, final int gid, final boolean on) {
        this.level = lv;
        this.id = id;
        this.name = name;
        if (on) {
            this.channel = channel;
        }
        this.jobid = job;
        this.online = on;
        this.guildrank = rank;
        this.allianceRank = allianceRank;
        this.guildContribution = guildContribution;
        this.guildid = gid;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(short l) {
        level = l;
    }

    public int getId() {
        return id;
    }

    public void setChannel(byte ch) {
        channel = ch;
    }

    public int getChannel() {
        return channel;
    }

    public int getJobId() {
        return jobid;
    }

    public void setJobId(int job) {
        jobid = job;
    }

    public int getGuildId() {
        return guildid;
    }

    public void setGuildId(int gid) {
        guildid = gid;
    }

    public void setGuildRank(byte rank) {
        guildrank = rank;
    }

    public byte getGuildRank() {
        return guildrank;
    }

    public void setGuildContribution(int c) {
        this.guildContribution = c;
    }

    public int getGuildContribution() {
        return guildContribution;
    }

    public boolean isOnline() {
        return online;
    }

    public String getName() {
        return name;
    }

    public void setOnline(boolean f) {
        online = f;
    }

    public void setAllianceRank(byte rank) {
        allianceRank = rank;
    }

    public byte getAllianceRank() {
        return allianceRank;
    }
}
