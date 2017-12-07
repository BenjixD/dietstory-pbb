package client.skills;

import java.awt.*;

/**
 * Created on 12/6/2017.
 */
public class ForceAtomInfo {

    public enum Type {
        SMALL_LIGHT_ORB(0),
        CARD(1),
        FLAME_LIGHT_STAFF(2),
        AB_ORB(3),
        AB_ORB_2(4),
        XENON_BLUE_ROCKET(5),
        XENON_PURPLE_ROCKET(6),
        WA_GREEN_ARROW(7),
        WA_HYPER_ARROW(8),
        SMALL_RED_ORB(9),
        BM_LIGHT_ARROW(10),
        BRIGHT_LIGHT_ORB(11),
        IDK(12),
        SPINNING_BLUE_THING(13),
        SMALL_YELLOW_ORB(14),
        NW_BLACK_BAT(15),
        NW_BLACK_BAT_2(16),
        NO_TARGET(17),
        RAINBOW_STAR(18),
        SMALL_MECH_ROCKET(19),
        BIG_MECH_ROCKET_DOWN(20),
        BIG_MECH_ROCKET_UP(21),
        KINESIS_SATTELITE_ORB(22),
        STARRY_ORB_PURPLE(23),
        STARRY_ORB_ORANGE(24),
        AB_ORB_FADED(25),
        ERROR_38(26),
        FANCY_ARROW(27), // archer 5th job?
        FLAME_WHEEL(28), // idk what this is from
        SMALL_GREEN_STAR(29),


        ;

        private int val;

        Type(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }
    }

    private int key, inc, firstImpact, secondImpact, angle, startDelay, createTime, maxHitCount, effectId;
    private Point start;

    /**
     * Creates a new force atam
     * @param key unsure
     * @param inc Type (e.g. Orbital Flame 1~4 = jobs 1 through 4)
     * @param firstImpact Upwards momentum
     * @param secondImpact Forwards momentum
     * @param angle Start angle (in degrees, 0 = up, clockwise)
     * @param startDelay Delay until move
     * @param createTime Time of creation
     * @param maxHitCount Maximum amount of hits
     * @param effectId ID of the effect
     * @param start Start Point of this ForceAtmon
     */
    public ForceAtomInfo(int key, int inc, int firstImpact, int secondImpact, int angle, int startDelay,
                         int createTime, int maxHitCount, int effectId, Point start) {
        this.key = key;
        this.inc = inc;
        this.firstImpact = firstImpact;
        this.secondImpact = secondImpact;
        this.angle = angle;
        this.startDelay = startDelay;
        this.createTime = createTime;
        this.maxHitCount = maxHitCount;
        this.effectId = effectId;
        this.start = start;
    }


    public int getKey() {
        return key;
    }

    public int getInc() {
        return inc;
    }

    public int getFirstImpact() {
        return firstImpact;
    }

    public int getSecondImpact() {
        return secondImpact;
    }

    public int getAngle() {
        return angle;
    }

    public int getStartDelay() {
        return startDelay;
    }
    public int getCreateTime() {
        return createTime;
    }

    public int getMaxHitCount() {
        return maxHitCount;
    }

    public int getEffectId() {
        return effectId;
    }

    public Point getStart() {
        return start;
    }
}
