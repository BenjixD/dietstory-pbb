// Normal Ranmaru Battle

function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("NRan");
    var map = eim.setInstanceMap(807300110);
    map.resetFully();
    var mob1 = em.getMonster(8850000);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-443, 123));
    em.setProperty("state", "1");
    eim.startEventTimer(3600000); // 1 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(807300110);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 807300100);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 807300110) {
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
    var map = eim.setInstanceMap(807300110);
	if (mobId == 8850000 || mobId == 8850001  || mobId == 8850002 || mobId == 8850003) {
		var mob5 = em.getMonster(mobId + 1);
		eim.registerMonster(mob5);
		map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(-443, 123));
	} else if (mobId == 8850004) {
		var mob5 = em.getMonster(8850012);
		eim.registerMonster(mob5);
		map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(-443, 123));
	}
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
    if (eim.disposeIfPlayerBelow(100, 807300100)) {
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