// So Gong  Dojo NPC

var points;
var distriName;
var distriPercent;
var status2;
var status3;
var status4;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("Choose your demise. \r\n#b#L7#Give my points to someone else#l\r\n\r\n#L0#Easy Mode (70+)#l \r\n#L1#Normal Mode (100+)#l \r\n#L2#Hard Mode (130+)#l \r\n#L3#Hell Mode (160+)#l \r\n#L4#Chaos Mode (160+)#l\r\n#L5#Crazy Mode (235+)#l\r\n#L6#Ranked Mode (235+)#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestEASY") != null) {
                        cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 70) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestEASY");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 70.");
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
                    if (cm.getDisconnected("BossQuestMed") != null) {
                        cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestMed");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 100.");
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
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHELL") != null) {
                        cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestHELL");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 160.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
            case 4:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestCHAOS") != null) {
                        cm.getDisconnected("BossQuestCHAOS").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestCHAOS");
                            if (q == null) {
                                cm.sendOk("Unknown error occured");
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("All players must be in map and above level 160.");
                        }
                    } else {
                        cm.sendOk("You are not the leader of the party, please ask your leader to talk to me.");
                    }
                } else {
                    cm.sendOk("Please form a party first.");
                }
                break;
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