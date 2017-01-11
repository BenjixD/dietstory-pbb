package tools.packet;

public enum PartyType {
    REQUEST_INVITE(8),
    UPDATE(16),
    CREATE(17),
    LEAVE(22),
    JOIN(25);


    private int value;
    PartyType(int val){
        this.value = val;
    }

    public int getValue() {
        return value;
    }
}
