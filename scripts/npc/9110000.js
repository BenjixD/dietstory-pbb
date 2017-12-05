//Perry (9110000) - (GM Warper NPC (for non-GM characters whilst testing)) //To be removed upon release
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


    if (status == 0)
    { cm.sendGetNumber("Where would you like to go \r\n", 100000000, 1, 1000000000);
    }

    else if (status == 1) {
    map = selection;
    cm.sendSimple("Are you sure you want to go to \r\n#b#e#m"+selection+"# - ("+selection+")#n?");
    }

    else if (status == 2) {
    cm.warp(map,0);
    cm.dispose();
    }



}