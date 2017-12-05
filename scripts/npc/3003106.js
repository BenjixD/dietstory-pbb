// Dimo (3003106) - Arcane Umbra gear seller

var select;
var select2;
var eqp = 0;

var items = [           // [Item ID,  Category(Armour/Weapon),  Thief/Pirate Xenon Add-On,  Equip Category/ItemCode,  Amount given]
                        /*
                        Item Code:
                        Hat = 0
                        Suit = 1
                        Boots = 2
                        Gloves = 3
                        Shoulder = 4
                        Cape = 5
                        */

/*Gear or Weapons*/ [  /*Warrior*/   [1004808, 1, -1, 0, 1], [1053063, 1, -1, 1, 1], [1073158, 1, -1, 2, 1], [1082695, 1, -1, 3, 1], [1152196, 1, -1, 4, 1], [1102940, 1, -1, 5, 1],
                       /*Mage*/      [1004809, 1, -1, 0, 1], [1053064, 1, -1, 1, 1], [1073159, 1, -1, 2, 1], [1082696, 1, -1, 3, 1], [1152197, 1, -1, 4, 1], [1102941, 1, -1, 5, 1],
                       /*Bowman*/    [1004810, 1, -1, 0, 1], [1053065, 1, -1, 1, 1], [1073160, 1, -1, 2, 1], [1082697, 1, -1, 3, 1], [1152198, 1, -1, 4, 1], [1102942, 1, -1, 5, 1],
                       /*Thief*/     [1004811, 1, -1, 0, 1], [1053066, 1, -1, 1, 1], [1073161, 1, -1, 2, 1], [1082698, 1, -1, 3, 1], [1152199, 1, -1, 4, 1], [1102943, 1, -1, 5, 1],
                       /*Pirate*/    [1004812, 1, -1, 0, 1], [1053067, 1, -1, 1, 1], [1073162, 1, -1, 2, 1], [1082699, 1, -1, 3, 1], [1152200, 1, -1, 4, 1], [1102944, 1, -1, 5, 1],

                       /*Weapons*/
                                     [1302343, 2, -1, 6, 1],  // 1H Sword
                                     [1312203, 2, -1, 7, 1],  // 1H Axe
                                     [1322255, 2, -1, 8, 1],  // 1H Mace
                                     [1402259, 2, -1, 9, 1],  // 2H Sword
                                     [1412181, 2, -1, 10, 1], // 2H Axe
                                     [1422189, 2, -1, 11, 1], // 2H Mace
                                     [1432218, 2, -1, 12, 1], // Spear
                                     [1442274, 2, -1, 13, 1], // Polearm
                                     [1382265, 2, -1, 14, 1], // Staff
                                     [1372228, 2, -1, 15, 1], // Wand
                                     [1452257, 2, -1, 16, 1], // Bow
                                     [1462243, 2, -1, 17, 1], // Crossbow
                                     [1472265, 2, -1, 18, 1], // Claw
                                     [1332279, 2, -1, 19, 1], // Dagger
                                     [1342104, 2, -1, 20, 1], // Katara
                                     [1482221, 2, -1, 21, 1], // Knuckle
                                     [1492235, 2, -1, 22, 1], // Gun
                                     [1532150, 2, -1, 23, 1], // Cannon
                                     [1522143, 2, -1, 24, 1], // Dual Bow Gun
                                     [1362140, 2, -1, 25, 1], // Cane
                                     [1212120, 2, -1, 26, 1], // Shining Rod
                                     [1232113, 2, -1, 27, 1], // Desperado
                                     [1242122, 2, 1, 28, 1, "Thief"], // Whip Blade (Thief)
                                     [1242121, 2, 1, 28, 1, "Pirate"], // Whip Blade (Pirate)
                                     [1542117, 2, -1, 29, 1], // Katana
                                     [1552119, 2, -1, 30, 1], // Fan
                                     [1222113, 2, -1, 31, 1], // Soul Shooter
                                     [1252098, 2, -1, 32, 1], // Scepter
                                     [1262039, 2, -1, 33, 1], // Psy-Limiter
                                     [1582023, 2, -1, 34, 1], // Arm Cannon
                                     [2048918, 2, -1, 35, 1], // Arcane Zero Weapon Scroll



                    ],

/*Gear Cost*/ [
                    [4310218, 6],         // Phantasma Coin
                    [2432009, 90],        // Black Mage's Token
                    [4310097, 60],        // Gollux Coin
                    [4310156, 120],       // AbsoLab Coin
                    [4021030, 15],        // Spirit stone
                    [4021029, 100],       // Condensed Spirit
                    [4310093, 100],       // Tynerum Shard
                    [4310100, 4000],      // Denaro
                    [4310092, 75],        // Kritias Coin
                    [4310091, 150],       // Anheim Coin
                    [4021031, 2000],      // Twisted Time

              ],

/*Weapons Cost*/ [
                    [4310218, 9],         // Phantasma Coin
                    [2432009, 120],       // Black Mage's Token
                    [4310097, 90],        // Gollux Coin
                    [4310156, 150],       // AbsoLab Coin
                    [4021030, 15],        // Spirit stone
                    [4021029, 50],        // Condensed Spirit
                    [4310093, 100],       // Tynerum Shard
                    [4310100, 5000],      // Denaro
                    [4310092, 75],        // Kritias Coin
                    [4310091, 150],       // Anheim Coin
                    [4021031, 2500],      // Twisted Time


                 ],
/*SW respective Items*/ [
                                            [1003976, 0, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1072870, 2, 1], // Boots
                                            [1082556, 3, 1], // Gloves
                                            [1152160, 4, 1], // Shoulder
                                            [1102623, 5, 1], // Cape

                                            [1003976, 0, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1072870, 2, 1], // Boots
                                            [1082556, 3, 1], // Gloves
                                            [1152160, 4, 1], // Shoulder
                                            [1102623, 5, 1], // Cape

                                            [1003976, 0, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1072870, 2, 1], // Boots
                                            [1082556, 3, 1], // Gloves
                                            [1152160, 4, 1], // Shoulder
                                            [1102623, 5, 1], // Cape

                                            [1003976, 0, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1072870, 2, 1], // Boots
                                            [1082556, 3, 1], // Gloves
                                            [1152160, 4, 1], // Shoulder
                                            [1102623, 5, 1], // Cape

                                            [1003976, 0, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1072870, 2, 1], // Boots
                                            [1082556, 3, 1], // Gloves
                                            [1152160, 4, 1], // Shoulder
                                            [1102623, 5, 1], // Cape

                       /*Weapons*/          [1302297, 6, 1],  // 1H sword
                                            [1312173, 7, 1],  // 1H axe
                                            [1322223, 8, 1],  // 1H mace
                                            [1402220, 9, 1],  // 2H sword
                                            [1412152, 10, 1], // 2H axe
                                            [1422158, 11, 1], // 2H mace
                                            [1432187, 12, 1], // Spear
                                            [1442242, 13, 1], // Polearm
                                            [1382231, 14, 1], // Staff
                                            [1372195, 15, 1], // Wand
                                            [1452226, 16, 1], // Bow
                                            [1462213, 17, 1], // Crossbow
                                            [1472235, 18, 1], // Claw
                                            [1332247, 19, 1], // Dagger
                                            [1342090, 20, 1], // Katara
                                            [1482189, 21, 1], // Knuckle
                                            [1492199, 22, 1], // Gun
                                            [1532118, 23, 1], // Cannon
                                            [1522113, 24, 1], // Dual Bow Gun
                                            [1362109, 25, 1], // Cane
                                            [1212089, 26, 1], // Shining Rod
                                            [1232084, 27, 1], // Desperado
                                            [1242090, 28, 1], // Whip blade
                                            [1242090, 28, 1], // Whip blade
                                            [1542072, 29, 1], // Katana
                                            [1552072, 30, 1], // Fan
                                            [1222084, 31, 1], // Soul Shooter
                                            [1252033, 32, 1], // Scepter
                                            [1262029, 33, 1], // Psy-Limiter
                                            [1582025, 34, 1], // Arm Cannon
                                            [2048909, 35, 2]  // SW Zero weapon scroll
                 ]
];


function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        var selStr = "Choose an item \r\n#b";
        for (var i = 0; i < items[0].length; i++) {
            selStr += "#L" + i + "##v" + items[0][i][0] + "##t" + items[0][i][0] + "#" + (items[0][i][2] > 0 ? " (" +items[0][i][5]+ ") " : "" ) + "#l\r\n";
        }
        cm.sendSimple(selStr + "#k");

    }

    else if (status == 1) {
        select = selection;

        if (items[0][selection][1] == 1) {          // Armour

                var selStr = "#v" + items[0][selection][0] + "##t" + items[0][selection][0] +"# \r\nRequires these materials: \r\n\r\n";
                for (var i = 0; i < items[1].length; i++) {
                    selStr += ""+formatNumber((items[1][i][1])) +"x  #v" + items[1][i][0] + "##t" + items[1][i][0] +"#\r\n";
                }
                cm.sendSimple(selStr + ""+items[3][select][2]+"x  #v"+items[3][selection][0]+"##t"+items[3][selection][0]+"#\r\n1,500,000,000 Mesos\r\n30,000,000 Nx#k");
                eqp = 1;


                } else {                            // Weapon

                var selStr = "#v" + items[0][selection][0] + "##t" + items[0][selection][0] +"#"+ (items[0][selection][2] > 0 ? " (" +items[0][selection][5]+ ") " : "" ) + " \r\nRequires these materials: \r\n\r\n";
                for (var i = 0; i < items[2].length; i++) {
                    selStr += ""+formatNumber((items[2][i][1])) +"x  #v" + items[2][i][0] + "##t" + items[2][i][0] +"#\r\n";
                }
                cm.sendSimple(selStr + ""+items[3][select][2]+"x  #v"+items[3][selection][0]+"##t"+items[3][selection][0]+"#\r\n2,000,000,000 Mesos\r\n50,000,000 Nx#k");
                eqp = 2;
                }

    }

    else if (status == 2) {
        if (eqp == 1) { // Armour

                    if (!cm.canHold(items[0][select][0],1)) {
                        cm.sendSimple("You don't have enough space");
                        cm.dispose();
                        return;
                    } else {
                        if (cm.haveItem(items[eqp][0][0],items[eqp][0][1]) &&
                            cm.haveItem(items[eqp][1][0],items[eqp][1][1]) &&
                            cm.haveItem(items[eqp][2][0],items[eqp][2][1]) &&
                            cm.haveItem(items[eqp][3][0],items[eqp][3][1]) &&
                            cm.haveItem(items[eqp][4][0],items[eqp][4][1]) &&
                            cm.haveItem(items[eqp][5][0],items[eqp][5][1]) &&
                            cm.haveItem(items[eqp][6][0],items[eqp][6][1]) &&
                            cm.haveItem(items[eqp][7][0],items[eqp][7][1]) &&
                            cm.haveItem(items[eqp][8][0],items[eqp][8][1]) &&
                            cm.haveItem(items[eqp][9][0],items[eqp][9][1]) &&
                            cm.haveItem(items[eqp][10][0],items[eqp][10][1]) &&
                            cm.haveItem(items[3][select][0],items[3][select][2]) &&
                            cm.getMeso() >= 1500000000 &&
                            cm.getPlayer().getCSPoints(2) >= 30000000 )
                            {

                            cm.gainItem(items[eqp][0][0],(-1*(items[eqp][0][1])));
                            cm.gainItem(items[eqp][1][0],(-1*(items[eqp][1][1])));
                            cm.gainItem(items[eqp][2][0],(-1*(items[eqp][2][1])));
                            cm.gainItem(items[eqp][3][0],(-1*(items[eqp][3][1])));
                            cm.gainItem(items[eqp][4][0],(-1*(items[eqp][4][1])));
                            cm.gainItem(items[eqp][5][0],(-1*(items[eqp][5][1])));
                            cm.gainItem(items[eqp][6][0],(-1*(items[eqp][6][1])));
                            cm.gainItem(items[eqp][7][0],(-1*(items[eqp][7][1])));
                            cm.gainItem(items[eqp][8][0],(-1*(items[eqp][8][1])));
                            cm.gainItem(items[eqp][9][0],(-1*(items[eqp][9][1])));
                            cm.gainItem(items[eqp][10][0],(-1*(items[eqp][10][1])));
                            cm.gainItem(items[3][select][0],(-1*(items[3][select][2])));
                            cm.gainMeso(-1500000000);
                            cm.getPlayer().modifyCSPoints(2, -30000000);
                            cm.gainItem(items[0][select][0],items[0][select][4]);
                            cm.sendSimple("I have created a #t"+items[0][select][0]+"#, as you asked.");
                            cm.dispose();
                        } else
                        {
                        cm.sendSimple("You don't have all the materials required.");
                        cm.dispose();
                        return;
                        }
                    }

        } else if (eqp == 2) { // Weapon
                    if (!cm.canHold(items[0][select][0],1)) {
                        cm.sendSimple("You don't have enough space");
                        cm.dispose();
                        return;
                    } else {
                        if (cm.haveItem(items[eqp][0][0],items[eqp][0][1]) &&
                            cm.haveItem(items[eqp][1][0],items[eqp][1][1]) &&
                            cm.haveItem(items[eqp][2][0],items[eqp][2][1]) &&
                            cm.haveItem(items[eqp][3][0],items[eqp][3][1]) &&
                            cm.haveItem(items[eqp][4][0],items[eqp][4][1]) &&
                            cm.haveItem(items[eqp][5][0],items[eqp][5][1]) &&
                            cm.haveItem(items[eqp][6][0],items[eqp][6][1]) &&
                            cm.haveItem(items[eqp][7][0],items[eqp][7][1]) &&
                            cm.haveItem(items[eqp][8][0],items[eqp][8][1]) &&
                            cm.haveItem(items[eqp][9][0],items[eqp][9][1]) &&
                            cm.haveItem(items[eqp][10][0],items[eqp][10][1]) &&
                            cm.haveItem(items[3][select][0],items[3][select][2]) &&
                            cm.getMeso() >= 2000000000 &&
                            cm.getPlayer().getCSPoints(2) >= 50000000 )
                            {

                            cm.gainItem(items[eqp][0][0],(-1*(items[eqp][0][1])));
                            cm.gainItem(items[eqp][1][0],(-1*(items[eqp][1][1])));
                            cm.gainItem(items[eqp][2][0],(-1*(items[eqp][2][1])));
                            cm.gainItem(items[eqp][3][0],(-1*(items[eqp][3][1])));
                            cm.gainItem(items[eqp][4][0],(-1*(items[eqp][4][1])));
                            cm.gainItem(items[eqp][5][0],(-1*(items[eqp][5][1])));
                            cm.gainItem(items[eqp][6][0],(-1*(items[eqp][6][1])));
                            cm.gainItem(items[eqp][7][0],(-1*(items[eqp][7][1])));
                            cm.gainItem(items[eqp][8][0],(-1*(items[eqp][8][1])));
                            cm.gainItem(items[eqp][9][0],(-1*(items[eqp][9][1])));
                            cm.gainItem(items[eqp][10][0],(-1*(items[eqp][10][1])));
                            cm.gainItem(items[3][select][0],(-1*(items[3][select][2])));
                            cm.gainMeso(-2000000000);
                            cm.getPlayer().modifyCSPoints(2, -50000000);
                            cm.gainItem(items[0][select][0],items[0][select][4]);
                            cm.sendSimple("I have created a #t"+items[0][select][0]+"#, as you asked.");
                            cm.dispose();
                        } else
                        {
                        cm.sendSimple("You don't have all the materials required.");
                        cm.dispose();
                        return;
                        }
                    }
        }
    }


}