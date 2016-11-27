var status = -1;
var minLevel = 20; // 35
var maxLevel = 255; // 65

var minPartySize = 2;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
        /*  }
    if (cm.getPlayer().getMapId() != 910010500) {
	if (status == 0) {
	    cm.sendYesNo("Would you like to move to the Party Quest map?");
	} else {
	    cm.saveLocation("MULUNG_TC");
	    cm.warp(910010500,0);
	    cm.dispose();
	}
	return;
    }*/
        if (status == 0) {
            if (cm.getParty() == null) { // No Party
                cm.sendSimple("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it unless with great teamwork. If you want to try it, please tell the #bleader of your party#k to talk to me.\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".");
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendSimple("If you want to try the quest, please tell the #bleader of your party#k to talk to me.");
            } else {
                // Check if all party members are within PQ levels
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();

                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("HenesysPQ");
                    if (em == null) {
                        cm.sendSimple("The PQ has encountered an error. Please report this on the forums, with a screenshot.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap(), 70);
                            cm.removeAll(4001101);
                            cm.dispose();
                            return;
                        } else {
                            cm.sendSimple("Another party has already entered the #rHilla Quest#k in this channel. Please try another channel, or wait for the current party to finish.");
                        }
                    }
                } else {
                    cm.sendSimple("Your party is invalid. Please adhere to the following requirements:\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".#b\r\n#L0#I want the Rice Cake Hat.#l");
                }
            }
        } else { //broken glass
            if (cm.haveItem(1002798,1)) {
                if (!cm.canHold(1003266,1)) {
                    cm.sendOk("Make room for this Hat.");
                } else if (cm.haveItem(4001101,20) && cm.isGMS()) { //TODO JUMP
                    cm.gainItem(1003266, 1);
                    cm.gainItem(4001101, -20);
                } else {
                    cm.sendOk("Come back with 20 Rice Cakes.");
                }
            } else if (!cm.canHold(1002798,1)) {
                cm.sendOk("Make room for this Hat.");
            } else if (cm.haveItem(4001101,10)) {
                cm.gainItem(4001101,-10); //should handle automatically for "have"
                cm.gainItem(1002798,1);
            } else {
                cm.sendOk("Come back when you have 10 Rice Cakes.");
            }
            cm.dispose();

        }
    }
}