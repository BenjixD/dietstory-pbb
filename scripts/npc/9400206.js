// Ashkaya   Guide Tree | The Afterlands


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
            cm.sendSimple("#b#L0#Land of Beginnings \r\n#L1#Land of Riches \r\n#L2#Land of Warriors \r\n#L3#Land of Innocence \r\n#L4#Land of Contemplation \r\n");

    }
    else if (status == 1) {
        switch (selection) {
        case 0: cm.warp(867113100,0);
                cm.dispose();
                break;
        case 1: cm.warp(867113300,0);
                cm.dispose();
                break;
        case 2: cm.warp(867113200,0);
                cm.dispose();
                break;
        case 3: cm.warp(867113500,0);
                cm.dispose();
                break;
        case 4: cm.warp(867113400,0);
                cm.dispose();
                break;
        }
    }
}
