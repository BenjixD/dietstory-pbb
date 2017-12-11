//  Damien Battle
var mapz = Array(200,240);


function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");

    var eim = em.newInstance("Damien");

//   var map = eim.setInstanceMap(350160200);
//   var map = eim.setInstanceMap(350160240);
//    map.resetFully();




	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(350160000 + mapz[i]);
		if (map != null) {
			map.resetFully();

            if (map.getId() == 350160200) { //  1st Map
					var mob = em.getMonster(3000000); //Damien -Phase1 (8880130)        (Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(941,16));


			} else if (map.getId() == 350160240) { //   2nd map
					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1120,17));

			}
		}
	}





/*
    var damien1 = em.getMonster(8880131);
    eim.registerMonster(damien1);
    map.spawnMonsterOnGroundBelow(damien1, new java.awt.Point(941, 16));
*/



    eim.startEventTimer(300000); // 5min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(350160200);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactory().getMap(807300200);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 105300303);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");

}

function changedMap(eim, player, mapid) {
    if (mapid != 350160200 || mapid != 350160240) {
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
    //var map = eim.setInstanceMap(350160200);
	if (mobId == 3000000) {
        em.warpAllPlayer(350160200,350160240);
	} else {
	}
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
//        em.setProperty("state","0");
//            em.setProperty("leader","true");

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 105300303)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    em.warpAllPlayers(350160200,350160240);
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}