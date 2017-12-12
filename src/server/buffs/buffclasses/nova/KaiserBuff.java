/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.nova;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class KaiserBuff extends AbstractBuffClass {

    public KaiserBuff() {
        buffs = new int[]{
            61101004, //Blaze On
            61111003, //Cursbite
            61121009, //Grand Armour
            61121014, //Nova Warrior
            61121054, //Kaiser's Majesty
            61121053, //Final Trance
        };
    }
    
    @Override
    public boolean containsJob(int job) {return GameConstants.isKaiser(job);}

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            //case 80001155:
            case 61101004: // Blaze On
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -2);
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                break;
            case 61111003: // Cursebite
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR));
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.terR));
                break;
            case 61111008: // Final Form
                //TODO
          //    eff.statups.put(CharacterTemporaryStat.IndiePMdR, eff.info.get(MapleStatInfo.indiepmdr)); //Unsure what buff to add.
                eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.cr));
                eff.statups.put(CharacterTemporaryStat.Stance, eff.info.get(MapleStatInfo.prop));
                eff.statups.put(CharacterTemporaryStat.IndiePMdR, eff.info.get(MapleStatInfo.w));
                eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.v));
                break;
            case 61121009: // Grand Armour
                eff.statups.put(CharacterTemporaryStat.DamAbsorbShield, eff.info.get(MapleStatInfo.v));
                eff.statups.put(CharacterTemporaryStat.DamAbsorbShield, eff.info.get(MapleStatInfo.w));
                break;
            case 61121014: // Nova Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 61121054: // Kaiser's Majesty
                eff.statups.put(CharacterTemporaryStat.IndieBooster,-1);
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                break;
            case 61121053: // Final Trance
                //TODO
          //    eff.statups.put(CharacterTemporaryStat.IndiePMdR, eff.info.get(MapleStatInfo.indiepmdr)); //Unsure what buff to add.
                eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.cr));
                eff.statups.put(CharacterTemporaryStat.Speed, eff.info.get(MapleStatInfo.speed));
                break;
            default:
                //System.out.println("Unhandled Buff: " + skill);
                break;
        }
    }
}
