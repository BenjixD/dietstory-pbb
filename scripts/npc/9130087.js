// Ranmaru Battle Starter (9130087)


var status = 0;
var leve = 0;

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 211041700) {
		    cm.warp(807300100,0);
		    cm.dispose();

		if (cm.getPlayer().getClient().getChannel() == 4) {
		cm.getPlayer().dropMessage(5,"Boss Ranmaru: Chaos");
		} else {
		cm.getPlayer().dropMessage(5,"Boss Ranmaru: Normal");
		}
		return;

	} else if (cm.getPlayer().getClient().getChannel() == 4) {
    switch (status) {
	case 0:

        if (cm.getPlayer().getMapId() == 807300110) {
        cm.sendYesNo("Would you like to leave?");
        leve = 1;
        status = 1;
        }

        //Chaos Ranmaru start
	    var em = cm.getEventManager("ChaosRanMaruBattle");

	    if (em == null) {
		cm.sendOk("The event isn't started, please contact a GM.");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160113);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
	    var squadAvailability = cm.getSquadAvailability("CRan");
	    if (squadAvailability == -1) {
		status = 1;
	    if (time + (22 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Chaos Ranmaru in the past 22 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (22 * 3600000)));
		cm.dispose();
		return;
	    }
		cm.sendYesNo("Are you interested in becoming the leader of the expedition Squad?");

	    } else if (squadAvailability == 1) {
	    if (time + (22 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Chaos Ranmaru in the past 22 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (22 * 3600000)));
		cm.dispose();
		return;
	    }
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("CRan");
		if (type == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("CRan");
		    if (memberType == 2) {
			cm.sendOk("You been banned from the squad.");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		    } else if (memberType == -1) {
			cm.sendOk("The squad has ended, please re-register.");
			cm.safeDispose();
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
			var eim = cm.getDisconnected("ChaosRanMaruBattle");
			if (eim == null) {
				var squd = cm.getSquad("CRan");
				if (squd != null) {
	    if (time + (22 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Chaos Ranmaru in the past 22 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (22 * 3600000)));
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
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ChaosRanMaruBattle");
			if (eim == null) {
				var squd = cm.getSquad("CRan");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Chaos Ranmaru in the past 22 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (22 * 3600000)));
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
				status = 2;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("CRan", 5, " has been named the Leader of the squad (Chaos). If you would you like to join please register for the Expedition Squad within the time period.")) {
				cm.sendOk("You have been named the Leader of the Squad. For the next 5 minutes, you can add the members of the Expedition Squad.");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    	} else {
			cm.sendOk("Talk to me if you want to become the leader of the Expedition squad.")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ChaosRanMaruBattle", "CRan")) {
			cm.sendOk("Error... please try again.");
		}
		cm.dispose();
		break;
	case 3:
		if (leve == 1) {
		    if (mode == 1) {
		        cm.warp(807300100,0);
		        cm.dispose();
		        } else {
		        cm.dispose();
		        }

		} else {

		if (mode == 1) {
			var squd = cm.getSquad("CRan");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("You have reserved the spot.");
			}
		}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("CRan", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("CRan", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are already part of the squad.");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("CRan", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are not part of the squad.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("CRan", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("CRan", 1)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("CRan", 2)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 3) { // get insode
		if (cm.getSquad("CRan") != null) {
		    var dd = cm.getEventManager("ChaosRanMaruBattle");
		    dd.startInstance(cm.getSquad("CRan"), cm.getMap(), 160113);
		    cm.dispose();
		} else {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("CRan", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("CRan", selection);
	    }
	    cm.dispose();
	    break;
    case 35:
        if (mode == 1) {
        cm.warp(807300100,0);
        cm.dispose();
        } else {
        cm.dispose();
        }               //N
        break;
    }
	}


	else


	{
    switch (status) {
	case 0:

        if (cm.getPlayer().getMapId() == 807300110) {
        cm.sendYesNo("Would you like to leave?");
        leve = 1;
        status = 3;
        }

		//Normal Ranmaru start

		var em = cm.getEventManager("NormalRanMaruBattle");

	    if (em == null) {
		cm.sendOk("The event isn't started, please contact a GM.");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160114);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
	    var squadAvailability = cm.getSquadAvailability("nran");
	    if (squadAvailability == -1) {
		status = 1;
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Normal Ranmaru in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 360000)));
		cm.dispose();
		return;
	    }
		cm.sendYesNo("Are you interested in becoming the leader of the expedition Squad?");

	    } else if (squadAvailability == 1) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Normarl Ranmaru in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 360000)));
		cm.dispose();
		return;
	    }
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("nran");
		if (type == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("nran");
		    if (memberType == 2) {
			cm.sendOk("You been banned from the squad.");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("What do you want to do? \r\n#b#L0#Check out members#l \r\n#b#L1#Join the squad#l \r\n#b#L2#Withdraw from squad#l");
		    } else if (memberType == -1) {
			cm.sendOk("The squad has ended, please re-register.");
			cm.safeDispose();
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
			var eim = cm.getDisconnected("NormalRanMaruBattle");
			if (eim == null) {
				var squd = cm.getSquad("nran");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Normal Ranmaru in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 360000)));
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
			var eim = cm.getDisconnected("NormalRanMaruBattle");
			if (eim == null) {
				var squd = cm.getSquad("nran");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("You have already went to Normal Ranmaru in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 360000)));
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
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("nran", 5, " has been named the Leader of the squad (Normal). If you would you like to join please register for the Expedition Squad within the time period.")) {
				cm.sendOk("You have been named the Leader of the Squad. For the next 5 minutes, you can add the members of the Expedition Squad.");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    	} else {
			cm.sendOk("Talk to me if you want to become the leader of the Expedition squad.")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("NormalRanMaruBattle", "nran")) {
			cm.sendOk("Error... please try again.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (leve == 1) {
		    if (mode == 1) {
		    cm.warp(807300100,0);
		    cm.dispose();
		    } else {
		    cm.dispose();
		    }
		} else {

		if (mode == 1) {
			var squd = cm.getSquad("nran");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("You have reserved the spot.");
			}
		}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("nran", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("nran", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are already part of the squad.");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("nran", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		    cm.safeDispose();
		} else {
		    cm.sendOk("You are not part of the squad.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("nran", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("nran", 1)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("nran", 2)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		cm.safeDispose();
		}

	    } else if (selection == 3) { // get insode
		if (cm.getSquad("nran") != null) {
		    var dd = cm.getEventManager("NormalRanMaruBattle");
		    dd.startInstance(cm.getSquad("nran"), cm.getMap(), 160114);
		    cm.dispose();
		} else {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("nran", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("nran", selection);
	    }
	    cm.dispose();
	    break;
    case 35:
        if (mode == 1) {
        cm.warp(807300100,0);
        cm.dispose();
        } else {
        cm.dispose();
        }               //N
        break;
    }
	}

}
