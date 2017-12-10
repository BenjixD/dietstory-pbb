//  Black Mage Battle
var mapz = Array(
            272010200, // Entrance Map
            401072300, // Von Leon
            401072200, // Hilla
            401070200, // Arkarium
            401072400, // Magnus
            401072700, // Commander Will
            401070100, // Lotus & Orchid
            401072500, // Damien
            401072600, // Lucid
            927030060, // MapBeforeBM
            927030070  // BM Map
);
function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
	em.setProperty("state", "1");

    var eim = em.newInstance("bm");

	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(mapz[i]);
		if (map != null) {
			map.resetFully();

            if (map.getId() == 272010200) {         //  Entrance Map
                    map.spawnNpc(2159360, new java.awt.Point(506, 71));
                    map.spawnNpc(2159361, new java.awt.Point(956, 71));




			} else if (map.getId() == 401072300) { //   Von Leon
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(413,182));
					map.toggleDrops();




			} else if (map.getId() == 401072200) { //   Hilla
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(413,182));
					map.toggleDrops();




			} else if (map.getId() == 401070200) { //   Arkarium
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(558,182));
					map.toggleDrops();




			} else if (map.getId() == 401072400) { //   Magnus
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(558,182));
					map.toggleDrops();




			} else if (map.getId() == 401072700) { //   Command Will
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(558,182));
					map.toggleDrops();




			} else if (map.getId() == 401070100) { //   Lotus & Orchid
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(630,182));
					map.toggleDrops();




			} else if (map.getId() == 401072500) { //   Damien
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(630,182));
					map.toggleDrops();




			} else if (map.getId() == 401072600) { //   Lucid
                    map.spawnNpc(2159360, new java.awt.Point(1534, 122));

					var mob = em.getMonster(5200000); //Damien -Phase2 (8880131)        (Jr.Sentinel)
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(555,-120));
					map.toggleDrops();

			}
		}
	}

    eim.startEventTimer(300000); // 5min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(272010200);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    var map = eim.getMapFactory().getMap(272010200);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 100000000);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");

}

function changedMap(eim, player, mapid) {
    if (mapid != 272010200 || mapid != 401072300 || mapid != 401072200 || mapid != 401070200 || mapid != 401072400 || mapid != 401072700 || mapid != 401070100 || mapid != 401072500 || mapid != 401072600 || mapid != 927030060 || mapid != 927030070) {
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