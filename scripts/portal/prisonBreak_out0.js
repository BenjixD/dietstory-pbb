function enter(pi) {
    var mapid = pi.getPlayer().getMapId();
	if (mapid == 921160700) {
		if (pi.getMonsterCount(mapid) == 0) {
			pi.warp(910002000,5);
		} else {
			pi.playerMessage("You need to kill Ani before finishing the Party Quest.");
		}
	} else {
	pi.warp(910002000,5);
	}
}