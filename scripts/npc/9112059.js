// Tengu -  Tengu battle starter - 9112059
var status = -1;

function start() {
		if (cm.getPlayer().getClient().getChannel() != 1) {
			cm.sendOk("Tengu may only be attempted on channel 1");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("TenguBattle");

    if (em == null) {
	cm.sendOk("The event isn't started, please contact a GM.");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160103);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {

	var squadAvailability = cm.getSquadAvailability("CTengu");
	if (squadAvailability == -1) {
	    status = 0;
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Tengu in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    cm.sendYesNo("Are you interested in becoming the leader of the expedition Squad?");

	} else if (squadAvailability == 1) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Tengu in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("CTengu");
	    if (type == -1) {
		cm.sendOk("The squad has ended, please re-register.");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("CTengu");
		if (memberType == 2) {
		    cm.sendOk("You been banned from the squad.");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		} else if (memberType == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Remove member#l \r\n#b#L2#Edit restricted list#l \r\n#r#L3#Enter map#l");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("TenguBattle");
			if (eim == null) {
				var squd = cm.getSquad("CTengu");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Tengu in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("The squad's battle against the boss has already begun.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("TenguBattle");
			if (eim == null) {
				var squd = cm.getSquad("CTengu");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Tengu in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("The squad's battle against the boss has already begun.");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (cm.registerSquad("CTengu", 5, " has been named the Leader of the squad (Chaos). If you would you like to join please register for the Expedition Squad within the time period.")) {
				cm.sendOk("You have been named the Leader of the Squad. For the next 5 minutes, you can add the members of the Expedition Squad.");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("TenguBattle", "CTengu")) {
			cm.sendOk("Error... please try again.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("CTengu");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("You have reserved the spot.");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("CTengu", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("CTengu", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		} else {
		    cm.sendOk("You are already part of the squad.");
		}
	    } else {// withdraw
		var baa = cm.addMember("CTengu", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		} else {
		    cm.sendOk("You are not part of the squad.");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("CTengu", 0)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("CTengu", 1)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("CTengu", 2)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("CTengu") != null) {
			var dd = cm.getEventManager("TenguBattle");
			dd.startInstance(cm.getSquad("CTengu"), cm.getMap(), 160103);
		    } else {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("CTengu", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("CTengu", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}