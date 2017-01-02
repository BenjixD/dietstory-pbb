package client.inventory;

import sun.misc.VM;
import tools.data.PacketWriter;

/**
 * Created by Sjonnie on 12/27/2016.
 * Logic based off of PacketBakery's release over at http://forum.ragezone.com/f427/xmas-release-matrix-system-5th-1122677/.
 */
public class VMatrixEntry {

    private boolean active;
    private int iconID, skillID1, skillID2, skillID3, slv, masterLv, row, exp;
    private long crc;
    // public FileTime ftExpirationDate = FileTime.GetPermanentTime();

    /**
     * Creates a new VMatrixEntry with the given values.
     * @param active Activity of this entry.
     * @param iconID The icon of this entry.
     * @param skillid1 The first skillID of this entry.
     * @param skillid2 The second skillID of this entry.
     * @param skillid3 The third skillID of this entry.
     * @param slv ?
     * @param masterlv Maximum level of this entry.
     * @param row ?
     * @param exp The current exp of this entry.
     * @param crc The crc of this entry?
     */
    public VMatrixEntry(boolean active, int iconID, int skillid1, int skillid2, int skillid3, int slv, int masterlv, int row, int exp, long crc){
        this.active = active;
        this.iconID = iconID;
        skillID1 = skillid1;
        skillID2 = skillid2;
        skillID3 = skillid3;
        this.slv = slv;
        masterLv = masterlv;
        this.row = row;
        this.exp = exp;
        this.crc = crc;
    }

    /**
     * Creates a new inactive VMatrixEntry with given values, and sets the slv, row, exp and crc to 0 and masterlv to 25.
     * @param iconID
     * @param skillid1
     * @param skillid2
     * @param skillid3
     */
    public VMatrixEntry(int iconID, int skillid1, int skillid2, int skillid3){
        this(false, iconID, skillid1, skillid2, skillid3, 0, 25, 0, 0, 0);
    }

    /**
     * Creates a new inactive VMatrixEntry with default values (0/false).
     */
    public VMatrixEntry(){
        this(false, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    /**
     * Encodes this VMatrixEntry given a PacketWriter.
     * @param pw The PacketWriter to encode to.
     */
    public void encode(PacketWriter pw){
        pw.writeLong(crc);
        pw.writeInt(iconID);
        pw.writeInt(slv);
        pw.writeInt(exp);
        pw.writeInt(active ? 2 : 1);
        pw.writeInt(skillID1);
        pw.writeInt(skillID2);
        pw.writeInt(skillID3);
        pw.writeInt(-1); // ftExpirationDate.dwLowTime
        pw.writeInt(-1); // ftExpirationDate.dwHighTime
    }

    public int getIconID() {
        return iconID;
    }

    public void setIconID(int iconID) {
        this.iconID = iconID;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getSkillID1() {
        return skillID1;
    }

    public int getSkillID2() {
        return skillID2;
    }

    public int getSkillID3() {
        return skillID3;
    }

    public void setSkillID1(int skillID1) {
        this.skillID1 = skillID1;
    }

    public void setSkillID2(int skillID2) {
        this.skillID2 = skillID2;
    }

    public void setSkillID3(int skillID3) {
        this.skillID3 = skillID3;
    }

    public int getExp() {
        return exp;
    }

    public int getMasterLv() {
        return masterLv;
    }

    public int getRow() {
        return row;
    }

    public int getSlv() {
        return slv;
    }

    public long getCrc() {
        return crc;
    }

    public void setCrc(long crc) {
        this.crc = crc;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public void setMasterLv(int masterLv) {
        this.masterLv = masterLv;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    /**
     * Returns true if the given VMatrixEntry has the same iconid, skills, exp and masterLv.
     * @param o
     * @return
     */
    public boolean equals(Object o){
        boolean result = false;
        if(o instanceof VMatrixEntry){
            VMatrixEntry vme = (VMatrixEntry) o;
            result = vme.getIconID() == getIconID() && vme.getSkillID1() == getSkillID1() &&
                    vme.getSkillID2() == getSkillID2() && vme.getSkillID3() == getSkillID3() &&
                    vme.getExp() == getExp() && vme.getMasterLv() == getMasterLv();
        }
        return result;
    }

    /**
     * Checks if the given VMatrixEntry has the same skills as this VMatrixEntry. Order dependant.
     * @param vme
     * @return
     */
    public boolean hasSameSkillsAs(VMatrixEntry vme){
        return vme.getSkillID1() == getSkillID1() && vme.getSkillID2() == getSkillID2() && vme.getSkillID3() == getSkillID3();
    }

    /**
     * Checks if this VMatrixEntry can be used to enhance the given VMatrixEntry.
     * @param vme The given VMatrixEntry.
     * @return
     */
    public boolean canBeUsedFor(VMatrixEntry vme){
        return vme.getSkillID1() == getSkillID1();
    }
}
