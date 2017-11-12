/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.commands;

import client.*;
import client.inventory.*;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import constants.GameConstants;
import constants.ServerConstants.PlayerGMRank;
import handling.RecvPacketOpcode;
import handling.SendPacketOpcode;
import handling.channel.ChannelServer;
import handling.world.World;
import net.DatabaseConnection;
import script.npc.NPCTalk;
import script.portal.PortalScriptManager;
import script.reactor.ReactorScriptManager;
import server.*;
import server.Timer;
import server.Timer.*;
import server.commands.GMCommand.Ban;
import server.life.*;
import server.maps.*;
import server.quest.MapleQuest;
import server.shops.MapleShopFactory;
import tools.HexTool;
import tools.MockIOSession;
import tools.Pair;
import tools.StringUtil;
import tools.packet.CField;
import tools.packet.CField.NPCPacket;
import tools.packet.CWvsContext;
import tools.packet.MobPacket;

import java.awt.*;
import java.io.Serializable;
import java.sql.SQLException;
import java.util.*;
import java.util.List;
import java.util.Map.Entry;

/**
 *
 * @author Emilyx3
 */
public class SuperGMCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.SUPERGM;
    }

    public static class ItemSearch extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            String search = StringUtil.joinStringFrom(splitted, 1);
            String result = "";
            List<String> retItems = new ArrayList<>();
            int selection = 0;
            for (ItemInformation itemPair : MapleItemInformationProvider.getInstance().getAllItems()) {
                if (itemPair != null && itemPair.name != null && itemPair.name.toLowerCase().contains(search.toLowerCase())) {
                    retItems.add("\r\n#L" + selection + "##b" + itemPair.itemId + " " + " #k- " + " #r#z" + itemPair.itemId + "##k");
                    selection++;
                }
            }
            NPCTalk talk = new NPCTalk((byte) 4, 9010000, (byte) 0);
            if (retItems != null && retItems.size() > 0) {
                for (String singleRetItem : retItems) {
                    if (result.length() < 10000) {
                    	talk.addText(singleRetItem);
                        // result += singleRetItem;
                    } else {
                    	talk.addText("\r\n#bCouldn't load all items, there are too many results.#k");
                        // result += "\r\n#bCouldn't load all items, there are too many results.#k";
                        c.getSession().write(NPCPacket.getNPCTalk(talk));
                        return 1;
                    }
                }
            } else {
            	talk.addText("No Items Found");
                // result = "No Items Found";
            }
            c.getSession().write(NPCPacket.getNPCTalk(talk));
            return 1;
        }
    }

    public static class ServerNotice extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter all : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                all.getClient().getChannelServer().broadcastMessage(CWvsContext.broadcastMsg(Integer.parseInt(splitted[1]), Integer.parseInt(splitted[2]), StringUtil.joinStringFrom(splitted, 3)));
            }
            return 1;
        }
    }

    public static class SpecialMessage extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter all : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                all.getClient().getChannelServer().broadcastMessage(CWvsContext.getSpecialMsg(StringUtil.joinStringFrom(splitted, 2), Integer.parseInt(splitted[1]), true));
            }
            return 1;
        }
    }

    public static class HideSpecialMessage extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter all : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                all.getClient().getChannelServer().broadcastMessage(CWvsContext.getSpecialMsg("", 0, false));
            }
            return 1;
        }
    }

    public static class MapChangeTimer extends CommandExecute {

        @Override
        public int execute(final MapleClient c, String splitted[]) {
            final int map = Integer.parseInt(splitted[1]);
            final int nextmap = Integer.parseInt(splitted[2]);
            final int time = Integer.parseInt(splitted[3]);
            c.getChannelServer().getMapFactory().getMap(map).broadcastMessage(CField.getClock(time));
            c.getChannelServer().getMapFactory().getMap(map).startMapEffect("You will be moved out of the map when the timer ends.", 5120041);
            EventTimer.getInstance().schedule(new Runnable() {
                @Override
                public void run() {
                    for (MapleCharacter mch : c.getChannelServer().getMapFactory().getMap(map).getCharacters()) {
                        if (mch == null) {
                            return;
                        } else {
                            mch.changeMap(nextmap, 0);
                        }
                    }
                }
            }, time * 1000); // seconds
            return 1;
        }
    }




        // Start of Asura's Commands:


    public static class GetEquipStat extends CommandExecute {
        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter chr = c.getPlayer();
            if(splitted.length==2) {
                Equip item = (Equip) chr.getInventory(MapleInventoryType.EQUIP).getItem(Short.parseShort(splitted[1]));
                chr.dropMessage(6, "Equip = " + item.getItemId());
                chr.dropMessage(6, "Str = " + item.getStr());
                chr.dropMessage(6, "Dex = " + item.getDex());
                chr.dropMessage(6, "Int = " + item.getInt());
                chr.dropMessage(6, "Luk = " + item.getLuk());
                chr.dropMessage(6, "HP = " + item.getHp());
                chr.dropMessage(6, "MP = " + item.getMp());
                chr.dropMessage(6, "BossDmg% = " + item.getBossDamage());
                chr.dropMessage(6, "Ignore% = " + item.getIgnorePDR());
                chr.dropMessage(6, "Dmg% = " + item.getTotalDamage());
                chr.dropMessage(6, "All Stat% = " + item.getAllStat());
                for (int i = 0; i < item.getPotential().length; i++) {
                    chr.dropMessage(6, "Main[" + i + "] = " + item.getPotentialByLine(i));
                }
                for (int i = 0; i < item.getBonusPotential().length; i++) {
                    chr.dropMessage(6, "Bonus[" + i + "] = " + item.getBonusPotentialByLine(i));
                }
                for (int i = 0; i < 3; i++) {
                    chr.dropMessage(6, "Nebulite[" + i + "] = " + item.getSocketByNmb(i));
                }

                return 0;
            }
            chr.dropMessage(5,"Syntax: !GetEquipInfo <Inventory Box Number>");
            chr.dropMessage(5,"e.g. !GetEquipInfo 1 (top right corner)");
            return 0;
        }
    }

    public static class GodItem extends  CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final int itemId = Integer.parseInt(splitted[1]);
            if (splitted.length<=9) {
                c.getPlayer() .dropMessage(5,"Syntax: !goditem <ID> <Stats> <BD% & IED%> <Pot ID> <Pot ID> <Pot ID> <BPot ID> <BPot ID> <BPot ID>");
                return 0;
            }
            if (Integer.parseInt(splitted[3])>100) {
                c.getPlayer().dropMessage(5, "Syntax: Boss Damage% and Ignore Defense% cannot be greater than 100");
                return 0;
            }
            if (!c.getPlayer().isAdmin()) {
                for (int i : GameConstants.itemBlock) {
                    if (itemId == i) {
                        c.getPlayer().dropMessage(5, "Sorry but this item is blocked for your GM level.");
                        return 0;
            }

        }
    }
    MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if(itemId >= 2000000) {
                c.getPlayer().dropMessage(5, "You can only get equips.");
            } else if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " does not exist");
            } else {
                Equip equip;
                equip = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                equip.setStr(Short.parseShort(splitted[2]));
                equip.setDex(Short.parseShort(splitted[2]));
                equip.setInt(Short.parseShort(splitted[2]));
                equip.setLuk(Short.parseShort(splitted[2]));
                equip.setHp(Short.parseShort(splitted[2]));
                equip.setMp(Short.parseShort(splitted[2]));
                equip.setWatk(Short.parseShort(splitted[2]));
                equip.setMatk(Short.parseShort(splitted[2]));
                equip.setSpeed(Short.parseShort(splitted[2]));
                equip.setJump(Short.parseShort(splitted[2]));
                equip.setBossDamage(Byte.parseByte(splitted[3]));
                equip.setIgnorePDR(Byte.parseByte(splitted[3]));
                equip.setTotalDamage(Byte.parseByte(splitted[3]));
                equip.setAllStat(Byte.parseByte(splitted[3]));
                equip.setPotentialByLine(0, Integer.parseInt(splitted[4]));
                equip.setPotentialByLine(1, Integer.parseInt(splitted[5]));
                equip.setPotentialByLine(2, Integer.parseInt(splitted[6]));
                equip.setBonusPotentialByLine(0, Integer.parseInt(splitted[7]));
                equip.setBonusPotentialByLine(1, Integer.parseInt(splitted[8]));
                equip.setBonusPotentialByLine(2, Integer.parseInt(splitted[9]));
                equip.setOwner(c.getPlayer().getName());
                MapleInventoryManipulator.addbyItem(c, equip);
            }
            return 1;
        }
    }

    public static class setStatPerson extends CommandExecute {
        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length<=7) {
                c.getPlayer() .dropMessage(5,"Syntax: !SetStatPerson <player name> <STR> <DEX> <INT> <LUK> <HP> <MP>");
                return 0;
            }
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            victim.setStr(Short.parseShort(splitted[2]));
            victim.updateSingleStat(MapleStat.STR, Integer.parseInt(splitted[2]));
            victim.setDex(Short.parseShort(splitted[3]));
            victim.updateSingleStat(MapleStat.DEX, Integer.parseInt(splitted[3]));
            victim.setInt(Short.parseShort(splitted[4]));
            victim.updateSingleStat(MapleStat.INT, Integer.parseInt(splitted[4]));
            victim.setLuk(Short.parseShort(splitted[5]));
            victim.updateSingleStat(MapleStat.LUK, Integer.parseInt(splitted[5]));
            victim.setHp(Short.parseShort(splitted[6]));
            victim.updateSingleStat(MapleStat.HP, Integer.parseInt(splitted[6]));
            victim.setMp(Short.parseShort(splitted[7]));
            victim.updateSingleStat(MapleStat.MP, Integer.parseInt(splitted[7]));
            c.getPlayer() .dropMessage(6,splitted[1] + "'s Stats have been changed to");
            c.getPlayer() .dropMessage(6,"STR: " + splitted[2] + "  DEX:" + splitted[3] + "  INT: " + splitted[4] + "  LUK: " + splitted[5] + "  HP: " + splitted[6] + "  MP: " + splitted[7]);
            return 1;
        }
    }

    public static class SetEquipStat extends CommandExecute {
        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter chr = c.getPlayer();

            Equip item = (Equip) chr.getInventory(MapleInventoryType.EQUIP).getItem(Short.parseShort(splitted[2]));
            if (splitted.length<=3) {
                chr.dropMessage(5,"Syntax: !SetEquipStat <Stat to be changed> <Inventory Box ID> <New Stat>");
                chr.dropMessage(5,"Use     !SetEquipStat Help 0 0     for Stat to be changed abbreviations");
            }
            if (splitted[1].equals("STR")) {
                chr.dropMessage(6, "Changed Equip's STR from " + item.getStr() + " to " + splitted[3]);
                item.setStr(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("DEX")) {
                chr.dropMessage(6, "Changed Equip's DEX from " + item.getDex() + " to " + splitted[3]);
                item.setDex(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("INT")) {
                chr.dropMessage(6,"Changed Equip's INT from " + item.getInt() + " to " + splitted[3]);
                item.setInt(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("LUK")) {
                chr.dropMessage(6, "Changed Equip's LUK from " + item.getLuk() + " to " + splitted[3]);
                item.setLuk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Watk")) {
                chr.dropMessage(6, "Changed Equip's Watk from " + item.getWatk() + " to " + splitted[3]);
                item.setWatk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Matk")) {
                chr.dropMessage(6, "Changed Equip's Matk from " + item.getMatk() + " to " + splitted[3]);
                item.setMatk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("HP")) {
                chr.dropMessage(6, "Changed Equip's HP from " + item.getHp() + " to " + splitted[3]);
                item.setHp(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MP")) {
                chr.dropMessage(6, "Changed Equip's MP from " + item.getMp() + " to " + splitted[3]);
                item.setMp(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Boss")) {
                chr.dropMessage(6, "Changed Equip's Boss% from " + item.getBossDamage() + " to " + splitted[3]);
                item.setBossDamage(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
                chr.getInventory(MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Ignore")) {
                chr.dropMessage(6, "Changed Equip's Ignore% from " + item.getIgnorePDR() + " to " + splitted[3]);
                item.setIgnorePDR(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Damage")) {
                chr.dropMessage(6, "Changed Equip's Damage% from " + item.getTotalDamage() + " to " + splitted[3]);
                item.setTotalDamage(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("AllStat")) {
                chr.dropMessage(6, "Changed Equip's All Stat% from " + item.getAllStat() + " to " + splitted[3]);
                item.setAllStat(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot0")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[0] from " + item.getPotentialByLine(0) + " to " + splitted[3]);
                item.setPotentialByLine(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot1")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[1] from " + item.getPotentialByLine(1) + " to " + splitted[3]);
                item.setPotentialByLine(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot2")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[2] from " + item.getPotentialByLine(2) + " to " + splitted[3]);
                item.setPotentialByLine(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot0")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[0] from " + item.getBonusPotentialByLine(0) + " to " + splitted[3]);
                item.setBonusPotentialByLine(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot1")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[1] from " + item.getBonusPotentialByLine(1) + " to " + splitted[3]);
                item.setBonusPotentialByLine(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot2")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[2] from " + item.getBonusPotentialByLine(2) + " to " + splitted[3]);
                item.setBonusPotentialByLine(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb0")) {
                chr.dropMessage(6, "Changed Equip's Equip's Nebulite[0] from " + item.getSocketByNmb(0) + " to " + splitted[3]);
                item.setSocketByNmb(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb1")) {
                chr.dropMessage(6, "Changed Equip's Nebulite[1] from " + item.getSocketByNmb(1) + " to " + splitted[3]);
                item.setSocketByNmb(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb2")) {
                chr.dropMessage(6, "Changed Equip's Nebulite[2] from " + item.getSocketByNmb(2) + " to " + splitted[3]);
                item.setSocketByNmb(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("All")) {
                chr.dropMessage(6, "Changed All the Equip's Stats to " + splitted[3]);
                item.setStr(Short.parseShort(splitted[3]));
                item.setDex(Short.parseShort(splitted[3]));
                item.setInt(Short.parseShort(splitted[3]));
                item.setLuk(Short.parseShort(splitted[3]));
                item.setHp(Short.parseShort(splitted[3]));
                item.setMp(Short.parseShort(splitted[3]));
                item.setWatk(Short.parseShort(splitted[3]));
                item.setMatk(Short.parseShort(splitted[3]));
                item.setPotentialByLine(0, Short.parseShort(splitted[3]));
                item.setPotentialByLine(1, Short.parseShort(splitted[3]));
                item.setPotentialByLine(2, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(0, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(1, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(2, Short.parseShort(splitted[3]));
                item.setSocketByNmb(0, Short.parseShort(splitted[3]));
                item.setSocketByNmb(1, Short.parseShort(splitted[3]));
                item.setSocketByNmb(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Help")){
                chr.dropMessage(6,"Stat - Abbreviations:");
                chr.dropMessage(6,"Strength - STR");
                chr.dropMessage(6,"Dexterity - DEX");
                chr.dropMessage(6,"Intelligence - INT");
                chr.dropMessage(6,"Luck - LUK");
                chr.dropMessage(6,"Weapon Attack - Watk");
                chr.dropMessage(6,"Magic Attack - Matk");
                chr.dropMessage(6,"Health - HP");
                chr.dropMessage(6,"Mana - MP");
                chr.dropMessage(6,"Boss Damage% - Boss");
                chr.dropMessage(6,"Ignore Enemy Defense% - Ignore");
                chr.dropMessage(6,"Total Damage% - Damage");
                chr.dropMessage(6,"All Stats% - AllStat");
                chr.dropMessage(6,"Main Potential Line 1 - MainPot0");
                chr.dropMessage(6,"Main Potential Line 2 - MainPot1");
                chr.dropMessage(6,"Main Potential Line 3 - MainPot2");
                chr.dropMessage(6,"Bonus Potential Line 1 - BPot0");
                chr.dropMessage(6,"Bonus Potential Line 2 - BPot1");
                chr.dropMessage(6,"Bonus Potential Line 3 - BPot2");
                chr.dropMessage(6,"Nebulite Slot 1 - Neb0");
                chr.dropMessage(6,"Nebulite Slot 2 - Neb1");
                chr.dropMessage(6,"Nebulite Slot 3 - Neb2");
            }
            else {
                chr.dropMessage(5, "Syntax: !SetEquipStat <Stat to be changed> <Inventory Box ID> <NewStat>");
                chr.dropMessage(5, "e.g. !SetEquipInfo STR 1 32000");
                chr.dropMessage(5, "will change the Strength of the item in your top right inventory to 32000");
            }


            return 0;
        }
    }

    public static class SetPlayerEquipStat extends CommandExecute {
        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter chr = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[4]);

            Equip item = (Equip) chr.getInventory(MapleInventoryType.EQUIP).getItem(Short.parseShort(splitted[2]));
            if (splitted.length<=4) {
                chr.dropMessage(5,"Syntax: !SetEquipStat <Stat to be changed> <Inventory Box ID> <New Stat> <PlayerIGN>");
                chr.dropMessage(5,"Use     !SetEquipStat Help 0 0 0     for Stat to be changed abbreviations");
            }
            if (splitted[1].equals("STR")) {
                chr.dropMessage(6, "Changed Equip's STR from " + item.getStr() + " to " + splitted[3]);
                item.setStr(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("DEX")) {
                chr.dropMessage(6, "Changed Equip's DEX from " + item.getDex() + " to " + splitted[3]);
                item.setDex(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("INT")) {
                chr.dropMessage(6,"Changed Equip's INT from " + item.getInt() + " to " + splitted[3]);
                item.setInt(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("LUK")) {
                chr.dropMessage(6, "Changed Equip's LUK from " + item.getLuk() + " to " + splitted[3]);
                item.setLuk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Watk")) {
                chr.dropMessage(6, "Changed Equip's Watk from " + item.getWatk() + " to " + splitted[3]);
                item.setWatk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Matk")) {
                chr.dropMessage(6, "Changed Equip's Matk from " + item.getMatk() + " to " + splitted[3]);
                item.setMatk(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("HP")) {
                chr.dropMessage(6, "Changed Equip's HP from " + item.getHp() + " to " + splitted[3]);
                item.setHp(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MP")) {
                chr.dropMessage(6, "Changed Equip's MP from " + item.getMp() + " to " + splitted[3]);
                item.setMp(Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Boss")) {
                chr.dropMessage(6, "Changed Equip's Boss% from " + item.getBossDamage() + " to " + splitted[3]);
                item.setBossDamage(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
                chr.getInventory(MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Ignore")) {
                chr.dropMessage(6, "Changed Equip's Ignore% from " + item.getIgnorePDR() + " to " + splitted[3]);
                item.setIgnorePDR(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Damage")) {
                chr.dropMessage(6, "Changed Equip's Damage% from " + item.getTotalDamage() + " to " + splitted[3]);
                item.setTotalDamage(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("AllStat")) {
                chr.dropMessage(6, "Changed Equip's All Stat% from " + item.getAllStat() + " to " + splitted[3]);
                item.setAllStat(Byte.parseByte(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot0")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[0] from " + item.getPotentialByLine(0) + " to " + splitted[3]);
                item.setPotentialByLine(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot1")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[1] from " + item.getPotentialByLine(1) + " to " + splitted[3]);
                item.setPotentialByLine(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("MainPot2")) {
                chr.dropMessage(6, "Changed Equip's MainPotential[2] from " + item.getPotentialByLine(2) + " to " + splitted[3]);
                item.setPotentialByLine(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot0")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[0] from " + item.getBonusPotentialByLine(0) + " to " + splitted[3]);
                item.setBonusPotentialByLine(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot1")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[1] from " + item.getBonusPotentialByLine(1) + " to " + splitted[3]);
                item.setBonusPotentialByLine(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("BPot2")) {
                chr.dropMessage(6, "Changed Equip's BonusPotential[2] from " + item.getBonusPotentialByLine(2) + " to " + splitted[3]);
                item.setBonusPotentialByLine(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb0")) {
                chr.dropMessage(6, "Changed Equip's Equip's Nebulite[0] from " + item.getSocketByNmb(0) + " to " + splitted[3]);
                item.setSocketByNmb(0, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb1")) {
                chr.dropMessage(6, "Changed Equip's Nebulite[1] from " + item.getSocketByNmb(1) + " to " + splitted[3]);
                item.setSocketByNmb(1, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Neb2")) {
                chr.dropMessage(6, "Changed Equip's Nebulite[2] from " + item.getSocketByNmb(2) + " to " + splitted[3]);
                item.setSocketByNmb(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("All")) {
                chr.dropMessage(6, "Changed All the Equip's Stats to " + splitted[3]);
                item.setStr(Short.parseShort(splitted[3]));
                item.setDex(Short.parseShort(splitted[3]));
                item.setInt(Short.parseShort(splitted[3]));
                item.setLuk(Short.parseShort(splitted[3]));
                item.setHp(Short.parseShort(splitted[3]));
                item.setMp(Short.parseShort(splitted[3]));
                item.setWatk(Short.parseShort(splitted[3]));
                item.setMatk(Short.parseShort(splitted[3]));
                item.setPotentialByLine(0, Short.parseShort(splitted[3]));
                item.setPotentialByLine(1, Short.parseShort(splitted[3]));
                item.setPotentialByLine(2, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(0, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(1, Short.parseShort(splitted[3]));
                item.setBonusPotentialByLine(2, Short.parseShort(splitted[3]));
                item.setSocketByNmb(0, Short.parseShort(splitted[3]));
                item.setSocketByNmb(1, Short.parseShort(splitted[3]));
                item.setSocketByNmb(2, Short.parseShort(splitted[3]));
                chr.forceReAddItem(item, MapleInventoryType.EQUIP);
            }
            else if (splitted[1].equals("Help")){
                chr.dropMessage(6,"Stat Abbreviations:");
                chr.dropMessage(6,"Strength - STR");
                chr.dropMessage(6,"Dexterity - DEX");
                chr.dropMessage(6,"Intelligence - INT");
                chr.dropMessage(6,"Luck - LUK");
                chr.dropMessage(6,"Weapon Attack - Watk");
                chr.dropMessage(6,"Magic Attack - Matk");
                chr.dropMessage(6,"Health - HP");
                chr.dropMessage(6,"Mana - MP");
                chr.dropMessage(6,"Boss Damage% - Boss");
                chr.dropMessage(6,"Ignore Enemy Defense% - Ignore");
                chr.dropMessage(6,"Total Damage% - Damage");
                chr.dropMessage(6,"All Stats% - AllStat");
                chr.dropMessage(6,"Main Potential Line 1 - MainPot0");
                chr.dropMessage(6,"Main Potential Line 2 - MainPot1");
                chr.dropMessage(6,"Main Potential Line 3 - MainPot2");
                chr.dropMessage(6,"Bonus Potential Line 1 - BPot0");
                chr.dropMessage(6,"Bonus Potential Line 2 - BPot1");
                chr.dropMessage(6,"Bonus Potential Line 3 - BPot2");
                chr.dropMessage(6,"Nebulite Slot 1 - Neb0");
                chr.dropMessage(6,"Nebulite Slot 2 - Neb1");
                chr.dropMessage(6,"Nebulite Slot 3 - Neb2");
            }
            else {
                chr.dropMessage(5, "Syntax: !SetEquipStat <Stat to be changed> <Inventory Box ID> <NewStat> <Player IGN>");
                chr.dropMessage(5, "e.g. !SetEquipInfo STR 1 32000 Player");
                chr.dropMessage(5, "will change the Strength of the item in top right inventory of 'Player' to 32000");

            }


            return 0;
        }
    }

        // End of Asura's SuperGM Commands



    public static class SetName extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "Syntax: setname <player> <new name>");
                return 0;
            }
            if (victim == null) {
                c.getPlayer().dropMessage(0, "Could not find the player.");
                return 0;
            }
            if (c.getPlayer().getGMLevel() < 6 && !victim.isGM()) {
                c.getPlayer().dropMessage(6, "Only an Admin can change player's name.");
                return 0;
            }
            victim.getClient().getSession().close();
            victim.getClient().disconnect(true, false);
            victim.setName(splitted[2]);
            return 1;
        }
    }

    public static class Popup extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                if (splitted.length > 1) {
                    StringBuilder sb = new StringBuilder();
                    sb.append(StringUtil.joinStringFrom(splitted, 1));
                    mch.dropMessage(1, sb.toString());
                } else {
                    c.getPlayer().dropMessage(6, "Syntax: popup <message>");
                    return 0;
                }
            }
            return 1;
        }
    }

    public static class SaveAll extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                mch.saveToDB(false, false);
            }
            c.getPlayer().dropMessage(0, "Characters successfully saved!");
            return 1;
        }
    }

    public static class SaveAndroids extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                mch.getAndroid().saveToDb();
                mch.dropMessage(0, "Androids successfully saved!");
            }
            return 1;
        }
    }

    public static class HellB extends HellBan {
    }

    public static class HellBan extends Ban {

        public HellBan() {
            hellban = true;
        }
    }

    public static class UnHellB extends UnHellBan {
    }

    public static class UnHellBan extends UnBan {

        public UnHellBan() {
            hellban = true;
        }
    }

    public static class UnB extends UnBan {
    }

    public static class UnBan extends CommandExecute {

        protected boolean hellban = false;

        private String getCommand() {
            if (hellban) {
                return "UnHellBan";
            } else {
                return "UnBan";
            }
        }

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "[Syntax] !" + getCommand() + " <IGN>");
                return 0;
            }
            byte ret;
            if (hellban) {
                ret = MapleClient.unHellban(splitted[1]);
            } else {
                ret = MapleClient.unban(splitted[1]);
            }
            if (ret == -2) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] SQL error.");
                return 0;
            } else if (ret == -1) {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] The character does not exist.");
                return 0;
            } else {
                c.getPlayer().dropMessage(6, "[" + getCommand() + "] Successfully unbanned!");

            }
            byte ret_ = MapleClient.unbanIPMacs(splitted[1]);
            if (ret_ == -2) {
                c.getPlayer().dropMessage(6, "[UnbanIP] SQL error.");
            } else if (ret_ == -1) {
                c.getPlayer().dropMessage(6, "[UnbanIP] The character does not exist.");
            } else if (ret_ == 0) {
                c.getPlayer().dropMessage(6, "[UnbanIP] No IP or Mac with that character exists!");
            } else if (ret_ == 1) {
                c.getPlayer().dropMessage(6, "[UnbanIP] IP/Mac -- one of them was found and unbanned.");
            } else if (ret_ == 2) {
                c.getPlayer().dropMessage(6, "[UnbanIP] Both IP and Macs were unbanned.");
            }
            return ret_ > 0 ? 1 : 0;
        }
    }

    public static class UnbanIP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "[Syntax] !unbanip <IGN>");
                return 0;
            }
            byte ret = MapleClient.unbanIPMacs(splitted[1]);
            if (ret == -2) {
                c.getPlayer().dropMessage(6, "[UnbanIP] SQL error.");
            } else if (ret == -1) {
                c.getPlayer().dropMessage(6, "[UnbanIP] The character does not exist.");
            } else if (ret == 0) {
                c.getPlayer().dropMessage(6, "[UnbanIP] No IP or Mac with that character exists!");
            } else if (ret == 1) {
                c.getPlayer().dropMessage(6, "[UnbanIP] IP/Mac -- one of them was found and unbanned.");
            } else if (ret == 2) {
                c.getPlayer().dropMessage(6, "[UnbanIP] Both IP and Macs were unbanned.");
            }
            if (ret > 0) {
                return 1;
            }
            return 0;
        }
    }

    public static class GiveSkill extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            Skill skill = SkillFactory.getSkill(Integer.parseInt(splitted[2]));
            byte level = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 3, 1);
            byte masterlevel = (byte) CommandProcessorUtil.getOptionalIntArg(splitted, 4, 1);

            if (level > skill.getMaxLevel()) {
                level = (byte) skill.getMaxLevel();
            }
            if (masterlevel > skill.getMaxLevel()) {
                masterlevel = (byte) skill.getMaxLevel();
            }
            victim.changeSingleSkillLevel(skill, level, masterlevel);
            return 1;
        }
    }

    public static class UnlockInv extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            java.util.Map<Item, MapleInventoryType> eqs = new HashMap<>();
            boolean add = false;
            if (splitted.length < 2 || splitted[1].equals("all")) {
                for (MapleInventoryType type : MapleInventoryType.values()) {
                    for (Item item : c.getPlayer().getInventory(type)) {
                        if (ItemFlag.LOCK.check(item.getFlag())) {
                            item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                            add = true;
                            //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                        }
                        if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                            item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                            add = true;
                            //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                        }
                        if (add) {
                            eqs.put(item, type);
                        }
                        add = false;
                    }
                }
            } else if (splitted[1].equals("eqp")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).newList()) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.EQUIP);
                    }
                    add = false;
                }
            } else if (splitted[1].equals("eq")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.EQUIP)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.EQUIP);
                    }
                    add = false;
                }
            } else if (splitted[1].equals("u")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.USE)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.USE);
                    }
                    add = false;
                }
            } else if (splitted[1].equals("s")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.SETUP)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.SETUP);
                    }
                    add = false;
                }
            } else if (splitted[1].equals("e")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.ETC)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.ETC);
                    }
                    add = false;
                }
            } else if (splitted[1].equals("c")) {
                for (Item item : c.getPlayer().getInventory(MapleInventoryType.CASH)) {
                    if (ItemFlag.LOCK.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.LOCK.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (ItemFlag.UNTRADABLE.check(item.getFlag())) {
                        item.setFlag((byte) (item.getFlag() - ItemFlag.UNTRADABLE.getValue()));
                        add = true;
                        //c.getSession().write(CField.updateSpecialItemUse(item, type.getType()));
                    }
                    if (add) {
                        eqs.put(item, MapleInventoryType.CASH);
                    }
                    add = false;
                }
            } else {
                c.getPlayer().dropMessage(6, "[all/eqp/eq/u/s/e/c]");
            }

            for (Entry<Item, MapleInventoryType> eq : eqs.entrySet()) {
                c.getPlayer().forceReAddItem_NoUpdate(eq.getKey().copy(), eq.getValue());
            }
            return 1;
        }
    }

    public static class Drop extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final int itemId = Integer.parseInt(splitted[1]);
            final short quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 2, 1);
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemId + " does not exist");
            } else {
                Item toDrop;
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {

                    toDrop = ii.randomizeStats((Equip) ii.getEquipById(itemId));
                } else {
                    toDrop = new client.inventory.Item(itemId, (byte) 0, (short) quantity, (byte) 0);
                }
                if (!c.getPlayer().isAdmin()) {
                    toDrop.setGMLog(c.getPlayer().getName() + " used !drop");
                    toDrop.setOwner(c.getPlayer().getName());
                }
                c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), toDrop, c.getPlayer().getPosition(), true, true);
            }
            return 1;
        }
    }

    public static class DropItem extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final String itemName = StringUtil.joinStringFrom(splitted, 2);
            final short quantity = (short) CommandProcessorUtil.getOptionalIntArg(splitted, 1, 1);
            int itemId = 0;
            for (Pair<Integer, String> item : MapleItemInformationProvider.getInstance().getAllItems2()) {
                if (item.getRight().toLowerCase().equals(itemName.toLowerCase())) {
                    itemId = item.getLeft();
                    break;
                }
            }
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            if (!ii.itemExists(itemId)) {
                c.getPlayer().dropMessage(5, itemName + " does not exist");
            } else {
                Item toDrop;
                if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {

                    toDrop = (Equip) ii.getEquipById(itemId);
                } else {
                    toDrop = new client.inventory.Item(itemId, (byte) 0, (short) quantity, (byte) 0);
                }
                if (!c.getPlayer().isAdmin()) {
                    toDrop.setGMLog(c.getPlayer().getName() + " used !drop");
                    toDrop.setOwner(c.getPlayer().getName());
                }
                c.getPlayer().getMap().spawnItemDrop(c.getPlayer(), c.getPlayer(), toDrop, c.getPlayer().getPosition(), true, true);
            }
            return 1;
        }
    }

    public static class Marry extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 3) {
                c.getPlayer().dropMessage(6, "Need <name> <itemid>");
                return 0;
            }
            int itemId = Integer.parseInt(splitted[2]);
            if (!GameConstants.isEffectRing(itemId)) {
                c.getPlayer().dropMessage(6, "Invalid itemID.");
            } else {
                MapleCharacter fff = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
                if (fff == null) {
                    c.getPlayer().dropMessage(6, "Player must be online");
                } else {
                    int[] ringID = {MapleInventoryIdentifier.getInstance(), MapleInventoryIdentifier.getInstance()};
                    try {
                        MapleCharacter[] chrz = {fff, c.getPlayer()};
                        for (int i = 0; i < chrz.length; i++) {
                            Equip eq = (Equip) MapleItemInformationProvider.getInstance().getEquipById(itemId, ringID[i]);
                            if (eq == null) {
                                c.getPlayer().dropMessage(6, "Invalid itemID.");
                                return 0;
                            }
                            MapleInventoryManipulator.addbyItem(chrz[i].getClient(), eq.copy());
                            chrz[i].dropMessage(6, "Successfully married with " + chrz[i == 0 ? 1 : 0].getName());
                        }
                        MapleRing.addToDB(itemId, c.getPlayer(), fff.getName(), fff.getId(), ringID);
                    } catch (SQLException e) {
                    }
                }
            }
            return 1;
        }
    }

    public static class Vac extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (!c.getPlayer().isHidden()) {
                c.getPlayer().dropMessage(6, "You can only vac monsters while in hide.");
                return 0;
            } else {
                for (final MapleMapObject mmo : c.getPlayer().getMap().getAllMonster()) {
                    final MapleMonster monster = (MapleMonster) mmo;
                    c.getPlayer().getMap().broadcastMessage(MobPacket.moveMonster(false, -1, 0, monster.getObjectId(), monster.getTruePosition(), c.getPlayer().getLastRes()));
                    monster.setPosition(c.getPlayer().getPosition());
                }
            }
            return 1;
        }
    }

    public static class GiveEP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 3) {
                c.getPlayer().dropMessage(6, "Need playername and amount.");
                return 0;
            }
            MapleCharacter chrs = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (chrs == null) {
                c.getPlayer().dropMessage(6, "Make sure they are in the correct channel");
            } else {
                chrs.setPoints(chrs.getPoints() + Integer.parseInt(splitted[2]));
                c.getPlayer().dropMessage(6, splitted[1] + " has " + chrs.getPoints() + " points, after giving " + splitted[2] + ".");
            }
            return 1;
        }
    }

    public static class GiveVP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 3) {
                c.getPlayer().dropMessage(6, "Need playername and amount.");
                return 0;
            }
            MapleCharacter chrs = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (chrs == null) {
                c.getPlayer().dropMessage(6, "Make sure they are in the correct channel");
            } else {
                chrs.setVPoints(chrs.getVPoints() + Integer.parseInt(splitted[2]));
                c.getPlayer().dropMessage(6, splitted[1] + " has " + chrs.getVPoints() + " VotePoints, after giving " + splitted[2] + ".");
            }
            return 1;
        }
    }

    public static class SpeakMap extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter victim : c.getPlayer().getMap().getCharacters()) {
                if (victim.getId() != c.getPlayer().getId()) {
                    victim.getMap().broadcastMessage(CField.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                }
            }
            return 1;
        }
    }

    public static class SpeakChn extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter victim : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                if (victim.getId() != c.getPlayer().getId()) {
                    victim.getMap().broadcastMessage(CField.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                }
            }
            return 1;
        }
    }

    public static class SpeakWorld extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                for (MapleCharacter victim : cserv.getPlayerStorage().getAllCharacters()) {
                    if (victim.getId() != c.getPlayer().getId()) {
                        victim.getMap().broadcastMessage(CField.getChatText(victim.getId(), StringUtil.joinStringFrom(splitted, 1), victim.isGM(), 0));
                    }
                }
            }
            return 1;
        }
    }

    public static class Monitor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter target = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (target != null) {
                if (target.getClient().isMonitored()) {
                    target.getClient().setMonitored(false);
                    c.getPlayer().dropMessage(5, "Not monitoring " + target.getName() + " anymore.");
                } else {
                    target.getClient().setMonitored(true);
                    c.getPlayer().dropMessage(5, "Monitoring " + target.getName() + ".");
                }
            } else {
                c.getPlayer().dropMessage(5, "Target not found on channel.");
                return 0;
            }
            return 1;
        }
    }

    public static class ResetOther extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[2])).forfeit(c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]));
            return 1;
        }
    }

    public static class FStartOther extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[2])).forceStart(c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]), Integer.parseInt(splitted[3]), splitted.length > 4 ? splitted[4] : null);
            return 1;
        }
    }

    public static class FCompleteOther extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[2])).forceComplete(c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]), Integer.parseInt(splitted[3]));
            return 1;
        }
    }

    public static class Threads extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            Thread[] threads = new Thread[Thread.activeCount()];
            Thread.enumerate(threads);
            String filter = "";
            if (splitted.length > 1) {
                filter = splitted[1];
            }
            for (int i = 0; i < threads.length; i++) {
                String tstring = threads[i].toString();
                if (tstring.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
                    c.getPlayer().dropMessage(6, i + ": " + tstring);
                }
            }
            return 1;
        }
    }

    public static class ShowTrace extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                throw new IllegalArgumentException();
            }
            Thread[] threads = new Thread[Thread.activeCount()];
            Thread.enumerate(threads);
            Thread t = threads[Integer.parseInt(splitted[1])];
            c.getPlayer().dropMessage(6, t.toString() + ":");
            for (StackTraceElement elem : t.getStackTrace()) {
                c.getPlayer().dropMessage(6, elem.toString());
            }
            return 1;
        }
    }

    public static class TMegaphone extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            World.toggleMegaphoneMuteState();
            c.getPlayer().dropMessage(6, "Megaphone state : " + (c.getChannelServer().getMegaphoneMuteState() ? "Enabled" : "Disabled"));
            return 1;
        }
    }

    public static class SReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleReactor reactor = new MapleReactor(MapleReactorFactory.getReactor(Integer.parseInt(splitted[1])), Integer.parseInt(splitted[1]));
            reactor.setDelay(-1);
            c.getPlayer().getMap().spawnReactorOnGroundBelow(reactor, new Point(c.getPlayer().getTruePosition().x, c.getPlayer().getTruePosition().y - 20));
            return 1;
        }
    }

    public static class ClearSquads extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final Collection<MapleSquad> squadz = new ArrayList<>(c.getChannelServer().getAllSquads().values());
            for (MapleSquad squads : squadz) {
                squads.clear();
            }
            return 1;
        }
    }

    public static class HitMonsterByOID extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            int targetId = Integer.parseInt(splitted[1]);
            int damage = Integer.parseInt(splitted[2]);
            MapleMonster monster = map.getMonsterByOid(targetId);
            if (monster != null) {
                map.broadcastMessage(MobPacket.damageMonster(targetId, damage));
                monster.damage(c.getPlayer(), damage, false);
            }
            return 1;
        }
    }

    public static class HitAll extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;
            if (splitted.length > 1) {
                int irange = Integer.parseInt(splitted[1]);
                if (splitted.length <= 2) {
                    range = irange * irange;
                } else {
                    map = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[2]));
                }
            }
            if (map == null) {
                c.getPlayer().dropMessage(6, "Map does not exist");
                return 0;
            }
            int damage = Integer.parseInt(splitted[1]);
            MapleMonster mob;
            for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                map.broadcastMessage(MobPacket.damageMonster(mob.getObjectId(), damage));
                mob.damage(c.getPlayer(), damage, false);
            }
            return 1;
        }
    }

    public static class HitMonster extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;
            int damage = Integer.parseInt(splitted[1]);
            MapleMonster mob;
            for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                if (mob.getId() == Integer.parseInt(splitted[2])) {
                    map.broadcastMessage(MobPacket.damageMonster(mob.getObjectId(), damage));
                    mob.damage(c.getPlayer(), damage, false);
                }
            }
            return 1;
        }
    }

    public static class KillMonster extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;
            MapleMonster mob;
            for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                if (mob.getId() == Integer.parseInt(splitted[1])) {
                    mob.damage(c.getPlayer(), mob.getHp(), false);
                }
            }
            return 1;
        }
    }

    public static class KillAllDrops extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;

            if (splitted.length > 1) {
                //&& !splitted[0].equals("!killmonster") && !splitted[0].equals("!hitmonster") && !splitted[0].equals("!hitmonsterbyoid") && !splitted[0].equals("!killmonsterbyoid")) {
                int irange = Integer.parseInt(splitted[1]);
                if (splitted.length <= 2) {
                    range = irange * irange;
                } else {
                    map = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[2]));
                }
            }
            if (map == null) {
                c.getPlayer().dropMessage(6, "Map does not exist");
                return 0;
            }
            MapleMonster mob;
            for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                map.killMonster(mob, c.getPlayer(), true, false, (byte) 1);
            }
            return 1;
        }
    }

    public static class KillAllExp extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            double range = Double.POSITIVE_INFINITY;

            if (splitted.length > 1) {
                //&& !splitted[0].equals("!killmonster") && !splitted[0].equals("!hitmonster") && !splitted[0].equals("!hitmonsterbyoid") && !splitted[0].equals("!killmonsterbyoid")) {
                int irange = Integer.parseInt(splitted[1]);
                if (splitted.length <= 2) {
                    range = irange * irange;
                } else {
                    map = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[2]));
                }
            }
            if (map == null) {
                c.getPlayer().dropMessage(6, "Map does not exist");
                return 0;
            }
            MapleMonster mob;
            for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                mob.damage(c.getPlayer(), mob.getHp(), false);
            }
            return 1;
        }
    }

    public static class NPC extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            int npcId = Integer.parseInt(splitted[1]);
            MapleNPC npc = MapleLifeFactory.getNPC(npcId);
            if (npc != null && !npc.getName().equals("MISSINGNO")) {
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(c.getPlayer().getPosition().y);
                npc.setRx0(c.getPlayer().getPosition().x + 50);
                npc.setRx1(c.getPlayer().getPosition().x - 50);
                npc.setFh(c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId());
                npc.setCustom(true);
                c.getPlayer().getMap().addMapObject(npc);
                c.getPlayer().getMap().broadcastMessage(NPCPacket.spawnNPC(npc, true));
            } else {
                c.getPlayer().dropMessage(6, "You have entered an invalid Npc-Id");
                return 0;
            }
            return 1;
        }
    }

    public static class PNPC extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 1) {
                c.getPlayer().dropMessage(6, "!pnpc <npcid>");
                return 0;
            }
            int npcId = Integer.parseInt(splitted[1]);
            MapleNPC npc = MapleLifeFactory.getNPC(npcId);
            if (npc != null && !npc.getName().equals("MISSINGNO")) {
                final int xpos = c.getPlayer().getPosition().x;
                final int ypos = c.getPlayer().getPosition().y;
                final int fh = c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId();
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(ypos);
                npc.setRx0(xpos);
                npc.setRx1(xpos);
                npc.setFh(fh);
                npc.setCustom(true);
                try {
                    Connection con = (Connection) DatabaseConnection.getConnection();
                    try (PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO wz_customlife (dataid, f, hide, fh, cy, rx0, rx1, type, x, y, mid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
                        ps.setInt(1, npcId);
                        ps.setInt(2, 0); // 1 = right , 0 = left
                        ps.setInt(3, 0); // 1 = hide, 0 = show
                        ps.setInt(4, fh);
                        ps.setInt(5, ypos);
                        ps.setInt(6, xpos);
                        ps.setInt(7, xpos);
                        ps.setString(8, "n");
                        ps.setInt(9, xpos);
                        ps.setInt(10, ypos);
                        ps.setInt(11, c.getPlayer().getMapId());
                        ps.executeUpdate();
                    }
                } catch (SQLException e) {
                    c.getPlayer().dropMessage(6, "Failed to save NPC to the net.db.");
                }
                c.getPlayer().getMap().addMapObject(npc);
                c.getPlayer().getMap().broadcastMessage(NPCPacket.spawnNPC(npc, true));
                c.getPlayer().dropMessage(6, "Please do not reload this map or else the NPC will disappear untill the next restart.");
            } else {
                c.getPlayer().dropMessage(6, "You have entered an invalid npc id.");
                return 0;
            }
            return 1;
        }
    }

    public static class PMOB extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(6, "!pmob <mobid> <mobTime>");
                return 0;
            }
            int mobid = Integer.parseInt(splitted[1]);
            int mobTime = Integer.parseInt(splitted[2]);
            MapleMonster npc;
            try {
                npc = MapleLifeFactory.getMonster(mobid);
            } catch (RuntimeException e) {
                c.getPlayer().dropMessage(5, "Error: " + e.getMessage());
                return 0;
            }
            if (npc != null) {
                final int xpos = c.getPlayer().getPosition().x;
                final int ypos = c.getPlayer().getPosition().y;
                final int fh = c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId();
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(ypos);
                npc.setRx0(xpos);
                npc.setRx1(xpos);
                npc.setFh(fh);
                try {
                    Connection con = (Connection) DatabaseConnection.getConnection();
                    try (PreparedStatement ps = (PreparedStatement) con.prepareStatement("INSERT INTO wz_customlife (dataid, f, hide, fh, cy, rx0, rx1, type, x, y, mid, mobtime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {
                        ps.setInt(1, mobid);
                        ps.setInt(2, 0); // 1 = right , 0 = left
                        ps.setInt(3, 0); // 1 = hide, 0 = show
                        ps.setInt(4, fh);
                        ps.setInt(5, ypos);
                        ps.setInt(6, xpos);
                        ps.setInt(7, xpos);
                        ps.setString(8, "m");
                        ps.setInt(9, xpos);
                        ps.setInt(10, ypos);
                        ps.setInt(11, c.getPlayer().getMapId());
                        ps.setInt(12, mobTime);
                        ps.executeUpdate();
                    }
                } catch (SQLException e) {
                    c.getPlayer().dropMessage(6, "Failed to save monster to the net.db.");
                }
                c.getPlayer().getMap().addMonsterSpawn(npc, mobTime, (byte) -1, null);
                c.getPlayer().dropMessage(6, "Please do not reload this map or else the monster will disappear till the next restart.");
            } else {
                c.getPlayer().dropMessage(6, "You have entered an invalid monster id.");
                return 0;
            }
            return 1;
        }
    }

    public static class PlayerNpc extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            try {
                c.getPlayer().dropMessage(6, "Making playerNPC...");
                MapleClient cs = new MapleClient(null, null, new MockIOSession());
                MapleCharacter chhr = MapleCharacter.loadCharFromDB(MapleCharacterUtil.getIdByName(splitted[1]), cs, false);
                if (chhr == null) {
                    c.getPlayer().dropMessage(6, splitted[1] + " does not exist");
                    return 0;
                }
                PlayerNPC npc = new PlayerNPC(chhr, Integer.parseInt(splitted[2]), c.getPlayer().getMap(), c.getPlayer());
                npc.addToServer();
                c.getPlayer().dropMessage(6, "Done");
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(6, "NPC failed... : " + e.getMessage());
            }
            return 1;
        }
    }

    public static class DestroyPlayerNPC extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            try {
                c.getPlayer().dropMessage(6, "Destroying playerNPC...");
                final MapleNPC npc = c.getPlayer().getMap().getNPCByOid(Integer.parseInt(splitted[1]));
                if (npc instanceof PlayerNPC) {
                    ((PlayerNPC) npc).destroy(true);
                    c.getPlayer().dropMessage(6, "Done");
                } else {
                    c.getPlayer().dropMessage(6, "!destroypnpc [objectid]");
                }
            } catch (NumberFormatException e) {
                c.getPlayer().dropMessage(6, "NPC failed... : " + e.getMessage());
            }
            return 1;
        }
    }

    public static class ServerMessage extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            String outputMessage = StringUtil.joinStringFrom(splitted, 1);
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.setServerMessage(outputMessage);
            }
            return 1;
        }
    }

    public static class PS extends CommandExecute {

        protected static StringBuilder builder = new StringBuilder();

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (builder.length() > 1) {
                c.getSession().write(CField.getPacketFromHexString(builder.toString()));
                builder = new StringBuilder();
            } else {
                c.getPlayer().dropMessage(6, "Please enter packet data!");
            }
            return 1;
        }
    }

    public static class APS extends PS {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                builder.append(StringUtil.joinStringFrom(splitted, 1));
                c.getPlayer().dropMessage(6, "String is now: " + builder.toString());
            } else {
                c.getPlayer().dropMessage(6, "Please enter packet data!");
            }
            return 1;
        }
    }

    public static class CPS extends PS {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            builder = new StringBuilder();
            return 1;
        }
    }

    public static class P extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                c.getSession().write(CField.getPacketFromHexString(StringUtil.joinStringFrom(splitted, 1)));
            } else {
                c.getPlayer().dropMessage(6, "Please enter packet data!");
            }
            return 1;
        }
    }

    public static class Packet extends P {
    }

    public static class PTS extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length > 1) {
                try {
                    c.getSession().getHandler().messageReceived(c.getSession(), (Object) CField.getPacketFromHexString(StringUtil.joinStringFrom(splitted, 1)));
                } catch (Exception e) {
                    c.getPlayer().dropMessage(6, "Error: " + e);
                }
            } else {
                c.getPlayer().dropMessage(6, "Please enter packet data!");
            }
            return 1;
        }
    }

    public static class ReloadMap extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final int mapId = Integer.parseInt(splitted[1]);
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                if (cserv.getMapFactory().isMapLoaded(mapId) && cserv.getMapFactory().getMap(mapId).getCharactersSize() > 0) {
                    c.getPlayer().dropMessage(5, "There exists characters on channel " + cserv.getChannel());
                    return 0;
                }
            }
            for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                if (cserv.getMapFactory().isMapLoaded(mapId)) {
                    cserv.getMapFactory().removeMap(mapId);
                }
            }
            return 1;
        }
    }

    public static class Respawn extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().respawn(true);
            return 1;
        }
    }

    public abstract static class TestTimer extends CommandExecute {

        protected Timer toTest = null;

        @Override
        public int execute(final MapleClient c, String[] splitted) {
            final int sec = Integer.parseInt(splitted[1]);
            c.getPlayer().dropMessage(5, "Message will fame up in " + sec + " seconds.");
            c.getPlayer().dropMessage(5, "Active: " + toTest.getSES().getActiveCount() + " Core: " + toTest.getSES().getCorePoolSize() + " Largest: " + toTest.getSES().getLargestPoolSize() + " Max: " + toTest.getSES().getMaximumPoolSize() + " Current: " + toTest.getSES().getPoolSize() + " Status: " + toTest.getSES().isShutdown() + toTest.getSES().isTerminated() + toTest.getSES().isTerminating());
            final long oldMillis = System.currentTimeMillis();
            toTest.schedule(new Runnable() {
                @Override
                public void run() {
                    c.getPlayer().dropMessage(5, "Message has popped up in " + ((System.currentTimeMillis() - oldMillis) / 1000) + " seconds, expected was " + sec + " seconds");
                    c.getPlayer().dropMessage(5, "Active: " + toTest.getSES().getActiveCount() + " Core: " + toTest.getSES().getCorePoolSize() + " Largest: " + toTest.getSES().getLargestPoolSize() + " Max: " + toTest.getSES().getMaximumPoolSize() + " Current: " + toTest.getSES().getPoolSize() + " Status: " + toTest.getSES().isShutdown() + toTest.getSES().isTerminated() + toTest.getSES().isTerminating());
                }
            }, sec * 1000);
            return 1;
        }
    }

    public static class TestEventTimer extends TestTimer {

        public TestEventTimer() {
            toTest = EventTimer.getInstance();
        }
    }

    public static class TestCloneTimer extends TestTimer {

        public TestCloneTimer() {
            toTest = CloneTimer.getInstance();
        }
    }

    public static class TestEtcTimer extends TestTimer {

        public TestEtcTimer() {
            toTest = EtcTimer.getInstance();
        }
    }

    public static class TestMapTimer extends TestTimer {

        public TestMapTimer() {
            toTest = MapTimer.getInstance();
        }
    }

    public static class TestWorldTimer extends TestTimer {

        public TestWorldTimer() {
            toTest = WorldTimer.getInstance();
        }
    }

    public static class TestBuffTimer extends TestTimer {

        public TestBuffTimer() {
            toTest = BuffTimer.getInstance();
        }
    }

    public static class Crash extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (victim != null && c.getPlayer().getGMLevel() >= victim.getGMLevel()) {
                victim.getClient().getSession().write(HexTool.getByteArrayFromHexString("1A 00")); //give_buff with no data :D
                return 1;
            } else {
                c.getPlayer().dropMessage(6, "The victim does not exist.");
                return 0;
            }
        }
    }
    
    public static class FillBook extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (int e : MapleItemInformationProvider.getInstance().getMonsterBook().keySet()) {
                c.getPlayer().getMonsterBook().getCards().put(e, 2);
            }
            c.getPlayer().getMonsterBook().changed();
            c.getPlayer().dropMessage(5, "Done.");
            return 1;
        }
    }

    public static class ListBook extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final List<Entry<Integer, Integer>> mbList = new ArrayList<>(MapleItemInformationProvider.getInstance().getMonsterBook().entrySet());
            Collections.sort(mbList, new BookComparator());
            final int page = Integer.parseInt(splitted[1]);
            for (int e = (page * 8); e < Math.min(mbList.size(), (page + 1) * 8); e++) {
                c.getPlayer().dropMessage(6, e + ": " + mbList.get(e).getKey() + " - " + mbList.get(e).getValue());
            }

            return 0;
        }

        public static class BookComparator implements Comparator<Entry<Integer, Integer>>, Serializable {

            @Override
            public int compare(Entry<Integer, Integer> o1, Entry<Integer, Integer> o2) {
                if (o1.getValue() > o2.getValue()) {
                    return 1;
                } else if (Objects.equals(o1.getValue(), o2.getValue())) {
                    return 0;
                } else {
                    return -1;
                }
            }
        }
    }

    public static class Subcategory extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().setSubcategory(Byte.parseByte(splitted[1]));
            return 1;
        }
    }

    public static class MaxMesos extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            victim.gainMeso(9999999 - c.getPlayer().getMeso(), true);
            return 1;
        }
    }

    public static class Mesos extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().gainMeso(Integer.parseInt(splitted[1]), true);
            return 1;
        }
    }

    public static class MesoPerson extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            victim.gainMeso(Integer.parseInt(splitted[2]), true);
            return 1;
        }
    }

    public static class GiftNx extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (splitted.length < 3) {
                c.getPlayer().dropMessage(5, "!giftnx <player> <amount>");
                return 0;
            }
            victim.modifyCSPoints(1, Integer.parseInt(splitted[2]), true);
            return 1;
        }
    }

    public static class GainMP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "Need amount.");
                return 0;
            }
            c.getPlayer().modifyCSPoints(2, Integer.parseInt(splitted[1]), true);
            return 1;
        }
    }

    public static class GainP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "Need amount.");
                return 0;
            }
            c.getPlayer().setPoints(c.getPlayer().getPoints() + Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class GainVP extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (splitted.length < 2) {
                c.getPlayer().dropMessage(5, "Need amount.");
                return 0;
            }
            c.getPlayer().setVPoints(c.getPlayer().getVPoints() + Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class MaxSkills extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter chr = c.getPlayer();
            for(Skill skill : chr.getSkills().keySet()) {
                byte maxLevel = (byte) skill.getMaxLevel();
                chr.changeSingleSkillLevel(skill, maxLevel, maxLevel);
            }
            return 1;
        }
    }

    public static class SetSendOp extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            SendPacketOpcode.valueOf(splitted[1]).setValue(Short.parseShort(splitted[2]));
            return 1;
        }
    }

    public static class SetRecvOp extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            RecvPacketOpcode.valueOf(splitted[1]).setValue(Short.parseShort(splitted[2]));
            return 1;
        }
    }

    public static class ReloadDrops extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMonsterInformationProvider.getInstance().clearDrops();
            ReactorScriptManager.getInstance().clearDrops();
            return 1;
        }
    }

    public static class ReloadPortal extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            PortalScriptManager.getInstance().clearScripts();
            return 1;
        }
    }

    public static class ReloadShops extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleShopFactory.getInstance().clear();
            return 1;
        }
    }

    public static class ReloadEvents extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (ChannelServer instance : ChannelServer.getAllInstances()) {
                instance.reloadEvents();
            }
            return 1;
        }
    }

    public static class ResetMap extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().resetFully();
            return 1;
        }
    }

    public static class ResetQuest extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forfeit(c.getPlayer());
            return 1;
        }
    }

    public static class StartQuest extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).start(c.getPlayer(), Integer.parseInt(splitted[2]));
            return 1;
        }
    }

    public static class CompleteQuest extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).complete(c.getPlayer(), Integer.parseInt(splitted[2]), Integer.parseInt(splitted[3]));
            return 1;
        }
    }

    public static class FStartQuest extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forceStart(c.getPlayer(), Integer.parseInt(splitted[2]), splitted.length >= 4 ? splitted[3] : null);
            return 1;
        }
    }

    public static class FCompleteQuest extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleQuest.getInstance(Integer.parseInt(splitted[1])).forceComplete(c.getPlayer(), Integer.parseInt(splitted[2]));
            return 1;
        }
    }

    public static class HReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().getReactorByOid(Integer.parseInt(splitted[1])).hitReactor(c);
            return 1;
        }
    }

    public static class FHReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().getReactorByOid(Integer.parseInt(splitted[1])).forceHitReactor(Byte.parseByte(splitted[2]));
            return 1;
        }
    }

    public static class DReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMap map = c.getPlayer().getMap();
            List<MapleMapObject> reactors = map.getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.REACTOR));
            if (splitted[1].equals("all")) {
                for (MapleMapObject reactorL : reactors) {
                    MapleReactor reactor2l = (MapleReactor) reactorL;
                    c.getPlayer().getMap().destroyReactor(reactor2l.getObjectId());
                }
            } else {
                c.getPlayer().getMap().destroyReactor(Integer.parseInt(splitted[1]));
            }
            return 1;
        }
    }

    public static class SetReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().setReactorState(Byte.parseByte(splitted[1]));
            return 1;
        }
    }

    public static class ResetReactor extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().getMap().resetReactors();
            return 1;
        }
    }

    public static class SendNote extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
            if (splitted.length >= 2) {
                String text = StringUtil.joinStringFrom(splitted, 1);
                c.getPlayer().sendNote(victim.getName(), text);
            } else {
                c.getPlayer().dropMessage(6, "Use it like this, !sendnote <victim> <text>");
                return 0;
            }
            return 1;
        }
    }

    public static class SendAllNote extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {

            if (splitted.length >= 1) {
                String text = StringUtil.joinStringFrom(splitted, 1);
                for (MapleCharacter mch : c.getChannelServer().getPlayerStorage().getAllCharacters()) {
                    c.getPlayer().sendNote(mch.getName(), text);
                }
            } else {
                c.getPlayer().dropMessage(6, "Use it like this, !sendallnote <text>");
                return 0;
            }
            return 1;
        }
    }

    public static class BuffSkill extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            SkillFactory.getSkill(Integer.parseInt(splitted[1])).getEffect(Integer.parseInt(splitted[2])).applyTo(c.getPlayer());
            return 0;
        }
    }

    public static class BuffItem extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleItemInformationProvider.getInstance().getItemEffect(Integer.parseInt(splitted[1])).applyTo(c.getPlayer());
            return 0;
        }
    }

    public static class BuffItemEX extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleItemInformationProvider.getInstance().getItemEffectEX(Integer.parseInt(splitted[1])).applyTo(c.getPlayer());
            return 0;
        }
    }

    public static class cancelSkill extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dispelBuff(Integer.parseInt(splitted[1]));
            return 1;
        }
    }

    public static class MapBuffSkill extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getPlayer().getMap().getCharacters()) {
                SkillFactory.getSkill(Integer.parseInt(splitted[1])).getEffect(Integer.parseInt(splitted[2])).applyTo(mch);
            }
            return 0;
        }
    }

    public static class MapBuffItem extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getPlayer().getMap().getCharacters()) {
                MapleItemInformationProvider.getInstance().getItemEffect(Integer.parseInt(splitted[1])).applyTo(mch);
            }
            return 0;
        }
    }

    public static class MapBuffItemEX extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (MapleCharacter mch : c.getPlayer().getMap().getCharacters()) {
                MapleItemInformationProvider.getInstance().getItemEffectEX(Integer.parseInt(splitted[1])).applyTo(mch);
            }
            return 0;
        }
    }

    public static class MapItemSize extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(6, "Number of items: " + MapleItemInformationProvider.getInstance().getAllItems().size());
            return 0;
        }
    }

    public static class openUIOption extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getSession().write(CField.UIPacket.openUIOption(Integer.parseInt(splitted[1]), 9010000));
            return 1;
        }
    }

    public static class openUIWindow extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getSession().write(CField.UIPacket.openUI(Integer.parseInt(splitted[1])));
            return 1;
        }
    }
}
