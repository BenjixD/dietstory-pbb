/* Holy Stone
	Hidden Street: Holy Ground at the Snowfield (211040401)
	
	Custom quest: 100102
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031058) || cm.getQuestStatus(100102) != 1) {
	    cm.sendOk("Lulz, I am a stone.");
	    cm.dispose();
	} else {
	    cm.sendNext("Lulz, I am a stone.");
	}
    } else if (status == 1) {
	cm.sendNextPrev("Give me a #bDark Crystal#k and I will allow you to obtain the #bNecklace of Wisdom#k.");
    } else if (status == 2) {
	if (!cm.haveItem(4005004)) {
	    cm.sendOk("You don't have any #bDark Crystal#ks.");
	    cm.dispose();
	} else {
	    cm.gainItem(4005004, -1);
	    cm.gainItem(4031058, 1);
	    cm.sendOk("Indeed.");
	    cm.dispose();
	}
    }
}