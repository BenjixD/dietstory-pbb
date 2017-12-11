// Black Mage Minion - 2159360 - (White)

var status1 = 0;
var status2 = 0;
var status3 = 0;

var bmmaps = [
/*bossmaps*/ [["Von Leon", 401072300],  ["Hilla", 401072200],  ["Arkarium", 401070200],  ["Magnus", 401072400],  ["Commander Will", 401072700],  ["Lotus & Orchid", 401070100],  ["Damien", 401072500],  ["Lucid", 401072600]]

];

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
        switch(cm.getPlayer().getMapId()) {
        case 272010200:
            if (cm.haveItem(4001393,1)) {
            cm.sendSimple("Let us go back in time.");
                status1 = 1;
                } else {
                    var txet = "You have to collect materials. \r\nMake Haste \r\n\r\n#b";
                    for (var i = 0; i < bmmaps[0].length; i++) {
                    txet += ("#L" + i + "#" + bmmaps[0][i][0] + "\r\n");
                    }
                cm.sendSimple(txet + "#k");
                status1 = 2;
                }
        break;
        case 401072300: // Von Leon
            if (cm.getMonsterCount(401072300) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034727,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Von Leon to obtain one of the materials.");
            }
        break;
        case 401072200: // Hilla
            if (cm.getMonsterCount(401072200) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034729,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Hilla to obtain one of the materials.");
            }
        break;
        case 401070200: // Arkarium
            if (cm.getMonsterCount(401070200) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034731,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Arkarium to obtain one of the materials.");
            }
        break;
        case 401072400: // Magnus
            if (cm.getMonsterCount(401072400) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034733,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Magnus to obtain one of the materials.");
            }
        break;
        case 401072700: // Commander Will
            if (cm.getMonsterCount(401072700) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034734,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Commander Will to obtain one of the materials.");
            }
        break;
        case 401070100: // Lotus & Orchid
            if (cm.getMonsterCount(401070100) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034736,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Lotus and Orchid to obtain one of the materials.");
            }
        break;
        case 401072500: // Damien
            if (cm.getMonsterCount(401072500) == 0) {
                cm.sendYesNo("Let's go back");
                cm.gainItem(4034983,1);
                status1 = 3;
            } else {
                cm.sendSimple("Eliminate Damien to obtain one of the materials.");
            }
        break;
        case 401072600: // Lucid
             if (cm.getMonsterCount(401072600) == 0) {
                 cm.sendYesNo("Let's go back");
                 cm.gainItem(4033873,1);
                 status1 = 3;
             } else {
                 cm.sendSimple("Eliminate Lucid to obtain one of the materials.");
             }
        break;
        }
    }
    else if (status == 1) {
        switch (status1) {
            case 1: cm.gainItem(4001393,-1);
                    cm.warp(927030060,0);
                    cm.dispose();
            break;
            case 2: cm.warp(bmmaps[0][selection][1],0);
                    cm.dispose();
            break;
            case 3: cm.warp(272010200,1);
                    cm.dispose();
            break;

        }
    }
}
