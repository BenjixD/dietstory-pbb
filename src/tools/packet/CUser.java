package tools.packet;

import handling.SendPacketOpcode;
import tools.data.PacketWriter;

/**
 * Created on 12/6/2017.
 */
public class CUser {

    public static byte[] onSkillTimerIdk(int skillid, int time) {
        PacketWriter pw = new PacketWriter(SendPacketOpcode.SKILL_TIMER_IDK);

        pw.writeInt(skillid);
        pw.writeInt(time);

        return pw.getPacket();

    }

    public static byte[] flameWizardElementFlameSummon() {
        PacketWriter pw = new PacketWriter(SendPacketOpcode.FLAME_WIZARD_ELEMENT_FLAME_SUMMON);

        return pw.getPacket();
    }
}
