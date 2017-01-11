package handling.handlers;

import client.MapleCharacter;
import client.MapleClient;
import client.inventory.VMatrixEntry;
import handling.PacketHandler;
import handling.RecvPacketOpcode;
import tools.data.LittleEndianAccessor;
import tools.packet.CWvsContext;

/**
 * Logic based off of PacketBakery's release at http://forum.ragezone.com/f427/xmas-release-matrix-system-5th-1122677/.
 * @Author PacketBakery
 */
public class UpdateMatrixHandler {

    @PacketHandler(opcode = RecvPacketOpcode.UPDATE_MATRIX)
    public static void handle(MapleClient c, LittleEndianAccessor lea){
        MapleCharacter chr = c.getPlayer();
        boolean active = lea.readInt() > 0;
        int slot = lea.readInt();
        lea.readInt(); // always -1
        VMatrixEntry matrixEntry = null;
        if(slot < chr.getvMatrixEntries().size()) {
            matrixEntry = chr.getvMatrixEntries().get(slot);
        }
        if(matrixEntry != null){
            if(active){ // this is in the RZ post, but doesn't it have to be !active?
                matrixEntry.setActive(false);
                // TODO remove skills from chr
            }else{
                matrixEntry.setActive(true);
                // TODO add skills to char
            }
            c.getSession().write(CWvsContext.updateVMatrix(chr.getvMatrixEntries()));
        }else{
            chr.dropMessage(6, "You tried to update a vSkill that was not in your current list of skills.");
        }
    }
}
