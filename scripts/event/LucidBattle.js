// Lucid Battle
var map1 = 450004450;
var map2 = 450004550;
var rewardmap = 450004500;
var returnmap = 450004000;

function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");

    var eim = em.newInstance("Lucid");

    var map = eim.setInstanceMap(map1);
//    var map2 = eim.setInstanceMap(map2);
    map.resetFully();
//    map2.resetFully();


    var lucid1 = em.getMonster(3000000);
    eim.registerMonster(lucid1);
    map.spawnMonsterOnGroundBelow(lucid1, new java.awt.Point(1020, 30));

/*
    var lucid2 = em.getMonster(8880150);
    eim.registerMonster(lucid2);
    map2.spawnMonsterOnGroundBelow(lucid2, new java.awt.Point(90, -745));

*/

    eim.startEventTimer(1000); // 3sec
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(map1);
    player.changeMap(map, map.getPortal(0));
    eim.restartEventTimer(300000);
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactory().getMap(map1);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, returnmap);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");

}

function changedMap(eim, player, mapid) {
    if (mapid != map1 || mapid != map2) {
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

/*
function allMonstersDead(eim) {
    var map2 = eim.getMapFactory().getMap(map2);
    player.changeMap(map2, map2.getPortal(0));

    eim.restartEventTimer(300000); // 2nd Map - 5min Timer
}
*/

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 450004000)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}