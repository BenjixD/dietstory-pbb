/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.resistance;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class MechanicBuff extends AbstractBuffClass {
    
    public MechanicBuff() {
        buffs = new int[]{
           35001002, // Humanoid Mech
           35101006, // Mechanic Rage
           35101007, // Perfect Armor
           35110016, // Overclock
           35111013, // Roll of the Dice
           35111008, // Support Unit : H-EX
           35121007, // Maple Warrior
           35121053, // For Liberty
        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isMechanic(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 35001002: // Humanoid Mech
                //TODO
                //Unsure what buff to add.
                eff.statups.put(CharacterTemporaryStat.Speed, +20);
                eff.statups.put(CharacterTemporaryStat.EMHP, eff.info.get(MapleStatInfo.emhp));
                eff.statups.put(CharacterTemporaryStat.EMMP, eff.info.get(MapleStatInfo.emmp));
                eff.statups.put(CharacterTemporaryStat.EPAD, eff.info.get(MapleStatInfo.epad));
                eff.statups.put(CharacterTemporaryStat.EPDD, eff.info.get(MapleStatInfo.epdd));
                break;
            case 35101006: // Mechanic Rage
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -2);
                break;
            case 35101007: // Perfect Armor
                eff.statups.put(CharacterTemporaryStat.PowerGuard, eff.info.get(MapleStatInfo.x));
                break;
            case 35110016: // Overclock
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IgnoreMobpdpR, eff.info.get(MapleStatInfo.ignoreMobpdpR));
                break;
            case 35111013: // Roll of the Dice
                eff.statups.put(CharacterTemporaryStat.Dice, 1);
                break;
            case 35111008: // Support Unit : H-EX
                //TODO
                //Unsure what buff to add. (Monster Defense rate: -w%)
                //Unsure what buff to add. (Party members heal at invervals of x)
                eff.statups.put(CharacterTemporaryStat.IndieTerR, eff.info.get(MapleStatInfo.indieTerR));
                eff.statups.put(CharacterTemporaryStat.IndieAsrR, eff.info.get(MapleStatInfo.indieAsrR));
                break;
            case 35121007: // Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 35121053: // For Liberty
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            default:
                // System.out.println("Unhandled Mechanic Buff: " + skill);
                break;
        }
    }
}
