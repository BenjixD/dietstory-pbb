/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.adventurer;

import client.CharacterTemporaryStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class BowmanBuff extends AbstractBuffClass {

    public BowmanBuff() {
        buffs = new int[]{

                //Bowman
                3100010, //Quiver cardrige
                3101002, //Bow Booster
                3101004, //Bow Soul Arrow
                3111011, //Reckless hunt: Bow
                3121002, //SharpEyes
                3121007, //Illusion Step
                3121016, //Enchanted Quiver
                3121000, //MapleWarrior
                3121054, //Concentration
                3121053, //Epic Adventure

                //Marksman
                3201002, //Crossbow Booster
                3201004, //Crossbow Soul Arrow
                3211011, //PainKiller
                3211012, //Reckless Hunt: Crossbow
                3221000, //Maple Warrior
                3221002, //Sharp Eyes
                3221006, //Illusion Step
                3221054, //Bullseye Shot
                3221053, //Epic Adventure


        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isAdventurer(job) && job / 100 == 3;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 3100010: // quiver cartridge
              //eff.statups.put(CharacterTemporaryStat.ExtremeArchery, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.QuiverCatridge, eff.info.get(MapleStatInfo.x));
                //TODO
                //Unsure what buff to add. (Able to use #y3 Special Arrowheads. Automatically recharges.\nBlood Arrow: At #w% chance, recover #x% of Max HP\nPoison Arrow: At #dot% damage, deals damage-over-time for #dotTime sec. Stackable up to #dotSuperpos times.\nMagic Arrow: Has a #u% chance to shoot a magic arrow of that does #damage% damage.)
                break;
            case 3111011: // reckless hunt
                eff.statups.put(CharacterTemporaryStat.EPAD, eff.info.get(MapleStatInfo.padX)); //TempStat was BlessEnsenble, now EPAD
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IndiePDDR, eff.info.get(MapleStatInfo.x));
                break;
            case 3211012: //Reckless Hunt: Crossbow
                eff.statups.put(CharacterTemporaryStat.CRIT_DAMAGE, eff.info.get(MapleStatInfo.z)); //Crit Damage?
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.x));
                break;
            case 3101002: //Bow Booster
            case 3201002: //Bow Booster
                eff.statups.put(CharacterTemporaryStat.Booster, eff.info.get(MapleStatInfo.x));
                break;
            case 3101004: //SoulArrow bow
            case 3201004: //SoulArrow crossbow
                eff.statups.put(CharacterTemporaryStat.EPAD, eff.info.get(MapleStatInfo.epad)); //TempStat was Concentration, now EPAD
                eff.statups.put(CharacterTemporaryStat.SoulArrow, eff.info.get(MapleStatInfo.x));
                break;
            case 3211011: //PainKiller
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, Clear Status and make you immune to it for #time sec, Cooldown: #cooltime sec\n[Passive Effect : Increase Abnormal Status Resistance by #asrR and Elemental Resistance by #terR%])
                eff.statups.put(CharacterTemporaryStat.KeyDownAreaMoving, eff.info.get(MapleStatInfo.asrR));
                eff.statups.put(CharacterTemporaryStat.KeyDownAreaMoving, eff.info.get(MapleStatInfo.terR));
                break;
            case 3121000: //Maple Warrior
            case 3221000: //Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 3121002: //Sharp Eyes
            case 3221002: //Sharp Eyes
            	eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.y));
            	eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.x));
                break;
            case 3121016: //Enchanted Quiver
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, #cCurrent arrowhead is not consumed for #time sec.# Cooldown: #cooltime sec\n[Passive Effects]: Blood Arrow activation chance: #w%, Max HP Recovery Ratio: #x%, Poison Arrow Damage-Over-Time: #dot%, Magic Arrow Activation Chance: #u%, damage increases to #damage%. Poison, Blood Arrow increases to #y arrows. Magic Arrow increases to #z arrows])
                break;
            case 3121007: //Illusion Step
            case 3221006: //Illusion Step
                eff.statups.put(CharacterTemporaryStat.DEX, eff.info.get(MapleStatInfo.dex));
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IgnoreMobDamR, eff.info.get(MapleStatInfo.ignoreMobDamR));
                break;
            case 3121053: //Epic Adventure
            case 3221053: //Epic Adventure
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            case 3121054: //Concentration
                eff.statups.put(CharacterTemporaryStat.BowMasterConcentration, eff.info.get(MapleStatInfo.x)); //Unsure if this buffstat should be added
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.IndieBDR, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.Stance, eff.info.get(MapleStatInfo.x));
                break;
            case 3221054: //BullsEye Shot
                eff.statups.put(CharacterTemporaryStat.CRIT_DAMAGE, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.IndieCr, eff.info.get(MapleStatInfo.x));
              //eff.statups.put(CharacterTemporaryStat.IndieIgnoreMobpdpR, eff.info.get(MapleStatInfo.indieIgnoreMobpdpr));  //MapleStatInfo.indieIgnoreMobpdpr  isn't there
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                break;
            default:
                //System.out.println("Archers skill not coded: " + skill);
                break;
        }
    }
}
