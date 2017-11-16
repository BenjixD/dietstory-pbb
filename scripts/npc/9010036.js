//  Lilin Cash NPC
var status = -1;
var items = [
/*Cubes*/ [[2710000, 1500, -1], [2711005, 4000, -1], [5062001, 8000, -1], [5062009, 22000, -1], [5062005, 40000, -1], [5062006, 60000, -1], [5062500, 60000, -1], [5062024, 30000000, -1]],
/*Scrolls*/ [[2049100, 4500, -1], [2049300, 500000, -1], [2049301, 20000, -1], [2048018, 14000, -1], [2048019, 14000, -1], [2048305, 400000, -1], [2048307, 700000, -1]],
/*ScrollTools*/ [[5610000, 10000, -1], [5610001, 10000, -1], [2532000, 50000, -1], [2530000, 35000, -1], [2531000, 100000, -1], [5534000, 20000, -1], [2532004, 100000, -1], [2530006, 100000, -1], [2533001, 400000, -1], [2048400, 5000, -1], [2470007, 10000, -1]],
/*GameEnhance*/ [[2502000, 3000, -1], [5510000, 2000, -1], [5133000, 2000, -1], [2003555, 500000, -1], [5520001, 8000, -1], [5520000, 6000, -1]],
/*Hired Merchants*/ [[5030000, 3400, 1], [5030001, 11800, 4], [5030006, 19800, 7], [5030010, 15000, 1], [5030011, 100000, 7], [5470000, 50000, -1]],
/*ETC*/ [[4020009, 2000, -1], [3011000, 4500, 14], [5220084, 25000, -1], [5220092, 100000, -1], [5062400, 10000, -1], [5062402, 7500, -1], [5040004, 100000, -1], [5700000, 10000, -1], [5820000, 20000, 7], [5552000, 100000, -1], [5553000, 100000, -1], [5450005, 50000, -1]],
/*Messaging*/ [[5080000, 20000, -1], [5080001, 20000, -1], [5080002, 20000, -1], [5080003, 20000, -1], [5072000, 2000, -1], [5079004, 2400, -1], [5074000, 2400, -1], [5076000, 2600, -1], [5077000, 5000, -1], [5079001, 2400, -1], [5079002, 2400, -1]],
/*Gachapon*/ [[5220000, 3000, -1],[5220098, 5000, -1], [5220100, 60000, -1]]
];
var select, select2;

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
        cm.sendSimple("Hi, I like #rCash#k. \r\nMaybe you could trade me some of your #r" + formatNumber(( cm.getPlayer().getCSPoints(2) )) + " Cash#k? \r\nI have lots of great items for you...#b\r\n\r\n#L0#Cubes#l\r\n#L1#Scrolls#l\r\n#L2#Scrolling Tools#l\r\n#L3#Game-enhancing#l\r\n#L4#Hired Merchant#l\r\n#L5#ETC#l\r\n#L6#Messaging#l\r\n#L7#Gachapon#l");
    } else if (status == 1) {
        select = selection;
        var selStr = "Which item would you like?\r\n#b";
        for (var i = 0; i < items[selection].length; i++) {
            selStr += "#L" + i + "##v" + items[selection][i][0] + "##t" + items[selection][i][0] + "# #r(" + formatNumber((items[selection][i][1] / 2)) + " Cash)" + (items[selection][i][2] > 0 ? " (Lasts for " + items[selection][i][2] + " days)" : "") + "#b#l\r\n";
        }
        cm.sendSimple(selStr + "#k");
    } else if (status == 2) {
        select2 = selection;
        if (items[select][selection][0] / 1000000 == 1) {
            if (cm.getPlayer().getCSPoints(2) < items[select2][i][1] / 2) {
                cm.sendOk("It seems that you don't have enough #rCash#k.");
            } else if (!cm.canHold(items[select][select2][0], 1)) {
                cm.sendOk("You don't have the inventory space to hold it.");
            } else {
                cm.getPlayer().modifyCSPoints(2, -(items[select][select2][i][1] / 2), true);
                if (items[select][select2][2] > 0) {
                    cm.gainItemPeriod(items[select][select2][0], 1, items[select][select2][2]);
                } else {
                    cm.gainItem(items[select][select2][0], 1);
                }
                cm.sendOk("You have gained " + formatNumber(selection) + "and lost " + formatNumber((items[select][select2][i][1] / 2)) * selection + " Cash");
            }
            cm.dispose();
        } else {
            cm.sendGetNumber("How many would you like? \r\n(1#v" + items[select][selection][0] + "##t" + items[select][selection][0] + "# = " + formatNumber(items[select][selection][1] / 2) + " Cash) \r\n(Current Cash: " + formatNumber(cm.getPlayer().getCSPoints(2)) + ")", 1, 1, cm.getPlayer().getCSPoints(2) / (items[select][selection][1] / 2));
        }
    } else if (status == 3) {
        if ((items[select][select2][0] == 7 || items[select][select2][0] == 8 || items[select][select2][0] == 9 || items[select][select2][0] == 11 || items[select][select2][0] == 10) && cm.getPlayer().getLevel() < 70) {
            cm.sendOk("Sorry but you must be level 70 or above to get this item.");
        } else if (items[select][select2][0] == 12 && cm.getPlayer().getLevel() < 50) {
            cm.sendOk("Sorry but you must be level 50 or above to get this item.");
        } else if (cm.getPlayer().getCSPoints(2) < items[select][select2][1] / 2) {
            cm.sendOk("It seems that you don't have enough #rCash#k.");
        } else if (!cm.canHold(items[select][select2][0], selection)) {
            cm.sendOk("You don't have the inventory space to hold it.");
        } else {
            cm.getPlayer().modifyCSPoints(2, -(items[select][select2][1] / 2 * selection), true);
            if (items[select][select2][2] > 0) {
                cm.gainItemPeriod(items[select][select2][0], selection, items[select][select2][2]);
            } else {
                cm.gainItem(items[select][select2][0], selection);
            }
			//cm.showMessage(-1, "You have lost " + (items[select][select2][1] / 2 * selection) + " Cash.");
        //cm.showMessage(7, "You have lost " + (items[select][select2][1] / 2 * selection) + " Cash.");
            cm.sendOk("You have gained " + formatNumber(selection) + " and lost " + formatNumber(((items[select][select2][1] / 2) * selection)) + " Cash");
        }
        cm.dispose();
    }
}