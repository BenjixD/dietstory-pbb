// Hell Gollux Battle
var mapz = Array(100,200,210,220,230,240,300,310,320,330,400,410,420,430,500,600);
//var head = 1;

/*          case 863010100: Road to Gollux
            case 863010200: Lower Right Leg
            case 863010210: Upper Right leg
            case 863010220: Lower Left Leg
            case 863010230: Upper Left Leg
            case 863010240: Abdomen
            case 863010300: Lower Left Torso
            case 863010310: Upper Left Torso
            case 863010320: Upper Right Arm
            case 863010330: Right Shoulder
            case 863010400: Lower Right Torso
            case 863010410: Upper Right Torso
            case 863010420: Upper Left Arm
            case 863010430: Left Shoulder
            case 863010500: Heart
            case 863010600: Head
*/
function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("hgol");
    em.setProperty("head", "0");



	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(863010000 + mapz[i]);
		if (map != null) {
			map.resetFully();

            if (map.getId() == 863010220) { // Lower Left Leg
					var mob1 = em.getMonster(9390634); // Mutated Wardlock
					var mob2 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob3 = em.getMonster(9390643); // Perdit Seed

					var mob11 = em.getMonster(9390634); // Mutated Wardlock
					var mob12 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob13 = em.getMonster(9390643); // Perdit Seed

					var mob21 = em.getMonster(9390634); // Mutated Wardlock
					var mob22 = em.getMonster(9390634); // Mutated Wardlock
					var mob23 = em.getMonster(9390634); // Mutated Wardlock


					eim.registerMonster(mob1);
					eim.registerMonster(mob2);
					eim.registerMonster(mob3);

					eim.registerMonster(mob11);
					eim.registerMonster(mob12);
					eim.registerMonster(mob13);

					eim.registerMonster(mob21);
					eim.registerMonster(mob22);
					eim.registerMonster(mob23);


					map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(75,-850));
					map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(120,-850));
					map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(350,-850));

					map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(75,-450));
					map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(81,-450));
					map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(250,-450));

					map.spawnMonsterOnGroundBelow(mob21, new java.awt.Point(-298,120));
					map.spawnMonsterOnGroundBelow(mob22, new java.awt.Point(81,120));
					map.spawnMonsterOnGroundBelow(mob23, new java.awt.Point(250,120));

			}


            if (map.getId() == 863010230) { // Upper Left Leg

					var mob1 = em.getMonster(9390634); // Mutated Wardlock
					var mob2 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob3 = em.getMonster(9390643); // Perdit Seed

					var mob11 = em.getMonster(9390634); // Mutated Wardlock
					var mob12 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob13 = em.getMonster(9390643); // Perdit Seed

					var mob21 = em.getMonster(9390634); // Mutated Wardlock
					var mob22 = em.getMonster(9390634); // Gollux's Nutrient Flower
					var mob23 = em.getMonster(9390634); // Perdit Seed


					eim.registerMonster(mob1);
					eim.registerMonster(mob2);
					eim.registerMonster(mob3);

					eim.registerMonster(mob11);
					eim.registerMonster(mob12);
					eim.registerMonster(mob13);

					eim.registerMonster(mob21);
					eim.registerMonster(mob22);
					eim.registerMonster(mob23);


					map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(75,-850));
					map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(120,-850));
					map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(350,-850));

					map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(75,-450));
					map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(81,-450));
					map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(320,-450));

					map.spawnMonsterOnGroundBelow(mob21, new java.awt.Point(-298,120));
					map.spawnMonsterOnGroundBelow(mob22, new java.awt.Point(81,120));
					map.spawnMonsterOnGroundBelow(mob23, new java.awt.Point(250,120));

			}

            if (map.getId() == 863010210) { // Upper Right Leg

					var mob1 = em.getMonster(9390634); // Mutated Wardlock
					var mob2 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob3 = em.getMonster(9390643); // Perdit Seed

					var mob11 = em.getMonster(9390634); // Mutated Wardlock
					var mob12 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob13 = em.getMonster(9390643); // Perdit Seed

					var mob21 = em.getMonster(9390634); // Mutated Wardlock
					var mob22 = em.getMonster(9390634); // Gollux's Nutrient Flower
					var mob23 = em.getMonster(9390634); // Perdit Seed


					eim.registerMonster(mob1);
					eim.registerMonster(mob2);
					eim.registerMonster(mob3);

					eim.registerMonster(mob11);
					eim.registerMonster(mob12);
					eim.registerMonster(mob13);

					eim.registerMonster(mob21);
					eim.registerMonster(mob22);
					eim.registerMonster(mob23);


					map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(0,-850));
					map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(72,-850));
					map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(330,-850));

					map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(0,-450));
					map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(72,-450));
					map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(250,-450));

					map.spawnMonsterOnGroundBelow(mob21, new java.awt.Point(-298,120));
					map.spawnMonsterOnGroundBelow(mob22, new java.awt.Point(81,120));
					map.spawnMonsterOnGroundBelow(mob23, new java.awt.Point(250,120));

			}

            if (map.getId() == 863010200) { // Lower Right Leg

					var mob1 = em.getMonster(9390634); // Mutated Wardlock
					var mob2 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob3 = em.getMonster(9390643); // Perdit Seed

					var mob11 = em.getMonster(9390634); // Mutated Wardlock
					var mob12 = em.getMonster(9390637); // Gollux's Nutrient Flower
					var mob13 = em.getMonster(9390643); // Perdit Seed

					var mob21 = em.getMonster(9390634); // Mutated Wardlock
					var mob22 = em.getMonster(9390634); // Gollux's Nutrient Flower
					var mob23 = em.getMonster(9390634); // Perdit Seed


					eim.registerMonster(mob1);
					eim.registerMonster(mob2);
					eim.registerMonster(mob3);

					eim.registerMonster(mob11);
					eim.registerMonster(mob12);
					eim.registerMonster(mob13);

					eim.registerMonster(mob21);
					eim.registerMonster(mob22);
					eim.registerMonster(mob23);


					map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(0,-850));
					map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(72,-850));
					map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(330,-850));

					map.spawnMonsterOnGroundBelow(mob11, new java.awt.Point(0,-450));
					map.spawnMonsterOnGroundBelow(mob12, new java.awt.Point(72,-450));
					map.spawnMonsterOnGroundBelow(mob13, new java.awt.Point(250,-450));

					map.spawnMonsterOnGroundBelow(mob21, new java.awt.Point(-298,120));
					map.spawnMonsterOnGroundBelow(mob22, new java.awt.Point(81,120));
					map.spawnMonsterOnGroundBelow(mob23, new java.awt.Point(250,120));

			}


            if (map.getId() == 863010240) {
					var mob = em.getMonster(9390612); //Abdomen Id
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0,86));

			} else if (map.getId() == 863010430) {
					var mob = em.getMonster(9390611); //Left Shoulder Id
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(80,70));

			} else if (map.getId() == 863010330) {
					var mob = em.getMonster(9390610); //Right Shoulder Id
					eim.registerMonster(mob);
					map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(7,0));

			} else if (map.getId() == 863010600) {
                    var dcdummy = em.getMonster(9390603);
                    eim.unregisterMonster(dcdummy);


              		//if (parseInt(eim.getProperty("head")) == 0) {
                        var mob = em.getMonster(9390600); //Gollux Jaw Id
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5,61));
                        eim.setProperty("head", "1");
                    //    head = 2;
              		/*}

              		else if (parseInt(eim.getProperty("head")) == 1) {
                        var mob = em.getMonster(9390601); //Gollux Eyes Id
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5,61));
                        eim.setProperty("head", "2");
              		}

              		else if (parseInt(eim.getProperty("head")) == 2) {
                        var mob = em.getMonster(9390602); //Gollux Jewel Id
                        eim.registerMonster(mob);
                        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5,61));
                        eim.setProperty("head", "0");
              		}*/

            }
		}
	}




    em.setProperty("state", "1");
    eim.startEventTimer(1800000); // 30min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(863010100);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 863010700);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid < 863010100 || mapid > 863010600) {
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

/*
function spawnEyes(eim) { // Custom Function
    var map = eim.setInstanceMap(863010600);
    if (parseInt(eim.getProperty("head")) == 1 && map.getMonsterCount() == 1) {
		var mob = em.getMonster(9390601);
    	eim.registerMonster(mob);
    	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5, 61));
    	eim.setProperty("head","3")
    	//head = 3;
    } else {
    return;
    }
}

function spawnJewel(eim) { // Custom Function
    var map = eim.setInstanceMap(863010600);
    if (parseInt(eim.getProperty("head")) == 3 && map.getMonsterCount() == 1) {
		var mob = em.getMonster(9390602);
    	eim.registerMonster(mob);
    	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(5, 61));
    	eim.setProperty("head","5")
    	//head = 5;
    } else {
    return;
    }
}
*/
function playerExit(eim, player) {
		eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 863010700)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}


function monsterValue(eim, mobId) {
    var map = eim.setInstanceMap(863010600);
	if (mobId == 9390600 /*|| mobId == 8850001  || mobId == 8850002 || mobId == 8850003*/) {
		var mob5 = em.getMonster(mobId + 1);
		eim.registerMonster(mob5);
		map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(5,61));
	} else if (mobId == 9390601) {
		var mob5 = em.getMonster(9390602);
		eim.registerMonster(mob5);
		map.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(5, 61));
	}
    return 1;
}



function clearPQ(eim) {
    end(eim);
}
/*
function MonsterKilled(eim, mobId) {

}
*/
function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}