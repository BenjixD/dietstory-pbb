var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendSimple("Congratulations!\r\n#b#L0#I wish to get an annulment.#l\r\n#L1#I wish to remove my ring from my inventory.#l#k");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("A divorce? ARE YOU SURE? You want to get divorced? This is irreversible!");
	} else {
	    var selStr = "Remove a ring? What do you have...";
	    var found = false;
	    for (var i = 1112300; i < 1112312; i++) {
		if (cm.haveItem(i)) {
		    found = true;
		    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
		}
	    }
	    for (var i = 2240004; i < 2240016; i++) {
		if (cm.haveItem(i)) {
		    found = true;
		    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
		}
	    }
	    if (!found) {
		cm.sendOk("You do not have any rings.");
		cm.dispose();
	    } else {
		cm.sendSimple(selStr);
	    }
	    
	}
    } else if (status == 2) {
	if (selection == -1) {
	    cm.handleDivorce();
	} else {
	    if (selection >= 1112300 && selection < 1112312) {
		cm.gainItem(selection, -1);
		cm.sendOk("Your equip ring has been removed.");
	    } else if (selection >= 2240004 && selection < 2240016) {
		cm.gainItem(selection, -1);
		cm.sendOk("Your engagement ring has been removed.");
	    }
	}		
	cm.dispose();
    }
}