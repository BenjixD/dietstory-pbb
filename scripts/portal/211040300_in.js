function enter(pi) {
	if (pi.getPlayer().getLevel() > 49) {
	pi.warp(211040300,5);
	} else {
	pi.playerMessage(5,"Maplers below level 50 are recommended to stay out of this area!");}
}