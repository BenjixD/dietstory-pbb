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
public class PhantomBuff extends AbstractBuffClass {

    public PhantomBuff() {
        buffs = new int[]{
            24101005, // Cane Booster
            24111005, // Clair de Lune
            24111002, // Final Feint
            24111003, // Bad Luck Ward
            24121004, // Priere D'Aria
            24121008, // Maple Warrior
            24121053, // Heroic Memories
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isPhantom(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 24101005: // Cane Booster
                eff.statups.put(CharacterTemporaryStat.Booster, -2);
                break;
            case 24111005: // Clair de Lune
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                break;
            case 24111002: // Final Feint
                //TODO
                //Unsure what buff to add.
                break;
            case 24111003: // Bad Luck Ward
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.IndieMHPR, eff.info.get(MapleStatInfo.indieMhpR));
                eff.statups.put(CharacterTemporaryStat.IndieMMPR, eff.info.get(MapleStatInfo.indieMmpR));
                break;
            case 24121004: // Priere D'Aria
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IndieIgnoreMobpdpR, eff.info.get(MapleStatInfo.ignoreMobpdpR));  // ?  not indie
                break;
            case 24121008: // Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 24121053: // Heroic Memories
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            default:
                //System.out.println("Phantom skill not coded: " + skill);
                break;
        }
    }
}
