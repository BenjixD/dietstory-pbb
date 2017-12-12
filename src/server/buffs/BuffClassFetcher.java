/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs;

import server.MapleStatEffect;
import server.buffs.buffclasses.adventurer.*;
import server.buffs.buffclasses.cygnus.*;
import server.buffs.buffclasses.hero.*;
import server.buffs.buffclasses.nova.AngelicBusterBuff;
import server.buffs.buffclasses.nova.KaiserBuff;
import server.buffs.buffclasses.resistance.*;
import server.buffs.buffclasses.sengoku.HayatoBuff;
import server.buffs.buffclasses.sengoku.KannaBuff;
import server.buffs.buffclasses.zero.ZeroBuff;
import server.buffs.buffclasses.special.PinkBeanBuff;
import server.buffs.buffclasses.special.BeastTamerBuff;

/**
 *
 * @author Saint
 */
public class BuffClassFetcher {

    public static final Class<?>[] buffClasses = {
        WarriorBuff.class,
        MagicianBuff.class,
        BowmanBuff.class,
        ThiefBuff.class,
        PirateBuff.class,
        DawnWarriorBuff.class,
        WindArcherBuff.class,
        BlazeWizardBuff.class,
        NightWalkerBuff.class,
        ThunderBreakerBuff.class,
        MihileBuff.class,
        AranBuff.class,
        EvanBuff.class,
        MercedesBuff.class,
        PhantomBuff.class,
        ShadeBuff.class,
        LuminousBuff.class,
        AngelicBusterBuff.class,
        KaiserBuff.class,
        XenonBuff.class,
        BlasterBuff.class,
        WildHunterBuff.class,
        MechanicBuff.class,
        BattleMageBuff.class,
        DemonBuff.class,
        KannaBuff.class,
        HayatoBuff.class,
        ZeroBuff.class,
        PinkBeanBuff.class,
        BeastTamerBuff.class
    };

    public static boolean getHandleMethod(MapleStatEffect eff, int skillid) {
        int jobid = skillid / 10000;
        for (Class<?> c : buffClasses) {
            try {
                if (!AbstractBuffClass.class.isAssignableFrom(c)) {
                    continue;
                }
                AbstractBuffClass cls = (AbstractBuffClass) c.newInstance();
                if (cls.containsJob(jobid)) {
                    if (!cls.containsSkill(skillid)) {
                        continue;
                    }
                    cls.handleBuff(eff, skillid);
                    return true;
                }
            } catch (InstantiationException | IllegalAccessException ex) {
                System.err.println("Error: handleBuff method was not found in " + c.getSimpleName() + ".class");
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return false;
    }
}
