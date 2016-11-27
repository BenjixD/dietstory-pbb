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
package server.life;

public enum Element {

    NEUTRAL(0), PHYSICAL(1), FIRE(2, true), ICE(3, true), LIGHTING(4), POISON(5), HOLY(6, true), DARKNESS(7);

    private final int value;
    private boolean special = false;

    private Element(int v) {
        this.value = v;
    }

    private Element(int v, boolean special) {
        this.value = v;
        this.special = special;
    }

    public boolean isSpecial() {
        return special;
    }

    public static Element getFromChar(char c) {
        switch (Character.toUpperCase(c)) {
            case 'F':
                return FIRE;
            case 'I':
                return ICE;
            case 'L':
                return LIGHTING;
            case 'S':
                return POISON;
            case 'H':
                return HOLY;
            case 'P':
                return PHYSICAL;
            case 'D': // Added on v.92 MSEA
                return DARKNESS;
        }
        throw new IllegalArgumentException("unknown elemnt char " + c);
    }

    public static Element getFromId(int c) {
        for (Element e : Element.values()) {
            if (e.value == c) {
                return e;
            }
        }
        throw new IllegalArgumentException("unknown elemnt id " + c);
    }

    public int getValue() {
        return value;
    }
}
