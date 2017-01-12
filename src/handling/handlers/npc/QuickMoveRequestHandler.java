package handling.handlers.npc;

import client.MapleClient;
import handling.PacketHandler;
import handling.RecvPacketOpcode;
import handling.channel.handler.NPCHandler;
import tools.data.LittleEndianAccessor;

public class QuickMoveRequestHandler {

    @PacketHandler(opcode = RecvPacketOpcode.QUICK_MOVE_REQUEST)
    public static void handle(MapleClient c, LittleEndianAccessor lea){
        NPCHandler.NPCTalk(lea, c, c.getPlayer());
    }

}
