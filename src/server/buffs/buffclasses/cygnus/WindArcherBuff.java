package server.buffs.buffclasses.cygnus;

import client.MapleBuffStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Maple
 */
public class WindArcherBuff extends AbstractBuffClass {

    public WindArcherBuff() {
        buffs = new int[]{
            13001022, //Storm Elemental
            13101022, // Trifling Wind I
            13101024, //Sylvan Aid
            13101023, //Bow Booster
            13110022, //Trifling Wind II
            13111023, //Albatross
            13111024, //Emerald Flower
            13120003, //Trifling Wind III
            13121004, //Touch of the Wind
            13121005, //Sharp Eyes
            13120008, // Albatross Max
            13121053, //Glory of the Guardians
            13121054, //Storm Bringer
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isKOC(job) && (job / 100) % 10 == 3;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 13001022:// Storm Elemental
                eff.statups.put(MapleBuffStat.CygnusElementSkill, 1);
                eff.statups.put(MapleBuffStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            case 13101022:
            case 13110022:
            case 13120003:
                eff.statups.put(MapleBuffStat.TriflingWhimOnOff, 1);
                break;
            case 13101023:// Bow Booster
                eff.statups.put(MapleBuffStat.Booster, eff.info.get(MapleStatInfo.x));
                break;
            case 13111024:// Emerald Flower
                //spawn
                break;
            case 13101024:// Sylvan Aid
                eff.statups.put(MapleBuffStat.SoulArrow, eff.info.get(MapleStatInfo.x));
                eff.statups.put(MapleBuffStat.IndieCr, eff.info.get(MapleStatInfo.x));
                eff.statups.put(MapleBuffStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                break;
            case 13111023:// Albatross
                eff.statups.put(MapleBuffStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(MapleBuffStat.IndieMHP, eff.info.get(MapleStatInfo.indieMhp));
                eff.statups.put(MapleBuffStat.IndieBooster, -1);
                eff.statups.put(MapleBuffStat.IndieCr, eff.info.get(MapleStatInfo.indieCr));
                eff.statups.put(MapleBuffStat.Albatross, 1);
                break;
            case 13121004:// Touch of the Wind
                eff.statups.put(MapleBuffStat.IllusionStep, eff.info.get(MapleStatInfo.prop));
                eff.statups.put(MapleBuffStat.DEXR, eff.info.get(MapleStatInfo.x));
                eff.statups.put(MapleBuffStat.IndieMHPR, eff.info.get(MapleStatInfo.indieMhpR));
                eff.statups.put(MapleBuffStat.IndiePADR, eff.info.get(MapleStatInfo.indiePadR));
                eff.statups.put(MapleBuffStat.ACCR, 1);
                break;
            case 13121005:// Sharp Eyes
                eff.statups.put(MapleBuffStat.SharpEyes, (eff.info.get(MapleStatInfo.x) << 8) + eff.info.get(MapleStatInfo.criticaldamageMax));
                break;
            case 13120008: // Albatross Max
                eff.statups.put(MapleBuffStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(MapleBuffStat.IndieMHP, 1500);
                eff.statups.put(MapleBuffStat.IndieBooster, -2);
                eff.statups.put(MapleBuffStat.IndieCr, eff.info.get(MapleStatInfo.indieCr) + 10);
                eff.statups.put(MapleBuffStat.IndieAsrR, eff.info.get(MapleStatInfo.indieAsrR));
                eff.statups.put(MapleBuffStat.IndieTerR, eff.info.get(MapleStatInfo.indieTerR));
                eff.statups.put(MapleBuffStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(MapleBuffStat.IgnoreTargetDEF, eff.info.get(MapleStatInfo.ignoreMobpdpR));
                eff.statups.put(MapleBuffStat.Albatross, 1);
                break;
            case 13121053:// Glory of the Guardians
                eff.statups.put(MapleBuffStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(MapleBuffStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            case 13121054:// Storm Bringer
                eff.statups.put(MapleBuffStat.StormBringer, eff.info.get(MapleStatInfo.x));
                break;
            default:
                System.out.println("Unhandled Buff: " + skill);
                break;
        }
    }
}
