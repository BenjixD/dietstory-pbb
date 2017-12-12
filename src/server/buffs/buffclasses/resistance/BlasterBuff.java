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
public class BlasterBuff extends AbstractBuffClass {
    
    public BlasterBuff() {
        buffs = new int[]{
                37101003, // Arm Cannon Boost
                37121005, // Vitality Shield
                37121006, // Maple Warrior
                37121054, // Cannon Overdrive
                37121053, // For Liberty
        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isBlaster(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 37101003: // Arm Cannon Booster
                eff.statups.put(CharacterTemporaryStat.Booster, -2);
                break;
            case 37121005: // Vitality Shield
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, recovers HP equal to the sum of the dissipated Blast Shield and #x% of your Max HP. The extended defense period lasts for #time sec.\nMagnum Launch damage increased by #damPlus% points.\nCooldown: #cooltime sec.)
                break;
            case 37121006: // Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 37121054: // Cannon Overdrive
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon. Duration: #time sec. Increases damage for skills that use Ammo by #y%. Ammo auto-reload time decreased by #x%. The Dynamo Gauge Overheat duration for Bunker Buster Explosion is reduced to 1 second.\nCooldown : #cooltime sec.)
                break;
            case 37121053: // For Liberty
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            default:
                // System.out.println("Unhandled Blaster Buff: " + skill);
                break;
        }
    }
}
