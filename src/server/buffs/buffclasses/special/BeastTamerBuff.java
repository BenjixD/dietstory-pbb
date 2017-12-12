/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.special;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class BeastTamerBuff extends AbstractBuffClass {

    public BeastTamerBuff() {
        buffs = new int[]{
                110001511, // Maple Guardian (Common)
                112121056, // Team Roar (Common)

                112001009, // Bear Assault (Bear)

                112111000, // Fly (Hawk)
                112111007, // Hawk Flock (Hawk)
                112111006, // Raptor Talons (Hawk)
                112111009, // Bird's-Eye View (Hawk)
                112111008, // Razor Beak (Hawk)

                112121007, // Meow Card (Red) (Cat)
                112121008, // Meow Card (Blue) (Cat)
                112121009, // Meow Card (Green) (Cat)
                112121020, // Meow Card (Gold) (Cat)
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isBeastTamer(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 110001511: // Maple Guardian
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;


            //Bear
            case 112001009: // Bear Assult
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IndieCr, eff.info.get(MapleStatInfo.z));
              //eff.statups.put(CharacterTemporaryStat.MONSTER_COUNT, eff.info.get(MapleStatInfo.mobCount)); //Unsure about the Monster Count TempStat
                eff.statups.put(CharacterTemporaryStat.IndieMHPR, eff.info.get(MapleStatInfo.mhpR));
                eff.statups.put(CharacterTemporaryStat.IndieMMPR, eff.info.get(MapleStatInfo.mmpR));
                eff.statups.put(CharacterTemporaryStat.IndiePDDR, eff.info.get(MapleStatInfo.pddR));
                eff.statups.put(CharacterTemporaryStat.IgnoreMobpdpR, eff.info.get(MapleStatInfo.ignoreMobpdpR));
                break;


            //Hawk
            case 112111000: // Fly
                //TODO
                //Unsure what buff to add. (Flight Duration: #z sec, Cooldown: #cooltime sec.)
                eff.statups.put(CharacterTemporaryStat.Flying, eff.info.get(MapleStatInfo.z)); // Not sure
                break;
            case 112111007: // Hawk Flock
                eff.statups.put(CharacterTemporaryStat.Speed, eff.info.get(MapleStatInfo.speed));
                eff.statups.put(CharacterTemporaryStat.Jump, eff.info.get(MapleStatInfo.jump));
                break;
            case 112111006: // Raptor Talons
                //TODO
                //Unsure what buff to add.
              //eff.statups.put(CharacterTemporaryStat.BLEEDING_CHANCE, eff.info.get(MapleStatInfo.prop)); //Unsure what TempStat to use. (MP Cost: #mpCon, Duration: #time sec, Magic ATT: +#indieMad \r\n Passive Effects: Bleed Chance: #prop%, Bleed Damage: #dot% per sec, Bleed Duration: #dotTime sec\nCooldown: #cooltime sec)
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.indieMad));
                break;
            case 112111009: // Bird's-Eye View
                eff.statups.put(CharacterTemporaryStat.IndieCr, eff.info.get(MapleStatInfo.cr));
                eff.statups.put(CharacterTemporaryStat.EPDD, eff.info.get(MapleStatInfo.epdd));
              //eff.statups.put(CharacterTemporaryStat.EMDD, eff.info.get(MapleStatInfo.emdd)); // EMDD isn't there yet
              //eff.statups.put(CharacterTemporaryStat.ACC, eff.info.get(MapleStatInfo.acc));
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.eva));
                break;
            case 112111008: // Razor Beak
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.indieMad));
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                break;


            //Cat
            case 112121009: // Meow Card (Green)
                eff.statups.put(CharacterTemporaryStat.IndieBooster, eff.info.get(MapleStatInfo.indieBooster));
                eff.statups.put(CharacterTemporaryStat.IndieSpeed, eff.info.get(MapleStatInfo.indieSpeed));
                break;
            case 112121008: // Meow Card (Blue)
                eff.statups.put(CharacterTemporaryStat.MDD, eff.info.get(MapleStatInfo.mdd));
                eff.statups.put(CharacterTemporaryStat.PDD, eff.info.get(MapleStatInfo.pdd));
                break;
            case 112121007: // Meow Card (Red)
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            case 112121020: // Meow Card (Gold)
                eff.statups.put(CharacterTemporaryStat.IndieBooster, eff.info.get(MapleStatInfo.indieBooster));
                eff.statups.put(CharacterTemporaryStat.IndieSpeed, eff.info.get(MapleStatInfo.indieSpeed));

                eff.statups.put(CharacterTemporaryStat.MDD, eff.info.get(MapleStatInfo.mdd));
                eff.statups.put(CharacterTemporaryStat.PDD, eff.info.get(MapleStatInfo.pdd));

                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            case 112121056: // Team Roar
                eff.statups.put(CharacterTemporaryStat.Invincible, eff.info.get(MapleStatInfo.time));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            default:
                //System.out.println("BeastTamer skill not coded: " + skill);
                break;
        }
    }
}
