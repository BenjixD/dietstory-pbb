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
public class BattleMageBuff extends AbstractBuffClass {
    
    public BattleMageBuff() {
        buffs = new int[]{
           32001016, // Hasty Aura
           32001014, // Condemnation
           32101009, // Draining Aura
           32101005, // Staff Boost
           32111012, // Blue Aura
           32121017, // Dark Aura
           32121007, // Maple Warrior
           32121010, // Battle Rage
           32121056, // Master of Death
           33121053, // For Liberty

        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isBattleMage(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 32001016: // Hasty Aura
                eff.statups.put(CharacterTemporaryStat.IndieBooster, -1);
                eff.statups.put(CharacterTemporaryStat.Speed, eff.info.get(MapleStatInfo.psdSpeed));
              //eff.statups.put(CharacterTemporaryStat.IndieForceSpeed, eff.info.get(MapleStatInfo.speedMax));  // Is this for increasing maxSpeed?
                eff.statups.put(CharacterTemporaryStat.Jump, eff.info.get(MapleStatInfo.psdJump));
                eff.statups.put(CharacterTemporaryStat.EVA, eff.info.get(MapleStatInfo.er));
                break;
            case 32001014: // Condemnation
                //TODO
                //Unsure what buff to add. (After taking out #x enemies, deals damage to #mobCount enemies at the next attack. Damage: #w + #z% per your level, Number of Attacks: #attackCount. Your level affects only up to Lv. 180. If you attack a boss #y times, it will count as taking out 1 enemy. Once activated, it won't activate again until after #time sec. )
                break;
            case 32101009: // Draining Aura
                //TODO
                //Unsure what buff to add. (MP Cost per sec: #mpCon, #x% of damage dealt recovers to your HP. Cannot recover again for #subTime sec after a recovery takes place. Damage dealt by Battle Mage also recovers the party members within the range of Draining Aura.\nCooldown: #cooltime sec\n[Passive Effect: HP recovery every 4 sec: #hp, Max HP recovery every time you eliminate an enemy: #killRecoveryR%])
                eff.statups.put(CharacterTemporaryStat.HP_RECOVER, eff.info.get(MapleStatInfo.hp));
                eff.statups.put(CharacterTemporaryStat.IndieDrainHP, eff.info.get(MapleStatInfo.killRecoveryR)); //Unsure what TempStat to add.
                break;
            case 32101005: // Staff Boost
                eff.statups.put(CharacterTemporaryStat.Booster, -2);
                break;
            case 32111012: // Blue Aura
                eff.statups.put(CharacterTemporaryStat.IndieAsrR, eff.info.get(MapleStatInfo.indieAsrR));
                eff.statups.put(CharacterTemporaryStat.DamAbsorbShield, eff.info.get(MapleStatInfo.y));
                eff.statups.put(CharacterTemporaryStat.AsrR, eff.info.get(MapleStatInfo.asrR));
                eff.statups.put(CharacterTemporaryStat.TerR, eff.info.get(MapleStatInfo.terR));
                eff.statups.put(CharacterTemporaryStat.IndiePDDR, eff.info.get(MapleStatInfo.pddR)); //Not sure if it's meant to be Indie
                eff.statups.put(CharacterTemporaryStat.IgnoreMobDamR, eff.info.get(MapleStatInfo.ignoreMobDamR));
                break;
            case 32121017: // Dark Aura
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IndieMADR, eff.info.get(MapleStatInfo.madR));
                break;
            case 32121010: // Battle Rage
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.x)); //Damage: x
                eff.statups.put(CharacterTemporaryStat.SharpEyes, eff.info.get(MapleStatInfo.z)); //CritRate: z
                eff.statups.put(CharacterTemporaryStat.HowlingCritical, eff.info.get(MapleStatInfo.y)); //CritDamage: y
                //eff.statups.put(CharacterTemporaryStat.MobCount, eff.info.get(MapleStatInfo.mobCount));   //Unsure what the MobCount TempStat is
                eff.statups.put(CharacterTemporaryStat.IndieMHPR, eff.info.get(MapleStatInfo.mhpR));
                eff.statups.put(CharacterTemporaryStat.IndieMMPR, eff.info.get(MapleStatInfo.mhpR));
                break;
            case 32121007: // Maple Warrior
                eff.statups.put(CharacterTemporaryStat.BasicStatUp, eff.info.get(MapleStatInfo.x));
                break;
            case 32121056: // Master of Death
                eff.statups.put(CharacterTemporaryStat.AddAttackCount, eff.info.get(MapleStatInfo.attackCount));
                //TODO
                //Unsure what buff to add. (MP Cost: #mpCon, Duration: #time sec, Number of Attacks Blow skill: +#attackCount, number of required souls reduced to #y. Reduces Condemnation cooldown by 0.5 sec every time you successfully use a dark-attribute attack (besides Condemnation).\nCooldown: #cooltime sec)
                break;
            case 33121053: // For Liberty
                eff.statups.put(CharacterTemporaryStat.IndieDamR, eff.info.get(MapleStatInfo.indieDamR));
                eff.statups.put(CharacterTemporaryStat.IncMaxDamage, eff.info.get(MapleStatInfo.indieMaxDamageOver));
                break;
            default:
                // System.out.println("Unhandled BattleMage Buff: " + skill);
                break;
        }
    }
}
