function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate
    em.schedule("takeoff", 180000); // The time to begin the ride
}

function stopEntry() {
    em.setProperty("entry","false");
}

function takeoff() {
    em.warpAllPlayer(200000122, 200090100);
    em.warpAllPlayer(220000111, 200090110);
    // em.broadcastShip(200000121, 3);
    // em.broadcastShip(220000110, 3);
    em.setProperty("docked","false");
    em.schedule("arrived", 300000); // The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090100, 220000110); // from orbis
    em.warpAllPlayer(200090110, 200000121); // from ludi
    // em.broadcastShip(200000121, 1);
    // em.broadcastShip(220000110, 1);
    scheduleNew();
}

function cancelSchedule() {
}