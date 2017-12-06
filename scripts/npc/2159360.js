// Black Mage Minion - 2159360 - (White)

var status1 = 0;
var status2 = 0;
var status3 = 0;

var bmmaps = [
/*bossmaps*/ [["Von Leon", 401072300],  ["Hilla", 401072200],  ["Arkarium", 401070200],  ["Magnus", 401072400],  ["Commander Will", 401072700],  ["Lotus & Orchid", 401070100],  ["Damien", 401072500],  ["Lucid", 401072600]],
/*other shit*/ [5,2], [5,2]
]


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
        if (cm.getPlayer().getMapId() == 272010200) {
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
        } else {
        cm.sendSimple("Talk to me when you are Ready.");
        cm.dispose();
        }
    }
    else if (status == 1) {
        switch (status1) {
            case 1: cm.gainItem(4001393,-1);
                    cm.warp(927030060);
                    cm.dispose();
            break;
            case 2: cm.warp(bmmaps[0][selection][1]);
                    cm.dispose();
            break;

        }
    }
}
