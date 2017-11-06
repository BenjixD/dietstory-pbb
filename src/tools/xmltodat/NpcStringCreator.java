package tools.xmltodat;

import lib.data.MapleData;
import lib.data.MapleDataProvider;
import lib.data.MapleDataProviderFactory;

import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

/**
 * Created by Tim on 11/6/2017.
 */
public class NpcStringCreator {

    public static void main(String[] args) {

        Properties properties = new Properties();
        try {
            properties.load(new FileInputStream("config.properties"));
        } catch (IOException ex) {
            System.out.println("Failed to load config.properties");
        }
        // Load the WZ path
        System.setProperty("wzpath", properties.getProperty("wzpath"));


        Map<Integer, String> npcNames = new HashMap<>();
        MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider("String.wz");
        List<MapleData> lNpcData = stringDataWZ.getData("Npc.img").getChildren();
        for(MapleData mapleData : lNpcData) {
            int id = Integer.parseInt(mapleData.getName());
            if(mapleData.getChildByPath("name") != null) {
                String name = (String) mapleData.getChildByPath("name").getData();
                npcNames.put(id, name);
            }
        }
        File file = new File("dat\\NpcString.dat");
        DataOutputStream out;
        try {
            out = new DataOutputStream(new FileOutputStream(file));
            out.writeShort(npcNames.size());
            for(Map.Entry<Integer, String> entry : npcNames.entrySet()) {
                out.writeBoolean(true);
                out.writeInt(entry.getKey());
                out.writeChars(entry.getValue());
            }
        }  catch (IOException e) {
            e.printStackTrace();
        }
    }
}
