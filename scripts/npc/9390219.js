// Sweetwater NPC Pietreno - 9390219
var select;
var select2;
var eqp = 0;

var items = [

/*Gear or Weapons*/ [
                       /*Gear*/             [1003976, 1, 1], // Hat
                                            [1052669, 1, 1], // Suit
                                            [1082556, 1, 1], // Gloves
                                            [1072870, 1, 1], // Boots
                                            [1102623, 1, 1], // Cape
                                            [1132247, 1, 1], // Belt

                       /*Accessories*/      [1012438, 2, 1], // Tattoo
                                            [1022211, 2, 1], // Glasses
                                            [1122269, 2, 1], // Pendant
                                            [1032224, 2, 1], // Earring
                                            [1152160, 2, 1], // Shoulder

                       /*Weapons*/          [1302297, 3, 1], // 1H sword
                                            [1312173, 3, 1], // 1H axe
                                            [1322223, 3, 1], // 1H mace
                                            [1402220, 3, 1], // 2H sword
                                            [1412152, 3, 1], // 2H axe
                                            [1422158, 3, 1], // 2H mace
                                            [1432187, 3, 1], // Spear
                                            [1442242, 3, 1], // Polearm
                                            [1382231, 3, 1], // Staff
                                            [1372195, 3, 1], // Wand
                                            [1452226, 3, 1], // Bow
                                            [1462213, 3, 1], // Crossbow
                                            [1472235, 3, 1], // Claw
                                            [1332247, 3, 1], // Dagger
                                            [1342090, 3, 1], // Katara
                                            [1482189, 3, 1], // Knuckle
                                            [1492199, 3, 1], // Gun
                                            [1532118, 3, 1], // Cannon
                                            [1522113, 3, 1], // Dual Bow Gun
                                            [1362109, 3, 1], // Cane
                                            [1212089, 3, 1], // Shining Rod
                                            [1232084, 3, 1], // Desperado
                                            [1242090, 3, 1], // Whip blade
                                            [1542072, 3, 1], // Katana
                                            [1552072, 3, 1], // Fan
                                            [1222084, 3, 1], // Soul Shooter
                                            [1252033, 3, 1], // Scepter
                                            [1262029, 3, 1], // Psy-Limiter
                                            [1582025, 3, 1], // Arm Cannon
                                            [2048909, 3, 2], // Zero weapon scroll

                                            [1092113, 2, 1], // Terminus Defender (Shield - Warrior)
                                            [1092089, 2, 1], // Deimos Sage Shield (Shield - Mage)
                                            [1092088, 2, 1], // Deimos Shadow Shield (Shield - Thief)

                                            [1352206, 2, 1], // Medal (Hero)
                                            [1352216, 2, 1], // Rosary (Paladin)
                                            [1352226, 2, 1], // Flower Chain (Dark Knight)
                                            [1352236, 2, 1], // Flaming Book (F/P)
                                            [1352246, 2, 1], // Damp Book (I/L)
                                            [1352256, 2, 1], // Golden Book (Bishop)
                                            [1352266, 2, 1], // Feather (Bowmaster)
                                            [1352276, 2, 1], // Wreath (Marksman)
                                            [1352296, 2, 1], // Charm (Night Lord)
                                            [1352286, 2, 1], // Purple Shadow (Shadower)
                                            [1352906, 2, 1], // Skull Armour (Buccaneer)
                                            [1352916, 2, 1], // Falcon Eye (Corsair)
                                            [1352928, 2, 1], // Fire Bomb (Cannoneer)
                                            [1352824, 2, 1], // Orion Fist (Jett)
                                            [1352975, 2, 1], // Floral Jewel (Knights of Cygnus)
                                            [1352935, 2, 1], // Ballast (Aran)
                                            [1352945, 2, 1], // Dragon Legacy (Evan)
                                            [1352009, 2, 1], // Magic Arrow (Mercedes)
                                            [1352109, 2, 1], // Carte (Phantom)
                                            [1353105, 2, 1], // Fox Marble (Shade)
                                            [1352406, 2, 1], // Soul Orb (Luminous)
                                            [1099011, 2, 1], // Accursed Shield (Demons)
                                            [1352957, 2, 1], // Marble (Battle Mage)
                                            [1352967, 2, 1], // Arrowhead (Wild Hunter)
                                            [1352707, 2, 1], // Magnum (Mechanic)
                                            [1353006, 2, 1], // Controller (Xenon)
                                            [1353405, 2, 1], // Charges (Blaster)
                                            [1352807, 2, 1], // Wakizashi (Hayato)
                                            [1098006, 2, 1], // Soul Shield (Mihile)
                                            [1352506, 2, 1], // Dragon Essence (Kaiser)
                                            [1352606, 2, 1], // Soul Ring (Angelic Buster)
                                            [1352815, 2, 1], // Magical Whisper (Beast Tamer)
                                            [1353206, 2, 1], // Chess Piece (Kinesis)
                                        ],


/*Equip Cost = 1*/                      [
                                            [4310097, 45],       // Gollux Coin
                                            [2432009, 45],       // Black Mage's Token
                                            [4310156, 60],       // AbsoLab Coin
                                            [4021030, 10],       // Spirit Stone
                                            [4021029, 50],       // Condensed Spirit
                                            [4310093, 100],      // Tynerum Shard
                                            [4310100, 1500],     // Denaro
                                            [4310092, 50],       // Kritias Coin
                                            [4310091, 100],      // Anheim Coin
                                            [4021031, 1000],     // Twisted Time
                                          //1,000,000,000 Mesos
                                          //10,000,000 Nx
                                        ],


/*Accessories Cost = 2*/                [
                                            [4310097, 45],       // Gollux Coin
                                            [2432009, 30],       // Black Mage's Token
                                            [4310156, 45],       // AbsoLab Coin
                                            [4021030, 7],        // Spirit Stone
                                            [4021029, 50],       // Condensed Spirit
                                            [4310093, 100],      // Tynerum Shard
                                            [4310100, 1000],     // Denaro
                                            [4310092, 50],       // Kritias Coin
                                            [4310091, 100],      // Anheim Coin
                                            [4021031, 1000],     // Twisted Time
                                          //750,000,000 Mesos
                                          //7,500,000 Nx
                                        ],


/*Weapon Cost = 3*/                     [
                                            [4310097, 90],       // Gollux Coin
                                            [2432009, 60],       // Black Mage's Token
                                            [4310156, 90],       // AbsoLab Coin
                                            [4021030, 15],       // Spirit Stone
                                            [4021029, 50],       // Condensed Spirit
                                            [4310093, 100],      // Tynerum Shard
                                            [4310100, 2000],     // Denaro
                                            [4310092, 50],       // Kritias Coin
                                            [4310091, 100],      // Anheim Coin
                                            [4021031, 1500],     // Twisted Time
                                          //1,500,000,000 Mesos
                                          //15,000,000 Nx
                                        ],

/*Commerci Gear */                      [
                                            [1003984, 1], // Commerci Hat
                                            [1052673, 1], // Commerci Suit
                                            [1082559, 1], // Commerci Gloves
                                            [1072874, 1], // Commerci Shoes
                                            [1102626, 1], // Commerci Cape
                                            [1132248, 1], // Commerci Belt

                                            [1012439, 1], // Commerci Tattoo
                                            [1022212, 1], // Commerci Glasses
                                            [1122272, 1], // Commerci Pendant
                                            [1032225, 1], // Commerci Earrings
                                            [1152161, 1], // Commerci Shoulder

                                            [1302299, 1], // Commerci Sword
                                            [1312174, 1], // Commerci Axe
                                            [1322224, 1], // Commerci Mace
                                            [1402222, 1], // Commerci 2H sword
                                            [1412153, 1], // Commerci 2H axe
                                            [1422159, 1], // Commerci 2H mace
                                            [1432189, 1], // Commerci Spear
                                            [1442243, 1], // Commerci Polearm
                                            [1382232, 1], // Commerci Staff
                                            [1372196, 1], // Commerci Wand
                                            [1452227, 1], // Commerci Bow
                                            [1462214, 1], // Commerci Crossbow
                                            [1472236, 1], // Commerci Claw
                                            [1332249, 1], // Commerci Dagger
                                            [1342091, 1], // Commerci Katara
                                            [1482190, 1], // Commerci Knuckle
                                            [1492200, 1], // Commerci Gun
                                            [1532119, 1], // Commerci Hand Cannon
                                            [1522114, 1], // Commerci Dual Bow Gun
                                            [1362110, 1], // Commerci Cane
                                            [1212090, 1], // Commerci Shining Rod
                                            [1232085, 1], // Commerci Desperado
                                            [1242091, 1], // Commerci Whip blade
                                            [1542073, 1], // Commerci Katana
                                            [1552073, 1], // Commerci Fan
                                            [1222085, 1], // Commerci Soul Shooter
                                            [1252032, 1], // Commerci Scepter
                                            [1262038, 1], // Commerci Psy-Limiter
                                            [1582024, 1], // Arm Cannon
                                            [2048910, 2], // Black Anniversary Zero weapon scroll

                                            [1092093, 1], // Fearless Kite Shield (Shield - Warrior)
                                            [1092092, 1], // Fearless Prelude (Shield - Mage)
                                            [1092094, 1], // Fearless Wristguard (Shield - Thief)

                                            [1352205, 1], // Black Medal (Hero)
                                            [1352215, 1], // Black Rosary (Paladin)
                                            [1352225, 1], // Black Flower Chain (Dark Knight)
                                            [1352235, 1], // Black Flaming Book (F/P)
                                            [1352245, 1], // Black Damp Book (I/L)
                                            [1352255, 1], // Black Golden Book (Bishop)
                                            [1352265, 1], // Black Feather (Bowmaster)
                                            [1352275, 1], // Black Wreath (Marksman)
                                            [1352295, 1], // Black Charm (Night Lord)
                                            [1352285, 1], // Black Purple Shadow (Shadower)
                                            [1352905, 1], // Black Skull Armour (Buccaneer)
                                            [1352915, 1], // Black Falcon Eye (Corsair)
                                            [1352925, 1], // Black Fire Bomb (Cannoneer)
                                            [1352825, 1], // Black Orion Fist (Jett)
                                            [1352974, 1], // Black Floral Jewel (Knights of Cygnus)
                                            [1352934, 1], // Black Ballast (Aran)
                                            [1352944, 1], // Black Dragon Legacy (Evan)
                                            [1352008, 1], // Black Magic Arrow (Mercedes)
                                            [1352108, 1], // Black Carte (Phantom)
                                            [1353104, 1], // Black Fox Marble (Shade)
                                            [1352405, 1], // Black Soul Orb (Luminous)
                                            [1099010, 1], // Black Accursed Shield (Demons)
                                            [1352956, 1], // Black Marble (Battle Mage)
                                            [1352966, 1], // Black Arrowhead (Wild Hunter)
                                            [1352706, 1], // Black Magnum (Mechanic)
                                            [1353005, 1], // Black Controller (Xenon)
                                            [1353404, 1], // Black Charges (Blaster)
                                            [1352806, 1], // Black Wakizashi (Hayato)
                                            [1098005, 1], // Soul Shield (Mihile)
                                            [1352505, 1], // Dragon Essence (Kaiser)
                                            [1352605, 1], // Soul Ring (Angelic Buster)
                                            [1352814, 1], // Magical Whisper (Beast Tamer)
                                            [1353204, 1]  // Chess Piece (Kinesis)

                                        ]

];


function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

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
        var selStr = "What would you like to do? #b\r\n#L205#Transpose Sweetwater#l\r\n#L206#Disassemble Sweetwater Equips#l\r\n#L207#Disassemble AbsoLab Equips#l\r\n\r\n";
        for (var i = 0; i < items[0].length; i++) {
            selStr += "#L" + i + "##v" + items[0][i][0] + "##t" + items[0][i][0] +"##l\r\n";
        }
        cm.sendSimple(selStr + "\r\n#k");

    }

    else if (status == 1) {
        select = selection;
        if (selection < 200) {
        switch (items[0][selection][1]) {
        case 1: // Gear
            var selStr = "A #v" + items[0][selection][0] + "##t" + items[0][selection][0] +"# \r\nRequires these materials: \r\n\r\n";
            for (var i = 0; i < items[1].length; i++) {
                selStr += ""+formatNumber((items[1][i][1])) +"x  #v" + items[1][i][0] + "##t" + items[1][i][0] +"#\r\n";
            }
            cm.sendSimple(selStr + (items[4][selection][0] == 1 ? "" : ""+items[4][selection][1]+"x  #v"+items[4][selection][0]+"##t"+items[4][selection][0]+"#\r\n") +"1,000,000,000 Mesos\r\n10,000,000 Nx#k");
            eqp = 1;
        break;

        case 2: // Accessories
            var selStr = "A #v" + items[0][selection][0] + "##t" + items[0][selection][0] +"# \r\nRequires these materials: \r\n\r\n";
            for (var i = 0; i < items[2].length; i++) {
                selStr += ""+formatNumber((items[2][i][1])) +"x  #v" + items[2][i][0] + "##t" + items[2][i][0] +"#\r\n";
            }
            cm.sendSimple(selStr + (items[4][selection][0] == 1 ? "" : ""+items[4][selection][1]+"x  #v"+items[4][selection][0]+"##t"+items[4][selection][0]+"#\r\n") +"750,000,000 Mesos \r\n7,500,000 Nx#k");
            eqp = 2;

        break;

        case 3: // Weapon
            var selStr = "A #v" + items[0][selection][0] + "##t" + items[0][selection][0] +"# \r\nRequires these materials: \r\n\r\n";
            for (var i = 0; i < items[3].length; i++) {
                selStr += ""+formatNumber((items[3][i][1])) +"x  #v" + items[3][i][0] + "##t" + items[3][i][0] +"#\r\n";
            }
            cm.sendSimple(selStr + (items[4][selection][0] == 1 ? "" : ""+items[4][selection][1]+"x  #v"+items[4][selection][0]+"##t"+items[4][selection][0]+"#\r\n") +"1,500,000,000 Mesos \r\n15,000,000 Nx#k");
            eqp = 3;

        break;
        }

        } else {
        switch (selection) {
        case 205: cm.sendSimple("-Transpose UI-");
                  cm.dispose();
                  eqp = 205;
                  break;
        case 206: cm.sendSimple("Disassemble Sweetwater");
                  eqp = 206;
                  break;
        case 207: cm.sendSimple("Disassemble AbsoLab");
                  eqp = 207;
                  break;
        }
        }

    }

    else if (status == 2) {
        if (eqp == 1) { // Gear
                    if (!cm.canHold(items[0][select][0],items[0][select][2])) {
                        cm.sendSimple("You don't have enough space");
                        cm.dispose();
                        return;
                    } else {
                        if (cm.haveItem(items[eqp][0][0],items[eqp][0][1]) &&
                            cm.haveItem(items[eqp][1][0],items[eqp][1][1]) &&
                            cm.haveItem(items[eqp][2][0],items[eqp][2][1]) &&
                            cm.haveItem(items[eqp][3][0],items[eqp][3][1]) &&
                            cm.haveItem(items[eqp][4][0],items[eqp][4][1]) &&
                            cm.haveItem(items[eqp][5][0],items[eqp][5][1]) &&
                            cm.haveItem(items[eqp][6][0],items[eqp][6][1]) &&
                            cm.haveItem(items[eqp][7][0],items[eqp][7][1]) &&
                            cm.haveItem(items[eqp][8][0],items[eqp][8][1]) &&
                            cm.haveItem(items[eqp][9][0],items[eqp][9][1]) &&
                            cm.haveItem(items[4][select][0],items[4][select][1]) &&
                            cm.getMeso() >= 1000000000 &&
                            cm.getPlayer().getCSPoints(2) >= 10000000 )
                            {

                            cm.gainItem(items[eqp][0][0],(-1*(items[eqp][0][1])));
                            cm.gainItem(items[eqp][1][0],(-1*(items[eqp][1][1])));
                            cm.gainItem(items[eqp][2][0],(-1*(items[eqp][2][1])));
                            cm.gainItem(items[eqp][3][0],(-1*(items[eqp][3][1])));
                            cm.gainItem(items[eqp][4][0],(-1*(items[eqp][4][1])));
                            cm.gainItem(items[eqp][5][0],(-1*(items[eqp][5][1])));
                            cm.gainItem(items[eqp][6][0],(-1*(items[eqp][6][1])));
                            cm.gainItem(items[eqp][7][0],(-1*(items[eqp][7][1])));
                            cm.gainItem(items[eqp][8][0],(-1*(items[eqp][8][1])));
                            cm.gainItem(items[eqp][9][0],(-1*(items[eqp][9][1])));
                            cm.gainItem(items[4][select][0],(-1*(items[4][select][1])));
                            cm.gainMeso(-1000000000);
                            cm.getPlayer().modifyCSPoints(2, -10000000);
                            cm.gainItem(items[0][select][0],items[0][select][2]);
                            cm.sendSimple("I have created a #t"+items[0][select][0]+"#, as you asked.");
                            cm.dispose();
                        } else
                        {
                        cm.sendSimple("You don't have all the materials required.");
                        cm.dispose();
                        return;
                        }
                    }

        } else if (eqp == 2) { //Accessories
                    if (!cm.canHold(items[0][select][0],1)) {
                        cm.sendSimple("You don't have enough space");
                        cm.dispose();
                        return;
                    } else {
                        if (cm.haveItem(items[eqp][0][0],items[eqp][0][1]) &&
                            cm.haveItem(items[eqp][1][0],items[eqp][1][1]) &&
                            cm.haveItem(items[eqp][2][0],items[eqp][2][1]) &&
                            cm.haveItem(items[eqp][3][0],items[eqp][3][1]) &&
                            cm.haveItem(items[eqp][4][0],items[eqp][4][1]) &&
                            cm.haveItem(items[eqp][5][0],items[eqp][5][1]) &&
                            cm.haveItem(items[eqp][6][0],items[eqp][6][1]) &&
                            cm.haveItem(items[eqp][7][0],items[eqp][7][1]) &&
                            cm.haveItem(items[eqp][8][0],items[eqp][8][1]) &&
                            cm.haveItem(items[eqp][9][0],items[eqp][9][1]) &&
                            cm.haveItem(items[4][select][0],items[4][select][1]) &&
                            cm.getMeso() >= 750000000 &&
                            cm.getPlayer().getCSPoints(2) >= 7500000 )
                            {

                            cm.gainItem(items[eqp][0][0],(-1*(items[eqp][0][1])));
                            cm.gainItem(items[eqp][1][0],(-1*(items[eqp][1][1])));
                            cm.gainItem(items[eqp][2][0],(-1*(items[eqp][2][1])));
                            cm.gainItem(items[eqp][3][0],(-1*(items[eqp][3][1])));
                            cm.gainItem(items[eqp][4][0],(-1*(items[eqp][4][1])));
                            cm.gainItem(items[eqp][5][0],(-1*(items[eqp][5][1])));
                            cm.gainItem(items[eqp][6][0],(-1*(items[eqp][6][1])));
                            cm.gainItem(items[eqp][7][0],(-1*(items[eqp][7][1])));
                            cm.gainItem(items[eqp][8][0],(-1*(items[eqp][8][1])));
                            cm.gainItem(items[eqp][9][0],(-1*(items[eqp][9][1])));
                            cm.gainItem(items[4][select][0],(-1*(items[4][select][1])));
                            cm.gainMeso(-750000000);
                            cm.getPlayer().modifyCSPoints(2, -7500000);
                            cm.gainItem(items[0][select][0],items[0][select][2]);
                            cm.sendSimple("I have created a #t"+items[0][select][0]+"#, as you asked.");
                            cm.dispose();
                        } else
                        {
                        cm.sendSimple("You don't have all the materials required.");
                        cm.dispose();
                        return;
                        }
                    }

        } else if (eqp == 3) { //Weapons
                    if (!cm.canHold(items[0][select][0],1)) {
                        cm.sendSimple("You don't have enough space");
                        cm.dispose();
                        return;
                    } else {
                        if (cm.haveItem(items[eqp][0][0],items[eqp][0][1]) &&
                            cm.haveItem(items[eqp][1][0],items[eqp][1][1]) &&
                            cm.haveItem(items[eqp][2][0],items[eqp][2][1]) &&
                            cm.haveItem(items[eqp][3][0],items[eqp][3][1]) &&
                            cm.haveItem(items[eqp][4][0],items[eqp][4][1]) &&
                            cm.haveItem(items[eqp][5][0],items[eqp][5][1]) &&
                            cm.haveItem(items[eqp][6][0],items[eqp][6][1]) &&
                            cm.haveItem(items[eqp][7][0],items[eqp][7][1]) &&
                            cm.haveItem(items[eqp][8][0],items[eqp][8][1]) &&
                            cm.haveItem(items[eqp][9][0],items[eqp][9][1]) &&
                            cm.haveItem(items[4][select][0],items[4][select][1]) &&
                            cm.getMeso() >= 1500000000 &&
                            cm.getPlayer().getCSPoints(2) >= 15000000 )
                            {

                            cm.gainItem(items[eqp][0][0],(-1*(items[eqp][0][1])));
                            cm.gainItem(items[eqp][1][0],(-1*(items[eqp][1][1])));
                            cm.gainItem(items[eqp][2][0],(-1*(items[eqp][2][1])));
                            cm.gainItem(items[eqp][3][0],(-1*(items[eqp][3][1])));
                            cm.gainItem(items[eqp][4][0],(-1*(items[eqp][4][1])));
                            cm.gainItem(items[eqp][5][0],(-1*(items[eqp][5][1])));
                            cm.gainItem(items[eqp][6][0],(-1*(items[eqp][6][1])));
                            cm.gainItem(items[eqp][7][0],(-1*(items[eqp][7][1])));
                            cm.gainItem(items[eqp][8][0],(-1*(items[eqp][8][1])));
                            cm.gainItem(items[eqp][9][0],(-1*(items[eqp][9][1])));
                            cm.gainItem(items[4][select][0],(-1*(items[4][select][1])));
                            cm.gainMeso(-1500000000);
                            cm.getPlayer().modifyCSPoints(2, -15000000);
                            cm.gainItem(items[0][select][0],items[0][select][2]);
                            cm.sendSimple("I have created a #t"+items[0][select][0]+"#, as you asked.");
                            cm.dispose();
                        } else
                        {
                        cm.sendSimple("You don't have all the materials required.");
                        cm.dispose();
                        return;
                        }
                    }

        }

        else {
        cm.dispose();
        }
    }


}