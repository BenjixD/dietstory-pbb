package client;

import tools.data.PacketWriter;

import java.util.ArrayList;

/**
 * Created by Tim on 11/6/2017.
 */
public class StopForceAtom {

    private int idx, weaponId, count;
    private ArrayList<Integer> values;

    private StopForceAtom(int idx, int count, int weaponId, ArrayList<Integer> values) {
        this.idx = idx;
        this.count = count;
        this.weaponId = weaponId;
        this.values = values;
    }

    public StopForceAtom(int idx, int count, int weaponId) {
        this(idx, weaponId, count, new ArrayList<>());
    }

    public int getIdx() {
        return idx;
    }

    public int getWeaponId() {
        return weaponId;
    }

    public ArrayList<Integer> getValues() {
        return values;
    }

    public void addValue(int val) {
        getValues().add(val);
    }

    public void encode(PacketWriter packetWriter) {
        packetWriter.writeInt(getIdx());
        packetWriter.writeInt(getCount());
        packetWriter.writeInt(getWeaponId());
        packetWriter.writeInt(getValues().size());
        for(int i = 0; i < getValues().size(); i++) {
            packetWriter.writeInt(getValues().get(i));
        }
    }

    public int getCount() {
        return count;
    }
}
