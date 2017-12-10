//  PrincessNo battle

var mapz = Array(100,200,300,400,500);
/*
            case 811000100: 1st
            case 811000200: 2nd
            case 811000300: 3rd
            case 811000400: 4th
            case 811000500: 5th (boss)
*/

function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");

    var eim = em.newInstance("PNo");

//   var map = eim.setInstanceMap(350160200);
//   var map = eim.setInstanceMap(350160240);
//    map.resetFully();




	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(811000000 + mapz[i]);
		if (map != null) {
			map.resetFully();

            if (map.getId() == 811000100) { //  1st Map
					var mob = em.getMonster(9450004);
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(300,300));

			} else if (map.getId() == 811000200) { //   2nd map
					var mob = em.getMonster(9450038);
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(280,146));

			} else if (map.getId() == 811000300) { //   3rd map
					var mob = em.getMonster(9450039);
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-422,-262));

			} else if (map.getId() == 811000400) { //   4th map
					var mob = em.getMonster(9450035);
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(146,-134));

			} else if (map.getId() == 811000500) { //   5th map
					var mob = em.getMonster(9450022); //Pno
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,-250));
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
    var map = eim.getMapFactory().getMap(811000100);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactory().getMap(811000100);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 811000008);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");

}

function changedMap(eim, player, mapid) {
    if (mapid != 811000100 || mapid != 811000200 || mapid != 811000300 || mapid != 811000400 || mapid != 811000500) {
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
//        em.setProperty("state","0");
//            em.setProperty("leader","true");

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 811000008)) {
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