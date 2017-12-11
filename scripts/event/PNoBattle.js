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

			        var mob1 = em.getMonster(9450033);
			        var mob2 = em.getMonster(9450033);
			        var mob3 = em.getMonster(9450033);
			        var mob4 = em.getMonster(9450033);
			        var mob5 = em.getMonster(9450033);
			        var mob6 = em.getMonster(9450033);
			        var mob7 = em.getMonster(9450033);
			        var mob8 = em.getMonster(9450033);
			        var mob9 = em.getMonster(9450033);
			        var mob10 = em.getMonster(9450033);
			        var mob11 = em.getMonster(9450033);
			        var mob12 = em.getMonster(9450033);
			        var mob13 = em.getMonster(9450033);
			        var mob14 = em.getMonster(9450033);
			        var mob15 = em.getMonster(9450033);
			        var mob16 = em.getMonster(9450033);

			        eim.registerMonster(mob1);
			        eim.registerMonster(mob2);
			        eim.registerMonster(mob3);
			        eim.registerMonster(mob4);
			        eim.registerMonster(mob5);
			        eim.registerMonster(mob6);
			        eim.registerMonster(mob7);
			        eim.registerMonster(mob8);
			        eim.registerMonster(mob9);
			        eim.registerMonster(mob10);
			        eim.registerMonster(mob11);
			        eim.registerMonster(mob12);
			        eim.registerMonster(mob13);
			        eim.registerMonster(mob14);
			        eim.registerMonster(mob15);
			        eim.registerMonster(mob16);

			        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-88,300));
			        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(134,300));
			        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(311,300));
			        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(525,300));
			        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(750,300));

			        map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-100,0));
			        map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(25,0));
			        map.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(450,0));
			        map.spawnMonsterOnGroundBelow(mob9, new java.awt.Point(555,0));
			        map.spawnMonsterOnGroundBelow(mob10, new java.awt.Point(750,0));

			        map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(140,-245));
			        map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(350,-245));
			        map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(550,-245));

			        map.spawnMonsterOnGroundBelow(mob14, new java.awt.Point(140,-570));
			        map.spawnMonsterOnGroundBelow(mob15, new java.awt.Point(350,-570));
			        map.spawnMonsterOnGroundBelow(mob16, new java.awt.Point(550,-570));

					var mobBoss = em.getMonster(9450004);
					eim.registerMonster(mobBoss);
					map.spawnMonsterOnGroundBelow(mobBoss, new java.awt.Point(300,300));


			} else if (map.getId() == 811000200) { //   2nd map

                    var mob1 = em.getMonster(9450005);
                    var mob2 = em.getMonster(9450006);
                    var mob3 = em.getMonster(9450007);
                    var mob4 = em.getMonster(9450008);
                    var mob5 = em.getMonster(9450009);

			        eim.registerMonster(mob1);
			        eim.registerMonster(mob2);
			        eim.registerMonster(mob3);
			        eim.registerMonster(mob4);
			        eim.registerMonster(mob5);

			        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-130,130));
			        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-100,130));
			        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(30,130));
			        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(130,130));
			        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(160,130));

                    var mob6 = em.getMonster(9450005);
                    var mob7 = em.getMonster(9450006);
                    var mob8 = em.getMonster(9450007);
                    var mob9 = em.getMonster(9450008);
                    var mob10 = em.getMonster(9450009);

			        eim.registerMonster(mob6);
			        eim.registerMonster(mob7);
			        eim.registerMonster(mob8);
			        eim.registerMonster(mob9);
			        eim.registerMonster(mob10);

			        map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-130,130));
			        map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(-100,130));
			        map.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(30,130));
			        map.spawnMonsterOnGroundBelow(mob9, new java.awt.Point(130,130));
			        map.spawnMonsterOnGroundBelow(mob10, new java.awt.Point(160,130));


                    var mob11 = em.getMonster(9450005);
                    var mob12 = em.getMonster(9450006);
                    var mob13 = em.getMonster(9450007);
                    var mob14 = em.getMonster(9450008);
                    var mob15 = em.getMonster(9450009);

			        eim.registerMonster(mob11);
			        eim.registerMonster(mob12);
			        eim.registerMonster(mob13);
			        eim.registerMonster(mob14);
			        eim.registerMonster(mob15);

			        map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(-130,130));
			        map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(-100,130));
			        map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(30,130));
			        map.spawnMonsterOnGroundBelow(mob14, new java.awt.Point(130,130));
			        map.spawnMonsterOnGroundBelow(mob15, new java.awt.Point(160,130));

					var mobBoss = em.getMonster(9450038);
					eim.registerMonster(mobBoss);
					map.spawnMonsterOnGroundBelow(mobBoss, new java.awt.Point(500,-150));


			} else if (map.getId() == 811000300) { //   3rd map
                    //for (var i = 0; i < 3; i++) {
                    var mob1 = em.getMonster(9450011);
                    var mob2 = em.getMonster(9450011);
                    var mob3 = em.getMonster(9450011);
                    var mob4 = em.getMonster(9450011);
                    var mob5 = em.getMonster(9450011);
                    var mob6 = em.getMonster(9450011);
                    var mob7 = em.getMonster(9450011);
                    var mob8 = em.getMonster(9450011);
                    var mob9 = em.getMonster(9450011);
                    var mob10 = em.getMonster(9450011);
                    var mob11 = em.getMonster(9450011);
                    var mob12 = em.getMonster(9450011);
                    var mob13 = em.getMonster(9450011);
                    var mob14 = em.getMonster(9450011);
                    var mob15 = em.getMonster(9450011);

			        eim.registerMonster(mob1);
			        eim.registerMonster(mob2);
			        eim.registerMonster(mob3);
			        eim.registerMonster(mob4);
			        eim.registerMonster(mob5);
			        eim.registerMonster(mob6);
			        eim.registerMonster(mob7);
			        eim.registerMonster(mob8);
			        eim.registerMonster(mob9);
			        eim.registerMonster(mob10);
			        eim.registerMonster(mob11);
			        eim.registerMonster(mob12);
			        eim.registerMonster(mob13);
			        eim.registerMonster(mob14);
			        eim.registerMonster(mob15);

			        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-420,-30));
			        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(52,-30));
			        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(516,-30));
			        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(-430,-275));
			        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(506,-265));
			        map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-430,-30));
			        map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(52,-30));
			        map.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(496,-30));
			        map.spawnMonsterOnGroundBelow(mob9, new java.awt.Point(-440,-255));
			        map.spawnMonsterOnGroundBelow(mob10, new java.awt.Point(506,-265));
			        map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(-430,-30));
			        map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(52,-30));
			        map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(506,-30));
			        map.spawnMonsterOnGroundBelow(mob14, new java.awt.Point(-430,-265));
			        map.spawnMonsterOnGroundBelow(mob15, new java.awt.Point(516,-275));
                    //}

					var mobBoss = em.getMonster(9450039);
					eim.registerMonster(mobBoss);
					map.spawnMonsterOnGroundBelow(mobBoss, new java.awt.Point(-422,-262));


			} else if (map.getId() == 811000400) { //   4th map
                    //for (var i = 0; i < 3; i++) {
                    var mob1 = em.getMonster(9450005);
                    var mob2 = em.getMonster(9450006);
                    var mob3 = em.getMonster(9450007);
                    var mob4 = em.getMonster(9450008);
                    var mob5 = em.getMonster(9450009);
                    var mob6 = em.getMonster(9450005);
                    var mob7 = em.getMonster(9450006);
                    var mob8 = em.getMonster(9450007);
                    var mob9 = em.getMonster(9450008);
                    var mob10 = em.getMonster(9450009);
                    var mob11 = em.getMonster(9450005);
                    var mob12 = em.getMonster(9450006);
                    var mob13 = em.getMonster(9450007);
                    var mob14 = em.getMonster(9450008);
                    var mob15 = em.getMonster(9450009);

			        eim.registerMonster(mob1);
			        eim.registerMonster(mob2);
			        eim.registerMonster(mob3);
			        eim.registerMonster(mob4);
			        eim.registerMonster(mob5);
			        eim.registerMonster(mob6);
			        eim.registerMonster(mob7);
			        eim.registerMonster(mob8);
			        eim.registerMonster(mob9);
			        eim.registerMonster(mob10);
			        eim.registerMonster(mob11);
			        eim.registerMonster(mob12);
			        eim.registerMonster(mob13);
			        eim.registerMonster(mob14);
			        eim.registerMonster(mob15);

			        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-180,130));
			        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-55,130));
			        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(150,130));
			        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(450,130));
			        map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(200,-140));

			        map.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-230,130));
			        map.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(35,130));
			        map.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(225,130));
			        map.spawnMonsterOnGroundBelow(mob9, new java.awt.Point(500,130));
			        map.spawnMonsterOnGroundBelow(mob10, new java.awt.Point(230,-140));

			        map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(-280,130));
			        map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(75,130));
			        map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(300,130));
			        map.spawnMonsterOnGroundBelow(mob14, new java.awt.Point(570,130));
			        map.spawnMonsterOnGroundBelow(mob15, new java.awt.Point(260,-140));
                    //}

					var mobBoss = em.getMonster(9450035);
					eim.registerMonster(mobBoss);
					map.spawnMonsterOnGroundBelow(mobBoss, new java.awt.Point(146,-134));


			} else if (map.getId() == 811000500) { //   5th map
					var mob1 = em.getMonster(9421585); // Fire Mob
					var mob2 = em.getMonster(9421585); // Fire Mob

					eim.registerMonster(mob1);
					eim.registerMonster(mob2);

					map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-170,-250));
					map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(170,-250));

					var mobBoss = em.getMonster(9450022); //Pno
					eim.registerMonster(mobBoss);
					map.spawnMonsterOnGroundBelow(mobBoss, new java.awt.Point(0,-250));
            }
		}
	}

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