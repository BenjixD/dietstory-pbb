package client.skills;

import client.MapleCharacter;
import client.MapleClient;
import server.MapleStatEffect;
import tools.data.LittleEndianAccessor;
import tools.packet.CField;

import java.awt.*;

/**
 * Created on 12/10/2017.
 */
public class MagicianSkill {

    public static void handleBWSkill(MapleClient c, LittleEndianAccessor slea, int skillid, int skillLevel, MapleStatEffect effect) {
        MapleCharacter chr = c.getPlayer();
        switch(skillid) {
        case 12101025:
            Point start = slea.readPos();
            Point current = slea.readPos();
            byte idk = slea.readByte();
            boolean isSecondUse = slea.readByte() == 1;
            if(isSecondUse) {
                chr.setPosition(start);
                c.getSession().write(CField.instantMapWarp((byte) 3, chr.getId(), start));
            }
            break;
        }
    }
}
