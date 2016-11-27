/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.hero;

import client.MapleBuffStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Charmander
 */
public class EvanBuff extends AbstractBuffClass  {

    public EvanBuff() {
        buffs = new int[]{
            22111001, // Magic Guard
            22131001, // Magic Shield
            22131002, // Elemental Decrease
            22141002, // Magic Booster
            22151003, // Magic Resistance
            22161004, // Onyx Shroud
            22171000, // Maple Warrior
            22181003, // Soul Stone
            22181004, // Onyx Will
            22181000, // Blessing of the Onyx
            22171054, // Frenzied Soul
            22171053, // Heroic Memories
        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isEvan(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 22111001: // Magic Guard
                eff.statups.put(MapleBuffStat.MagicGuard, eff.info.get(MapleStatInfo.x));
                break;
            case 22131001: // Magic Shield
                eff.statups.put(MapleBuffStat.MagicShield, eff.info.get(MapleStatInfo.x));
                break;
            case 22131002: // Elemental Decrease
                eff.statups.put(MapleBuffStat.Slow, eff.info.get(MapleStatInfo.x));
                break;
            case 22141002: // Magic Booster
                eff.statups.put(MapleBuffStat.Booster, eff.info.get(MapleStatInfo.x) * 2);
                break;
            case 22151003: // Magic Resistance
                eff.statups.put(MapleBuffStat.MagicResistance, eff.info.get(MapleStatInfo.x));
                break;
            case 22161004: // Onyx Shroud
                eff.statups.put(MapleBuffStat.OnyxDivineProtection, eff.info.get(MapleStatInfo.x));
                break;
            case 322171000: // Maple Warrior
                eff.statups.put(MapleBuffStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 22181003: // Soul Stone
                eff.statups.put(MapleBuffStat.SoulStone, 1);
                break;
            case 22181004: // Onyx Will
                eff.statups.put(MapleBuffStat.ONYX_WILL, eff.info.get(MapleStatInfo.damage));
                eff.statups.put(MapleBuffStat.Stance, eff.info.get(MapleStatInfo.prop));
                break;
            case 22181000: // Blessing of the Onyx
                eff.statups.put(MapleBuffStat.EMAD, eff.info.get(MapleStatInfo.emad));
                eff.statups.put(MapleBuffStat.EPDD, eff.info.get(MapleStatInfo.epdd));
                eff.statups.put(MapleBuffStat.EMDD, eff.info.get(MapleStatInfo.emdd));
                break;
            case 22171054: // Frenzied Soul
                eff.statups.put(MapleBuffStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(MapleBuffStat.OnyxDivineProtection, eff.info.get(MapleStatInfo.x));//guessed???
                break;
            case 22171053: // Heroic Memories
                eff.statups.put(MapleBuffStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(MapleBuffStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            default:
                //System.out.println("Evan skill not coded: " + skill);
                break;
        }
    }
}
