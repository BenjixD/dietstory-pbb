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
public class NightWalkerBuff extends AbstractBuffClass {

    public NightWalkerBuff() {
        buffs = new int[]{
                14001027, //Shadow Bats
                14001021, //Dark Elemental
                14001022, //Haste
                14001023, //Dark Sight
                14101002, //Claw Booster
                14111024, //Dark Servant
                14111025, //Spirit Projection
                14121000, //Call of Cygnus
                14121052, //Dominion
                14121053, //Glory of the Guardians
                14121054, //Shadow Illusion

        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isKOC(job) && (job / 100) % 10 == 4;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 14001027: // Shadow Bat
                //TODO
                //Unsure what buff to add.
                eff.statups.put(CharacterTemporaryStat.NightWalkerBat, eff.info.get(MapleStatInfo.x));
                break;
            case 14001021: //Dark Elemental
                //TODO
                //Unsure what buff to add.
                break;
            case 14001022: //Haste
                eff.statups.put(CharacterTemporaryStat.Speed, eff.info.get(MapleStatInfo.speed));
                eff.statups.put(CharacterTemporaryStat.Jump, eff.info.get(MapleStatInfo.jump));
                break;
            case 14001023: //Dark Sight
                eff.statups.put(CharacterTemporaryStat.DarkSight, eff.info.get(MapleStatInfo.x));
                break;
            case 14101002:
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -2);
                break;
            case 14111024:
                eff.statups.put(CharacterTemporaryStat.ShadowServant, eff.info.get(MapleStatInfo.x));
                break;
            case 14111025:
                eff.statups.put(CharacterTemporaryStat.NoBulletConsume, 0);
                break;
            case 14121000:
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 14121052:// Dominion
                //TODO
                //Unsure what buff to add.
                eff.statups.put(CharacterTemporaryStat.Dominion, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.cr));
                eff.statups.put(CharacterTemporaryStat.Stance, 100);
                eff.statups.put(CharacterTemporaryStat.IndiePMdR, 20);
                break;
            case 14121053:// Glory of the Guardians
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            case 14121054:// Shadow Illusion
                //TODO
                // Unsure what buffs to add
                eff.statups.put(CharacterTemporaryStat.ShadowIllusion, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.ShadowIllusion, eff.info.get(MapleStatInfo.z));
                eff.statups.put(CharacterTemporaryStat.ShadowIllusion, eff.info.get(MapleStatInfo.w));
                break;
            default:
                System.out.println("Unhandled Buff: " + skill);
                break;
        }
    }
}
