// Agent W Donor NPC Donation NPC Donation Points DP (9000039)

var status2 = 0;
var status3 = 0;
var status3_8sub = 0;
var status = -1;


var rlsid = 3993003;
var mlcid = 4310008;
var rbid = 4310016;
var pendantslot = [["30 Days for the Character", 400], ["90 Days for the Character", 1000], ["Permanent for the Character", 2000], ["30 Days for the Account", 1000], ["90 Days for the Account", 2500], ["Permanent for the Account", 5000] ];
var donorskills = [];
var items = [
/*Items*/ [[5211046, 500, 1,"2x EXP Card (does not stack with VP EXP card)"], [5211046, 2500, 7, "2x EXP Card (does not stack with VP EXP card)"], [5360042, 1000, 7, "2x Drop/Meso Card (does not stack with VP Drop/Meso card)"], [1122219, 500, 30, "+20% Drop, stacks with all"], [1122219, 1500, -1, "+20% Drop, stacks with all"], [1132183, 1500, -1, "Cash Belt (stacks with others, cannot be worn by Zero)"], [1122210, 1500, -1, "Cash Pendant (stacks with other Pendants, cannot wear two of the same pendant at the same time)"], [1152101, 1500, -1, "Cash Shoulder (stacks with others, cannot be worn by Zero)"], /*[Aura Ring+2, 750, -1, "Aura Ring(+2) (cannot wear two of the same ring at the same time)"], [Aura Ring+5, 1000, -1, "Aura Ring(+5) (cannot wear two of the same ring at the same time)"], [Dark Devil Ring, 1000, -1, "Dark Devil Ring (cannot wear two fo the same ring at the same time)"], [Grin Ring, 2000, -1, "Grin Ring (cannot wear two of the same ring at the same time)"],*/ [1002959, 2000, -1, "Donor Cap (cosmetic item)"], [4030003, 180, 0.5, "Pet itemvac"], [4030003, 300, 1, "Pet itemvac"], [4030003, 700, 3, "Pet itemvac"], [4030003, 1500, 7, "Pet itemvac"], [4030003, 4500, 30, "Pet itemvac"], [1672020, 5000, -1, "Lidium Heart (Permanent, Level 30)"], [1672027, 5000, -1, "Upgrade Lidium to Superior Lidium (Permanent, level 80)"], [1672040, 2500, -1, "Upgrade Superior Lidium to Titanium (Permanent, level 100)"], [1672069, 7500, -1, "Upgrade Titanium to Outlaw (Permanent, level 150)"], /*[5062010, 5, -1, "Black Cube"], [5062090, 10, -1, "Memory Cube (Enhanced Black Cube)"],*/ [5064300, 1000, -1, "Guardian Scroll"], [5064400, 2500, -1, "Return Scroll"], [2022035, 400, 7, "Clone"], [2022035, 1500, 30, "Clone"], [5220097, 1000, -1, "Chair Gachapon Ticket"]/*, [Damage skins, 1000, -1, "Dmg Skin Name"]*/ ],
/*Chairs*/ [[3015369, 1000, -1], [3015253, 1000, -1], [3015254, 1000, -1], [3015255, 1000, -1], [3015096, 1000, -1], [3015551, 1000, -1], [3015331, 1000, -1], [3015514, 1000, -1], [3012031, 1000, -1], [3015497, 1000, -1], [3015541, 1000, -1], [3015272, 1000, -1], [3015263, 1000, -1], [3015236, 1000, -1], [3015543, 1000, -1], [3015235, 1000, -1], [3015234, 1000, -1], [3015512, 1000, -1], [3010839, 1000, -1], [3010964, 1000, -1], [3015496, 1000, -1], [3010812, 1000, -1], [3012028, 1000, -1], [3015552, 1000, -1], [3010662, 1000, -1], [3015173, 1000, -1], [3010931, 1000, -1],  [3014019, 1000, -1], [3010932, 1000, -1], [3010838, 1000, -1], [3015610, 1000, -1], [3010700, 1000, -1], [3010681, 1000, -1], [3010519, 1000, -1], [3010651, 1000, -1], [3010652, 1000, -1], [3010653, 1000, -1], [3010654, 1000, -1], [3010655, 1000, -1], [3010656, 1000, -1], [3015014, 1000, -1], [3015005, 1000, -1], [3015002, 1000, -1], [3015034, 1000, -1], [3015125, 1000, -1], [3015162, 1000, -1], [3015163, 1000, -1], [3015164, 1000, -1], [3015160, 1000, -1], [3015183, 1000, -1], [3015193, 1000, -1], [3015195, 1000, -1], [3015215, 1000, -1], [3015213, 1000, -1], [3015304, 1000, -1], [3015366, 1000, -1], [3015449, 1000, -1], [3015420, 1000, -1], [3015433, 1000, -1],  [3015447, 1000, -1], [3015437, 1000, -1], [3015468, 1000, -1], [3015498, 1000, -1], [3015482, 1000, -1], [3015520, 1000, -1], [3015526, 1000, -1], [3015573, 1000, -1], [3015580, 1000, -1], [3015586, 1000, -1], [3015598, 1000, -1], [3015603, 1000, -1], [3015600, 1000, -1], [3015609, 1000, -1], [3015608, 1000, -1], [3015607, 1000, -1], [3015606, 1000, -1], [3015605, 1000, -1], [3015604, 1000, -1], [3015637, 1000, -1], [3015638, 1000, -1], [3015646, 1000, -1], [3015659, 1000, -1], [3015660, 1000, -1], [3015665, 1000, -1], [3015661, 1000, -1], [3015694, 1000, -1], [3015695, 1000, -1], [3015696, 1000, -1], [3015697, 1000, -1], [3015698, 1000, -1], [3015699, 1000, -1], [3015701, 1000, -1], [3015744, 1000, -1], [3015743, 1000, -1], [3010417, 1000, -1], [3010416, 1000, -1], [3010676, 1000, -1], [3010680, 1000, -1], [3010820, 1000, -1], [3010842, 1000, -1], [3010843, 1000, -1], [3010853, 1000, -1], [3010848, 1000, -1], [3010854, 1000, -1], [3010968, 1000, -1], [3010979, 1000, -1], [3010978, 1000, -1], [3010980, 1000, -1], [3012032, 1000, -1], [3013009, 1000, -1], [3014009, 1000, -1], [3014010, 1000, -1], [3014013, 1000, -1], [3014014, 1000, -1], [3014015, 1000, -1], [3014016, 1000, -1], [3014017, 1000, -1], [3014018, 1000, -1], [3015001, 1500, -1], [3015438, 1500, -1], [3014011, 1500, -1]],
/*Skills*/ [[5610000, 10000, -1], [5610001, 10000, -1], [2532000, 50000, -1], [2530000, 35000, -1], [2531000, 100000, -1], [5534000, 20000, -1], [2532004, 100000, -1], [2530006, 100000, -1], [2533001, 400000, -1], [2048400, 5000, -1], [2470007, 10000, -1]]
];
var select, select2;

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


    if (status == 0)
    {
        cm.sendSimple("#b#L100#Trade points for items#l \r\n#L101#Give a slot to an existing equipment#l \r\n#L102#Trade points for chairs#l \r\n#L103#Royal hair (3000 points) (account)#l \r\n#L104#Trade points for skills (account)#l \r\n#L105#Trade points for passive buffs (account)#l \r\n#L106#Change name for 1000 points#l \r\n#L107#Additional Pendant Slot#l \r\n#L108#Exchange Tradable Currency to points#l");
    }


    else if (status == 1)
    {
        //status += selection;
        switch (selection) {
        case 100: select = selection;  // Points for Items
                       var selStr = "Alright, I can trade these items for points...\r\n#b";
                       for (var i = 0; i < items[0].length; i++) {
                           selStr += (items[0][i][2] < 1 ? "#L" + i + "##v" + items[0][i][0] + "#" + items[0][i][3] + " for #e" + items[0][i][1] + "#n#b points #b" + (items[0][i][2] > 0 ? "#b ...lasts #r#e" + ( items[0][i][2] * 24 ) + "#n#b hours" : "") + "#b#l\r\n" : "#L" + i + "##v" + items[0][i][0] + "#" + items[0][i][3] + " for #e" + items[0][i][1] + "#n#b points #b" + (items[0][i][2] > 0 ? "#b ...lasts #r#e" + items[0][i][2] + "#n#b days" : "") + "#b#l\r\n");
                       }
                       cm.sendSimple(selStr + "#k");
                       status2 = 1;
                       break;

        case 101: cm.sendSimple("Alright. I can only give a slot to equipments that have 0 upgrade slots and have been hammered twice. You can only give a slot up to 5 times to a certain item. It will cost 500 points, and 1000 points for items above 2 slots upgraded.\r\n\r\nSelect the equipment you have below:");
                    status2 = 2;
                    break;

                            /*var bbb = false;
                              var selStr = "Alright. I can #eonly give a slot to equipments that have 0 upgrade slots and have been hammered twice. You can only give a slot up to 10 times to a certain item. It will cost #b#k points, and #b#k points for items above 5 slots upgraded.#n Select the equipment you have below(equipped items are not included):\r\n\r\n#b";
                              for (var i = 0; i <= inv.getSlotLimit(); i++) {
                                  slot.push(i);
                                  var it = inv.getItem(i);
                                  if (it == null || it.getUpgradeSlots() > 0 || it.getViciousHammer() < 2 || it.getViciousHammer() > 6) {
                                      continue;
                                  }
                                  var itemid = it.getItemId();
                                  //bwg - 7, with hammer is 9.
                                  //therefore, we should make the max slots (natural+7)
                                  if (cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080 || cm.isCash(itemid)) {
                                      continue;
                                  }
                                  bbb = true;
                                  selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l\r\n";
                              }
                              if (!bbb) {
                                  cm.sendOk("You don't have any equipments I can enhance. I can #eonly enhance equipments that have 0 upgrade slots and have been hammered twice#n.This does not include cash items.");
                                  cm.dispose();
                                  return;
                              }
                              cm.sendSimple(selStr + "#k");*/


        case 102: select = selection;  // Points for Chairs
                       var selStr = "Alright, I can trade these items for points...\r\n#b";
                       for (var i = 0; i < items[1].length; i++) {
                           selStr += (items[1][i][2] < 1 ? "#L" + i + "##v" + items[1][i][0] + "##t" + items[1][i][0] + "# for #e" + items[1][i][1] + "#n#b points #b" + (items[1][i][2] > 0 ? "#b ...lasts #r#e" + ( items[1][i][2] * 24 ) + "#n#b hours" : "") + "#b#l\r\n" : "#L" + i + "##v" + items[1][i][0] + "#" + items[1][i][3] + " for #e" + items[1][i][1] + "#n#b points #b" + (items[1][i][2] > 0 ? "#b ...lasts #r#e" + items[1][i][2] + "#n#b days" : "") + "#b#l\r\n");
                       }
                       cm.sendSimple(selStr + "#k"); // 121 chairs
                       status2 = 3;
                       break;
        case 103: //Royal Hair
        case 104: //Trade points for skills (account)
        case 105: //Trade points for passive buffs (account)
        case 106: //cm.sendGetText("Please enter the name you wish to change to. (Entering in a name that you own on this account will swap your name with that character's name)",4,12);
        case 107: select = selection; //Add Pendant Slot
                       var selStr = "\r\n#b";
                       for (var i = 0; i < pendantslot.length; i++) {
                           selStr += ("#L" + i + "#" + pendantslot[i][0] + " - " + pendantslot[i][1] + " points#l\r\n");
                       }
                       cm.sendSimple(selStr + "#k");
                       status2 = 7;
                       break;
        case 108: cm.sendSimple("What would you like to exchange?\r\nYou have #r" + cm.getPlayer().getDPoints() + "#k Donor Points. \r\n \r\n#b#L1#Red Luck Sacks to Points(1000)#l \r\n#L2#Points(1000) to Red Luck Sacks#l \r\n\r\n#L3#Moonlight Coins to Points(100)#l \r\n#L4#Points(100) to Moonlight Coins#l \r\n\r\n#L5#Red Buttons to Points(10)#l \r\n#L6#Points(10) to Red Buttons#l#k");
                  status2 = 8;
                  break;
        case 109:

    }
    }


    else if (status == 2) {
        switch (status2) {
        case 1:
                        if (cm.getPlayer().getDPoints() < items[0][selection][1]) {
                        cm.sendSimple("You don't have enough donor points for this item");
                        cm.dispose();
                        }
                        else if (!cm.canHold(items[0][selection][0])) {
                        cm.sendOk("You have no inventory space for this item.");
                        cm.dispose();
                        }
                        else {
                        cm.sendSimple("Thank you for the purchase");
                        cm.getPlayer().setDPoints( cm.getPlayer().getDPoints() - (items[0][selection][1]));
                                if (items[0][selection][2] > 0) {
                                cm.gainItemPeriod(items[0][selection][0], 1, items[0][selection][2]);  // items period < 1 yet > 0   don't get their time-limit, though they should
                                }
                                else {
                                cm.gainItem(items[0][selection][0], 1);
                                }
                        cm.dispose();

                        }
                    break;

        case 2: cm.sendSimple("Slot - 2");
                cm.dispose();
                break;

        case 3:
                        if (cm.getPlayer().getDPoints() < items[1][selection][1]) {
                        cm.sendSimple("You don't have enough donor points for this item");
                        cm.dispose();
                        }
                        else if (!cm.canHold(items[1][selection][0])) {
                        cm.sendOk("You have no inventory space for this item.");
                        cm.dispose();
                        }
                        else {
                        cm.sendSimple("Thank you for the purchase");
                        cm.getPlayer().setDPoints( cm.getPlayer().getDPoints() - (items[1][selection][1]));
                                if (items[1][selection][2] > 0) {
                                cm.gainItemPeriod(items[1][selection][0], 1, items[1][selection][2]);  // items period <1   yet >0   don't get their time-limit, though they should
                                }
                                else {
                                cm.gainItem(items[1][selection][0], 1);
                                }
                        cm.dispose();

                        }
                    break;
        case 7:
            switch (selection) {
            case 0: if(cm.getPlayer().getDPoints() < pendantslot[0][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(30); // Character-Bound
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[0][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            case 1: if(cm.getPlayer().getDPoints() < pendantslot[1][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(90); // Character-Bound
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[1][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            case 2: if(cm.getPlayer().getDPoints() < pendantslot[2][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(9999); // Character-Bound
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[2][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            case 3: if(cm.getPlayer().getDPoints() < pendantslot[3][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(30); // Account-Wide
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[3][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            case 4: if(cm.getPlayer().getDPoints() < pendantslot[4][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(90); // Account-Wide
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[4][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            case 5: if(cm.getPlayer().getDPoints() < pendantslot[5][1]) {
                    cm.sendSimple("You don't have enough donor points for this item");
                    cm.dispose();
                    return;
                    }
                    cm.addPendantSlot(9999); // Account-Wide
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints() - pendantslot[5][1]);
                    cm.sendOk("Thank you for the purchase");

                    status3 = 7;
            break;
            }
        break;




        case 8:
            switch (selection) {
            case 1: cm.sendGetNumber("How many Red Luck Sacks would you like to trade in for donor points? \r\n",cm.itemQuantity(rlsid),1,cm.itemQuantity(rlsid));
                    status3 = 8;
                    status3_8sub = 1;
                    break;
            case 2: cm.sendGetNumber("How many 1000 donor points would you like to trade in for Red Luck Sacks? \r\n", (Math.floor((cm.getPlayer().getDPoints()/1000))), 1, Math.floor((cm.getPlayer().getDPoints()/1000)));
                    status3 = 8;
                    status3_8sub = 2;
                    break;
            case 3: cm.sendGetNumber("How many Moonlight Coins would you like to trade in for donor points? \r\n",cm.itemQuantity(mlcid),1,cm.itemQuantity(mlcid));
                    status3 = 8;
                    status3_8sub = 3;
                    break;
            case 4: cm.sendGetNumber("How many 100 donor points would you like to trade in for Moonlight Coins? \r\n",(Math.floor(cm.getPlayer().getDPoints()/100)), 1, Math.floor((cm.getPlayer().getDPoints()/100)));
                    status3 = 8;
                    status3_8sub = 4;
                    break;
            case 5: cm.sendGetNumber("How many Red Buttons would you like to trade in for donor points? \r\n",cm.itemQuantity(rbid),1,cm.itemQuantity(rbid));
                    status3 = 8;
                    status3_8sub = 5;
                    break;
            case 6: cm.sendGetNumber("How many 10 donor points would you like to trade in for Red Buttons? \r\n",(Math.floor(cm.getPlayer().getDPoints()/10)), 1, Math.floor((cm.getPlayer().getDPoints()/10)));
                    status3 = 8;
                    status3_8sub = 6;
                    break;
            }
            break;

            }
            }
    else if (status == 3) {
        switch (status3) {


        case 7: cm.dispose();
                cm.warp(cm.getMapId());

        case 8:
            switch (status3_8sub) {
            case 1: cm.sendSimple("You have lost #r" + selection + "#k Red Luck Sacks, and gained #r" + (selection * 1000) + "#k donor points.");
                    cm.gainItem(rlsid,(selection*-1));
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()+(selection*1000));
                    cm.dispose();
                    break;
            case 2: if (!cm.canHold(rlsid)){
                             cm.sendSimple("You don't have enough inventory space");
                             cm.dispose();
                             return;
                             }
                    cm.sendSimple("You have lost #r" + (selection * 1000) + "#k donor points, and gained #r" +selection+ "#k Red Luck Sacks.");
                    cm.gainItem(rlsid, selection);
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()-(selection*1000));
                    cm.dispose();
                    break;
            case 3: cm.sendSimple("You have lost #r" + selection + "#k Moonlight Coins, and gained #r" + (selection * 100) + "#k donor points.");
                    cm.gainItem(mlcid,(selection*-1));
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()+(selection*100));
                    cm.dispose();
                    break;
            case 4: if (!cm.canHold(mlcid)){
                             cm.sendSimple("You don't have enough inventory space");
                             cm.dispose();
                             return;
                             }
                    cm.sendSimple("You have lost #r" + (selection * 100) + "#k donor points, and gained #r" +selection+ "#k Moonlight Coins.");
                    cm.gainItem(mlcid, selection);
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()-(selection*100));
                    cm.dispose();
                    break;
            case 5: cm.sendSimple("You have lost #r" + selection + "#k Red Buttons, and gained #r" + (selection * 10) + "#k donor points.");
                    cm.gainItem(rbid,(selection*-1));
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()+(selection*10));
                    cm.dispose();
                    break;
            case 6: if (!cm.canHold(rbid)){
                             cm.sendSimple("You don't have enough inventory space");
                             cm.dispose();
                             return;
                             }
                    cm.sendSimple("You have lost #r" + (selection * 10) + "#k donor points, and gained #r" +selection+ "#k Red Buttons.");
                    cm.gainItem(rbid, selection);
                    cm.getPlayer().setDPoints(cm.getPlayer().getDPoints()-(selection*10));
                    cm.dispose();
                    break;
            }



        break;
        }

    }

}






