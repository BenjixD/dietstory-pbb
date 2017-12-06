// Black Mage Minion - 2159361 - (Black)

var status1 = 0;
var status2 = 0;
var status3 = 0;



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
        cm.sendSimple("Present me the materials.");
        status1 = 1;
        } else {
        cm.sendSimple("Talk to me when you are ready.");
        cm.dispose();
        }


    }
    else if (status == 1) {
        switch (status1) {

            case 1: if(cm.haveItem(4034727,1) && cm.haveItem(4034729,1) && cm.haveItem(4034731,1) && cm.haveItem(4034733,1) && cm.haveItem(4034734,1) && cm.haveItem(4034736,1) && cm.haveItem(4034983,1) && cm.haveItem(4033873,1)) {
                    cm.sendSimple("I will combine these materials to create a time travelling device.\r\n#v4001393##t4001393#");
                    status2 = 1;
                    } else {cm.sendSimple("You don't have all materials. \r\n\r\nI require:\r\n #v4034727##t4034727#\r\n #v4034729##t4034729#\r\n #v4034731##t4034731#\r\n #v4034733##t4034733#\r\n #v4034734##t4034734#\r\n #v4034736##t4034736#\r\n #v4034983##t4034983#\r\n #v4033873##t4033873#");
                    cm.dispose();
                    return;
                    }
            break;

            case 2:
            break;

        }

    }
    else if (status == 2) {
        switch (status2) {
            case 1:
            cm.gainItem(4034727, -1);
            cm.gainItem(4034729, -1);
            cm.gainItem(4034731, -1);
            cm.gainItem(4034733, -1);
            cm.gainItem(4034734, -1);
            cm.gainItem(4034736, -1);
            cm.gainItem(4034983, -1);
            cm.gainItem(4033873, -1);
            cm.gainItem(4001393, 1);
            cm.sendSimple("Here is your way to our Commander.");
            cm.dispose();
            break;
        }
    }




}

