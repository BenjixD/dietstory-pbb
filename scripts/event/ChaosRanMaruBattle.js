// Chaos Ranmaru Battle

function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");

    var eim = em.newInstance("CRan");

    var map = eim.setInstanceMap(807300110);
    map.resetFully();


    var cran0 = em.getMonster(9421583);
	var modified = em.newMonsterStats();
	modified.setOMp(cran0.getMobMaxMp() * 100);
	modified.setOHp(cran0.getMobMaxHp() * 575);
	cran0.setOverrideStats(modified);
	eim.registerMonster(cran0);


    var cran1 = em.getMonster(9421586);
	var modified = em.newMonsterStats();
	modified.setOMp(cran1.getMobMaxMp() * 100);
	modified.setOHp(cran1.getMobMaxHp() * 575);
	cran1.setOverrideStats(modified);
	eim.registerMonster(cran1);


    var cran2 = em.getMonster(9421587);
	var modified = em.newMonsterStats();
	modified.setOMp(cran2.getMobMaxMp() * 100);
	modified.setOHp(cran2.getMobMaxHp() * 575);
	cran2.setOverrideStats(modified);
	eim.registerMonster(cran2);


    var cran3 = em.getMonster(9421588);
	var modified = em.newMonsterStats();
	modified.setOMp(cran3.getMobMaxMp() * 100);
	modified.setOHp(cran3.getMobMaxHp() * 575);
	cran3.setOverrideStats(modified);
	eim.registerMonster(cran3);


    var cran4 = em.getMonster(9421589);
	var modified = em.newMonsterStats();
	modified.setOMp(cran4.getMobMaxMp() * 100);
	modified.setOHp(cran4.getMobMaxHp() * 575);
	cran4.setOverrideStats(modified);
	eim.registerMonster(cran4);


	map.spawnMonsterOnGroundBelow(cran0, new java.awt.Point(-443, 123));





    eim.startEventTimer(300000); // 5min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(807300110);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactory().getMap(807300110);
    player.changeMap(map, map.getPortal(0));
    return true;
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