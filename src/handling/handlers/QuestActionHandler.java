package handling.handlers;

import client.MapleClient;
import constants.GameConstants;
import handling.PacketHandler;
import handling.RecvPacketOpcode;
import script.npc.NPCScriptManager;
import server.quest.MapleQuest;
import tools.data.LittleEndianAccessor;
import tools.packet.CField.EffectPacket;
import tools.packet.CWvsContext;

public class QuestActionHandler {
    /*
enum QuestRes
{
  QuestReq_LostItem = 0x0,
  QuestReq_AcceptQuest = 0x1,
  QuestReq_CompleteQuest = 0x2,
  QuestReq_ResignQuest = 0x3,
  QuestReq_OpeningScript = 0x4,
  QuestReq_CompleteScript = 0x5,
  QuestReq_LaterStep = 0x6,
  QuestRes_Start_QuestTimer = 0x7,
  QuestRes_End_QuestTimer = 0x8,
  QuestRes_Start_TimeKeepQuestTimer = 0x9,
  QuestRes_End_TimeKeepQuestTimer = 0xA,
  QuestRes_Act_Success = 0xB,
  QuestRes_Act_Failed_Unknown = 0xC,
  QuestRes_Act_Failed_Inventory = 0xD,
  QuestRes_Act_Failed_Meso = 0xE,
  QuestRes_Act_Failed_OverflowMeso = 0xF,
  QuestRes_Act_Failed_Pet = 0x10,
  QuestRes_Act_Failed_Equipped = 0x11,
  QuestRes_Act_Failed_OnlyItem = 0x12,
  QuestRes_Act_Failed_TimeOver = 0x13,
  QuestRes_Act_Failed_State = 0x14,
  QuestRes_Act_Failed_Quest = 0x15,
  QuestRes_Act_Failed_Block = 0x16,
  QuestRes_Act_Failed_Universe = 0x17,
  QuestRes_Act_Reset_QuestTimer = 0x18,
  MakingRes_Success_SoSo = 0x19,
  MakingRes_Success_Good = 0x1A,
  MakingRes_Success_Cool = 0x1B,
  MakingRes_Fail_Unknown = 0x1C,
  MakingRes_Fail_Prob = 0x1D,
  MakingRes_Fail_NoDecomposer = 0x1E,
  MakingRes_Fail_MesoOverflow = 0x1F,
  MakingRes_Fail_TooHighFee = 0x20,
  MakingRes_Fail_NotEnoughMeso = 0x21,
};
     */
	@PacketHandler(opcode = RecvPacketOpcode.QUEST_ACTION)
	public static void handle(MapleClient c, LittleEndianAccessor lea) {
		byte action = lea.readByte();
        int quest = lea.readInt();
        
        if (quest == 20734) {
            c.getSession().write(CWvsContext.ultimateExplorer());
            return;
        }
        
        if (c.getPlayer() == null){
            return;
        }
        
        MapleQuest q = MapleQuest.getInstance(quest);
        switch (action) {
            case 0: { // restore lost item
                lea.readInt(); // update tick
                final int itemid = lea.readInt();
                q.RestoreLostItem(c.getPlayer(), itemid);
                break;
            }
            case 1: { // start quest
                int npc = lea.readInt();
                System.out.println("quest started");
                if (npc == 0 && quest > 0) {
                    q.forceStart(c.getPlayer(), npc, null);
                } else if (!q.hasStartScript()) {
                    q.start(c.getPlayer(), npc);
                    System.out.println("The npc has no script");
                }
                break;
            }
            case 2: { // complete quest
                int npc = lea.readInt();
                lea.readInt(); // update tick
                System.out.println("quest completed");
                if (q.hasEndScript())
                    return;
                
                if (lea.available() >= 4) {
                	int selection = lea.readInt();
                    q.complete(c.getPlayer(), npc, selection);
                } else {
                    q.complete(c.getPlayer(), npc);
                }
                break;
            }
            case 3: { // forfeit quest
                if (GameConstants.canForfeit(q.getId())) {
                    System.out.println("quest forfeit");
                    q.forfeit(c.getPlayer());
                } else {
                    c.getPlayer().dropMessage(1, "You may not forfeit this quest.");
                }
                break;
            }
            case 4: { // scripted start quest
                int npc = lea.readInt();
                
                if (c.getPlayer().hasBlockedInventory()){
                    return;
                }
                
                NPCScriptManager.getInstance().startQuest(c, npc, quest);
                break;
            }
            case 5: { // scripted end quest

                int npc = lea.readInt();
                lea.readInt();
                if (c.getPlayer().hasBlockedInventory())
                    return;
                
                NPCScriptManager.getInstance().endQuest(c, npc, quest, false);
                c.getSession().write(EffectPacket.UserEffectCodes.QuestComplete);
                c.getPlayer().getMap().broadcastMessage(c.getPlayer(), EffectPacket.showForeignEffect(c.getPlayer().getId(), 12), false);
                break;
            }
        } 
	}
}
