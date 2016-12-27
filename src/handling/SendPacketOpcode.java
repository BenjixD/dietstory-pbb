package handling;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import tools.ExternalCodeTableGetter;
import tools.IntValueHolder;

public enum SendPacketOpcode implements IntValueHolder {

	// General
	PING,

	// CLogin::OnPacket
	LOGIN_STATUS,
	SERVERLIST,
	ENABLE_RECOMMENDED,
	SEND_RECOMMENDED,
	SET_CLIENT_KEY,
	SELECT_WORLD,
	CHARLIST,
	SERVER_IP,
	LOGIN_SECOND,
	CHAR_NAME_RESPONSE,
	ADD_NEW_CHAR_ENTRY,
	DELETE_CHAR_RESPONSE,
	CLIENT_HELLO,
	CHANGE_CHANNEL,
	TOGGLE_CASHSHOP,
	AUTH_RESPONSE,
	PART_TIME,
	PIC_RESPONSE,
	CLIENT_START,
	SERVERSTATUS,
	AUTHSERVER,
	REGISTER_PIC_RESPONSE,
	SPECIAL_CREATION,
	SECONDPW_ERROR,

	// CWvsContext::OnPacket
	INVENTORY_OPERATION,
	INVENTORY_GROW,
	UPDATE_STATS,
	GIVE_BUFF,
	CANCEL_BUFF,
	TEMP_STATS,
	TEMP_STATS_RESET,
	UPDATE_SKILLS,
	UPDATE_STOLEN_SKILLS,
	TARGET_SKILL,
	FAME_RESPONSE,
	SHOW_STATUS_INFO,
	SHOW_NOTES,
	TROCK_LOCATIONS,
	LIE_DETECTOR,
	REPORT_RESPONSE,
	REPORT_TIME,
	REPORT_STATUS,
	UPDATE_MOUNT,
	SHOW_QUEST_COMPLETION,
	SEND_TITLE_BOX,
	USE_SKILL_BOOK,
	SP_RESET,
	AP_RESET,
	EXPAND_CHARACTER_SLOTS,
	FINISH_GATHER,
	FINISH_SORT,
	EXP_POTION,
	CHAR_INFO,
	PARTY_OPERATION,
	MEMBER_SEARCH,
	PARTY_SEARCH,
	BOOK_INFO,
	CODEX_INFO_RESPONSE,
	EXPEDITION_OPERATION,
	BUDDYLIST,
	GUILD_OPERATION,
	ALLIANCE_OPERATION,
	SPAWN_PORTAL,
	SERVERMESSAGE,
	PIGMI_REWARD,
	OWL_OF_MINERVA,
	OWL_RESULT,
	ENGAGE_REQUEST,
	ENGAGE_RESULT,
	WEDDING_GIFT,
	WEDDING_MAP_TRANSFER,
	USE_CASH_PET_FOOD,
	YELLOW_CHAT,
	SHOP_DISCOUNT,
	CATCH_MOB,
	PLAYER_NPC,
	DISABLE_NPC,
	GET_CARD,
	CARD_SET,
	BOOK_STATS,
	FAMILIAR_INFO,
	WEB_BOARD_UPDATE,
	SESSION_VALUE,
	PARTY_VALUE,
	MAP_VALUE,
	EXP_BONUS,
	SEND_PEDIGREE,
	OPEN_FAMILY,
	FAMILY_MESSAGE,
	FAMILY_INVITE,
	FAMILY_JUNIOR,
	SENIOR_MESSAGE,
	FAMILY,
	REP_INCREASE,
	FAMILY_LOGGEDIN,
	FAMILY_BUFF,
	FAMILY_USE_REQUEST,
	LEVEL_UPDATE,
	MARRIAGE_UPDATE,
	JOB_UPDATE,
	SLOT_UPDATE,
	FOLLOW_REQUEST,
	TOP_MSG,
	MID_MSG,
	CLEAR_MID_MSG,
	SPECIAL_MSG,
	MAPLE_ADMIN_MSG,
	UPDATE_JAGUAR,
	YOUR_INFORMATION,
	FIND_FRIEND,
	VISITOR,
	ULTIMATE_EXPLORER,
	SPECIAL_STAT,
	UPDATE_IMP_TIME,
	ITEM_POT,
	MULUNG_DOJO_RANKING,
	REPLACE_SKILLS,
	INNER_ABILITY_MSG,
	ENABLE_INNER_ABILITY,
	DISABLE_INNER_ABILITY,
	UPDATE_HONOUR,
	AZWAN_KILLED,
	SILENT_CRUSADE_MSG,
	SILENT_CRUSADE_SHOP,
	UNLOCK_CHARGE_SKILL,
	LOCK_CHARGE_SKILL,
	EVOLVING_ACTION,
	CANDY_RANKING,
	MESSENGER_OPEN,
	AVATAR_MEGA,
	AVATAR_MEGA_REMOVE,
	EVENT_CROWN,
	ITEM_UPGRADE_UI,
	UPDATE_GENDER,
	BBS_OPERATION,
	CARD_DROPS,
	GM_POLICE,
	GM_STORY_BOARD,
	PINKBEAN_CHOCO,
	PAM_SONG,
	DISALLOW_DELIVERY_QUEST,
	MAGIC_WHEEL,
	REWARD,
	SKILL_MACRO,
	ON_RED_CUBE_RESULT,
	ON_BLACK_CUBE_RESULT,

	// CStage::OnPacket
	WARP_TO_MAP,
	FARM_OPEN,
	CS_OPEN,

	// CField::OnPacket
	SERVER_BLOCKED,
	PARTY_BLOCKED,
	SHOW_EQUIP_EFFECT,
	MULTICHAT,
	WHISPER,
	SPOUSE_CHAT,
	BOSS_ENV,
	MOVE_ENV,
	UPDATE_ENV,
	MAP_EFFECT,
	CASH_SONG,
	GM_EFFECT,
	OX_QUIZ,
	GMEVENT_INSTRUCTIONS,
	CLOCK,
	BOAT_MOVE,
	BOAT_STATE,
	STOP_CLOCK,
	ARIANT_SCOREBOARD,
	PYRAMID_UPDATE,
	PYRAMID_RESULT,
	QUICK_SLOT,// 0x151
	MOVE_PLATFORM,
	PYRAMID_KILL_COUNT,
	VMATRIX_UPDATE,
	NODESTONE_RESULT,
	PVP_INFO,// 0x156
	DIRECTION_STATUS,
	GAIN_FORCE,
	ACHIEVEMENT_RATIO,
	QUICK_MOVE,
	INTRUSION,
	SHOW_POTENTIAL_BLACK_CUBE,

	// CUserPool::OnPacket
	SPAWN_PLAYER,
	REMOVE_PLAYER_FROM_MAP,

	// CUserPool::OnUserCommonPacket
	CHATTEXT,
	CHALKBOARD,
	UPDATE_CHAR_BOX,
	SHOW_CONSUME_EFFECT,
	SHOW_SCROLL_EFFECT,
	SHOW_MAGNIFYING_EFFECT,
	SHOW_POTENTIAL_RESET,
	SHOW_FIREWORKS_EFFECT,
	SHOW_NEBULITE_EFFECT,
	SHOW_FUSION_EFFECT,
	PVP_ATTACK,
	PVP_MIST,
	PVP_COOL,
	TESLA_TRIANGLE,
	FOLLOW_EFFECT,
	SHOW_PQ_REWARD,
	CRAFT_EFFECT,
	CRAFT_COMPLETE,
	HARVESTED,
	PLAYER_DAMAGED,
	NETT_PYRAMID,
	PAMS_SONG,

	// CUser::OnPetPacket
	SPAWN_PET,
	SPAWN_PET_2,
	MOVE_PET,
	PET_CHAT,
	PET_NAMECHANGE,
	PET_EXCEPTION_LIST,
	PET_COLOR,
	PET_SIZE,
	PET_COMMAND,

	// CUser::OnDragonPacket
	DRAGON_SPAWN,
	DRAGON_MOVE,
	DRAGON_REMOVE,

	// CUser::OnAndroidPacket
	ANDROID_SPAWN,
	ANDROID_MOVE,
	ANDROID_EMOTION,
	ANDROID_UPDATE,
	ANDROID_DEACTIVATED,

	// CUser::OnFoxManPacket
	HAKU_CHANGE_1,
	HAKU_CHANGE_0,
	SPAWN_HAKU,
	HAKU_MOVE,
	HAKU_CHANGE,

	CHATTEXT_1,

	// CUser::OnFamiliarPacket
	SPAWN_FAMILIAR,
	MOVE_FAMILIAR,
	TOUCH_FAMILIAR,
	ATTACK_FAMILIAR,
	RENAME_FAMILIAR,
	SPAWN_FAMILIAR_2,
	UPDATE_FAMILIAR,

	// CUserPool::OnUserRemotePacket
	MOVE_PLAYER,
	CLOSE_RANGE_ATTACK,
	RANGED_ATTACK,
	MAGIC_ATTACK,
	ENERGY_ATTACK,
	SKILL_EFFECT,
	MOVE_ATTACK,
	CANCEL_SKILL_EFFECT,
	DAMAGE_PLAYER,
	FACIAL_EXPRESSION,
	SHOW_EFFECT,
	SHOW_TITLE,
	ANGELIC_CHANGE,
	SHOW_CHAIR,
	UPDATE_CHAR_LOOK,
	SHOW_FOREIGN_EFFECT,
	GIVE_FOREIGN_BUFF,
	CANCEL_FOREIGN_BUFF,
	UPDATE_PARTYMEMBER_HP,
	LOAD_GUILD_NAME,
	LOAD_GUILD_ICON,
	LOAD_TEAM,
	SHOW_HARVEST,
	PVP_HP,
	CANCEL_CHAIR,

	INNER_ABILITY_RESET_MSG,

	// CUserPool::OnUserLocalPacket
	DIRECTION_FACIAL_EXPRESSION,
	MOVE_SCREEN,
	SHOW_SPECIAL_EFFECT,
	CURRENT_MAP_WARP,
	MESOBAG_SUCCESS,
	MESOBAG_FAILURE,
	UPDATE_QUEST_INFO,
	HP_DECREASE,
	PLAYER_HINT,
	PLAY_EVENT_SOUND,
	PLAY_MINIGAME_SOUND,
	MAKER_SKILL,
	OPEN_UI,
	OPEN_UI_OPTION,
	INTRO_LOCK,
	INTRO_ENABLE_UI,
	INTRO_DISABLE_UI,
	SUMMON_HINT,
	SUMMON_HINT_MSG,
	ARAN_COMBO,
	ARAN_COMBO_RECHARGE,
	RADIO_SCHEDULE,
	OPEN_SKILL_GUIDE,
	GAME_MSG,
	GAME_MESSAGE,
	BUFF_ZONE_EFFECT,
	TIME_BOMB_ATTACK,
	IGNITION,
	FOLLOW_MOVE,
	FOLLOW_MSG,
	HARVEST_MESSAGE,
	OPEN_BAG,
	DRAGON_BLINK,
	PVP_ICEGAGE,
	DIRECTION_INFO,
	REISSUE_MEDAL,
	PLAY_MOVIE,
	PHANTOM_CARD,
	LUMINOUS_COMBO,
	FINAL_ATTACK,
	MOVE_SCREEN_X,
	MOVE_SCREEN_DOWN,
	SEALED_BOX,
	OPEN_URL,
	ELEMENT_FLAME,
	COOLDOWN,
	R_MESOBAG_SUCCESS,
	R_MESOBAG_FAILURE,
	MAP_FADE,
	MAP_FADE_FORCE,
	REGISTER_FAMILIAR,
	FAMILIAR_MESSAGE,
	CREATE_ULTIMATE,
	SWORD_ENERGY,

	// CSummonedPool::OnPacket
	SPAWN_SUMMON,
	REMOVE_SUMMON,
	MOVE_SUMMON,
	SUMMON_ATTACK,
	PVP_SUMMON,
	SUMMON_SKILL,
	SUMMON_SKILL_2,
	DAMAGE_SUMMON,

	// CMobPool::OnPacket
	SPAWN_MONSTER,
	KILL_MONSTER,
	SPAWN_MONSTER_CONTROL,

	// CMobPool::OnMobPacket
	MOVE_MONSTER,
	MOVE_MONSTER_RESPONSE,
	APPLY_MONSTER_STATUS,
	CANCEL_MONSTER_STATUS,
	DAMAGE_MONSTER,
	SKILL_EFFECT_MOB,
	TELE_MONSTER,
	MONSTER_SKILL,
	SHOW_MONSTER_HP,
	SHOW_MAGNET,
	ITEM_EFFECT_MOB,
	CATCH_MONSTER,
	MONSTER_PROPERTIES,
	REMOVE_TALK_MONSTER,
	TALK_MONSTER,
	CYGNUS_ATTACK,
	MONSTER_RESIST,
	MOB_TO_MOB_DAMAGE,
	AZWAN_MOB_TO_MOB_DAMAGE,
	AZWAN_SPAWN_MONSTER,
	AZWAN_KILL_MONSTER,
	AZWAN_SPAWN_MONSTER_CONTROL,

	// CNpcPool::OnPacket
	SPAWN_NPC,
	REMOVE_NPC,
	SPAWN_NPC_REQUEST_CONTROLLER,
	NPC_ACTION,
	NPC_TOGGLE_VISIBLE,
	INITIAL_QUIZ,
	NPC_UPDATE_LIMITED_INFO,
	NPC_SET_SPECIAL_ACTION,
	NPC_SCRIPTABLE,
	RED_LEAF_HIGH,

	// CEmployeePool::OnPacket
	SPAWN_HIRED_MERCHANT,
	DESTROY_HIRED_MERCHANT,
	UPDATE_HIRED_MERCHANT,

	// CDropPool::OnPacket
	DROP_ITEM_FROM_MAPOBJECT,
	REMOVE_ITEM_FROM_MAP,

	// CMessageBoxPool::OnPacket
	SPAWN_KITE_ERROR,
	SPAWN_KITE,
	DESTROY_KITE,

	// CAffectedAreaPool::OnPacket
	SPAWN_MIST,
	REMOVE_MIST,

	// CTownPortalPool::OnPacket
	SPAWN_DOOR,
	REMOVE_DOOR,

	// COpenGatePool::OnPacket
	MECH_DOOR_SPAWN,
	MECH_DOOR_REMOVE,

	// CReactorPool::OnPacket
	REACTOR_HIT,
	REACTOR_MOVE,
	REACTOR_SPAWN,
	REACTOR_DESTROY,

	// CFishingZonePool::OnPacket
	FISHING_INFO,
	FISHING_REWARD,
	FISHING_ZONE_INFO,

	// CExtractor::OnPacket
	SPAWN_EXTRACTOR,
	REMOVE_EXTRACTOR,

	// Snowball::OnPacket
	ROLL_SNOWBALL,
	HIT_SNOWBALL,
	SNOWBALL_MESSAGE,
	LEFT_KNOCK_BACK,

	// Coconut::OnPacket
	HIT_COCONUT,
	COCONUT_SCORE,
	MOVE_HEALER,
	PULLEY_STATE,

	// CField_MonsterCarnival::OnPacket
	MONSTER_CARNIVAL_START,
	MONSTER_CARNIVAL_OBTAINED_CP,
	MONSTER_CARNIVAL_STATS,
	MONSTER_CARNIVAL_SUMMON,
	MONSTER_CARNIVAL_MESSAGE,
	MONSTER_CARNIVAL_DIED,
	MONSTER_CARNIVAL_LEAVE,
	MONSTER_CARNIVAL_RESULT,
	MONSTER_CARNIVAL_RANKING,

	// CField_Witchtower::OnPacket
	WITCH_TOWER,

	// CField_PvP::OnPacket
	ENTER_PVP,
	CHANGE_TEAM,
	CHANGE_MODE,
	CHANGE_STATE,
	UPDATE_COUNT,
	SHOW_MODE_RESULT,
	UPDATE_TEAM_INFO,
	UPDATE_RANK_INFO,
	UPDATE_TEAM_SCORE,
	REVIVE_MESSAGE,
	SCREEN_EFFECT,
	ICEKNIGHT_HP_CHANGE,

	// CScriptMan::OnPacket
	NPC_TALK,

	// CShopDlg::OnPacket
	OPEN_NPC_SHOP,
	CONFIRM_SHOP_TRANSACTION,

	// CStoreBankDlg::OnPacket
	OPEN_STORAGE,
	MERCH_ITEM_MSG,
	MERCH_ITEM_STORE,

	// CCashShop::OnPacket
	CS_UPDATE,
	CS_OPERATION,
	PURCHASE_EXP_CHANGED,
	CS_MESO_UPDATE,
	GACHAPON_STAMPS,
	FREE_CASH_ITEM,
	CS_SURPRISE,
	XMAS_SURPRISE,
	CASH_SHOP,
	CASH_SHOP_UPDATE,
	ONE_A_DAY,

	// CFuncKeyMappedMan::OnPacket
	KEYMAP,
	PET_AUTO_HP,
	PET_AUTO_MP,
	PET_AUTO_CURE,

	// CMapleTVMan::OnPacket
	START_TV,
	REMOVE_TV,
	ENABLE_TV,

	// CMonsterFarm::OnPacket
	UPDATE_FARM_INVENTORY,
	CONSOLE_MESSAGE,
	OBJECT_INTERACT,
	OBJECT_CONSUME,
	RESULT_DICTIONARY,
	UPDATE_BUY_OBJECT,
	UPDATE_SEL_OBJECT,
	COMBINE_RESULT,
	FARM_MONSTER_SEARCH_RESULT,
	FARM_VISIT_RESULT,
	UPDATE_NEWS_FEED,
	UPDATE_DICTIONARY,
	AUTO_HARVEST_RESULT,
	SOUL_RECHARGE_RESULT,

	// CFarmUser::OnPacket
	SET_FARM_USER,
	SET_FARM_INVENTORY,
	SET_FARM_QUEST_ALL,
	QUEST_MESSAGE,
	NOTICE_MESSAGE,
	UPDATE_MONSTER_LIST,
	UPDATE_DECO,
	UPDATE_POINT,
	UPDATE_CASH,
	UPDATE_THEME,
	UPDATE_MONSTER_SLOT,
	UPDATE_MONSTER_LOCKER_SLOT,
	UPDATE_EXP,
	RESULT_CHECK_NAME,
	RESULT_CHECK_NAME_BY_CONSUME,
	RESULT_COMPLETE_QUEST,
	RESULT_GET_USER_PHOTO,
	RESULT_UPDATE_PHOTO,
	RESULT_REFULL_DAILY_QUEST,
	SEND_FARM_GIFT,
	SET_FRIEND_LIST,
	FRIEND_ONLINE_REFRESH,
	RESULT_ADD_FRIEND,
	RESULT_SEND_NOTICE,
	RESULT_LOAD_MAIN_LOG,
	RESULT_ADD_BLACKLIST,
	RESULT_FARM_USER_INFO_UI,
	SET_GUEST_OWNER_INFO,
	FARM_WHISPER,
	GROUP_MESSAGE,
	FARM_BROADCAST_MESSAGE,
	RESULT_NEW_LIST,
	SET_INGAME_INFO,
	FORCED_SHOP_OPEN,
	REQUEST_SET_INGAME_INFO,
	INGAME_FRIEND_REQUEST_RESULT,
	WORLD_WHISPER_RESULT,
	TOTAL_INFO,

	// CFarmMonsterPool::OnPacket
	ON_INSERT,
	ON_UPDATE,
	UPDATE_MY,
	SET_NAME_RESULT,
	CARE_RESULT,
	PLAY_RESULT,
	RELEASE_RESULT,
	LOCKER_RESULT,
	LIFE_EXTEND_RESULT,

	// Unplaced
	MAPLE_POINT,
	DEATH_COUNT,

	// Unknown
	SHOW_DAMAGE_SKIN,
	BOOSTER_PACK,
	BOOSTER_FAMILIAR,
	PET_FLAG_CHANGE,
	BUFF_BAR,
	CHAOS_ZAKUM_SHRINE,
	HORNTAIL_SHRINE,
	CAPTURE_FLAGS,
	CAPTURE_POSITION,
	CAPTURE_RESET,
	STRENGTHEN_UI,
	ALIEN_SOCKET_CREATOR,
	GOLDEN_HAMMER,
	RPS_GAME,
	MESSENGER,
	PLAYER_INTERACTION,
	VICIOUS_HAMMER,
	LOGOUT_GIFT,
	PACKAGE_OPERATION;
	private int code = -2;

    @Override
    public void setValue(int code) {
        this.code = code;
    }
    
    @Override
    public int getValue() {
        return code;
    }
    
    public static Properties getDefaultProperties() throws FileNotFoundException, IOException {
		Properties props = new Properties();
		FileInputStream fis = new FileInputStream(System.getProperty("sendops"));
		props.load(fis);
		fis.close();
		return props;
	}
	
	static {
		try {
			ExternalCodeTableGetter.populateValues(getDefaultProperties(), values());
		} catch (IOException e) {
			throw new RuntimeException("Failed to load sendops", e);
		}
	}
	
	public static String getNameByValue(int value) {
		for (SendPacketOpcode opcode : SendPacketOpcode.values()) {
			if (opcode.getValue() == value) {
				return opcode.name();
			}
		}
		return "UNKNOWN";
	}
}
