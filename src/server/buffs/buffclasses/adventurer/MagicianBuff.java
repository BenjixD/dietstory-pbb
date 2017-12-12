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
 * @author Asura
 */
public class MagicianBuff extends AbstractBuffClass {

    public MagicianBuff() {
        buffs = new int[]{
                //Common
                2001001, //Magic Guard

                //Mage F,P
                2101001, //Meditation
                2101008, //Magic Booster
                2101010, //Ignite
                2111011, //Elemental Adaptation (Fire, Poison)
                2111007, //Teleport Mastery
                2111008, //Elemental Decrease
                2121004, //Infinity
                2121000, //Maple Warrior
                2121053, //Epic Adventure
                2121054, //Inferno Aura
                2120010, //Arcane Aim F/P

                //Mage I,L
                2201001, //Meditation
                2201010, //Magic Booster
                2211005, //Spell Booster
                2201009, //Chilling Step
                2211007, //Teleport Mastery
                2211012, //Elemental Adaptation (Ice, Lightning)
                2211008, //Elemental Decrease
                2221000, //Maple Warrior
                2221004, //Infinity
                2221054, //Absolute Zero Aura
                2221053, //Epic Adventure
                2220010, //Arcane Aim I/L

                //Bishop
                2300009, //Blessed Ensemble - passive but buff?
                2301004, //Bless
                2301008, //Magic Booster
                2301003, //Invicible
                2111005, //Spell Booster
                2311011, //Holy Fountain
                2311012, //Divine Protection
                2311003, //Holy Symbol
                2311007, //Teleport Mastery
                2311009, //Holy Magic Shield
                2321000, //Maple Warrior
                2321004, //Infinity
                2321005, //Advanced Blessing
                2321052, //Heaven's Door
                2321053, //Epic Adventure
                2321054, //Righteously Indignant
                2320011, //Arcane Aim Bishop
        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isAdventurer(job) && job / 100 == 2;
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 2001001: //Magic Guard
                eff.statups.put(CharacterTemporaryStat.MagicGuard, eff.info.get(MapleStatInfo.x));
                break;
            case 2101001: //Meditation
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.indieMad));
                break;
            case 2101010: //Ignite
                eff.statups.put(CharacterTemporaryStat.WizardIgnite, eff.info.get(MapleStatInfo.y));
                break;
            case 2300009: //Blessed Ensemble
                eff.statups.put(CharacterTemporaryStat.PASSIVE_BLESS, eff.info.get(MapleStatInfo.x));
                break;
            case 2201009: //Chilling Step
                eff.statups.put(CharacterTemporaryStat.ChillingStep, eff.info.get(MapleStatInfo.x));
                break;
            case 2301004: //Bless   
                eff.statups.put(CharacterTemporaryStat.IndiePAD, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.IndiePDD, eff.info.get(MapleStatInfo.z));
                break;
            case 2101008: //Magic Booster
            case 2201010: //Magic Booster
            case 2301008: //Magic Booster
                eff.statups.put(CharacterTemporaryStat.Booster, eff.info.get(MapleStatInfo.x));
                break;
            case 2301003: //Invicible
                eff.statups.put(CharacterTemporaryStat.Invincible, eff.info.get(MapleStatInfo.x));
                break;
            case 2111011: //Elemental Adaptation (Fire, Poison)
            	eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR));
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.asrR));
            	break;
            case 2211012: //Elemental Adaptation (Ice, Lightning)
               eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR));
               eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.asrR));
                break;
            case 2311012: //Divine Protection
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR));
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.asrR));
            	break;
            case 2111008: //Elemental Decrease
            case 2211008: //Elemental Decrease
                eff.statups.put(CharacterTemporaryStat.ElementalReset, eff.info.get(MapleStatInfo.x));
              //eff.statups.put(CharacterTemporaryStat.FINAL_DAMAGE, eff.info.get(MapleStatInfo.mdR)); //MdR isn't in TempStat nor MapleStat
                //TODO
                break;
            case 2311003: //Holy Symbol
                eff.statups.put(CharacterTemporaryStat.HolySymbol, eff.info.get(MapleStatInfo.x));
                break;
            case 2111007: //Teleport Mastery
            case 2211007: //Teleport Mastery
            case 2311007: //Teleport Mastery
                eff.info.put(MapleStatInfo.mpCon, eff.info.get(MapleStatInfo.y));
                eff.info.put(MapleStatInfo.time, 0); //was 2100000000, now 0
                eff.statups.put(CharacterTemporaryStat.TeleportMasteryOn, eff.info.get(MapleStatInfo.x));
                eff.monsterStatus.put(MonsterStatus.STUN, eff.info.get(MapleStatInfo.subProp));
                eff.statups.put(CharacterTemporaryStat.TeleportMasteryRange, eff.info.get(MapleStatInfo.x));
                break;
            case 2311009: //Holy Magic Shield
                eff.statups.put(CharacterTemporaryStat.HolyMagicShell, eff.info.get(MapleStatInfo.x));
                break;
            case 2121004: //Infinity
            case 2221004: //Infinity
            case 2321004: //Infinity
                eff.statups.put(CharacterTemporaryStat.Infinity, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IndieMHPR, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.Stance, eff.info.get(MapleStatInfo.prop));
                break;
            case 2321005: //Advanced Blessing
                eff.statups.put(CharacterTemporaryStat.UsefulAdvancedBless, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.IndiePDD, eff.info.get(MapleStatInfo.z));
                eff.statups.put(CharacterTemporaryStat.IndieMHP, eff.info.get(MapleStatInfo.indieMhp));
                eff.statups.put(CharacterTemporaryStat.IndieMMP, eff.info.get(MapleStatInfo.indieMmp));
                break;
            case 2121000: //Maple Warrior
            case 2221000: //Maple Warrior
            case 2321000: //Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 2121053: //Epic Adventure
            case 2221053: //Epic Adventure
            case 2321053: //Epic Adventure
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            case 2121054: //Inferno Aura
                eff.statups.put(CharacterTemporaryStat.FireAura, eff.info.get(MapleStatInfo.x));
                break;
            case 2221054: //Absolute Zeo Aura
                eff.statups.put(CharacterTemporaryStat.IceAura, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.Stance, eff.info.get(MapleStatInfo.x));
                eff.statups.put(CharacterTemporaryStat.DamAbsorbShield, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.v));
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.w));
                break;
            case 2321054: //Righteously Indignant
                eff.statups.put(CharacterTemporaryStat.ANGEL, 1);
                eff.statups.put(CharacterTemporaryStat.IgnoreTargetDEF, eff.info.get(MapleStatInfo.ignoreMobpdpR));
                eff.statups.put(CharacterTemporaryStat.IndieBooster, eff.info.get(MapleStatInfo.indieBooster));
                eff.statups.put(CharacterTemporaryStat.IndieMAD, eff.info.get(MapleStatInfo.indieMad));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            case 2321052: //Heaven's Door
                eff.statups.put(CharacterTemporaryStat.HeavensDoor, eff.info.get(MapleStatInfo.x));
                break;
            case 2120010:
            case 2220010:
            case 2320011:
                eff.statups.put(CharacterTemporaryStat.IgnoreMobpdpR, eff.info.get(MapleStatInfo.ignoreMobpdpR));
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.x));
                //TODO
                // Stacks[y]
                break;
            default:
                //System.out.println("Magician skill not coded: " + skill);
                break;
        }
    }
}
