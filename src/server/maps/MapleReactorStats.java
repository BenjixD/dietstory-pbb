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
package server.maps;

import java.awt.Point;
import java.util.HashMap;
import java.util.Map;

import tools.Pair;

public class MapleReactorStats {

    private Point tl;
    private Point br;
    private final Map<Byte, StateData> stateInfo = new HashMap<>();

    public void setTL(Point tl) {
        this.tl = tl;
    }

    public void setBR(Point br) {
        this.br = br;
    }

    public Point getTL() {
        return tl;
    }

    public Point getBR() {
        return br;
    }

    public void addState(byte state, int type, Pair<Integer, Integer> reactItem, byte nextState, int timeOut, byte canTouch) {
        stateInfo.put(state, new StateData(type, reactItem, nextState, timeOut, canTouch));
    }

    public byte getNextState(byte state) {
        StateData nextState = stateInfo.get(state);
        if (nextState != null) {
            return nextState.getNextState();
        } else {
            return -1;
        }
    }

    public int getType(byte state) {
        StateData nextState = stateInfo.get(state);
        if (nextState != null) {
            return nextState.getType();
        } else {
            return -1;
        }
    }

    public Pair<Integer, Integer> getReactItem(byte state) {
        StateData nextState = stateInfo.get(state);
        if (nextState != null) {
            return nextState.getReactItem();
        } else {
            return null;
        }
    }

    public int getTimeOut(byte state) {
        StateData nextState = stateInfo.get(state);
        if (nextState != null) {
            return nextState.getTimeOut();
        } else {
            return -1;
        }
    }

    public byte canTouch(byte state) {
        StateData nextState = stateInfo.get(state);
        if (nextState != null) {
            return nextState.canTouch();
        } else {
            return 0;
        }
    }

    private static class StateData {

        private final int type, timeOut;
        private final Pair<Integer, Integer> reactItem;
        private final byte nextState, canTouch;

        private StateData(int type, Pair<Integer, Integer> reactItem, byte nextState, int timeOut, byte canTouch) {
            this.type = type;
            this.reactItem = reactItem;
            this.nextState = nextState;
            this.timeOut = timeOut;
            this.canTouch = canTouch;
        }

        private int getType() {
            return type;
        }

        private byte getNextState() {
            return nextState;
        }

        private Pair<Integer, Integer> getReactItem() {
            return reactItem;
        }

        private int getTimeOut() {
            return timeOut;
        }

        private byte canTouch() {
            return canTouch;
        }
    }
}
