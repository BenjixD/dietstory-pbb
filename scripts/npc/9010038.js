// Lucia (9010038) - Maple Leave NPC
var mleafid = 4001126;
var select1, select2;
var status1sel = 0;
var status2sel = 0;
var selcost1;
var selcost2;

var items = [              // [Item ID, Category, Amount given]
/*Pearl Maple*/             [
                                [1003864, 1, 1], // Pearl Hat
                                [1052613, 1, 1], // Pearl Suit
                                [1102563, 1, 1], // Pearl Cape
                                [1132229, 1, 1], // Pearl Belt
                                [1012377, 1, 1], // Pearl Gum
                                [1122253, 1, 1], // Pearl Pendant

                                [1302279, 1, 1], // 1H Sword
                                [1312157, 1, 1], // 1H Axe
                                [1322207, 1, 1], // 1H Mace
                                [1402202, 1, 1], // 2H Sword
                                [1412139, 1, 1], // 2H Axe
                                [1422144, 1, 1], // 2H Mace
                                [1432171, 1, 1], // Spear
                                [1442227, 1, 1], // Polearm
                                [1382213, 1, 1], // Staff
                                [1372181, 1, 1], // Wand
                                [1452209, 1, 1], // Bow
                                [1462197, 1, 1], // Crossbow
                                [1472218, 1, 1], // Claw
                                [1332229, 1, 1], // Dagger
                                                 // Katara
                                [1482172, 1, 1], // Knuckle
                                [1492183, 1, 1], // Gun
                                [1532102, 1, 1], // Hand-Cannon
                                [1522097, 1, 1], // Dual Bowgun
                                [1362094, 1, 1], // Cane
                                [1212071, 1, 1], // Shining Rod
                                [1232062, 1, 1], // Desperado
                                [1242067, 1, 1], // Whip Blade
                                [1542069, 1, 1], // Katana
                                [1552069, 1, 1], // Fan
                                [1222066, 1, 1], // Soul Shooter
                                [1252065, 1, 1]  // Scepter
                                                 // Psy-Limiter
                                                 // Arm-Cannon


                            ],

/*Onyx Maple*/              [
                                [1003863, 2, 1], // Onyx Hat
                                [1052612, 2, 1], // Onyx Suit
                                [1102562, 2, 1], // Onyx Cape
                                [1132228, 2, 1], // Onyx Belt
                                [1012376, 2, 1], // Onyx Gum
                                [1122252, 2, 1], // Onyx Pendant

                                [1302277, 2, 1], // 1H Sword
                                [1312155, 2, 1], // 1H Axe
                                [1322205, 2, 1], // 1H Mace
                                [1402199, 2, 1], // 2H Sword
                                [1412137, 2, 1], // 2H Axe
                                [1422142, 2, 1], // 2H Mace
                                [1432169, 2, 1], // Spear
                                [1442225, 2, 1], // Polearm
                                [1382211, 2, 1], // Staff
                                [1372179, 2, 1], // Wand
                                [1452207, 2, 1], // Bow
                                [1462195, 2, 1], // Crossbow
                                [1472216, 2, 1], // Claw
                                [1332227, 2, 1], // Dagger
                                                 // Katara
                                [1482170, 2, 1], // Knuckle
                                [1492181, 2, 1], // Gun
                                [1532100, 2, 1], // Hand-Cannon
                                [1522096, 2, 1], // Dual Bowgun
                                [1362092, 2, 1], // Cane
                                [1212066, 2, 1], // Shining Rod
                                [1232060, 2, 1], // Desperado
                                [1242065, 2, 1], // Whip Blade
                                [1542070, 2, 1], // Katana
                                [1552070, 2, 1], // Fan
                                [1222061, 2, 1], // Soul Shooter
                                [1252064, 2, 1]  // Scepter
                                                 // Psy-Limiter
                                                 // Arm-Cannon
                            ],

/*Maple Saint*/             [
                                [1004172, 3, 1], // Saint Hat
                                [1052758, 3, 1], // Saint Suit
                                [1102691, 3, 1], // Saint Cape
                                [1132222, 3, 1], // ++Curbrock Belt (Place Holder)++
                                [1012471, 3, 1], // Saint Gum
                                [1122280, 3, 1], // Saint Pendant

                                [1302304, 3, 1], // 1H Sword
                                [1312179, 3, 1], // 1H Axe
                                [1322230, 3, 1], // 1H Mace
                                [1402229, 3, 1], // 2H Sword
                                [1412158, 3, 1], // 2H Axe
                                [1422165, 3, 1], // 2H Mace
                                [1432194, 3, 1], // Spear
                                [1442248, 3, 1], // Polearm
                                [1382239, 3, 1], // Staff
                                [1372201, 3, 1], // Wand
                                [1452232, 3, 1], // Bow
                                [1462219, 3, 1], // Crossbow
                                [1472241, 3, 1], // Claw
                                [1332254, 3, 1], // Dagger
                                                 // Katara
                                [1482196, 3, 1], // Knuckle
                                [1492205, 3, 1], // Gun
                                [1532124, 3, 1], // Hand-Cannon
                                [1522118, 3, 1], // Dual Bowgun
                                [1362115, 3, 1], // Cane
                                [1212095, 3, 1], // Shining Rod
                                [1232089, 3, 1], // Desperado
                                [1242095, 3, 1], // Whip Blade
                                [1542107, 3, 1], // Katana
                                [1552109, 3, 1], // Fan
                                [1222089, 3, 1], // Soul Shooter
                                [1252092, 3, 1]  // Scepter
                                                 // Psy-Limiter
                                                 // Arm-Cannon
                            ],

/*Maple Treasure*/          [
                                [1004492, 4, 1], // Maple Treasure Hat
                                [1052929, 4, 1], // Maple Treasure Suit
                                [1102828, 4, 1], // Maple Treasure Cape
                                [1132287, 4, 1], // Maple Treasure Belt
                                [1012524, 4, 1], // Maple Treasure Gum
                                [1122306, 4, 1], // Maple Treasure Pendant

                                [1302336, 4, 1], // 1H Sword
                                [1312201, 4, 1], // 1H Axe
                                [1322253, 4, 1], // 1H Mace
                                [1402253, 4, 1], // 2H Sword
                                [1412180, 4, 1], // 2H Axe
                                [1422187, 4, 1], // 2H Mace
                                [1432216, 4, 1], // Spear
                                [1442270, 4, 1], // Polearm
                                [1382263, 4, 1], // Staff
                                [1372225, 4, 1], // Wand
                                [1452255, 4, 1], // Bow
                                [1462241, 4, 1], // Crossbow
                                [1472263, 4, 1], // Claw
                                [1332277, 4, 1], // Dagger
                                                 // Katara
                                [1482218, 4, 1], // Knuckle
                                [1492233, 4, 1], // Gun
                                [1532146, 4, 1], // Hand-Cannon
                                [1522140, 4, 1], // Dual Bowgun
                                [1362137, 4, 1], // Cane
                                [1212117, 4, 1], // Shining Rod
                                [1232111, 4, 1], // Desperado
                                [1242118, 4, 1], // Whip Blade
                                [1542116, 4, 1], // Katana
                                [1552118, 4, 1], // Fan
                                [1222111, 4, 1], // Soul Shooter
                                [1252092, 4, 1], // Scepter
                                //[1262037, 4, 1]  // Psy-Limiter
                                                 // Arm-Cannon
                            ],


/*Pearl Maple Costs*/       [ [4001126, 2500] ],
/*Onyx Maple Costs*/        [ [4001126, 5000] ],
/*Maple Saint Costs*/       [ [4001126, 5000] ],
/*Maple Treasure Costs*/    [ [4001126, 5000] ]
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
    cm.sendSimple("What would you like to do? #b\r\n#L0#Make Pearl Maple (Lv30)#l \r\n#L1#Make Onyx Maple (Lv100)#l \r\n#L2#Make Maple Saint (Lv100)#l \r\n#L3#Make Maple Treasure (Lv120)#l \r\n#L4#Trade Leaves into Experience");
    }

    else if (status == 1) {
    select1 = selection;
        if (selection == 4) {
        cm.sendGetNumber("How many leaves would you like to trade in?\r\nCurrent: "+formatNumber(cm.itemQuantity(mleafid))+".",1,1,cm.itemQuantity(mleafid));
        status1sel = 1;
        } else {
        var selStr = "Which item would you like?\r\n#b";
        for (var i = 0; i < items[selection].length; i++) {
            selStr += (items[selection][i][0] == 1132222 ? "" : "#L" + i + "##v"+items[selection][i][0]+"##t"+items[selection][i][0]+"##l\r\n");

        }
        cm.sendSimple(selStr + "#k");
        status1sel = 2;
        }
    }

    else if (status == 2) {
    select2 = selection
    selcost1 = (select1 + 4)
    selcost2 = (select1 - 1)
        if (status1sel == 1) {
        cm.gainItem(mleafid,(-1*(selection)));
        cm.gainExp((selection * 125));
        cm.sendSimple("There you go!");
        cm.dispose();

        } else {
        var selStr = "#v"+items[select1][selection][0]+"##t"+items[select1][selection][0]+"# will cost:\r\n\r\n";
        for (var i = 0; i < items[selcost1].length; i++) {
            selStr += ""+items[selcost1][i][1]+"x  #v"+items[selcost1][i][0]+"##t"+items[selcost1][i][0]+"#\r\n";
        }
        cm.sendSimple(selStr + ""+(items[select1][selection][1] == 1 ? "2,500,000 Meso" : "1x  #v"+(items[selcost2][selection][0] == 1132222 ? 1132228+"##t"+ 1132228 : items[selcost2][selection][0]+"##t"+items[selcost2][selection][0]) +"#\r\n5,000,000 Meso")+"#k");
        }
    }

    else if (status == 3) {
    selcost1 = (select1 + 4)
    selcost2 = (select1 - 1)
        if (!cm.canHold(items[select1][select2][0])) {
        cm.sendSimple("You don't have enough inventory space");
        cm.dispose();
        return;
        } else if (items[select1][select2][1] > 1) {
            if (items[selcost2][select2][0] == 1132222) {
                if (cm.getMeso() >= 5000000 && cm.haveItem(4001126,5000) && cm.haveItem(1132228, 1) ) {
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126, -5000);
                    cm.gainItem(1132228, -1);
                    cm.sendSimple("Thank you for your purchase.\r\nEnjoy your #t"+items[select1][select2][0]+"#.");
                    cm.gainItem(1132287,1);
                    cm.dispose();
                } else {
                    cm.sendSimple("You don't have all the materials");
                    cm.dispose();
                    return;
                }
                } else {
                if (cm.getMeso() >= 5000000 && cm.haveItem(4001126,5000) && cm.haveItem(items[selcost2][select2][0], 1) ) {
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126, -5000);
                    cm.gainItem(items[selcost2][select2][0],-1);
                    cm.sendSimple("Thank you for your purchase.\r\nEnjoy your #t"+items[select1][select2][0]+"#.");
                    cm.gainItem(items[select1][select2][0],1);
                    cm.dispose();
                } else {
                    cm.sendSimple("You don't have all the materials");
                    cm.dispose();
                    return;
                }
            }
        } else if (items[select1][select2][1] == 1) {
            if (cm.getMeso() >= 2500000 && cm.haveItem(4001126, 2500) ) {
            cm.gainMeso(-2500000);
            cm.gainItem(4001126, -2500);
            cm.sendSimple("Thank you for your purchase.\r\nEnjoy your #t"+items[select1][select2][0]+"#.");
            cm.gainItem(items[select1][select2][0],1);
            cm.dispose();
            } else {
            cm.sendSimple("You don't have all the materials");
            cm.dispose();
            return;
            }

        } else {
        cm.dispose();
        }

    }

}