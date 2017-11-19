// Randolf Dojo points NPC (9010037)

var points;
var status = -1;
var bosspq = 925020001;
var blsid = 3993002;
var ldid = 3993000;
var status2 = 0;
var status3 = 0;


var items = [
/*Usables*/[[2532003, 200000], [2530002, 150000], [2531005, 300000], [2049301, 300000], [2049300, 3000000], [2047932, 1000000], [2049147, 60000], [2046897, 2000000], [2047904, 1500000], [2047905, 1500000], [2049004, 150000], [5640000, 500000], [5610000, 20000], [5610001, 60000], [5534000, 60000], [2710000, 15000], [2710002, 45000], [2711004, 75000], [5062006, 400000], [5062500, 400000]],
/*Projectiles*/ [[2070018, 60000], [2070026, 50000], [2070016, 50000], [2070006, 5000], [2330005, 5000], [2330016, 80000], [2060003, 5000], [2060013, 40000], [2060011, 70000], [2061003, 5000], [2061012, 40000], [2061009, 70000]],
/*Other*/ [[3993002, 10000], [3993000, 1000000], [2431174, 20000], [2434288, 400000], [4001832, 5000], [4310015, 100000], [4021031, 50000], [2502000, 8000], [2430692, 15000], [2023133, 50000], [2022749, 7000], [2022750, 7000], [2022751, 7000], [2022743, 7000], [2022744, 7000], [2022745, 7000], [2022794, 35000], [2022795, 35000], [2022796, 35000], [2022797, 35000], [2022798, 35000], [2022799, 35000], [3700080, 10000000], [3700096, 20000000], [3700049, 150000000], [5220000, 20000], [5220100, 400000], [3015617, 50000000], [3015517, 100000000], [3012026, 250000000], [3015349, 500000000], [3015642, 750000000]],
/*TimelessWeapons*/ [[1302081, 120000], [1312037, 120000], [1322060, 120000], [1332073, 120000], [1332074, 120000], [1342011, 120000], [1362016, 120000], [1372044, 120000], [1382057, 120000], [1402046, 120000], [1412033, 120000], [1422037, 120000], [1432047, 120000], [1442063, 120000], [1452057, 120000], [1462050, 120000], [1472068, 120000], [1482023, 120000], [1492023, 120000], [1522015, 120000], [1532015, 120000]],
/*AbyssArmor*/ [[1003280, 120000], [1003281, 120000], [1003282, 120000], [1003283, 120000], [1003284, 120000], [1052374, 120000], [1052375, 120000], [1052376, 120000], [1052377, 120000], [1052378, 120000], [1072544, 160000], [1072545, 160000], [1072546, 160000], [1072547, 160000], [1072548, 160000], [1082328, 160000], [1082329, 160000], [1082330, 160000], [1082331, 160000], [1082332, 160000], [1942004, 60000], [1952004, 60000], [1962004, 60000], [1972004, 60000]],
/*AbyssWeapon*/ [[1302173, 200000], [1312072, 200000], [1322107, 200000], [1332148, 200000], [1332149, 200000], [1342040, 200000], [1362022, 200000], [1372100, 200000], [1382124, 200000], [1402111, 200000], [1412071, 200000], [1422073, 200000], [1432099, 200000], [1442136, 200000], [1452129, 200000], [1462118, 200000], [1472141, 200000], [1482102, 200000], [1492101, 200000], [1522020, 200000], [1532037, 150000]],
/*FearlessArmor*/ [[1003285, 150000], [1003286, 150000], [1003287, 150000], [1003288, 150000], [1003289, 150000], [1052379, 150000], [1052380, 150000], [1052381, 150000], [1052382, 150000], [1052383, 150000], [1072549, 200000], [1072550, 200000], [1072551, 200000], [1072552, 200000], [1072553, 200000], [1082333, 200000], [1082334, 200000], [1082335, 200000], [1082336, 200000], [1082337, 200000], [1102311, 150000], [1032108, 400000], [1122148, 240000], [1092092, 150000], [1092093, 150000], [1092094, 150000]],
/*FearlessWeapon*/ [[1302174, 240000], [1312073, 240000], [1322108, 240000], [1332150, 240000], [1332151, 240000], [1342041, 240000], [1362023, 240000], [1372101, 240000], [1382125, 240000], [1402112, 240000], [1412072, 240000], [1422074, 240000], [1432100, 240000], [1442137, 240000], [1452130, 240000], [1462119, 240000], [1472142, 240000], [1482103, 240000], [1492102, 240000], [1522021, 240000], [1532038, 240000]]
];
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var record = cm.getQuestRecord(150001);
    var intPoints = parseInt(points);
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 0) {
        points = record.getCustomData() == null ? "0" : record.getCustomData();
        if (cm.getMapId() == bosspq) {
        cm.sendSimple("You currently have #r" + formatNumber(points) + "#k dojo points.\r\n\r\n#b#L11#Trade Bamboo Luck Sack for dojo points(10,000)#l \r\n#L12#Trade Lucky Dish for dojo points(1,000,000)#l \r\n#L0#Useables#l \r\n#L1#Projectiles#l \r\n#L2#Others#l \r\n#L3#Timeless Weapons#l \r\n#L4#Abyss Armours#l \r\n#L5#Abyss Weapons#l \r\n#L6#Fearless Armours#l \r\n#L7#Fearless Weapons#l");
        }
        cm.sendSimple("You currently have #r" + formatNumber(points) + "#k dojo points.\r\n\r\n#b#L10#Warp to Lobby#l  \r\n\r\n#L11#Trade Bamboo Luck Sack for dojo points(10,000)#l \r\n#L12#Trade Lucky Dish for dojo points(1,000,000)#l \r\n#L0#Useables#l \r\n#L1#Projectiles#l \r\n#L2#Others#l \r\n#L3#Timeless Weapons#l \r\n#L4#Abyss Armours#l \r\n#L5#Abyss Weapons#l \r\n#L6#Fearless Armours#l \r\n#L7#Fearless Weapons#l");
    }
    else if (status == 1)
    {
        if (selection == 10) {
            cm.warp(bosspq,0);
            cm.dispose();
            }
        else if (selection == 11) {cm.sendGetNumber("How many would you like to redeem? \r\n(1 Bamboo Luck Sack = 10,000 points ) (Current: "+ formatNumber(cm.itemQuantity(blsid)) +") (Current Points: "+formatNumber(points)+")",cm.itemQuantity(blsid),1,cm.itemQuantity(blsid));
            status2 = 1;
            }
        else if (selection == 12) {cm.sendGetNumber("How many would you like to redeem? \r\n(1 Lucky Dish = 1,000,000 points ) (Current: "+ formatNumber(cm.itemQuantity(ldid)) +") (Current Points: "+formatNumber(points)+")",cm.itemQuantity(ldid),1,cm.itemQuantity(ldid));
            status2 = 2;
            }
        else if (selection == 0 || selection == 1 || selection == 2 || selection == 3 || selection == 4 || selection == 5 || selection == 6 || selection == 7)
            {
            select = selection;
            var selStr = "Choose from any of the items below.\r\n";
            for (var i = 0; i < items[selection].length; i++) {
                selStr += "#b#L" + i + "##v" + items[selection][i][0] + "# Trade #t" + items[selection][i][0] + "# for #r" + formatNumber(items[selection][i][1]) + "#b dojo points #l\r\n";
            }
            cm.sendSimple(selStr + "#k");
            status2 = 3;
            }
    }
    else if (status == 2) {
        switch (status2) {
            case 1: cm.sendSimple("You have lost "+formatNumber(selection)+ " bamboo luck sacks, and gained "+formatNumber((selection*10000))+" dojo points.");
                    cm.gainItem(blsid, (selection*-1));
                    record.setCustomData(intPoints + (selection*10000));
                    cm.dispose();
                    break;

            case 2: cm.sendSimple("You have lost "+formatNumber(selection)+ " bamboo luck sacks, and gained "+formatNumber((selection*1000000))+" dojo points.");
                    cm.gainItem(ldid, (selection*-1));
                    record.setCustomData(intPoints + (selection*1000000));
                    cm.dispose();
                    break;

            case 3: select2 = selection;
                    if (intPoints < items[select][selection][1]) {
                    cm.sendSimple("You dont have enough dojo points");
                    cm.dispose();
                    return;
                    }
                    else if (!cm.canHold(items[select][selection][0])) {
                    cm.sendSimple("You don't have enough inventory space");
                    cm.dispose();
                    return;
                    }
                    else if (items[select][selection][0] == 3700080 || items[select][selection][0] == 3700096 || items[select][selection][0] == 3700049 || items[select][selection][0] == 3015617 || items[select][selection][0] == 3015517 || items[select][selection][0] == 3012026 || items[select][selection][0] == 3015349 || items[select][selection][0] == 3015642) {
                    cm.sendSimple("Thank you for the purchase");
                    record.setCustomData(intPoints - (items[select][selection][1]));
                    cm.gainItem(items[select][selection][0],1);
                    cm.dispose();
                    }
                    else if (items[select][selection][0] == 2070018 || items[select][selection][0] == 2070026 || items[select][selection][0] == 2070016 || items[select][selection][0] == 2070006 || items[select][selection][0] == 2330005 || items[select][selection][0] == 2330016 || items[select][selection][0] == 2060003 || items[select][selection][0] == 2060013 || items[select][selection][0] == 2060011 || items[select][selection][0] == 2061003 || items[select][selection][0] == 2061012 || items[select][selection][0] == 2061009 ) {
                    cm.sendSimple("Thank you for the purchase");
                    record.setCustomData(intPoints - (items[select][selection][1]));
                    cm.gainItem(items[select][selection][0], 2000);
                    cm.dispose();
                    }
                    else if (items[select][selection][0] > 1000000 && items[select][selection][0] < 1800000) {
                    cm.sendSimple("Thank you for the purchase");
                    record.setCustomData(intPoints - (items[select][selection][1]));
                    cm.gainItem(items[select][selection][0], 1);
                    cm.dispose();
                    }
                    else {
                    cm.sendGetNumber("How many would you like? \r\n(1 #v"+items[select][selection][0]+"##t"+items[select][selection][0]+"# = "+formatNumber(items[select][selection][1])+" dojo points)\r\n(Current points: "+formatNumber(points)+")",1,1,( intPoints / items[select][selection][1] ));
                    status3 = 1;
                    }
                    break;
            }

        }
    else if (status == 3) {
        switch (status3) {
            case 1: cm.sendSimple("Thank you for the purchase");
                    cm.gainItem(items[select][select2][0],selection);
                    record.setCustomData(intPoints - (items[select][select2][1] * selection));
                    cm.dispose();
            break;

        }
    }





}
