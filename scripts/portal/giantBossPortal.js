// Gollux Boss Portals

function enter (pi) {
var mapid = pi.getPlayer().getMapId();
var portalid = pi.getPortal().getId();

switch (mapid) {

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

    switch(portalid) {
    case 2:
        if (pi.getMonsterCount(863010600) < 2) {
        pi.warp(863010700,0); // To Cleansed Heart   TODO: Add Gollux Coins Reward.
        pi.playerMessage(5,"-TODO- Gain Gollux Goins");
        } else {
        pi.playerMessage(5,"Eliminate all Monsters before leaving.");
        }

    break;
    }
break;

}

}	