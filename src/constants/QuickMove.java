/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package constants;

/**
 *
 * @author Itzik
 */
public enum QuickMove {

    MAP1(100000000),
    MAP2(101000000),
    MAP3(102000000),
    MAP4(103000000),
    MAP5(104000000),
    MAP6(105000000),
    MAP7(120000100),
    MAP8(200000000),
    MAP9(220000000),
    MAP10(221000000),
    MAP11(222000000),
    MAP12(230000000),
    MAP13(240000000),
    MAP14(250000000),
    MAP15(251000000),
    MAP16(260000000),
    MAP17(261000000),
    MAP18(310000000),
    MAP19(400000000);
    private final int map;

    private QuickMove(int map) {
        this.map = map;
    }

    public int getMap() {
        return map;
    }

    public int getNPCFlag() {
        return QuickMoveNPC.PVP.getValue()
                | QuickMoveNPC.MONSTER_PARK.getValue()
                | QuickMoveNPC.MIRROR.getValue()
                | QuickMoveNPC.MARKET.getValue()
                | QuickMoveNPC.CRAFTING.getValue()
                | QuickMoveNPC.WORLD_TRANSPORT.getValue()
                | QuickMoveNPC.ISLAND_TRANSPORT.getValue()
                | QuickMoveNPC.RANDOLF.getValue()
                | QuickMoveNPC.LUCIA.getValue()
                | QuickMoveNPC.CONOR.getValue()
                | QuickMoveNPC.PART_TIME.getValue()
                | QuickMoveNPC.HAIR_STYLE.getValue()
                | QuickMoveNPC.FACE_STYLE.getValue()
                | QuickMoveNPC.test1.getValue()
                | QuickMoveNPC.test2.getValue()
                | QuickMoveNPC.test3.getValue()
                | QuickMoveNPC.test4.getValue()
                | QuickMoveNPC.test5.getValue()
                | QuickMoveNPC.test6.getValue()
                | QuickMoveNPC.test7.getValue()
                | QuickMoveNPC.test8.getValue()
                | QuickMoveNPC.test9.getValue()
                ;
    }

    public enum QuickMoveNPC {

        WORLD_TRANSPORT(0x6, 6, true, 9270035, 0, "#Universal NPC#"), //unpc
        test4(0x17, 17, true, 0, 0, "Change #Game Settings#"),
        PVP(0x1, 1, false, 9070004, 30, "Move to the Battle Mode zone #cBattle Square#, where you can fight against other users.\n#cLv. 30 or above can participate in Battle Square."),
        MONSTER_PARK(0x2, 2, false, 9071003, 20, "Move to the party zone \n#cMonster Park#, where you can fight against strong monsters with your party members.\n#cOnly Lv. 20 or above can participate in the Monster Park."),
        MIRROR(0x3, 3, true, 9010022, 10, "Use the #cDimensional Mirror# to move to a variety of party quests."),
        MARKET(0x4, 4, true, 9000087, 0, "Move to the #cFree Market#, where you can trade items with other users."),
        CRAFTING(0x5, 5, false, 9000088, 30, "Move to #cArdentmill#, the town of Professions.\n#cOnly Lv. 30 or above can move to Ardentmill"),
        ISLAND_TRANSPORT(0x7, 7, false, 9000089, 0, "Take the #cTaxi# to move to major areas quickly."), //Taxi, Camel
        LUCIA(0x9, 9, true, 9010038, 10, "Exchange #Maple leaves# for various items or exp"),
        CONOR(0x8, 8, true, 0, 10, "Snowdrop coins"),
        RANDOLF(0x10, 10, true, 9010037, 10, "Dojo NPC"),
        PART_TIME(0x11, 11, false, 9010041, 30, "Receive Part-Time Job reward."),
        HAIR_STYLE(0x12, 12, false, 9000123, 0, "You can get a stylish haircut from Big Headward."),
        FACE_STYLE(0x13, 13, false, 9201252, 0, "You can get plastic surgery from Nurse Pretty."),
        test1(0x14, 14, false, 0, 0, "test1"),
        test2(0x15, 15, false, 0, 0, "test2"),
        test3(0x16, 16, false, 0, 0, "test3"),
        test5(0x18, 18, false, 0, 0, "test5"),
        test6(0x19, 19, true, 0, 0, "test6"),
        test7(0x20, 20, false, 0, 0, "test7"),
        test8(0x21, 21, false, 0, 0, "test8"),
        test9(0x22, 22, false, 0, 0, "test9");
        private final int value, type, id, level;
        private final String desc;
        private final boolean show;

        private QuickMoveNPC(int value, int type, boolean show, int id, int level, String desc) {
            this.value = value;
            this.type = type - 1;
            this.show = show;
            this.id = id;
            this.level = level;
            this.desc = desc;
        }

        public final byte getValue() {
            return (byte) value;
        }

        public final boolean check(int flag) {
            return (flag & value) != 0;
        }

        public int getType() {
            return type;
        }

        public boolean show() {
            return show;
        }

        public int getId() {
            return id;
        }

        public int getLevel() {
            return level;
        }

        public String getDescription() {
            return desc;
        }
    }
}
