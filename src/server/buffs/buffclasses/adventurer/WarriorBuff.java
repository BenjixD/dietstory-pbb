/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.adventurer;

import client.CharacterTemporaryStat;
import client.MonsterStatus;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Itzik
 */
public class WarriorBuff extends AbstractBuffClass {

    public WarriorBuff() {
        buffs = new int[]{
                1001003, //Iron Body
                1101004, //Weapon Booster
                1101006, //Rage
                1101013, //Combo Order
                1201004, //Weapon Booster
                1201007, //Power Guard
                1301004, //Weapon Booster
                1301006, //Iron Will
                1301007, //Hyper Body
                1301013, //Evil Eye
                1211004, //Flame Charge
                1211006, //Blizzard Charge
                1211008, //Lightning Charge
                1211011, //Combat Orders
                1311013, //Evil Eye of Domination
                1311015, //Cross Surge
                1121000, //Maple Warrior
                1220005, //Achilles
                1220013, //Divine Shield
                1121010, //Enrage
                1221000, //Maple Warrior
                1221002, //Power Stance
                1211010, //HP Recovery
                1211013, //Threaten
                1211014, //Parashock Guard
                1211011, //Combat Orders
                1221015, //Void Elemental
                1221016, //Guardian
                1221004, //Holy Charge
                1321000, //Maple Warrior
                1321002, //Power Stance
                1321007, //Beholden
                1320008, //Aura of Beholden
                1320009, //Hex of the Beholden
                1320011, //Revenge of the Beholden
                1121054, //Cry Valhalla
                1221054, //Sacrosanctity
                1320016, //Final pact
                1121053, //Epic Adventure
                1221053, //Epic Adventure
                1321053, //Epic Adventure
                1321054, //Dark Thrist
                //    1301013,
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isAdventurer(job) && job / 100 == 1;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 1101004: //Weapon Booster
            case 1201004: //Weapon Booster
            case 1301004: //Weapon Booster
                eff.statups.put(CharacterTemporaryStat.Booster, eff.info.get(MapleStatInfo.x));
                break;
            case 1101006: //Rage
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.PowerGuard, eff.info.get(MapleStatInfo.x));
                break;
            case 1101013: //Combo
                eff.statups.put(CharacterTemporaryStat.ComboCounter,1);
                eff.info.put(MapleStatInfo.time, 0); //was 2100000000, now 0
                //System.out.println("Combo from Warrior Buff");
                break;
            case 1211010: //HP Recovery
                eff.statups.put(CharacterTemporaryStat.IndieMHPR, eff.info.get(MapleStatInfo.x));
                break;
            case 1211013: //Threaten
                eff.monsterStatus.put(MonsterStatus.PAD, eff.info.get(MapleStatInfo.x));
                eff.monsterStatus.put(MonsterStatus.PDR, eff.info.get(MapleStatInfo.x));
                eff.monsterStatus.put(MonsterStatus.MAD, eff.info.get(MapleStatInfo.x));
                eff.monsterStatus.put(MonsterStatus.MDR, eff.info.get(MapleStatInfo.x));
                eff.monsterStatus.put(MonsterStatus.EVA, eff.info.get(MapleStatInfo.z));
                break;
            case 1211014: //Parashock Guard
                eff.statups.put(CharacterTemporaryStat.PARASHOCK_GUARD, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.ChargeBuff, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.IndiePDDR, eff.info.get(MapleStatInfo.z));
                //TODO  38s again
                break;
            case 1211011: //Combat Orders
                eff.statups.put(CharacterTemporaryStat.CombatOrders, eff.info.get(MapleStatInfo.x));
//                eff.statups.put(CharacterTemporaryStat.KeyDownAreaMoving, eff.info.get(MapleStatInfo.damR));
                break;
            case 1221015: //Void Elemental
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.ElementalReset, eff.info.get(MapleStatInfo.x));
                break;
            case 1221054: //Sacrosanctity
                //eff.statups.put(CharacterTemporaryStat.KAISER_MAJESTY3, eff.info.get(MapleStatInfo.x));
                //eff.statups.put(CharacterTemporaryStat.Enrage, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.Invincible, eff.info.get(MapleStatInfo.time)); // time or x?
                //TODO
                break;
            case 1221016: //Guardian
                eff.statups.put(CharacterTemporaryStat.ReviveOnce, 1);
                eff.statups.put(CharacterTemporaryStat.INVINCIBILITY, eff.info.get(MapleStatInfo.time)); // time or x?
                break;
            case 1301006: //Iron Will
                eff.statups.put(CharacterTemporaryStat.MDD, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.MDD, eff.info.get(MapleStatInfo.y));
                break;
            case 1301007: //Hyper Body
                eff.statups.put(CharacterTemporaryStat.MaxHP, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.MaxMP, eff.info.get(MapleStatInfo.y));
                break;
            case 1301013: //Evil Eye
                eff.statups.put(CharacterTemporaryStat.Beholder, 1);
                //TODO
                break;
            case 1311015: //Cross Surge
                eff.statups.put(CharacterTemporaryStat.CROSS_SURGE, eff.info.get(MapleStatInfo.x));
                break;
            case 1121010: //Enrage
                eff.statups.put(CharacterTemporaryStat.ComboCostInc, 1);
                //eff.statups.put(CharacterTemporaryStat.FINAL_DAMAGE, eff.info.get(MapleStatInfo.x)); // Final Damage TempStat?
                eff.statups.put(CharacterTemporaryStat.IndieCr, eff.info.get(MapleStatInfo.y));
                //eff.statups.put(CharacterTemporaryStat.MOB_COUNT, eff.info.get(MapleStatInfo.mobCount)); // Mob Count  TempStat?
                break;
            case 1121000: //Maple Warrior
            case 1221000: //Maple Warrior
            case 1321000: //Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 1220005: // Achilles
                eff.statups.put(CharacterTemporaryStat.IndiePDDR, eff.info.get(MapleStatInfo.t));
                break;
            case 1121054: // Cry Valhalla
                eff.statups.put(CharacterTemporaryStat.Stance, 100);
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.IndieCr, eff.info.get(MapleStatInfo.indieCr));
                eff.statups.put(CharacterTemporaryStat.IndieAsrR, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IndieTerR, eff.info.get(MapleStatInfo.y));
                break;
            case 1321015: //Sacrifice
                //TODO
                // (MP Cost: #mpCon, restores #y% of Max HP immediately upon casting, ignores #x% of enemy's Defense for #time sec, Boss Damage: +#indieBDR%, resets Gungnir's Descent's cooldown\nCooldown: #cooltime sec, Successful attacks by Evil Eye reduce cooldown by #t sec\n[Passive Effect: #cIgnores #ignoreMobpdpR% of enemys's Defense  #])
                break;
            case 1321054: // Dark Thirst
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.indiePad));
                eff.statups.put(CharacterTemporaryStat.IndieDrainHP, eff.info.get(MapleStatInfo.x));  // Is this Correct?
                break;
            case 1320016: //Final Pact
                //TODO
                break;
            case 1220013: //Divine Shield
                eff.statups.put(CharacterTemporaryStat.DIVINE_BODY, eff.info.get(MapleStatInfo.x)); //Divine Shield TempStat?
                //eff.statups.put(CharacterTemporaryStat.IndieEPAD, eff.info.get(MapleStatInfo.ePad)); //No EPAD
                break;
            case 1121053: //Epic Adventure
            case 1221053: //Epic Adventure
            case 1321053: //Epic Adventure
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            default:
                //System.out.println("Warrior skill not coded: " + skill);
                break;
        }
    }
}
