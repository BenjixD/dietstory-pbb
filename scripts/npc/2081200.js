/*  NPC : Gritto
	Magician 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231)) {
	    cm.sendOk("Why do you want to see me? There is nothing you want to ask me.");
	    cm.dispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("You're still weak to go to magician extreme road. If you get stronger, come back to me.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6914) == 2) {
		if (cm.getJob() == 211)
		    cm.sendSimple("You're qualified to be a true magician. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Arch Mage.#l\r\n#b#L1#  Let me think for a while.#l");
		else if (cm.getJob() == 221)
		    cm.sendSimple("You're qualified to be a true magician. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Arch Mage.#l\r\n#b#L1#  Let me think for a while.#l");
		else
		    cm.sendSimple("You're qualified to be a true magician. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Bishop.#l\r\n#b#L1#  Let me think for a while.#l");
	    } else {
		cm.sendOk("You're not ready to make 4th job advancement. When you're ready, talk to me.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("You don't have to hesitate to be the best Magician..Whenever you decide, talk to me. If you're ready, I'll let you make the 4th job advancement.");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) { //player have too much SP means they havent assigned to their skills
	    if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
		cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
		cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
	    } else {
	    	cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
	    }
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 211) {
		    cm.changeJob(212);
		    cm.sendNext("You became the best magician, #bArch Mage#k. Arch Mage can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		} else if (cm.getJob() == 221) {
		    cm.changeJob(222);
		    cm.sendNext("You became the best magician, #bArch Mage#k. Arch Mage can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		} else {
		    cm.changeJob(232);
		    cm.sendNext("You became the best magician #bBishop#k.  Bishop can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		}
	}
    } else if (status == 2) {
	if (cm.getJob() == 212) {
	    cm.sendNext("This is not all about Arch Mage. Arch Mage is good at fire and poison element-based. It may change not only extreme element-based but also element-based of its own or enemies if you train. ");
	} else if (cm.getJob() == 222) {
	    cm.sendNextPrev("This is not all about Arch Mage. Arch Mage is good at fire and poison element-based. It may change not only extreme element-based but also element-based of its own or enemies if you train. ");
	} else {
	    cm.sendNextPrev("This is not all about Bishop. Bishop can borrow God's power. It may make strong castle element-based magic and even make the dead alive. ");
	}
    } else if (status == 3) {
	cm.sendNextPrev("Don't forget that it all depends on how much you train.");
	cm.dispose();
    }
}