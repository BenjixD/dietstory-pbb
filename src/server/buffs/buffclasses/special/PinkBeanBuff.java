/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.special;

import constants.GameConstants;
import server.MapleStatEffect;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Asura
 */
public class PinkBeanBuff extends AbstractBuffClass {

    public PinkBeanBuff() {
        buffs = new int[]{
                131001006, // Chill Out
                131001018, // Pink Warrior
                131001017, // Pink Shadow
        };
    }

    @Override
    public boolean containsJob(int job) {
        return GameConstants.isPinkBean(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case 131001006: // Chill out
                break;
            case 131001018: // Pink Warrior
                break;
            case 131001017: // Pink Shadow
                break;
            default:
                //System.out.println("Pink Bean skill not coded: " + skill);
                break;
        }
    }
}
