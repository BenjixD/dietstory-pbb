function init() {
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
	em.setProperty("leader", "true");

    var eim = em.newInstance("CTengu");
    var map = eim.setInstanceMap(800024500);
        map.resetFully();
    eim.startEventTimer(1800000); //30min

    var tengu1 = em.getMonster(9400080);
    var modified = em.newMonsterStats();
    modified.setOMp(tengu1.getMobMaxMp() * 1);
    modified.setOHp(tengu1.getMobMaxHp() * 5);
    tengu1.setOverrideStats(modified);
    eim.registerMonster(tengu1);

    map.spawnMonsterOnGroundBelow(tengu1, new java.awt.Point(600, 0));

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
   	if (mapid != 800024500) {
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

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 800026000);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");

    if (state.equals("1")) {
	em.setProperty("state", "2");
    } else if (state.equals("2")) {
	em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
scheduledTimeout(eim);
}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}