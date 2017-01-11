package tools.packet;

public enum PartyType {
    PARTY_LEAVE(22),
    PARTY_UPDATE(16),
    PARTY_CREATE(17),
    PARTY_JOIN(25);


    private int value;
    PartyType(int val){
        this.value = val;
    }

    public int getValue() {
        return value;
    }
}
