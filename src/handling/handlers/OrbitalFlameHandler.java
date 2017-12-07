package handling.handlers;

import client.MapleClient;
import client.Skill;
import client.skills.ForceAtomInfo;
import handling.PacketHandler;
import handling.RecvPacketOpcode;
import server.life.MapleMonster;
import tools.data.LittleEndianAccessor;
import tools.packet.CField;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 12/7/2017.
 */
public class OrbitalFlameHandler {

    @PacketHandler(opcode = RecvPacketOpcode.ORBITAL_FLAME)
    public static void handle(MapleClient c, LittleEndianAccessor lea) {
        //FC 1E B7 00 14 00 00
        int skillId = lea.readInt();
        byte skillLevel = lea.readByte();
        short direction = lea.readByte(); // 0 left, 1 right, 2 up, 3 down
        Skill skill = c.getPlayer().getSkill(skillId);
        int orbType;
        switch(skillId) {
            case 12001020:
                orbType = 1;
                break;
            case 12100020:
                orbType = 2;
                break;
            case 12110020:
                orbType = 3;
                break;
            case 12120006:
                orbType = 4;
                break;
            default:
                orbType = 0;
                break;
        }
        int angle = 0;
        switch(direction) {
            case 0:
            case 1:
                angle = 270;
                break;
            case 2:
                angle = 0;
                break;
            case 3:
                angle = 180;
                break;
        }
        ForceAtomInfo forceAtomInfo = new ForceAtomInfo(0, orbType, 5, 5, angle,
                0, (int) System.currentTimeMillis(), 1, 12001020, new Point()
        );
        List<ForceAtomInfo> faiList = new ArrayList<>();
        faiList.add(forceAtomInfo);
        c.getSession().write(CField.createForceAtom(0, c.getPlayer().getId(), -1, ForceAtomInfo.Type.NO_TARGET, false, new ArrayList<>(),
                faiList, null, 0,
                direction, 300, null, 0));
    }
}
