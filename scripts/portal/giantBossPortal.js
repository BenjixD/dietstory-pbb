// Gollux Boss Portals

function enter (pi) {
var mapid = pi.getPlayer().getMapId();
var portalid = pi.getPortal().getId();
var gcoin = 4310097;
var amount = 30;

switch (mapid) {

// Hell Gollux Portals
case 863010100: // Road to Gollux
    switch (portalid) {
    case 9: pi.warp(863010220,1); // To Bottom Left Leg
    break;
    case 7: pi.warp(863010300,2); // To Lower Left Torso
    break;
    case 6: pi.warp(863010400,2); // To Lower Right Torso
    break;
    }
break;



case 863010200: // Lower Right Leg
    if (pi.getMonsterCount(863010200) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010100,8); // To Road to Gollux
        break;
        case 2: pi.warp(863010210,1); // To Upper Right Leg
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010210: // Upper Right Leg
    if (pi.getMonsterCount(863010210) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010200,2); // Lower Right Leg
        break;
        case 2: pi.warp(863010240,2); // To Abdomen
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010220: // Lower Left Leg
    if (pi.getMonsterCount(863010220) == 0) {
        switch(portalid){
        case 1: pi.warp(863010100,8); // To Bottom Map
        break;
        case 2: pi.warp(863010230,1); // To Upper Left Leg
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010230: // Upper Left Leg
    if (pi.getMonsterCount(863010230) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010220,2); // To Lower Left Leg
        break;
        case 2: pi.warp(863010240,0); // To Abdomen
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010400: // Lower Right Torso
    if (pi.getMonsterCount(863010400) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010410,1); // To Upper Right Torso
        break;
        case 2: pi.warp(863010100,6); // To Road To Gollux
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010410: // Upper Right Torso
    if (pi.getMonsterCount(863010410) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010400,1); // to Lower Right Torso
        break;
        case 2: pi.warp(863010320,2); // Upper Right Arm
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010300: // Lower Left Torso
    if (pi.getMonsterCount(863010300) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010310,1); // Upper Left Torso
        break;
        case 2: pi.warp(863010100,7); // To Road To Gollux
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010310: // Upper Left Torso
    if (pi.getMonsterCount(863010310) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010300,1); // Lower Left Torso
        break;
        case 2: pi.warp(863010420,1); // Upper Left Arm
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010240: // Abdomen
    switch(portalid) {
    case 1:
        if (pi.getMonsterCount(863010240) == 0) {
            pi.warp(863010230,2); // To Left Upper Leg
        } else {

        }
    break;
    case 2:
        if (pi.getMonsterCount(863010240) == 0) {
            pi.warp(863010210,2); // To Right Upper Leg
        } else {

        }
    break;
    case 3:
        if (pi.getMonsterCount(863010240) == 0) {
            pi.warp(863010500,0); // To Heart
        } else {

        }
    break;
    }
break;



case 863010500: // Heart
    switch (portalid) {
    case 1: pi.warp(863010320,1); // Right Upper Arm
    break;
    case 2: pi.warp(863010240,0); // To abdomen
    break;
    case 3:
        if (pi.getMonsterCount(863010240) == 0 && pi.getMonsterCount(863010430) == 0 && pi.getMonsterCount(863010330) == 0 ) {
            pi.warp(863010600,0); // To head
        } else {
            pi.playerMessage(5,"You need to defeat the Abdomen and both Shoulders before entering the Head.");
        }

    break;
    case 4: pi.warp(863010330,0); // Right Shoulder
    break;
    case 5: pi.warp(863010420,2); // Left Upper Arm
    break;
    case 6: pi.warp(863010430,0); // Left Shoulder
    break;
    }
break;



case 863010320: // Upper Right Arm
    if (pi.getMonsterCount(863010320) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010500,1); // To heart
        break;
        case 2: pi.warp(863010410,2); // To Upper Right Torso
        break;
        case 3: pi.warp(863010330,0); // Right Shoulder
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010420: // Upper Left Arm
    if (pi.getMonsterCount(863010420) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010310,2); // To Upper Left Torso
        break;
        case 2: pi.warp(863010500,5); // To Heart
        break;
        case 3: pi.warp(863010430,0); // To Left Shoulder
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010330: // Right Shoulder
    if (pi.getMonsterCount(863010330) == 0) {
    switch(portalid) {
    case 1: pi.warp(863010320,3); // Upper Right Arm
    break;
    case 2: pi.warp(863010100,2); // Road to Gollux - Right side of the Map
    break;
    case 3:
        if (pi.getMonsterCount(863010330) == 0) {
        pi.warp(863010500,0); // Heart
        } else {

        }
    break;
    }
    } else {
    }
break;



case 863010430: // Left Shoulder
    if (pi.getMonsterCount(863010430) == 0) {
    switch(portalid) {
    case 1: pi.warp(863010420,3); // Upper Left Arm
    break;
    case 2: pi.warp(863010100,3); // Road to Gollux - Left side of the Map
    break;
    case 3:
        if (pi.getMonsterCount(863010430) == 0) {
        pi.warp(863010500,0); // Heart
        } else {

        }
    break;
    }
    } else {
    }
break;



case 863010600: // Head
var em = pi.getEventManager("HGolluxBattle");

    switch(portalid) {
    case 2:
        if (pi.getMonsterCount(863010600) < 2) {
        pi.warp(863010700,0); // To Cleansed Heart   TODO: Make Amount of Gcoins dependent on squad size.
        //pi.playerMessage(5,"Party of "+ pi.getParty().getMembers().size() +" Members");
        //pi.gainItem(gcoin,amount);
        //pi.playerMessage(5,"You have gained "+ amount +" Gollux coins.");

            if (em != null && em.getProperty("hell").equals("true") ){
                if (pi.getParty() != null) {
                switch (pi.getParty().getMembers().size()) {
                case 1:
                pi.gainItem(gcoin,30);
                pi.playerMessage(5,"You have gained "+ 30 +" Gollux coins.");
                break;

                case 2:
                pi.gainItem(gcoin,27);
                pi.playerMessage(5,"You have gained "+ 27 +" Gollux coins.");
                break;

                case 3:
                pi.gainItem(gcoin,26);
                pi.playerMessage(5,"You have gained "+ 26 +" Gollux coins.");
                break;

                case 4:
                pi.gainItem(gcoin,25);
                pi.playerMessage(5,"You have gained "+ 25 +" Gollux coins.");
                break;

                case 5:
                pi.gainItem(gcoin,23);
                pi.playerMessage(5,"You have gained "+ 23 +" Gollux coins.");
                break;

                case 6:
                pi.gainItem(gcoin,22);
                pi.playerMessage(5,"You have gained "+ 22 +" Gollux coins.");
                break;
                }
                } else {
                pi.gainItem(gcoin,30);
                pi.playerMessage(5,"You have gained "+ 30 +" Gollux coins.");
                }
            } else {
            }

        } else {
        pi.playerMessage(5,"Eliminate all Monsters before leaving.");
        //pi.playerMessage(5,"Party of "+ parseInt(pi.getParty().getMembers().size) +" Members");
        }

    break;
    }
break;







//Easy Gollux Portals

case 863010101: // Road to Gollux
    switch (portalid) {
    case 9: pi.warp(863010221,1); // To Bottom Left Leg
    break;
    case 7: pi.warp(863010301,2); // To Lower Left Torso
    break;
    case 6: pi.warp(863010401,2); // To Lower Right Torso
    break;
    }
break;



case 863010201: // Lower Right Leg
    if (pi.getMonsterCount(863010201) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010101,8); // To Road to Gollux
        break;
        case 2: pi.warp(863010211,1); // To Upper Right Leg
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010211: // Upper Right Leg
    if (pi.getMonsterCount(863010211) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010201,2); // Lower Right Leg
        break;
        case 2: pi.warp(863010241,2); // To Abdomen
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010221: // Lower Left Leg
    if (pi.getMonsterCount(863010221) == 0) {
        switch(portalid){
        case 1: pi.warp(863010101,8); // To Bottom Map
        break;
        case 2: pi.warp(863010231,1); // To Upper Left Leg
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010231: // Upper Left Leg
    if (pi.getMonsterCount(863010231) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010221,2); // To Lower Left Leg
        break;
        case 2: pi.warp(863010241,0); // To Abdomen
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010401: // Lower Right Torso
    if (pi.getMonsterCount(863010401) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010411,1); // To Upper Right Torso
        break;
        case 2: pi.warp(863010101,6); // To Road To Gollux
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010411: // Upper Right Torso
    if (pi.getMonsterCount(863010411) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010401,1); // to Lower Right Torso
        break;
        case 2: pi.warp(863010321,2); // Upper Right Arm
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010301: // Lower Left Torso
    if (pi.getMonsterCount(863010301) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010311,1); // Upper Left Torso
        break;
        case 2: pi.warp(863010101,7); // To Road To Gollux
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010311: // Upper Left Torso
    if (pi.getMonsterCount(863010311) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010301,1); // Lower Left Torso
        break;
        case 2: pi.warp(863010421,1); // Upper Left Arm
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010241: // Abdomen
    switch(portalid) {
    case 1:
        if (pi.getMonsterCount(863010241) == 0) {
            pi.warp(863010231,2); // To Left Upper Leg
        } else {

        }
    break;
    case 2:
        if (pi.getMonsterCount(863010241) == 0) {
            pi.warp(863010211,2); // To Right Upper Leg
        } else {

        }
    break;
    case 3:
        if (pi.getMonsterCount(863010241) == 0) {
            pi.warp(863010501,0); // To Heart
        } else {

        }
    break;
    }
break;



case 863010501: // Heart
    switch (portalid) {
    case 1: pi.warp(863010321,1); // Right Upper Arm
    break;
    case 2: pi.warp(863010241,0); // To abdomen
    break;
    case 3:
        if (pi.getMonsterCount(863010241) == 0 && pi.getMonsterCount(863010431) == 0 && pi.getMonsterCount(863010331) == 0 ) {
            pi.warp(863010601,0); // To head
        } else {
            pi.playerMessage(5,"You need to defeat the Abdomen and both Shoulders before entering the Head.");
        }

    break;
    case 4: pi.warp(863010331,0); // Right Shoulder
    break;
    case 5: pi.warp(863010421,2); // Left Upper Arm
    break;
    case 6: pi.warp(863010431,0); // Left Shoulder
    break;
    }
break;



case 863010321: // Upper Right Arm
    if (pi.getMonsterCount(863010321) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010501,1); // To heart
        break;
        case 2: pi.warp(863010411,2); // To Upper Right Torso
        break;
        case 3: pi.warp(863010331,0); // Right Shoulder
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010421: // Upper Left Arm
    if (pi.getMonsterCount(863010421) == 0) {
        switch(portalid) {
        case 1: pi.warp(863010311,2); // To Upper Left Torso
        break;
        case 2: pi.warp(863010501,5); // To Heart
        break;
        case 3: pi.warp(863010431,0); // To Left Shoulder
        break;
        }
    } else {pi.playerMessage(5,"Eliminate all monsters.");}
break;



case 863010331: // Right Shoulder
    if (pi.getMonsterCount(863010331) == 0) {
    switch(portalid) {
    case 1: pi.warp(863010321,3); // Upper Right Arm
    break;
    case 2: pi.warp(863010101,2); // Road to Gollux - Right side of the Map
    break;
    case 3:
        if (pi.getMonsterCount(863010331) == 0) {
        pi.warp(863010501,0); // Heart
        } else {

        }
    break;
    }
    } else {
    }
break;



case 863010431: // Left Shoulder
    if (pi.getMonsterCount(863010431) == 0) {
    switch(portalid) {
    case 1: pi.warp(863010421,3); // Upper Left Arm
    break;
    case 2: pi.warp(863010101,3); // Road to Gollux - Left side of the Map
    break;
    case 3:
        if (pi.getMonsterCount(863010431) == 0) {
        pi.warp(863010501,0); // Heart
        } else {

        }
    break;
    }
    } else {
    }
break;



case 863010601: // Head
var em = pi.getEventManager("HGolluxBattle");

    switch(portalid) {
    case 2:
        if (pi.getMonsterCount(863010601) < 2) {
        pi.warp(863010701,0); // To Cleansed Heart   TODO: Make Amount of Gcoins dependent on squad size.
        //pi.playerMessage(5,"Party of "+ pi.getParty().getMembers().size() +" Members");
        //pi.gainItem(gcoin,amount);
        //pi.playerMessage(5,"You have gained "+ amount +" Gollux coins.");

            if (em != null && em.getProperty("hell").equals("true") ){
                if (pi.getParty() != null) {
                switch (pi.getParty().getMembers().size()) {
                case 1:
                pi.gainItem(gcoin,30);
                pi.playerMessage(5,"You have gained "+ 30 +" Gollux coins.");
                break;

                case 2:
                pi.gainItem(gcoin,27);
                pi.playerMessage(5,"You have gained "+ 27 +" Gollux coins.");
                break;

                case 3:
                pi.gainItem(gcoin,26);
                pi.playerMessage(5,"You have gained "+ 26 +" Gollux coins.");
                break;

                case 4:
                pi.gainItem(gcoin,25);
                pi.playerMessage(5,"You have gained "+ 25 +" Gollux coins.");
                break;

                case 5:
                pi.gainItem(gcoin,23);
                pi.playerMessage(5,"You have gained "+ 23 +" Gollux coins.");
                break;

                case 6:
                pi.gainItem(gcoin,22);
                pi.playerMessage(5,"You have gained "+ 22 +" Gollux coins.");
                break;
                }
                } else {
                pi.gainItem(gcoin,30);
                pi.playerMessage(5,"You have gained "+ 30 +" Gollux coins.");
                }
            } else {
            }

        } else {
        pi.playerMessage(5,"Eliminate all Monsters before leaving.");
        //pi.playerMessage(5,"Party of "+ parseInt(pi.getParty().getMembers().size) +" Members");
        }

    break;
    }

break;

}

}	