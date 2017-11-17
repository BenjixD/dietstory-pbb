var eventmapid = 925060100; // Mu Lung Dojo: Mu Lung Dojo 1st Floor
var returnmap = 925020001; // Mu Lung Dojo: Mu Lung Dojo Hall
var startTimer;


var monster = new Array(
    9500337, // Mano - 700p, 210nx
    9500345, // Mushmom - 700p, 210nx
    9500338, // Stumpy - 700p, 210nx
    9500176, // Blue Mushmom - 700p, 210nx
    9480015, // Zombie Mushmom - 700p, 210nx
    9500168, // Slime King - 1400p, 420nx
    9500346, // Dale - 1400p, 420nx
    9500342, // King Clang - 1400p, 420nx
    9500341, // Faust - 1400p, 420nx
    9800008  // Spirit of Rock - 1400p, 420nx
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
    map.spawnNpc(2091005, new java.awt.Point(0, -420));

    eim.setProperty("points", 0); // TODO: 0 needs to be changed to current dojo points!   (0 = string, not an int)
    eim.setProperty("monster_number", 0);

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
    var mob = em.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);

    switch(monsterid) {
    case 9500337: // Mano - 700p, 210nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0);
	    modified.setOHp(mob.getMobMaxHp() * 331);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500345: // Mushmom - 700p, 210nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.06*0.5);
	    modified.setOHp(mob.getMobMaxHp() * 8);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500338: // Stumpy - 700p, 210nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.16);
	    modified.setOHp(mob.getMobMaxHp() * 23);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500176: // Blue Mushmom - 700p, 210nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.03);
	    modified.setOHp(mob.getMobMaxHp() * 40);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9480015: // Zombie Mushmom - 700p, 210nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 2);
	    modified.setOHp(mob.getMobMaxHp() * 11);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500168: // Slime King - 1400p, 420nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.006);
	    modified.setOHp(mob.getMobMaxHp() * 100);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500346: // Dale - 1400p, 420nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.11);
	    modified.setOHp(mob.getMobMaxHp() * 9);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500342: // King Clang - 1400p, 420nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.08);
	    modified.setOHp(mob.getMobMaxHp() * 12);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9500341: // Faust - 1400p, 420nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 0.003);
	    modified.setOHp(mob.getMobMaxHp() * 4);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    case 9800008: // Spirit of Rock - 1400p, 420nx
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 2);
	    modified.setOHp(mob.getMobMaxHp() * 45);
	    modified.setOMp(mob.getMobMaxMp() * 50);

	    mob.setOverrideStats(modified);
	    break;
    }

    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(15, 7));
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
    var num = Math.ceil(mobnum / 5) * 700; // Will give total of 15,500 points  and  5,183 cash in total for 1 Easy Dojo run
    var totalp = parseInt(eim.getProperty("points")) + num;
    var chrdjpoints = parseInt(eim.showDojoPoints()) + num;
    var endpoints = 5000;


    var elapsedTime = (java.lang.System.currentTimeMillis() - startTimer) / 1000;
    var elapsedMinute = Math.floor(elapsedTime/60);
    var elapsedSecond = Math.round(((elapsedTime - (Math.round(elapsedMinute*60))))*1000)/1000;

    eim.setProperty("points", totalp);

    eim.saveBossQuest(num);
    eim.broadcastPlayerMsg(-1, "You have gained "+formatNumber(num)+" dojo points! for the accumulated total of "+formatNumber(chrdjpoints)+" dojo points.");  //changed Message type from 5 to -1


    if (mobnum < monster.length) {
	//eim.broadcastPlayerMsg(6, "Prepare! The next boss will appear in a glimpse of an eye!");
} else {
	eim.saveBossQuestNoWill(endpoints);     //end points for clearing the run
	eim.broadcastPlayerMsg(-1, "You have gained "+formatNumber(endpoints)+" dojo points! for the accumulated total of "+formatNumber((chrdjpoints+endpoints))+" dojo points.");
	if (elapsedMinute == 0) {eim.broadcastPlayerMsg(5, "You have completed Easy Dojo in " +elapsedSecond+ " seconds");}
	else {eim.broadcastPlayerMsg(5, "You have completed Easy Dojo in " +elapsedMinute+ " minutes and " +elapsedSecond+ " seconds");}
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
    player.changeMap(map, map.getPortal(0));

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