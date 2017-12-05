// Maple Administrator (9201257) - NPC Maple Settings

var select1, select2, select3, select4;

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
    cm.sendSimple("What would you like to do? #b\r\n#L1#Check the drops of a Monster#l \r\b#L2#Check Monster stats#l \r\n#L3#Check what drops an item#l \r\n#L4#Check who was first in the map#l \r\n#L5#Remove a familiar#l \r\n#L6#Change Monster Book Set (Current: X)#l \r\n#L7#Game Options#l \r\n#L8#Manage ignored items#l \r\n#L9#Sell items#l \r\n#L10#Clear 'buy back' tab#l \r\n#L11#Clear undroppable quest items from inventory#l \r\n#L12#Lie Detector#l");
    }

    else if (status == 1) {
    select1 = selection
        switch (selection) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        break;

        }
    }


}