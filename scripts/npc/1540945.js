var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else
        if (status == 0) {
		    cm.sendNextS("Enjoy your adventure.",5);
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendGetNumber("Number pls", 3,0,10);
	} else if (status == 1) {
	    cm.warp(101073300,0);
        cm.dispose();
    }
  }
