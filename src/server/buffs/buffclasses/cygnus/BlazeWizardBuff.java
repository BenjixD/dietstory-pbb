package server.buffs.buffclasses.cygnus;

import client.CharacterTemporaryStat;
import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.Timer;
import server.buffs.AbstractBuffClass;
import server.life.MapleMonster;
import server.maps.MapleSummon;
import server.maps.SummonMovementType;
import tools.data.LittleEndianAccessor;
import tools.packet.CField;

import java.awt.*;

/**
 * Created on 12/10/2017.
 */
public class BlazeWizardBuff extends AbstractBuffClass {

    public BlazeWizardBuff() {
        buffs = new int[]{
                12101023, // Word of Fire
                12101024, // Ignition
                12111023, // Phoenix Run
                12120013, // Fires of Creation
                12121005, // Burning Conduit
                12121003, // Flame Barrier

        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isKOC(job) && (job / 100) % 10 == 2;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 12101023: // Word of Fire
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.indieMad));
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -eff.info.get(MapleStatInfo.indieBooster));
                break;
            case 12101024: // Ignition
                eff.statups.put(CharacterTemporaryStat.WizardIgnite, eff.info.get(MapleStatInfo.x));
                break;
            case 12111023: // Phoenix Run
                eff.statups.put(CharacterTemporaryStat.getStatFromNumber(12), -3);
//                eff.statups.put(CharacterTemporaryStat.)
                break;
            case 12120013: // Fires of Creation
                eff.statups.put(CharacterTemporaryStat.SUMMON, 1);
                break;
            case 12121003: // Flame Barrier
                eff.statups.put(CharacterTemporaryStat.FireBarrier, 1);
                eff.statups.put(CharacterTemporaryStat.IndieBooster, eff.info.get(MapleStatInfo.indieBooster));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            case 12121005: // Burning Conduit
                eff.statups.put(CharacterTemporaryStat.SUMMON, 1);
                break;
            default:
                System.out.println("BW buff not coded: " + skill);
                break;
        }
    }



    public static void handleBWSkill(MapleClient c, LittleEndianAccessor slea, int skillid, int skillLevel, MapleStatEffect effect) {
        MapleCharacter chr = c.getPlayer();
        switch(skillid) {
            case 12101025: // Flashfire
                Point start = slea.readPos();
                Point current = slea.readPos();
                byte idk = slea.readByte();
                boolean isSecondUse = slea.readByte() == 1;
                if(isSecondUse) {
                    chr.setPosition(start);
                    c.getSession().write(CField.instantMapWarp((byte) 3, chr.getId(), start));
                }
                break;
            case 12101022: // Controlled Burn
                int maxmp = chr.getStat().getMaxMp();
                int extra = (int) (maxmp * (effect.getX() / 100.0));
                int curMp = chr.getStat().getMp();
                chr.updateSingleStat(MapleStat.MP, curMp + extra > maxmp ? maxmp : curMp + extra);
                break;
            case 12120013:
            case 12120014: // Fires of Creation
                Point pos = slea.readPos();
                boolean right = slea.readByte() == 1;
                MapleSummon mapleSummon = new MapleSummon(chr, 12120013, skillLevel, pos, SummonMovementType.FOLLOW);
                c.getSession().write(CField.SummonPacket.spawnSummon(mapleSummon, true));
                Timer.EventTimer.getInstance().schedule(
                        () -> c.getSession().write(
                                CField.SummonPacket.removeSummon(c.getPlayer().getId(), mapleSummon.getObjectId())), 60*5*1000
                );
                break;
            case 12111022: // Cinder Maelstrom
                int idk2 = slea.readInt();
                boolean bIdk = slea.readByte() == 1;
                short nIdk = slea.readShort();
                int mobId = slea.readInt();
                MapleMonster mapleMonster = chr.getMap().getMonsterByOid(mobId);
                mapleMonster.setScale(300);
//                mapleMonster.applyStatus();
        }
    }
}
