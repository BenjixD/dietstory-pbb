/* Don Giovanni
	Kerning VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("Hello! I'm Don Giovanni, head of the beauty salon! If you have either #b#t5150003##k or #b#t5151003##k, why don't you let me take care of the rest? Decide what you want to do with your hair... \r\n#L0#Haircut: #i5150003##t5150003##l\r\n#L1#Dye your hair: #i5151003##t5151003##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160];
	    } else {
		hair_Colo_new = [31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5150003##k I'll change it for you. Choose the one to your liking~.", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151003##k I'll change it for you. Choose the one to your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150003, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved hairstyle!");
	    } else {
		cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
	    }
	} else {
	    if (cm.setAvatar(5151003, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved haircolor!");
	    } else {
		cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dye your hair without it. I'm sorry...");
	    }
	}
	cm.safeDispose();
    }
}
