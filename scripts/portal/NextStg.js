function enter(pi) {
var mapid = pi.getPlayer().getMapId();

switch(mapid) {
	case 811000100:
		if (pi.getMonsterCount(811000100) == 0) {
		pi.warp(811000200,0);
		} else {pi.playerMessage(5,"Eliminate all monsters before heading towards the next stage.");}		
	break;
	case 811000200:
		if (pi.getMonsterCount(811000200) == 0) {	
		pi.warp(811000300,0);
		} else {pi.playerMessage(5,"Eliminate all monsters before heading towards the next stage.");}		
	break;
	case 811000300:
		if (pi.getMonsterCount(811000300) == 0) {	
		pi.warp(811000400,0);
		} else {pi.playerMessage(5,"Eliminate all monsters before heading towards the next stage.");}
	break;
	case 811000400:
		if (pi.getMonsterCount(811000400) == 0) {	
		pi.warp(811000500,0);
		} else {pi.playerMessage(5,"Eliminate all monsters before heading towards the next stage.");}		
	break;	
}
}