//Arcane Boss Party Quest  HELL
var eventmapid = 450004150; // Lachelein: Dreaming Forest
var returnmap = 450003711; // Lachelein: Lachelein Alley
var startTimer;


var monster = new Array(
    9305639, // Magnus
    2600800, // Commander Will
    8881000, // Ursus
    9480238, // Asura
    9390600, // Gollux Head
    8860003  // Twisted Darkness

    );

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function init() {
// After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(3003105, new java.awt.Point(70, -420));

    eim.setProperty("points", 0);
    eim.setProperty("monster_number", 0);

    eim.setProperty("n_spawn", 0);
    eim.setProperty("f_spawn", 0);
    eim.setProperty("c_spawn", 0);

    startTimer = java.lang.System.currentTimeMillis();


    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
    	eim.startEventTimer(4000); // After 5 seconds -> scheduledTimeout()   // 5s changed to 4s
    }
}


function monsterSpawn(eim) { // Custom function
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    if (monsterid == 0) {
        if (parseInt(eim.getProperty("f_spawn")) == 0) {
            monsterid = 8950102; // Lotus
            eim.setProperty("f_spawn", "4");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("f_spawn")) == 4) {
            monsterid = 9300435;
        }
    } else if (monsterid == 1) {
        if (parseInt(eim.getProperty("n_spawn")) == 0) {
            monsterid = 8850005;
            eim.setProperty("n_spawn", "1");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("n_spawn")) == 1) {
            monsterid = 8850006;
            eim.setProperty("n_spawn", "2");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("n_spawn")) == 2) {
            monsterid = 8850007;
            eim.setProperty("n_spawn", "3");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("n_spawn")) == 3) {
            monsterid = 8850008;
            eim.setProperty("n_spawn", "4");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("n_spawn")) == 4) {
            monsterid = 8850009;
            eim.setProperty("n_spawn", "5");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("n_spawn")) == 5) {
            monsterid = 8870200;
        }
    } else if (monsterid == 2) {
        if (parseInt(eim.getProperty("c_spawn")) == 0) {
            monsterid = 8820018;
            eim.setProperty("c_spawn", "1");
            //for (var i = 0; i < 10; i++) {
            monsterSpawn(eim);
        //}
        } else if (parseInt(eim.getProperty("c_spawn")) == 1) {
            monsterid = 8820015;
            eim.setProperty("c_spawn", "2");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("c_spawn")) == 2) {
            monsterid = 8820016;
            eim.setProperty("c_spawn", "3");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("c_spawn")) == 3) {
            monsterid = 8820017;
            eim.setProperty("c_spawn", "4");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("c_spawn")) == 4) {
            monsterid = 8820018;
            eim.setProperty("c_spawn", "5");
            monsterSpawn(eim); //double spawn
        } else if (parseInt(eim.getProperty("c_spawn")) == 5) {
            monsterid = 8860003;
        }
    }
    var mob = em.getMonster(monsterid);
    var modified = em.newMonsterStats();
    modified.setOMp(mob.getMobMaxMp());
    switch (monsterid) {
        case 8840000:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 2.4); //1b
            break;
        case 8800100:
        case 8800101:
        case 8800102:
        case 9400289:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 1.8); //1b
            break;
        case 9400300:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 6);
            break;
        case 9400589:
        case 9400590:
        case 9400591:
        case 9400592:
        case 9400593:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 1.1);
            break;
        case 8850005:
        case 8850006:
        case 8850007:
        case 8850008:
        case 8850009:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 2.2);
            break;
        case 8820002:
        case 8820015:
        case 8820016:
        case 8820017:
        case 8820018:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp() * 1.8);
            break;
        case 8300006:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp());
            break;
        case 8610000:
        case 8610001:
        case 8610002:
        case 8610003:
        case 8610004:
            modified.setOExp(mob.getMobExp() * 50);
            modified.setOHp(mob.getMobMaxHp() * 50 * 3);
            break;
        case 8860000:
            modified.setOExp(mob.getMobExp() * 1.2);
            modified.setOHp(mob.getMobMaxHp());
            break;
        case 8870200:
            modified.setOExp(mob.getMobExp() * 0.2);
            modified.setOHp(mob.getMobMaxHp() * 10);
            break;
        case 8510000:
        case 8850010:
            modified.setOExp(mob.getMobExp() * 2);
            modified.setOHp(mob.getMobMaxHp() * 10);
            break;
        case 8820018:
            modified.setOExp(mob.getMobExp() * 50);
            modified.setOHp(mob.getMobMaxHp() * 50);
            break;
        default:
            modified.setOExp(mob.getMobExp());
            modified.setOHp(mob.getMobMaxHp());
            break;
    }
    mob.setOverrideStats(modified);
    //var stats = mob.getStats();
    //stats.setFixedDamage(stats.getFixedDamage() * 2);
    //stats.setPhysicalAttack(stats.getPhysicalAttack() * 2);
    //stats.setMagicAttack(stats.getMagicAttack() * 2);
    //stats.setPDRate(Math.min(90, stats.getPDRate() * 1.5));
    //stats.setMDRate(Math.min(90, stats.getMDRate() * 1.5));
    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1020, 40));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
	eim.unregisterPlayer(player);

	eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    var num = parseInt(eim.getProperty("monster_number"));
    if (num < monster.length) {
	monsterSpawn(eim);
	eim.setProperty("monster_number", num + 1);
    } else {
	eim.disposeIfPlayerBelow(100, returnmap);
    }
// When event timeout..

// restartEventTimer(long time)
// stopEventTimer()
// startEventTimer(long time)
// isTimerStarted()
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 370386; // Will give total of 23,284,726 points  and  9,644,040 cash in total for 1 Arcane BPQ Hell
    var numxtra = ((Math.round(((num/10)/1.4125)))*10);
    var totalp = parseInt(eim.getProperty("points")) + num;
    var chrdjpoints = parseInt(eim.showDojoPoints()) + num;
    var chrdjpointsxtra = parseInt(eim.showDojoPoints()) + num + numxtra;
    var endpoints = 10000000;

    var elapsedTime = (java.lang.System.currentTimeMillis() - startTimer) / 1000;
    var elapsedMinute = Math.floor(elapsedTime/60);
    var elapsedSecond = Math.round(((elapsedTime - (Math.round(elapsedMinute*60))))*1000)/1000;

    eim.setProperty("points", totalp);

    eim.saveBossQuest(num);
    eim.broadcastPlayerMsg(-1, "You have gained "+formatNumber(num)+" dojo points! for the accumulated total of "+formatNumber(chrdjpoints)+" dojo points.");  //changed Message type from 5 to -1

    eim.saveBossQuestNoWill(numxtra);
    eim.broadcastPlayerMsg(-1, "You have gained "+formatNumber(numxtra)+" dojo points! for the accumulated total of "+formatNumber(chrdjpointsxtra)+" dojo points.");

    eim.NxOnly((Math.round((numxtra*1.0256)/10))*10);
    eim.saveBossQuestNoWill(0);

    if (mobnum < monster.length) {
	//eim.broadcastPlayerMsg(6, "Prepare! The next boss will appear in a glimpse of an eye!");
} else {
	eim.saveBossQuestNoWill(endpoints);     //end points for clearing the run
	eim.broadcastPlayerMsg(-1, "You have gained "+formatNumber(endpoints)+" dojo points! for the accumulated total of "+formatNumber((chrdjpointsxtra+endpoints))+" dojo points.");
	if (elapsedMinute == 0) {eim.broadcastPlayerMsg(5, "You have completed Arcane BossPQ Hell in " +elapsedSecond+ " seconds");}
	else {eim.broadcastPlayerMsg(5, "You have completed Arcane BossPQ Hell in " +elapsedMinute+ " minutes and " +elapsedSecond+ " seconds");}
    }
// When invoking unregisterMonster(MapleMonster mob) OR killed
// Happens only when size = 0
}

function playerDead(eim, player) {
// Happens when player dies
}

function playerRevive(eim, player) {
    return true;
// Happens when player's revived.
// @Param : returns true/false
}

function playerDisconnected(eim, player) {
    return 0;
// return 0 - Deregister player normally + Dispose instance if there are zero player left
// return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
// return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    return 0;
// Invoked when a monster that's registered has been killed
// return x amount for this player - "Saved Points"
}

function leftParty(eim, player) {
    // Happens when a player left the party
    eim.unregisterPlayer(player);

    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(129));

    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, returnmap);
}

function clearPQ(eim) {
// Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
// Happens when the function NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
// Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
// Happens when player change map - Unused for now.
}

function cancelSchedule() {
}