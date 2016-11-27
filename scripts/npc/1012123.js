/*
    NPC Name:         Lauren
    Map(s):         Henesys : Henesys Hair Salon (100000104)
    Description:         Changes your hair, hair color, face and eye color for both male and female androids.
*/

var status = 0;
var beauty = 0;
var facenew;
var colors;
var hairnew;
var haircolor;
var mface;
var mhair;
var fface;
var fhair;


function start() {                    
        if (cm.getPlayer().getAndroid() == null) {
        cm.sendOk("You must have an Android to use me, also make sure that your android is spawned / equipped.");
        cm.dispose();
        } else {
    status = -1;
    action(1, 0, 0);
    if (cm.isGMS()) {
        fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31360, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990, 34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
        mhair = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 30990, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
        fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21034, 21035, 21038, 21041, 21042, 21044, 21046, 21047, 21052, 21053, 21054);
        mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20044, 20045, 20048, 20049, 20050, 20052, 20053, 20055, 20056);
    } else {
        fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31960, 31970, 31980, 31990, 34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
        mhair = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30730, 30750, 30760, 30770, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30930, 30940, 30950, 30960, 30970, 30980, 30990, 33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
        fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21034, 21035, 21036, 21041, 21043, 21044, 21048, 21049, 21053, 21054);
        mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20047, 20050, 20051, 20056);
    }
    }
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
    cm.dispose();
    return;
    }
    if (mode == 1)
    status++;
    else
    status--;
    if (status == 0) {    
        cm.sendSimple("Hi, i am the Android Styler. I can change the way your Android looks, what do you want to change?\r\n#L0##bHair#k#l\r\n#L1##bHair Color#k#l\r\n#L2##bFace#k#l\r\n#L3##bEye Color#k#l");
    } else if (status == 1) {
    if (cm.getAndroidStat("GENDER") == 0) {
        if (selection == 0) {
        beauty = 1;
        hairnew = Array();
        for (var i = 0; i < mhair.length; i++) {
            if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
            hairnew.push(mhair[i]);
            } else {
            hairnew.push(mhair[i] + parseInt(cm.getAndroidStat("HAIR") % 10));
            }
        }
        cm.sendAndroidStyle("Pick a hairstyle that you would like.", hairnew);
        } else if (selection == 1) {
        beauty = 2;
        haircolor = Array();
        var current = parseInt(cm.getAndroidStat("HAIR") / 10) * 10;
        if (current == 30010 || current == 30070 || current == 30080 || current == 30090 || current == 33140 || current == 33240) {
            haircolor.push(current);
        } else {
            for (var i = 0; i < 8; i++) {
            haircolor.push(current + i);
            }
        }
        cm.sendAndroidStyle("Pick a hair color that you would like.", haircolor);
        } else if (selection == 2) {
        beauty = 3;
        facenew = Array();
        for (var i = 0; i < mface.length; i++) {
            if (mface[i] == 20015 || mface[i] == 20025 || mface[i] == 20027 || mface[i] == 20029 || mface[i] == 20030 || mface[i] == 20031 || mface[i] == 20032 || mface[i] == 20056 || mface[i] == 20055 || mface[i] == 20048 || mface[i] == 20049) {
            facenew.push(mface[i]);
            } else {
            facenew.push(mface[i] + cm.getAndroidStat("FACE") % 1000 - (cm.getAndroidStat("FACE") % 100));
            }
        }
        cm.sendAndroidStyle("Pick a new face that you would like.", facenew);
        } else if (selection == 3) {
        beauty = 4;
        var current = cm.getAndroidStat("FACE") % 100 + 20000;
        colors = Array();
        if (current == 20015 || current == 20025 || current == 20027 || current == 20029 || current == 20030 || current == 20031 || current == 20032 || current == 20056 || current == 20055 || current == 20048 || current == 20049) {
            colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
        } else {
            colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
        }
        cm.sendAndroidStyle("Pick a eye color that you would like.", colors);
        }
    
    } else {
        if (selection == 0) {
        beauty = 1;
        hairnew = Array();
        for (var i = 0; i < fhair.length; i++) {
            if (fhair[i] == 34160) {
            hairnew.push(fhair[i]);
            } else {
                hairnew.push(fhair[i] + parseInt(cm.getAndroidStat("HAIR") % 10));
            }
        }
        cm.sendAndroidStyle("Pick a hairstyle that you would like.", hairnew);
        } else if (selection == 1) {
        beauty = 2;
        haircolor = Array();
        var current = parseInt(cm.getAndroidStat("HAIR") / 10) * 10;
        if (current == 34160) {
            haircolor.push(current);
        } else {
            for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
            }
        }
        cm.sendAndroidStyle("Pick a hair color that you would like.", haircolor);
        } else if (selection == 2) {
        beauty = 3;
        facenew = Array();
        for (var i = 0; i < fface.length; i++) {
            if (fface[i] == 21027 || fface[i] == 21028 || fface[i] == 21029 || fface[i] == 21030 || fface[i] == 21031 || fface[i] == 21053 || fface[i] == 21054 || fface[i] == 21046 || fface[i] == 21047) {
            facenew.push(fface[i]);
            } else {
                facenew.push(fface[i] + cm.getAndroidStat("FACE") % 1000 - (cm.getAndroidStat("FACE") % 100));
            }
        }
        cm.sendAndroidStyle("Pick new eyes that you would like.", facenew);
         } else if (selection == 3) {
        beauty = 4;
        var current = cm.getAndroidStat("FACE") % 100 + 21000;
        colors = Array();
        if (current == 21027 || current == 21028 || current == 21029 || current == 21030 || current == 21031 || current == 21053 || current == 21054 || current == 21046 || current == 21047) {
            colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
        } else {
            colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
        }
        cm.sendAndroidStyle("Pick a eye color that you would like.", colors);
                }
    }
    } else if (status == 2) {
    if (beauty == 1) {
        cm.setAndroidHair(hairnew[selection]);
    } else if (beauty == 2) {
        cm.setAndroidHair(haircolor[selection]);
    } else if (beauty == 3) {
        cm.setAndroidFace(facenew[selection]);
    } else if (beauty == 4) {
        cm.setAndroidFace(colors[selection]);
    }
    cm.dispose();
    }
}  