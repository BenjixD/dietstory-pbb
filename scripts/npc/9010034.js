// Voting Point NPC Cygnus

var status = -1;
var status2 = 0;
var items = [
/*Common*/ [[5211067, 3, 1, "1.2x EXP Card"], [5211068, 1, 0.08333, "1.5x EXP Card"], [5360042, 1, 0.08333, "2x Drop/Meso Card"], [5211068, 2, 0.1666, "1.5x EXP Card"], [5360042, 2, 0.1666, "2x Drop/Meso Card"], [5211068, 6, 0.5, "1.5x EXP Card"], [5360042, 5, 0.5, "2x Drop/Meso Card"], [5211068, 10, 1, "1.5x EXP Card"], [5360042, 8, 1, "2x Drop/Meso Card"], [5211046, 5, 0.125, "2x EXP Card"], [5211046, 10, 0.25, "2x EXP Card"], [5211046, 20, 0.5, "2x EXP Card"], [2501000, 10, -1, "Full AP Reset Scroll"], [2500003, 5, -1, "Full SP Reset Scroll"], [2450059, 2, -1, "+30% EXP (1 hour)"], [2450041, 3, -1, "+50% EXP (1 hour)"], [2433807, 6, -1, "+100% EXP ( 1 hour)"], [1122017, 4, 3, "Pendant of the Spirit"], [1122219, 5, 3, "+20% Drop, stacks with all"], [1122219, 10, 7, "+20% Drop, stacks with all"], [2022035, 4, 1, "Clone"]],
/*TestArray*/ [[2340000, 1, 10], [2340000, 2, 10]]
];
var itemowner = "Rental";

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
            cm.sendSimple("Hello! I'm the #r#eVoting Point NPC#n#k. If you have voted on our site, you will get a point each time! I see you have #e#r" + cm.getPlayer().getVPoints() + "#n#k vote points! I can redeem your points for cool things! What would you like...?\r\n\r\n#b#L0#Trade for Items#l\r\n#L1#Additional Pendant Slot (7 Days)(Character) for 20 vote points#l\r\n#L2#Additional Pendant Slot(7 Days)(Account) for 40 vote points#l\r\n#L3#Bits Sets#l#k");
    }
    else if (status == 1) {
        switch (selection) {
                case 0: select = selection;  // VP for items
                               var selStr = "Items? Well, these are the items you can't get anywhere else. Here's my selection...\r\n#b";
                               for (var i = 0; i < items[0].length; i++) {
                                   selStr += (items[0][i][2] < 1 ? "#L" + i + "##v" + items[0][i][0] + "#" + items[0][i][3] + " for #e" + items[0][i][1] + "#n#b vote points #b" + (items[0][i][2] > 0 ? "#b ...lasts #r#e" + ( Math.round( items[0][i][2] * 24 ) ) + "#n#b hours" : "") + "#b#l\r\n" : "#L" + i + "##v" + items[0][i][0] + "#" + items[0][i][3] + " for #e" + items[0][i][1] + "#n#b vote points #b" + (items[0][i][2] > 0 ? "#b ...lasts #r#e" + items[0][i][2] + "#n#b days" : "") + "#b#l\r\n");
                                   //selStr += "#L" + i + "##v" + items[0][i][0] + "#" + items[0][i][3] + " for #e" + items[0][i][1] + "#n#b points #b" + (items[0][i][2] > 0 ? + (items[0][i][2] < 1 ? : +"#b ...lasts #r#e" + ( items[0][i][2] * 24) + "#n#b hours" : +"#b ...lasts #r#e" + ( items[0][i][2] * 24) + "#n#b days") : "") + "#b#l\r\n";
                               }
                               cm.sendSimple(selStr + "#k");
                               status2 = 0
                               break;
                case 1:
                        if (cm.getPlayer().getVPoints() < 20) {
                                        cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
                                        cm.dispose();
                                        return;
                                    }
                                    cm.sendYesNo("Once you proceed with this selection, you can't go back! Are you sure you want Additional Pendant Slot (7 Days)(Character) for 20 Vote Points? After Completion, make sure to relog so it takes effect! ");
                                    status2 = 1;
                                    break;
                case 2:
                        if (cm.getPlayer().getVPoints() < 40) {
                                        cm.sendOk("You don't have enough voting points. You only have " + cm.getPlayer().getVPoints());
                                        cm.dispose();
                                        return;
                                    }
                                    cm.sendYesNo("Once you proceed with this selection, you can't go back! Are you sure you want Additional Pendant Slot (7 Days)(Account) for 20 Vote Points? After Completion, make sure to relog so it takes effect! ");
                                    status2 = 2;
                                    break;
                case 3: cm.sendSimple("Bit Sets!");
                        cm.dispose();
                        break;
        }
    }
    else if (status == 2) {
        switch (status2) {

            case 0:
                if (cm.getPlayer().getVPoints() < items[0][selection][1]) {
                cm.sendSimple("You don't have enough vote points for this item");
                cm.dispose();
                }
                else if (!cm.canHold(items[0][selection][0])) {
                cm.sendOk("You have no inventory space for this item.");
                cm.dispose();
                }
                else {
                cm.sendSimple("Thank you for the purchase");
                cm.getPlayer().setVPoints( cm.getPlayer().getVPoints() - (items[0][selection][1]));
                        if (items[0][selection][2] > 0) {
                        cm.gainItemPeriod(items[0][selection][0], 1, items[0][selection][2]);  // items period < 1 yet > 0   don't get their time-limit, though they should
                        }
                        else {
                        cm.gainItem(items[0][selection][0], 1);
                        }
                cm.dispose();

                }
            break;
            case 1:
                        cm.addPendantSlot(7);
                        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 20);
                        cm.sendOk("Thank you for the purchase");
                        cm.dispose();
                        break;

            case 2:
                        cm.addPendantSlot(7); // Account;   TODO: Make AddPendantSlot Account wide
                        cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 40);
                        cm.sendOk("Thank you for the purchase");
                        cm.dispose();
                        break;

        }
    }

}