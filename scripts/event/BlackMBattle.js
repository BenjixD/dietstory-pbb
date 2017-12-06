function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("BlackMBattle" + leaderid);

    var map = eim.setInstanceMap(272010200); // Entrance Map
    eim.setInstanceMap(401072300); // Von Leon
    eim.setInstanceMap(401072200); // Hilla
    eim.setInstanceMap(401070200); // Arkarium
    eim.setInstanceMap(401072400); // Magnus
    eim.setInstanceMap(401072700); // Commander Will
    eim.setInstanceMap(401070100); // Lotus & Orchid
    eim.setInstanceMap(401072500); // Damien
    eim.setInstanceMap(401072600); // Lucid
    eim.setInstanceMap(927030060); // MapBeforeBM
    eim.setInstanceMap(927030070); // BM Map

    if (map.getId() == 401072300) {
        var vonleon = em.getMonster(8840007);
    //    var modified = em.newMonsterStats();
    //    modified.setOMp(vl.getMobMaxMp() * 100);
    //    modified.setOHp(vl.getMobMaxHp() * 575);
    //    vl.setOverrideStats(modified);
        eim.registerMonster(vonleon);
        map.spawnMonsterOnGroundBelow(vonleon, new java.awt.Point(252,180));
    }

    map.spawnNpc(2159360, new java.awt.Point(506, 71));
    map.spawnNpc(2159361, new java.awt.Point(956, 71));



    em.setProperty("state", "1");

    eim.startEventTimer(7200000); // 2 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(272010200);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapInstance(272010200);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 100000000);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}


/*
function changedMap(eim, player, mapid) {
    if (mapid < 401070000 || mapid > 610030800) {
	playerExit(eim,player);
    } else {
	switch(mapid) {
	    case 401072300:
	        var modified = em.newMonsterStats();
	        modified.setOExp(8840007.getMobExp() * 0);
	        modified.setOHp(8840007.getMobMaxHp() * 30000);
	        modified.setOMp(8840007.getMobMaxMp() * 30000);

	        8840007.setOverrideStats(modified);

		    map.spawnMonsterOnGroundBelow(8840007, new java.awt.Point(287, 182));
		break;
	    case 610030300:
		if (em.getProperty("current_instance").equals("1")) {
		    eim.restartEventTimer(600000); //10 mins
		    em.setProperty("current_instance", "2");
		}
		break;
	    case 610030400:
		if (em.getProperty("current_instance").equals("2")) {
		    eim.restartEventTimer(600000); //10 mins
		    em.setProperty("current_instance", "3");
		}
		break;
	    case 610030500:
		if (em.getProperty("current_instance").equals("3")) {
		    eim.restartEventTimer(1200000); //20 mins
		    em.setProperty("current_instance", "4");
		}
		break;
	    case 610030600:
		if (em.getProperty("current_instance").equals("4")) {
		    eim.restartEventTimer(3600000); //1 hr
		    em.setProperty("current_instance", "5");
		}
		break;
	    case 610030800:
		if (em.getProperty("current_instance").equals("5")) {
		    eim.restartEventTimer(120000); //2 min
		    em.setProperty("current_instance", "6");
		}
		break;
        }
    }
}
*/

function changedMap(eim, player, mapid) {
    if (mapid != 272010200 && mapid != 401072300 && mapid != 401072200 && mapid != 401070200 && mapid != 401072400 && mapid != 401072700 && mapid != 401070100 && mapid != 401072500 && mapid != 401072600 && mapid != 927030060 && mapid != 927030070) {
	eim.unregisterPlayer(player);


	if (eim.disposeIfPlayerBelow(0, 0)) {
	    em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 100000000)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}