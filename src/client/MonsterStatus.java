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
package client;

import java.io.Serializable;
import java.util.Arrays;

import handling.Buffstat;

public enum MonsterStatus implements Serializable, Buffstat {

    PAD(0x1, 1), // PAD
    PDR(0x2, 1), // PDR
    MAD(0x4, 1), // MAD
    MDR(0x8, 1), // MDR
    ACC(0x10, 1),
    EVA(0x20, 1),
    SPEED(0x40, 1),
    STUN(0x80, 1),
    FREEZE(0x100, 1),
    POISON(0x200, 1),
    SEAL(0x400, 1),
    DARKNESS(0x800, 1), // DARKNESS
    POWER_UP(0x1000, 1),
    MAGIC_UP(0x2000, 1),
    P_GUARD_UP(0x4000, 1),
    M_GUARD_UP(0x8000, 1),
    P_IMMUNE(0x10000, 1), // DOOM
    M_IMMUNE(0x20000, 1),
    SHADOW_WEB(0x40000, 1),
    HARD_SKIN(0x80000, 1),
    AMBUSH(0x100000, 1),
    VENOM(0x200000, 1),
    BLIND(0x400000, 1),
    SEAL_SKILL(0x800000, 1),
    DAZZLE(0x1000000, 1), //BURN
    P_COUNTER(0x2000000, 1), //TODO fix references to this, was darkness
    M_COUNTER(0x4000000, 1),
    RISE_BY_TOSS(0x8000000, 1),
    BODY_PRESSURE(0x10000000, 1),
    WEAKNESS(0x20000000, 1),
    SHOWDOWN(0x40000000, 1),
    MAGIC_CRASH(0x80000000, 1),
    DAMAGED_ELEM_ATTR(0x1, 2),
    DARK(0x2, 2),
    MYSTERY(0x4, 2),
    ADD_DAM_PARTY(0x8, 2),
    HIT_CRI_DAM_R(0x10, 2),
    FATALITY(0x20, 2, false), //chaos
    LIFTING(0x40, 2, true),
    DEADLY_CHARGE(0x80, 2, true),
    SMITE(0x100, 2, true), //jump
    ADD_DAM_SKILL(0x200, 2, true),
    INCIZING(0x400, 2, true),
    DODGE_BODY_ATTACK(0x800, 2),
    DEBUFF_HEALING(0x1000, 2),
    ADD_DAM_SKILL_2(0x2000, 2, true),
    BODY_ATTACK(0x4000, 2),
    TEMP_MOVE_ABILITY(0x8000, 2),
    FIX_DAMR_BUFF(0x10000, 2),
    ELEMENT_DARKNESS(0x20000, 2),
    AREA_INSTALL_BY_HIT(0x40000, 2),
    B_MAGE_DEBUFF(0x80000, 2),
    JAGUAR_PROVOKE(0x100000, 2),
    JAGUAR_BLEEDING(0x200000, 2),
    DARK_LIGHTNING(0x400000, 2),
    PINK_BEAN_FLOWER_POT(0x800000, 2),
    BATTLE_PVP_HELENA_MARK(0x1000000, 2),
    PSYCHIC_LOCK(0x2000000, 2),
    PSYCHIC_LOCK_COOLTIME(0x4000000, 2),
    PSYCHIC_GROUND_MARK(0x8000000, 2),
    POWER_IMMUNE(0x10000000, 2),
    PSYCHIC_FORCE(0x20000000, 2),
    MULTI_PMDR(0x40000000, 2),
    ELEMENT_RESET_BY_SUMMON(0x80000000, 2),
    BAHAMUT_LIGHT_ELEM_ADD_DAM(0x1, 3),
    BOSS_PROP_PLUS(0x2, 3),
    MULTI_DAM_SKILL(0x4, 3),
    RW_LIFT_PRESS(0x8, 3),
    RW_CHOPPING_HAMMER(0x10, 3),
    TIME_BOMB(0x20, 3),
    TREASURE(0x40, 3),
    ADD_EFFECT(0x80, 3),
    INVINCIBLE(0x100, 3),
    EXPLOSION(0x200, 3),
    HANG_OVER(0x400, 3),
    EMPTY_1(0x800, 3), // kmst goes up till here
    EMPTY_2(0x1000, 3),
    EMPTY_3(0x2000, 3),
    EMPTY_4(0x4000, 3),
    EMPTY_5(0x8000, 3),
    EMPTY_6(0x10000, 3),
    EMPTY_7(0x20000, 3),
    EMPTY_8(0x40000, 3),
    EMPTY_9(0x80000, 3),
    EMPTY_10(0x100000, 3),
    EMPTY_11(0x200000, 3),
    EMPTY_12(0x400000, 3),
    EMPTY_13(0x800000, 3),
    EMPTY_14(0x1000000, 3),
    EMPTY_15(0x2000000, 3),
    EMPTY_16(0x4000000, 3),
    EMPTY_17(0x8000000, 3),
    EMPTY_18(0x10000000, 3),
    EMPTY_19(0x20000000, 3),
    EMPTY_20(0x40000000, 3),
    EMPTY_21(0x80000000, 3),
    ;

    static final long serialVersionUID = 0L;
    private final int i;
    private final int first;
    private final boolean end;

    MonsterStatus(int i, int first) {
        this.i = i;
        this.first = first;
        this.end = false;
    }

    MonsterStatus(int i, int first, boolean end) {
        this.i = i;
        this.first = first;
        this.end = end;
    }

    @Override
    public int getPosition() {
        return first;
    }

    public boolean isEmpty() {
        return end;
    }

    @Override
    public int getValue() {
        return i;
    }

    public static MapleDisease getLinkedDisease(final MonsterStatus skill) {
        switch (skill) {
            case STUN:
            case SHADOW_WEB:
                return MapleDisease.STUN;
            case POISON:
            case DAZZLE:
                return MapleDisease.POISON;
            case SEAL:
            case SEAL_SKILL:
                return MapleDisease.SEAL;
            case FREEZE:
                return MapleDisease.FREEZE;
            case P_COUNTER:
                return MapleDisease.DARKNESS;
            case SPEED:
                return MapleDisease.SLOW;
        }
        return null;
    }

    public static MonsterStatus getEffectById(int id) {
        return Arrays.stream(MonsterStatus.values()).filter(monsterStatus -> monsterStatus.getValue() == (1 << id)).findFirst().orElse(null);
    }
}
