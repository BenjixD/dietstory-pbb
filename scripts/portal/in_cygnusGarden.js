function enter(pi) {
    if (pi.isQuestActive(31149)) {
	pi.forceCompleteQuest(31149);
	pi.playerMessage("Quest complete");
    }
    else if (pi.haveItem(4032923)) {
	pi.warp(271040000,0);
	pi.gainItem(4032923, -1);
    } else {
	pi.playerMessage("You require a dream key to enter the Garden.");
    }
}