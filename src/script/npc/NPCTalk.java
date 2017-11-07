/**
 * @author Maxcloud
 * 
 */

package script.npc;

/**
 * Parameter types that can be used.
 * 
 * NOESC        = 1
 * NPC_REPLACED_BY_USER  = 2
 * NPC_REPLACED_BY_NPC  = 4
 * FLIP_IMAGE   = 8
 * NPC_REPLACED_BY_USER_LEFT  = 10h
 * SCENARIOILLUCHAT  = 20h
 * NOENTER      = 40h
 * SCENARIOILLUCHATXL  = 80h
 * 
 * @author Maxcloud
 *
 */
public class NPCTalk {

	private byte type, msg, param, color;
	private int npcid, npcidd, seconds, amount, min, max;
	private boolean prev, next;
	private String text, def, hint;
	private Object[] args;

	public NPCTalk(byte type, int id, Type msg) {
		this(type, id, msg.getValue());
	}

	public boolean hasDifferentTemplateSpeakerID() {
		return getNpcIDD() == getNpcIDD();
	}

	public enum Type {
		SAY(0),
		SAY_IMAGE(1),
		YES_NO(3),
		ASK_TEXT(4),
		ASK_NUMBER(5),
		ASK_MENU(6),
		INITIAL_QUIZ(7),
		INITIAL_SPEED_QUIZ(8),
		IC_QUIZ(9),
		ASK_AVATAR(10),
		ASK_ANDROID(11),
		ASK_PET(13),
		ASK_PET_ALL(14),
		ASK_ACTION_PET_EVOLUTION(15),
		ASK_ACCEPT_DECLINE(17), // same as 3?
		ASK_BOX_TEXT(19),
		ASK_SLIDE_MENU(20),
		ASK_AVATAR_2(25),
		ASK_SELECT_MENU(26),
		ASK_ANGELIC_BUSTER(27),
		SAY_ILLUSTRATION(28),
		SAY_ILLUSTRATION_2(29),
		ASK_YES_NO_ILLUSTRATION(30),
		ASK_YES_NO_ILLUSTRATION_2(31),
		ASK_MENU_ILLUSTRATION(32),
		ASK_YES_NO_ILLUSTRATION_3(33),
		ASK_YES_NO_ILLUSTRATION_4(34),
		ASK_MENU_ILLUSTRATION_2(35),
		ASK_AVATAR_ZERO(37),
		ASK_WEAPON_BOX(41),
		ASK_BOX_TEXT_BGIMG(42),
		ASK_USER_SURVEY(43),
		ASK_MIX_HAIR(45),
		ASK_MIX_HAIR_EX_ZERO(46),
		ASK_CUSTOM_MIX_HAIR(47),
		ASK_CUSTOM_MIX_HAIR_AND_PROB(48),
		ASK_MIX_HAIR_NEW(49),
		ASK_MIX_HAIR_NEW_EX_ZERO(50),
		ASK_SCREEN_SHINNING_STAR_MSG(52), // not a typo
		ASK_NUMBER_USE_KEY_PAD(55),
		SPIN_OFF_GUITAR_RHYTHM_GAME(56),
		GHOST_PARK_ENTER(57)

		;

		private int value;

		Type(int value) {
			this.value = value;
		}

		public byte getValue() {
			return (byte) value;
		}
	}

	public enum ParamType {
		NO_ESC(1),
		NPC_REPLACED_BY_USER(2),
		NPC_REPLACED_BY_NPC(4),
		FLIP_IMAGE(8),
		NPC_REPLACED_BY_USER_LEFT(10),
 		SCENARIO_ILLU_CHAT(20),
 		NO_ENTER(40),
 		SCENARIO_ILLU_CHAT_XL(80)
		;

		private int value;

		ParamType(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}
	}

	public NPCTalk(byte type, int npcid, byte msg) {
		this(type, npcid, msg, (byte) 0, (byte) 0);
	}
	
	public NPCTalk(byte type, int npcid, byte msg, byte param, byte color) {
		this.type = type;
		this.npcid = npcid;
		this.msg = msg;
		this.param = param;
		this.color = color;
	}
	
	/**
	 * Get the type.
	 * @return
	 */
	public byte getType() {
		return type;
	}
	
	/**
	 * Set the type.
	 * @param type
	 */
	public void setType(byte type) {
		this.type = type;
	}
	
	/**
	 * Get the message modifier.
	 * @return
	 */
	public byte getMsg() {
		return msg;
	}
	
	/**
	 * Set the message modifier.
	 * @param msg
	 */
	public void setMsg(byte msg) {
		this.msg = msg;
	}
	
	/**
	 * Get the parameter.
	 * @return
	 */
	public byte getParam() {
		return param;
	}
	
	/**
	 * Set the parameter.
	 * @param param
	 */
	public void setParam(byte param) {
		this.param = param;
	}
	
	/**
	 * Get the color type.
	 * @return
	 */
	public byte getColor() {
		return color;
	}
	
	/**
	 * Set the color of the dialog box.
	 * @param color
	 */
	public void setColor(byte color) {
		this.color = color;
	}
	
	/**
	 * Get the NPC ID.
	 * @return
	 */
	public int getNpcID() {
		return npcid;
	}
	
	/**
	 * Set the NPC ID.
	 * @param npcid
	 */
	public void setNpcID(int npcid) {
		this.npcid = npcid;
	}
	
	/**
	 * Get the second NPC ID
	 * @return
	 */
	public int getNpcIDD() {
		return npcidd;
	}
	
	/**
	 * Set the second NPC ID
	 * @param npcidd
	 */
	public void setNpcIDD(int npcidd) {
		this.npcidd = npcidd;
	}
	
	/**
	 * Get the amount of seconds to wait.
	 * @return
	 */
	public int getSeconds() {
		return seconds;
	}
	
	/**
	 * Set the amount of seconds to wait.
	 * @param seconds
	 */
	public void setSeconds(int seconds) {
		this.seconds = seconds;
	}
	
	/**
	 * Get the amount.
	 * @return
	 */
	public int getAmount() {
		return amount;
	}
	
	/**
	 * Set the amount.
	 * @param amount
	 */
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	/**
	 * Get the minimum amount of character/numerical values.
	 */
	public int getMin() {
		return min;
	}
	
	/**
	 * Set the minimum amount of character/numerical values.
	 * @param min
	 */
	public void setMin(int min) {
		this.min = min;
	}
	
	/**
	 * Get the maximum amount of character/numerical values.
	 */
	public int getMax() {
		return max;
	}
	
	/**
	 * Set the maximum amount of character/numerical values.
	 * @param max
	 */
	public void setMax(int max) {
		this.max = max;
	}
	
	/**
	 * Get the text to be displayed in the dialog box.
	 */
	public String getText() {
		return text;
	}
	
	/**
	 * Set the text to be displayed in the dialog box.
	 * @param text
	 */
	public void setText(String text) {
		this.text = text;
	}
	
	/**
	 * Add text to the current text string.
	 * @param text
	 */
	public void addText(String text) {
		this.text += text;
	}
	
	/**
	 * Get the default text to be displayed in the dialog box.
	 */
	public String getDef() {
		return def;
	}
	
	/**
	 * Set the default text to be displayed in the dialog box.
	 * @param def
	 */
	public void setDef(String def) {
		this.def = def;
	}

	/**
	 * Get the hint.
	 */
	public String getHint() {
		return hint;
	}
	
	/**
	 * Set the hint.
	 * @param hint
	 */
	public void setHint(String hint) {
		this.hint = hint;
	}
	
	/**
	 * Get the status of the previous button.
	 */
	public boolean getPrev() {
		return prev;
	}
	
	/**
	 * Toggle the status of the previous button.
	 * @param prev
	 */
	public void setPrev(boolean prev) {
		this.prev = prev;
	}
	
	/**
	 * Get the status of the next button.
	 */
	public boolean getNext() {
		return next;
	}
	
	/**
	 * Toggle the status of the next button.
	 * @param next
	 */
	public void setNext(boolean next) {
		this.next = next;
	}
	
	/**
	 * Get the list of objects.
	 */
	public Object[] getArgs() {
		return args;
	}
	
	/**
	 * Set the list of objects.
	 * @param args
	 */
	public void setArgs(Object... args) {
		this.args = args;
	}
}
