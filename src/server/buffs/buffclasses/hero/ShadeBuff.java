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
public class ShadeBuff extends AbstractBuffClass {

    public ShadeBuff() {
        buffs = new int[]{
            25121108, // Maple Warrior
            25121209, // Spirit Ward
            25121053, // Heroic Memories
            25121133, // Spirit Bond Max
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isShade(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 25121209: // Spirit Ward
                //TODO
                //Unsure what buff to add.
                break;
            case 25121000: //Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 25121133: //Spirit Bond Max
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -1);
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.IndieBDR, eff.info.get(MapleStatInfo.indieBDR));
                //eff.statups.put(CharacterTemporaryStat.IndieIgnoreMobpdpR, eff.info.get(MapleStatInfo.indieIgnoreMobpdpR));
                break;
            case 25121132: //Heroic Memories
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            default:
                //System.out.println("Shade skill not coded: " + skill);
                break;
        }
    }
}
