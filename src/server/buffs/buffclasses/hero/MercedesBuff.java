/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.hero;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class MercedesBuff extends AbstractBuffClass {

    public MercedesBuff() {
        buffs = new int[]{
                23101002, // Dual Bowgun Boost
                23111004, // Ignis Roar
                23111003, // Water Shield
                23121004, // Ancient Warding
                23121005, // Maple Warrior
                23121053, // Heroic Memories
                23121054, // Elvish Blessing
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isMercedes(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 23101002: // Dual Bowgun Boost
                eff.statups.put(CharacterTemporaryStat.Booster, -2);
                break;
            case 23111004: // Ignis Roar
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
              //eff.statups.put(CharacterTemporaryStat.FINAL DAMAGE, eff.info.get(MapleStatInfo.x));    // Not sure what Final Damage's TempStat is
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, Attack Power increased by #indiePad for #time second(s)\nFinal damage increased by #x% when using linked skills.\nFinal damage increase due to linked skill usage can stack up to #y times, lasts for #subTime, damage is stacked additively.\n[Passive Effects - Avoidability +#prop%])
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.prop));
                break;
            case 23111003: // Water Shield
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR)); // Abnormal Status Resist
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.terR)); // Elemental Resist
                eff.statups.put(CharacterTemporaryStat.IgnoreMobDamR, eff.info.get(MapleStatInfo.x)); // Dmg Absorb
                break;
            case 23121004: // Ancient Warding
                eff.statups.put(CharacterTemporaryStat.IndiePADR, eff.info.get(MapleStatInfo.indiePadR));
                eff.statups.put(CharacterTemporaryStat.EMHP, eff.info.get(MapleStatInfo.emhp));
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.prop));
                break;
            case 23121005: // Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 23121054: // Elvish Blessing
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.Stance, eff.info.get(MapleStatInfo.x));
                break;
            case 24121053: // Heroic Memories
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            default:
                //System.out.println("Mercedes skill not coded: " + skill);
                break;
        }
    }
}
