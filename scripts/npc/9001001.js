var status = 0;
var maps = Array(300000000, 680000000, 230000000, 910001000, 260000000, 541000000, 540000000, 211060010, 450002000, 863100000, 105300000, 310000000, 211000000, 101072000, 101000000, 101050000, 130000000, 820000000, 223000000, 410000000, 141000000, 120040000, 209000000, 682000000, 310070000, 401000000, 100000000, 271010000, 251000000, 744000000, 551000000, 103000000, 222000000, 450003000, 240000000, 104000000, 220000000, 150000000, 261000000, 807000000, 250000000, 800000000, 600000000, 450001000, 120000000, 200000000, 800040000, 400000000, 102000000, 914040000, 200100000, 865000000, 801000000, 105000000, 866000000, 693000020, 270000000, 860000000, 273000000, 320000000);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1) {
status++;
}
else {
status--;
}
if (status == 0) {
cm.sendSimple(" Hello #h # \r\n What would you like to do? \r\n  #L0# #dI want to go somewhere #l \r\n  #L1# #dI want to buy something #l \r\n  #L2# #dTrade Gold Maple Leaf #l \r\n  #L3# #dVote in-game #l\r\n  #L4# #dView achievements #l");
}
else if(status == 1){
if(selection == 0){
cm.sendSimple("\r\n  #L5# #dTown maps #l \r\n  #L6# #dMonster maps #l \r\n  #L7# #dBoss maps #l"); // add all maps in a var
cm.dispose	
}
else if(selection == 1){
	cm.openShop(); // puddin npcid 1511000 shops broken?
	cm.dispose // supposed to be here?
}
else if (selection == 2){
		cm.sendOk("Would you like to convert \r\n #L8# #dGold Maple Leaf to mesos #l \r\n #L9# #dMesos to Gold Maple Leaf #l \r\n #L10# #dMaple Leaf Gold to Nx #l \r\n #L11# #dNx to Maple Leaf Gold ");
	}	
}
else if(status == 2){
	//start gml
if(selection == 8  &&  cm.haveItem(4001619)){
	cm.sendYesNo("Are you sure you want to trade 1 Gold Maple Leaf for \r\n1.000.000.000 mesos?" );
	gml = 0;
	cm.dispose;
}
else if(selection == 9  &&  cm.getMeso() >= 1100000000){
	cm.sendYesNo("Are you sure you want to trade 1.100.000.000 mesos for 1 Gold Maple Leaf?" );
	gml = 1;
	cm.dispose;
}
else if(selection == 10  &&  cm.haveItem(4430000)){
	cm.sendYesNo("Are you sure you want to trade 1 Maple Leaf Gold for 1.000.000 Nx?" );
	gml = 2;
	cm.dispose;
}
else if(selection == 11  &&  cm.getMeso() >= 1200000){
	cm.sendYesNo("Are you sure you want to trade 1.200.000 Nx for 1 Maple Leaf Gold?" );
	gml = 3;
	cm.dispose;
}
//start warp
else if(selection == 5){
	warp = 0
var job = cm.getJob();
	{
	    var selStr = "Choose your destination.#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
		}
	    }
	}
	cm.sendNext(selStr);
	
    }
else{
	cm.sendOk("you dont have the needed items"); // last part of gml
	cm.dispose;
} 

} 
 else if (status == 3) {
if (warp == 0)	 
	cm.sendYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[selection]);
	selectedMap = selection;
    }
	else if (status == 4) {
	if (cm.getJob() < 0) {
	    cm.sendNext("You Cant use this function as a beginner.");
	} else {
	 //   cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}
}
