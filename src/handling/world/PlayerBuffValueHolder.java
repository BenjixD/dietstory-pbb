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
package handling.world;

import java.io.Serializable;
import java.util.Map;

import client.CharacterTemporaryStat;
import server.MapleStatEffect;

public class PlayerBuffValueHolder implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    public long startTime;
    public int localDuration, cid;
    public MapleStatEffect effect;
    public Map<CharacterTemporaryStat, Integer> statup;

    public PlayerBuffValueHolder(final long startTime, final MapleStatEffect effect, final Map<CharacterTemporaryStat, Integer> statup, int localDuration, int cid) {
        this.startTime = startTime;
        this.effect = effect;
        this.statup = statup;
        this.localDuration = localDuration;
        this.cid = cid;
    }
}
