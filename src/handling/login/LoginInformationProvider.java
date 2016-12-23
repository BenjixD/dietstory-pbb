/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc>
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.login;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import constants.GameConstants;
import lib.data.MapleData;
import lib.data.MapleDataProvider;
import lib.data.MapleDataProviderFactory;
import lib.data.MapleDataTool;
import tools.Triple;

public class LoginInformationProvider {

    public enum JobType {

        UltimateAdventurer(-1, 0, 450004600, true, true, false, false, true, false),
        Resistance(0, 3000, 450004600, true, false, false, false, false, false), // works
        Adventurer(1, 0, 450004600, false, true, false, false, false, false), // works
        Cygnus(2, 1000, 450004600, false, true, false, false, false, true), // works
        Aran(3, 2000, 450004600, true, true, false, false, true, false), // cant create char
        Evan(4, 2001, 450004600, true, true, false, false, true, false),//cant create char
        Mercedes(5, 2002, 450004600, false, false, false, false, false, false),//works
        Demon(6, 3001, 450004600, false, false, true, false, false, false),//works
        Phantom(7, 2003, 450004600, false, true, false, false, false, true),//doesnt warptomap
        DualBlade(8, 0, 450004600, false, true, false, false, false, false),//works
        Mihile(9, 5000, 450004600, true, true, false, false, true, false),//works
        Luminous(10, 2004, 450004600, false, true, false, false, false, true),//doesnt warptomap
        Kaiser(11, 6000, 450004600, false, true, false, false, false, false),//doesnt warptomap
        AngelicBuster(12, 6001, 450004600, false, true, false, false, false, false),//doesnt warptomap
        Cannoneer(13, 0, 450004600, true, true, false, false, true, false),//doesn't warp to the right map
        Xenon(14, 3002, 450004600, true, true, true, false, false, false),//doesnt warptomap
        Zero(15, 10112, 450004600, false, true, false, false, false, true),//doesnt warptomap en na char selecteren verwijdert ie zero
        Jett(16, 0, 450004600, false, false, false, false, false, true),//cant create char (can on acernis 146, gotta compare em)
        Hayato(18, 4001, 450004600, true, true, false, true, false, false),//half stater map TODO real tutorial
        Kanna(19, 4002, 450004600, true, true, false, true, false, false);//works
    	//name(job selection, jobid, startermap, ?,?,?,?,?,?);
    	//todo add chase/bt(works on acernis146) and shade and kinesis
    	
    	
        // actual tutorial map values
//        UltimateAdventurer(-1, 0, 450004600, true, true, false, false, true, false),
//        Resistance(0, 3000, 450004600, true, false, false, false, false, false), // tutorial works 100%
//        Adventurer(1, 0, 450004600, false, true, false, false, false, false),
//        Cygnus(2, 1000, 450004600, false, true, false, false, false, true),
//        Aran(3, 2000, 450004600, true, true, false, false, true, false),
//        Evan(4, 2001, 450004600, true, true, false, false, true, false),//evan starter map - need to test tutorial
//        Mercedes(5, 2002, 450004600, false, false, false, false, false, false),//101050000 - 910150000
//        Demon(6, 3001, 450004600, false, false, true, false, false, false),
//        Phantom(7, 2003, 450004600, false, true, false, false, false, true),
//        DualBlade(8, 0, 450004600, false, true, false, false, false, false),//tutorial fixed
//        Mihile(9, 5000, 450004600, true, true, false, false, true, false),
//        Luminous(10, 2004, 450004600, false, true, false, false, false, true),//Ellinia atm TODO tutorial
//        Kaiser(11, 6000, 450004600, false, true, false, false, false, false),
//        AngelicBuster(12, 6001, 450004600, false, true, false, false, false, false),//400000000 - 940011000 - town now TODO tutorial
//        Cannoneer(13, 0, 450004600, true, true, false, false, true, false),//portal problem
//        Xenon(14, 3002, 450004600, true, true, true, false, false, false),
//        Zero(15, 10112, 450004600, false, true, false, false, false, true),//create tutorial plox
//        Jett(16, 0, 450004600, false, false, false, false, false, true),//End map for tutorial
//        Hayato(17, 4001, 450004600, true, true, false, true, false, false),//half stater map TODO real tutorial
//        Kanna(18, 4002, 450004600, true, true, false, true, false, false);
        public int type, id, map;
        public boolean hairColor, skinColor, faceMark, hat, bottom, cape;

        private JobType(int type, int id, int map, boolean hairColor, boolean skinColor, boolean faceMark, boolean hat, boolean bottom, boolean cape) {
            this.type = type;
            this.id = id;
            this.map = map;
            this.hairColor = hairColor;
            this.skinColor = skinColor;
            this.faceMark = faceMark;
            this.hat = hat;
            this.bottom = bottom;
            this.cape = cape;
        }

        public static JobType getByType(int g) {
            if (g == JobType.Cannoneer.type) {
                return JobType.Adventurer;
            }
            for (JobType e : JobType.values()) {
                if (e.type == g) {
                    return e;
                }
            }
            return null;
        }

        public static JobType getById(int g) {
            if (g == JobType.Adventurer.id) {
                return JobType.Adventurer;
            }
            if (g == 508) {
                return JobType.Jett;
            }
            for (JobType e : JobType.values()) {
                if (e.id == g) {
                    return e;
                }
            }
            return null;
        }
    }
    
    private final static LoginInformationProvider instance = new LoginInformationProvider();
    protected final List<String> ForbiddenName = new ArrayList<>();
    //gender, val, job
    
    protected final Map<Triple<Integer, Integer, Integer>, List<Integer>> makeCharInfo = new HashMap<>();
    //0 = eyes 1 = hair 2 = haircolor 3 = skin 4 = top 5 = bottom 6 = shoes 7 = weapon
    
    /*
     * Resistance
     * 0 - Eyes
     * 1 - Hair
     * 2 - Hair Color
     * 3 - Longcoat?
     * 4 - Shoes
     * 5 - Weapon
     */

    public static LoginInformationProvider getInstance() {
        return instance;
    }

    protected LoginInformationProvider() {
        final MapleDataProvider prov = MapleDataProviderFactory.getDataProvider("Etc.wz");
        	
        MapleData nameData = prov.getData("ForbiddenName.img");
        for (final MapleData data : nameData.getChildren()) {
            ForbiddenName.add(MapleDataTool.getString(data));
        }
        
        final MapleData infoData = prov.getData("MakeCharInfo.img");
        final MapleData uA = infoData.getChildByPath("UltimateAdventurer");
        
    }

    public static boolean isExtendedSpJob(int jobId) {
        return GameConstants.isSeparatedSp(jobId);
    }

    public final boolean isForbiddenName(final String in) {
        for (final String name : ForbiddenName) {

            if (in.toLowerCase().contains(name.toLowerCase())) {
                return true;
            }

        }
        return false;
    }

    public final boolean isEligibleItem(final int gender, final int val, final int job, final int item) {
        if (item < 0) {
            return false;
        }
        final Triple<Integer, Integer, Integer> key = new Triple<>(gender, val, job);
        final List<Integer> our = makeCharInfo.get(key);
        if (our == null) {
            return false;
        }
        return our.contains(item);
    }
}
