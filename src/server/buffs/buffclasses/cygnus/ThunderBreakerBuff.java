package server.buffs.buffclasses.cygnus;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class ThunderBreakerBuff extends AbstractBuffClass {

    public ThunderBreakerBuff() {
        buffs = new int[]{
                15001022, // Lightning Elemental
                15101002, // Knuckle Booster
                15121000, // Call of Cygnus
                15121004, // Arc Charger
                15121005, // Speed Infusion
                15121053, // Glory of the Guardians
                15121054, // Primal Bolt

        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isKOC(job) && (job / 100) % 10 == 5;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 15001022: // Lightning Elemental
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, Duration: #time sec. Lightning Buff Chance: #prop%, Buff Duration: #y, Monster DEF Ignored: #x%. Max Accumulation: #v time(s).)
                break;
            case 15101002: // Knuckle Booster
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -2);
                break;
            case 15121000: // Call of Cygnus
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 15121004: // Arc Charger
                eff.statups.put(CharacterTemporaryStat.ShadowPartner, eff.info.get(MapleStatInfo.x));
                break;
            case 15121005: // Speed Infusion
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -2);
                break;
            case 15121053: // Glory of the Guardians
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            case 15121054: // Primal Bolt
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                //eff.statups.put(CharacterTemporaryStat.IgnoreMobpdpR, eff.info.get(MapleStatInfo.x));
                break;
            default:
                System.out.println("Unhandled Buff: " + skill);
                break;
        }
    }
}
