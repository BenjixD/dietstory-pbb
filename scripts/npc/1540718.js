// Lotus Battle NPC  1540718 - Hidden Entrance
function start() {
	var mapid = cm.getPlayer().getMapId();
	
	if (mapid = 350060300) {
	cm.sendSimple("I am the Lotus Battle Starter NPC");
	cm.dispose();
	} else {
	cm.dispose();
	}
}