// OSSS Researcher (9250156) - In Dojo Map - DPM Tester

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
        if (cm.getPlayer().getMapId() == 910080010) {
        cm.sendSimple("What would you like to do? \r\n#b#L2#Would you like to leave?#l \r\n#L3#Boss#l#k");}
    cm.sendSimple("What would you like to do?\r\n#b#L0#Test your Damage per minute (Party)#l \r\n#L1#Test your Damage per minute (Map)#l#k");
    }

    else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getParty() != null) {
                cm.warpPartyWithExp(910080010,0)
                cm.getPlayer().dropMessage(5,"You will be warped out after 10 minutes.");
                cm.dispose();
            } else {
                cm.sendSimple("Please form a party first.");
                cm.dispose();
                return;
            }
        break;
        case 1: cm.warp(910080010,0);
                cm.getPlayer().dropMessage(5,"You will be warped out after 10 minutes.");
                cm.dispose();
        break;
        case 2: cm.warp(925020001,0);
                cm.dispose();
        break;
        case 3: cm.sendSimple("-Spawn Boss-");
                cm.dispose();
        break;
        }
    }

}