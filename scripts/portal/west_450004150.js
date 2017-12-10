function enter(pi) {
var mapid = pi.getPlayer().getMapId();
if(mapid == 450004150) {
	pi.playerMessage(5,"Talk to Kanto");
} else if (mapid == 450004450) {
	pi.openNpc(3003250);
}
}	