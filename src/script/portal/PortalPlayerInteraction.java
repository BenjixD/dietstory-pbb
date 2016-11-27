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
package script.portal;

import client.MapleClient;
import script.AbstractPlayerInteraction;
import server.MaplePortal;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;

public class PortalPlayerInteraction extends AbstractPlayerInteraction {

    private final MaplePortal portal;

    public PortalPlayerInteraction(final MapleClient c, final MaplePortal portal) {
        super(c, portal.getId(), c.getPlayer().getMapId(), "");
        this.portal = portal;
    }

    public final MaplePortal getPortal() {
        return portal;
    }

    public final void inFreeMarket() {
        if (getMapId() != 910000000) {
            if (getPlayer().getLevel() >= 15) {
                saveLocation("FREE_MARKET");
                playPortalSE();
                warp(910000000, "st00");
            } else {
                playerMessage(5, "You must be level 15 in order to be able to enter the FreeMarket.");
            }
        }
    }
    public final void inArdentmill() {
        if (getMapId() != 910001000) {
            if (getPlayer().getLevel() >= 10) {
                saveLocation("ARDENTMILL");
                playPortalSE();
                warp(910001000, "st00");
            } else {
                playerMessage(5, "You must be level 15 in order to be able to enter the Crafting Town.");
            }
        }
    }

    // summon one monster on reactor location
    @Override
    public void spawnMonster(int id) {
        spawnMonster(id, 1, portal.getPosition());
    }

    // summon monsters on reactor location
    @Override
    public void spawnMonster(int id, int qty) {
        spawnMonster(id, qty, portal.getPosition());
    }
    
    // summon special monsters on reactor location
    public void spawnMonster(int id, long hp, int mp, int qty, int exp) {
        MapleMonster monster = MapleLifeFactory.getMonster(id);
        OverrideMonsterStats stats = new OverrideMonsterStats();
        stats.setOHp(hp);
        stats.setOMp(mp);
        stats.setOExp(exp);
        monster.setOverrideStats(stats);
        for (int i = 0; i < qty; i++) {
            getMap().spawnMonsterOnGroundBelow(monster, portal.getPosition());
        }
    }
}

