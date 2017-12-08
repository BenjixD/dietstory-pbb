// Kanto (3003105) Arcane Boss PQ

var points;
var distriName;
var distriPercent;
var status2;
var status3;
var status4;
var ext = 0;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    if (cm.getPlayer().getMapId() == 450004150) {
    cm.sendYesNo("Would you like to leave?");
    ext = 1;
    } else if (cm.getPlayer().getMapId() == 450003000) {
    cm.sendSimple("Hello there!\r\nIn the Arcane Boss Party Quest you will face the most brutal bosses out there, for you to defeat with your party members.\r\nWould you like to join?\r\n#b#L3#Warp me to the BossPQ Hall#l#k");
    } else if (cm.getPlayer().getMapId() == 450003711){
    cm.sendSimple("Which Boss PQ would you like to run? \r\n#b#L7#Give my points to someone else#l\r\n\r\n#L0#Hell Mode (250+)#l \r\n#L1#Chaos Mode (250+)#l\r\n\r\n\r\n#L4#Return to Lachelein#l#k");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (ext == 1) {
        cm.warp(450003711)
        cm.dispose();
        }
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("ArcaneBPQH") != null) {
                        cm.getDisconnected("ArcaneBPQH").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 250) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("ArcaneBPQH");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 250.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
            case 1:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("ArcaneBPQC") != null) {
                        cm.getDisconnected("ArcaneBPQC").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 250) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("ArcaneBPQC");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 250.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
            case 2:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHARD") != null) {
                        cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 130) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestHARD");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 130.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
            case 3:
            cm.warp(450003711,0);
            cm.dispose();
            break;
            case 4:
            cm.warp(450003000,1);
            cm.dispose();
            break;
            // -
            // -
            case 5:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestCRAZY") != null) {
                        cm.getDisconnected("BossQuestCRAZY").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 235) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestCRAZY");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 235.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
            case 6:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestRANKED") != null) {
                        cm.getDisconnected("BossQuestRANKED").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 235) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestRANKED");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 235.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;

            case 7: cm.sendSimple("You want to give your distribution to someone else? #b\r\n#L0#I want to give my points to someone else#l\r\n#L1#I want to reset my distribution#l");
                    status2 = 7;
                    break;
        }
    }
    else if (mode == 2) {
        switch (status2) {
        case 7:
            switch (selection) {
            case 0: cm.sendSimple("How many points would you like to give to a person? Please specify a percentage");
                    cm.dispose();
                    break;
            case 1: cm.sendSimple("You have stopped all points. The players have been notified");
                    cm.dispose()
                    break;

            }
        }
    }
    cm.dispose();
}