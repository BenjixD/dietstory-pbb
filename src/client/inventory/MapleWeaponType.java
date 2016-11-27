package client.inventory;

public enum MapleWeaponType {

    ROD(1.0f, 30),
    NOT_A_WEAPON(1.43f, 20),
    BOW(1.2f, 15),
    CLAW(1.75f, 15),
    CANE(1.3f, 15), // TODO: Renegades
    DAGGER(1.3f, 20),
    CROSSBOW(1.35f, 15),
    AXE1H(1.2f, 20),
    SWORD1H(1.2f, 20),
    BLUNT1H(1.2f, 20),
    AXE2H(1.32f, 20),
    SWORD2H(1.32f, 20),
    BLUNT2H(1.32f, 20),
    POLE_ARM(1.49f, 20),
    SPEAR(1.49f, 20),
    STAFF(1.0f, 25),
    WAND(1.0f, 25),
    KNUCKLE(1.7f, 20),
    GUN(1.5f, 15),
    CANNON(1.35f, 15),
    DUAL_BOW(1.35f, 15), //beyond op
    MAGIC_ARROW(2.0f, 15),
    CARTE(2.0f, 15),
    KATARA(1.3f, 20),
    BIG_SWORD(1.3f, 15),
    LONG_SWORD(1.3f, 15);
    private final float damageMultiplier;
    private final int baseMastery;

    private MapleWeaponType(final float maxDamageMultiplier, int baseMastery) {
        this.damageMultiplier = maxDamageMultiplier;
        this.baseMastery = baseMastery;
    }

    public final float getMaxDamageMultiplier() {
        return damageMultiplier;
    }

    public final int getBaseMastery() {
        return baseMastery;
    }
};
