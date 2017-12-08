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
    switch(portalid) {
    case 1: pi.warp(863010100,8); // To Road to Gollux
    break;
    case 2: pi.warp(863010210,1); // To Upper Right Leg
    break;
    }
break;



case 863010210: // Upper Right Leg
    switch(portalid) {
    case 1: pi.warp(863010200,2); // Lower Right Leg
    break;
    case 2: pi.warp(863010240,2); // To Abdomen
    break;
    }
break;



case 863010220: // Lower Left Leg
	switch(portalid){
	case 1: pi.warp(863010100,8); // To Bottom Map
	break;
	case 2: pi.warp(863010230,1); // To Upper Left Leg
    break;
    }
break;



case 863010230: // Upper Left Leg
    switch(portalid) {
    case 1: pi.warp(863010220,2); // To Lower Left Leg
    break;
    case 2: pi.warp(863010240,0); // To Abdomen
    break;
    }
break;



case 863010400: // Lower Right Torso
    switch(portalid) {
    case 1: pi.warp(863010410,1); // To Upper Right Torso
    break;
    case 2: pi.warp(863010100,6); // To Road To Gollux
    break;
    }
break;



case 863010410: // Upper Right Torso
    switch(portalid) {
    case 1: pi.warp(863010400,1); // to Lower Right Torso
    break;
    case 2: pi.warp(863010320,2); // Upper Right Arm
    break;
    }
break;



case 863010300: // Lower Left Torso
    switch(portalid) {
    case 1: pi.warp(863010310,1); // Upper Left Torso
    break;
    case 2: pi.warp(863010100,7); // To Road To Gollux
    break;
    }
break;



case 863010310: // Upper Left Torso
    switch(portalid) {
    case 1: pi.warp(863010300,1); // Lower Left Torso
    break;
    case 2: pi.warp(863010420,1); // Upper Left Arm
    break;
    }
break;



case 863010240: // Abdomen
    switch(portalid) {
    case 1: pi.warp(863010230,2); // To Left Upper Leg
    break;
    case 2: pi.warp(863010210,2); // To Right Upper Leg
    break;
    case 3: pi.warp(863010500,0); // To Heart
    break;
    }
break;



case 863010500: // Heart
    switch (portalid) {
    case 1: pi.warp(863010320,1); // Right Upper Arm
    break;
    case 2: pi.warp(863010240,0); // To abdomen
    break;
    case 3: pi.warp(863010600,0); // To head
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
    switch(portalid) {
    case 1: pi.warp(863010500,1); // To heart
    break;
    case 2: pi.warp(863010410,2); // To Upper Right Torso
    break;
    case 3: pi.warp(863010330,0); // Right Shoulder
    break;
    }
break;



case 863010420: // Upper Left Arm
    switch(portalid) {
    case 1: pi.warp(863010310,2); // To Upper Left Torso
    break;
    case 2: pi.warp(863010500,5); // To Heart
    break;
    case 3: pi.warp(863010430,0); // To Left Shoulder
    break;
    }
break;



case 863010330: // Right Shoulder
    switch(portalid) {
    case 1: pi.warp(863010320,3); // Upper Right Arm
    break;
    case 2: pi.warp(863010100,2); // Road to Gollux - Right side of the Map
    break;
    case 3: pi.warp(863010500,0); // To Heart
    break;
    }
break;



case 863010430: // Left Shoulder
    switch(portalid) {
    case 1: pi.warp(863010420,3); // Upper Left Arm
    break;
    case 2: pi.warp(863010100,3); // Road to Gollux - Left side of the Map
    break;
    case 3: pi.warp(863010500,0); // Heart
    break;
    }
break;



case 863010600: // Head

    switch(portalid) {
    case 2:
        if (pi.getMonsterCount(863010600) == 0) {
        pi.warp(863010700,0); // To Cleansed Heart   TODO: Add Gollux Coins Reward.
        } else {
        pi.playerMessage(5,"Eliminate all Monsters before leaving");
        }

    break;
    }
break;

}

}	