package handling.handlers;

import client.MapleClient;
import client.Skill;
import client.skills.ForceAtomInfo;
import handling.PacketHandler;
import handling.RecvPacketOpcode;
import script.event.EventManager;
import server.Timer;
import server.life.MapleMonster;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleSummon;
import server.maps.SummonMovementType;
import tools.data.LittleEndianAccessor;
import tools.packet.CField;
import tools.packet.CUser;

import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
        ForceAtomInfo forceAtomInfo = new ForceAtomInfo(1, orbType, 30, 13, angle,
                0, (int) System.currentTimeMillis(), 0, 0, new Point()
        );
        List<ForceAtomInfo> faiList = new ArrayList<>();
        faiList.add(forceAtomInfo);
//        MapleMonster mm = c.getPlayer().getMap().getAllMonster().stream().findFirst().orElse(null);
        List<Integer> targets = new ArrayList<>();
        targets.add(c.getPlayer().getObjectId());

        c.getSession().write(CField.createForceAtom(0, c.getPlayer().getId(), skillId, ForceAtomInfo.Type.NO_TARGET, true,
                targets,faiList, null, 0, direction, 0, null, 0));
        if(c.getPlayer().getSkillLevel(12000022) > 0) {
            c.getSession().write(CUser.flameWizardElementFlameSummon());
            int flameSkillId = c.getPlayer().getSkillLevel(12120007) > 0 ? 12120007 :
                    c.getPlayer().getSkillLevel(12110024) > 0 ? 12110024 :
                    c.getPlayer().getSkillLevel(12100026) > 0 ? 12100026 : 12000022;
            MapleSummon mapleSummon = new MapleSummon(c.getPlayer(), flameSkillId, c.getPlayer().getSkillLevel(flameSkillId),
                    c.getPlayer().getPosition(), SummonMovementType.FOLLOW);
            c.getSession().write(CField.SummonPacket.spawnSummon(mapleSummon, true));
            Timer.EventTimer.getInstance().schedule(
                    () -> c.getSession().write(
                            CField.SummonPacket.removeSummon(c.getPlayer().getId(), mapleSummon.getObjectId())), 8000
                    );
        }
    }
}
