// Fiona (9201095) - CWK Upgrade NPC
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
    cm.sendSimple("I can create a lot more powerful items, if you bring me some materials");
    }
    else if (status == 1) {
            var selStr = "Do you want to upgrade an item? \r\n#b";
            for (var i = 0; i < 2; i++) {
                selStr += "Hi\r\n";
            }
            cm.sendSimple(selStr + "#k");
    }

}