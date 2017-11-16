// Universal NPC  Eunice - 9270035

var status3  = 0;
var mapform = 0;
var status = 0;
var maps = Array(300000000, 680000000, 230000000, 910001000, 260000000, 541000000, 610050000, 540000000, 211060010, 450002000, 863100000, 105300000, 310000000, 211000000, 101072000, 101000000, 101050000, 130000000, 820000000, 223000000, 410000000, 141000000, 120040000, 209000000, 682000000, 310070000, 401000000, 100000000, 271010000, 251000000, 744000000, 551000000, 103000000, 222000000, 450003000, 867113100, 240000000, 104000000, 220000000, 150000000, 261000000, 701220000, 807000000,  701210000, 250000000, 800000000, 600000000, 450001000, 120000000, 200000000, 800040000, 400000000, 102000000, 914040000, 200100000, 865000000, 801000000, 105000000, 866000000, 693000020, 270000000, 860000000, 273000000, 701100000, 320000000);
var mobmaps = Array(240070300, 800020110, 610040000, 270030000, 211060000, 240040500, 551030100, 271000300, 211061000, 211041100, 240010501, 270020000, 910170100, 910160100, 610030010, 863000100, 910180100, 272000100, 682010200, 541000300, 241000200, 220050300, 102040200, 240010700, 241000210, 241000220, 272010000, 910028600, 706041000, 706041005, 273050000, 231040400, 401050000, 541020000, 502010010);
var bossmaps = [
[[105100100, "Balrog"], [211042300, "Zakum"], [240050400, "Horntail"], [262030000, "Hilla"], [105200000, "Root Abyss"], [211070000, "Von Leon"], [272020110, "Arkarium"], [401060000, "Easy Magnus"], [401060000, "Normal/Hard Magnus"], [270050000, "Pink Bean"], [271030600, "Cygnus"], [350060000, "Lotus"], [863010000, "Gollux"], [211041700, "Ranmaru"], [811000008, "Princess No"], [970072200, "Ursus"], [105300303, "Damien"], [610030010, "Crimsonwood Keep"], [450004000, "Lucid"], [927030060, "Black Mage"]],
[[5,2], [5,2]]
];
//var bossmapName = Array("Balrog", "Zakum", "Horntail", "Hilla", "Root Abyss", "Von Leon", "Arkarium", "Easy Magnus", "Normal/Hard Magnus", "Pink Bean", "Cygnus", "Lotus", "Gollux", "Ranmaru", "Princess No", "Ursus", "Damien", "Crimsonwood Keep", "Lucid");


var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var itemidmlg = 4430000;
var itemidgml = 4001619;

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) 
{

if (mode != 1) //if (mode == -1)_Old
{
cm.dispose();
}
else {
if (status == 0 && mode == 0) 
{
cm.dispose();
return;
}
if (mode == 1) 
{
status++;
}
else 
{
status--;
}
if (status == 0)
{
	cm.sendSimple("Hello #h #\r\nWhat would you like to do? \r\n#L0# #bI want to go somewhere #l \r\n#L1# #bI want to buy something #l \r\n#L2# #bTrade Gold Maple Leaf #l \r\n#L3# #bVote in-game #l\r\n#L4# #bView achievements #l\r\n#L20# #bView Rankings and speed runs#l");
	}
else if(status == 1)
{
	if(selection == 0) // Selection 0 - I want to go somewhere
	{
	cm.sendSimple("\r\n  #L5# #bTown maps #l \r\n  #L6# #bMonster maps #l \r\n  #L7# #bBoss maps #l");
	cm.dispose	
	}
	else if(selection == 1)  // Selection 1 - I want to buy something
	{
		cm.sendSimple("#b#L50#Shop (Mesos)#l \r\n#L51#Talk to Agent W (Donation shop)#l \r\n#L52#Talk to Lilin (Cash)#l \r\n#L53#Talk to Cygnus (Vote points)#l \r\n#L54#Buy item buffs (mesos)#l \r\n#L55#Talk to Bo (Nebulites)#l \r\n#L56#Talk to Vega (scrolls)#l \r\n#L57#Talk to Frederick (shop)#l \r\n#L58#Talk to Archelle (V-Matrix)#l");
	}
	else if (selection == 2) // Selection 2 - Trade Gold Maple Leaf
	{
			cm.sendOk("Would you like to convert \r\n #L8# #bGold Maple Leaf to Mesos #l \r\n #L9# #bMesos to Gold Maple Leaf #l \r\n #L10# #bMaple Leaf Gold to Cash #l \r\n #L11# #bCash to Maple Leaf Gold ");
		}
	else if (selection == 3) // Selection 3 - Vote in-Game
	{
	        cm.sendSimple("Vote in-Game");
	        cm.dispose();
	}
	else if (selection == 4) // Selection 4 - View Achievements
	{
	        cm.sendSimple("View Achievements");
	        cm.dispose();
	}
	else if (selection == 20) // Rankings+Speedruns
	{
	        cm.sendSimple("What would you like to view? \r\n#b#L21#Player Rankings (by Name) #l \r\n#L22#Player Rankings (by Class) #l \r\n#L23#Fame Rankings (by Name) #l \r\n#L24#Fame Rankings (by Rank) #l \r\n#L25#Guild Rankings (by GP) #l \r\n#L26#Alliance Rankings (by Total GP) #l \r\n#L27#View Speed runs and boss Cooldowns #l");
 	}
 }

else if(status == 2)
{
	switch (selection)
	{
	case 5:
		var job = cm.getJob();
		
		    var selStr = "Choose your destination.#b";
		    for (var i = 0; i < maps.length; i++) 
		    {
			if (maps[i] != cm.getMapId()) 
			{
			selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
			}
		    }
		
		cm.sendNext(selStr);
		status3 = 1;

	break;	
	case 6:
		var selStr = "Choose your destination.#b";
        		    for (var i = 0; i < mobmaps.length; i++)
        		    {
        			if (mobmaps[i] != cm.getMapId())
        			{
        			selStr += "\r\n#L" + i + "##m" + mobmaps[i] + "# #l";
        			}
        		    }
        		    cm.sendNext(selStr);
		status3 = 2;
		break;
	case 7:
		    var selStr = "Choose your destination.#b";
		    for (var i = 0; i < bossmaps[0].length; i++)
		    {
			if (bossmaps[0][i][0] != cm.getMapId())
			{
			selStr += "\r\n#L" + i + "#" + bossmaps[0][i][1] + " #l";
			}
		    }
		    cm.sendNext(selStr);
		    status3 = 3;
	break;
	case 8:
	    cm.sendGetNumber("How many would you like to trade in?\r\n", 1, 1, (cm.itemQuantity(itemidgml)));
		status3 = 4;
		break;
	case 9:
	    if (!cm.canHold(itemidgml)){
	    cm.sendSimple("You don't have enough inventory space");
	    cm.dispose();
	    return;
	    }
	    cm.sendGetNumber("How many would you like?\r\n", 1, 1, cm.getMeso() / 1100000000);
		status3 = 5;
		break;
	case 10:
	     cm.sendGetNumber("How many would you like to trade in?\r\n", 1, 1, (cm.itemQuantity(itemidmlg)));
		 status3 = 6;
		 break;
	case 11:
	     if (!cm.canHold(itemidmlg)){
         cm.sendSimple("You don't have enough inventory space");
         cm.dispose();
         return;
         }
		 cm.sendGetNumber("How many would you like?\r\n", 1, 1, cm.getPlayer().getCSPoints(2) / 1200000);
		 status3 = 7;
		 break;
	case 21: cm.sendSimple("Select the class you want to see the ranking of: \r\n#b#L0#All#l \r\n#L1#Beginner#l \r\n#L2#Noblesse#l \r\n#L3#Legend#l \r\n#L4#Citizen#l \r\n#L5#Hero#l \r\n#L6#Paladin#l \r\n#L7#Dark Knight#l \r\n#L8#Arch Mage (Fire, Poison)#l \r\n#L9#Arch Mage (Ice, Lightning)#l \r\n#L10#Bishop#l \r\n#L11#Bowmaster#l \r\n#L12#Marksman#l \r\n#L13#Night Lord#l \r\n#L14#Shadower#l \r\n#L15#Blade Master#l \r\n#L16#Buccaneer#l \r\n#L17#Corsair#l \r\n#L18#Cannon Master#l \r\n#L19#Jett#l \r\n#L20#Dawn Warrior#l \r\n#L21#Blaze Wizard#l \r\n#L22#Wind Archer#l \r\n#L23#Night Walker#l \r\n#L24#Thunder Breaker#l \r\n#L25#Aran#l \r\n#L26#Evan#l \r\n#L27#Mercedes#l \r\n#L28#Phantom#l \r\n#L29#Shade#l \r\n#L30#Luminous#l \r\n#L31#Demon Slayer#l \r\n#L32#Demon Avenger#l \r\n#L33#Battle Mage#l \r\n#L34#Wild Hunter#l \r\n#L35#Mechanic#l \r\n#L36#Xenon#l \r\n#L37#Hayato#l \r\n#L38#Kanna#l \r\n#L39#Mihile#l \r\n#L40#Kaiser#l \r\n#L41#Angelic Buster#l \r\n#L42#Zero#l \r\n#L43#Beast Tamer#l \r\n#L44#Kinesis#l \r\n#L45#Blaster#l");
	         status3 = 9;
	         break;
	case 22: cm.sendSimple("Select one of the following categories: \r\n\r\n");
	         break;
	case 23: cm.sendSimple("Select one of the following categories: \r\n\r\n");
	         break;
	case 24: cm.sendSimple("Select one of the following categories: \r\n\r\n");
	         break;
	case 25: cm.displayGuildRanks(); //Guild Rankings
	         cm.dispose();
	         break;
	case 26: cm.dispose();//Alliance Rankings
	         break;
	case 27: cm.sendSimple("#b#L0#List all Boss Cooldowns#l \r\n#L1#Zakum#l \r\n#L2#Horntail#l \r\n#L3#Von Leon#l \r\n#L4#Pink Bean#l \r\n#L5#Arkarium#l \r\n#L6#Empress Cygnus#l \r\n#L7#Hilla#l \r\n#L8#Magnus#l \r\n#L9#RanMaru#l \r\n#L10#Princess No#l \r\n#L11#Von Bon#l \r\n#L12#Pierre#l \r\n#L13#Crimson Queen#l \r\n#L14#Vellum#l \r\n#L15#Gollux#l \r\n#L16#Dorothy#l \r\n#L17#Hekaton#l \r\n#L18#Lotus#l \r\n#L19#Ursus#l \r\n#L20#Damien#l \r\n#L21#CWKPQ#l \r\n#L22#Lucid#l \r\n#L23#Black Mage#l \r\n#L24#???#l");
	         status3 = 8;
	         break;
	case 50: cm.dispose(); //Shop (mesos)
	         //cm.openNpc(); Shop
	         break;
	case 51: cm.dispose();
	         cm.openNpc(9000039); //Donation NPC (crashes you  for w/e reason)
	         break;
	case 52: cm.dispose();
	         cm.openNpc(9010036); //Cash NPC
	         break;
	case 53: cm.dispose();
	         cm.openNpc(9010034); //VPoints NPC
	         break;
	case 54: cm.dispose(); // item buffs
	         cm.openNpc(9201101);
	         break;
	case 55: cm.dispose();
	         cm.openNpc(9201182); //Nebulite NPC (crashes you for w/e reason)
	         break;
	case 56: cm.dispose(); //Scroll NPC
	         break;
	case 57: cm.dispose();
	         cm.openNpc(9030000); //shop NPC
	         break;
	case 58: cm.dispose();
	         cm.openNpc(1540945); //V-matrix
	         break;

	}
}
else if(status == 3)
{
	switch (status3){
	case 1:
		cm.sendSimple("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[selection]);
		selectedMap = selection;
		mapform = 1;
		break;
	case 2:
		cm.sendSimple("You don't have anything else to do here, huh? Do you really want to go to #b#m" + mobmaps[selection]);
        selectedMap = selection;
		mapform = 2;
		break;
	case 3:
		cm.sendSimple("You don't have anything else to do here, huh? Do you really want to go to #b" + bossmaps[0][selection][1]);
		selectedMap = selection;
		mapform = 3;
		break;
	case 4:
		cm.gainItem(4001619, (selection * -1));
		cm.gainMeso(1000000000 * selection);
		//cm.sendOk("Thank you for this Golden Maple Leaf!");
		cm.dispose();
		break;
	case 5:
		cm.gainItem(4001619, selection);
		cm.gainMeso(-1100000000 * selection);
		//cm.sendOk("Have fun with your Golden Maple Leaf!");
		cm.dispose();
		break;
	case 6:
		cm.gainItem(4430000, (selection * -1));
		cm.getPlayer().modifyCSPoints(2, (1000000 * selection), true);
		//cm.sendOk("Thank you for this Maple Leaf Gold!");
		cm.dispose();
		break;
	case 7:
		cm.gainItem(4430000, selection);
		cm.getPlayer().modifyCSPoints(2, (-1200000 * selection), true);
		//cm.sendOk("Have fun with your Maple Leaf Gold!");
		cm.dispose();
		break;
	case 8:
	    switch (selection) {
	    case 0: cm.sendSimple("List all Cooldowns:");
	    case 1: cm.sendSimple("Zakum");
	    case 2: cm.sendSimple("Horntail");
	    case 3: cm.sendSimple("Von Leon");
        case 4: cm.sendSimple("Pink Bean");
        case 5:	cm.sendSimple("Arkarium");
        case 6: cm.sendSimple("Empress Cygnus");
        case 7: cm.sendSimple("Hilla");
        case 8: cm.sendSimple("Magnus");
        case 9: cm.sendSimple("RanMaru");
        case 10: cm.sendSimple("Princess No");
        case 11: cm.sendSimple("Von Bon");
        case 12: cm.sendSimple("Pierre");
        case 13: cm.sendSimple("Crimson Queen");
        case 14: cm.sendSimple("Vellum");
        case 15: cm.sendSimple("Gollux");
        case 16: cm.sendSimple("Dorothy");
        case 17: cm.sendSimple("Hekaton");
        case 18: cm.sendSimple("Lotus");
        case 19: cm.sendSimple("Ursus");
        case 20: cm.sendSimple("Damien");
        case 21: cm.sendSimple("CWKPQ");
        case 22: cm.sendSimple("Lucid");
        case 23: cm.sendSimple("Black Mage");
        case 24: cm.sendSimple("???");
        break;
	    }
	/*case 9:
	    switch (selection) {
	    case 0: cm.sendSimple("Ranking for All");
	    case 1: cm.sendSimple("Ranking for Beginner");
	    case 2: cm.sendSimple("Ranking for Noblesse");
	    case 3: cm.sendSimple("Ranking for Legend");
	    case 4: cm.sendSimple("Ranking for Citizen");
	    case 5: cm.sendSimple("Ranking for Hero");
        case 6: cm.sendSimple("Ranking for Paladin");
        case 7: cm.sendSimple("Ranking for Dark Knight");
        case 8: cm.sendSimple("Ranking for Arch Mage (F,P)");
        case 9: cm.sendSimple("Ranking for Arch Mage (I,L)");
        case 10: cm.sendSimple("Ranking for Bishop");
        case 11: cm.sendSimple("Ranking for Bowmaster");
        case 12: cm.sendSimple("Ranking for Marksman");
        case 13: cm.sendSimple("Ranking for Night Lord");
        case 14: cm.sendSimple("Ranking for Shadower");
        case 15: cm.sendSimple("Ranking for Blade Master");
        case 16: cm.sendSimple("Ranking for Buccaneer");
        case 17: cm.sendSimple("Ranking for Corsair");
        case 18: cm.sendSimple("Ranking for Cannon Master");
        case 19: cm.sendSimple("Ranking for Jett");
        case 20: cm.sendSimple("Ranking for Dawn Warrior");
        case 21: cm.sendSimple("Ranking for Blaze Wizard");
        case 22: cm.sendSimple("Ranking for Wind Archer");
        case 23: cm.sendSimple("Ranking for Night Walker");
        case 24: cm.sendSimple("Ranking for Thunder Breaker");
        case 25: cm.sendSimple("Ranking for Aran");
        case 26: cm.sendSimple("Ranking for Evan");
        case 27: cm.sendSimple("Ranking for Mercedes);
        case 28: cm.sendSimple("Ranking for Phantom");
        case 29: cm.sendSimple("Ranking for Shade");
        case 30: cm.sendSimple("Ranking for Luminous");
        case 31: cm.sendSimple("Ranking for Demon Slayer");
        case 32: cm.sendSimple("Ranking for Demon Avenger");
        case 33: cm.sendSimple("Ranking for Battle Mage");
        case 34: cm.sendSimple("Ranking for Wild Hunter");
        case 35: cm.sendSimple("Ranking for Mechanic");
        case 36: cm.sendSimple("Ranking for Xenon");
        case 37: cm.sendSimple("Ranking for Hayato");
        case 38: cm.sendSimple("Ranking for Kanna);
        case 39: cm.sendSimple("Ranking for Mihile");
        case 40: cm.sendSimple("Ranking for Kaiser");
        case 41: cm.sendSimple("Ranking for Angelic Buster");
        case 42: cm.sendSimple("Ranking for Zero");
        case 43: cm.sendSimple("Ranking for Beast Tamer");
        case 44: cm.sendSimple("Ranking for Kinesis");
        case 45: cm.sendSimple("Ranking for Blaster");
	    break;
	    }
    */break;
	}

}

else if (status == 4)
{
	switch (mapform){
	case 1:
		cm.warp(maps[selectedMap],0);
		cm.dispose();
		break;
	case 2:
		cm.warp(mobmaps[selectedMap],0);
		cm.dispose();
		break;
	case 3:
		cm.warp(bossmaps[0][selectedMap][0],0);
		cm.dispose();
		break;
	}
}
}

}
