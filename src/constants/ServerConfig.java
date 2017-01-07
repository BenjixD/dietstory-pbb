package constants;

public class ServerConfig {

	// Database Connection
	public static String SQL_PORT = "3306";
	public static String SQL_DATABASE = "mushy";
	public static String SQL_USER = "root";
	public static String SQL_PASS = "";

	// Server Configuration	
	public static String SERVER_NAME = "LucidMaple";
	public static String EVENT_MSG =  "Welcome to LucidMs, the rates are (9x 5x 3x)";
	public static String SCROLL_MESSAGE = "Welcome to LucidMs";
	public static String IP_ADDRESS = "5.198.133.21";
	public static byte MAX_CHARACTERS = 20;
	public static byte CHANNEL_COUNT = 4;
	public static short USER_LIMIT = 1500;

	/* Rates */
	public static final int EXP_RATE = 9;
	public static final int MESO_RATE = 5;
	public static final int DROP_RATE = 3;
	
	public static final int CASH_DROP_RATE = 20; // out of 100
	
	/* Red Events */
	public static boolean RED_EVENT_10 = false; // Makes cassandra popup when you login at lvl<10 (maple island)
	public static boolean RED_EVENT = false; // Makes red even notification popup (cassandra) When you login at level 11+
}
