/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package constants;

/**
 *
 * @author Itzik
 */
public class JobConstants {

	public static final boolean enableJobs = true;
	public static final int jobOrder = 8;

	public enum LoginJob {

		RESISTANCE(0, JobFlag.ENABLED),
		EXPLORER(1, JobFlag.ENABLED),
		CYGNUS(2, JobFlag.ENABLED),
		ARAN(3, JobFlag.ENABLED),
		EVAN(4, JobFlag.ENABLED),
		MERCEDES(5, JobFlag.ENABLED),
		DEMON(6, JobFlag.ENABLED),
		PHANTOM(7, JobFlag.ENABLED),
		DUAL_BLADE(8, JobFlag.ENABLED),
		MIHILE(9, JobFlag.ENABLED),
		LUMINOUS(10, JobFlag.ENABLED),
		KAISER(11, JobFlag.ENABLED),
		ANGELIC(12, JobFlag.ENABLED),
		CANNONEER(13, JobFlag.ENABLED),
		XENON(14, JobFlag.ENABLED),
		ZERO(15, JobFlag.ENABLED),
		SHADE(16, JobFlag.ENABLED),
		JETT(17, JobFlag.ENABLED),
		HAYATO(18, JobFlag.ENABLED),
		KANNA(19, JobFlag.ENABLED),
		CHASE(20, JobFlag.ENABLED),
		PINK_BEAN(21, JobFlag.DISABLED),
		KINESIS(22, JobFlag.ENABLED);

		private final int jobType, flag;

		private LoginJob(int jobType, JobFlag flag) {
			this.jobType = jobType;
			this.flag = flag.getFlag();
		}

		public int getJobType() {
			return jobType;
		}

		public int getFlag() {
			return flag;
		}

		public enum JobFlag {

			DISABLED(0), 
			ENABLED(1),
			HUNDREDPLUS(2); // requires level 100+ char
			private final int flag;

			private JobFlag(int flag) {
				this.flag = flag;
			}

			public int getFlag() {
				return flag;
			}
		}
	}

	public static boolean isAdventurerWarrior(short nJob) {
		return nJob == 100
				|| nJob == 110
				|| nJob == 111
				|| nJob == 112
				|| nJob == 120
				|| nJob == 121
				|| nJob == 122
				|| nJob == 130
				|| nJob == 131
				|| nJob == 132;
	}

	public static boolean isAdventurerMage(short nJob) {
		return nJob == 200
				|| nJob == 210
				|| nJob == 211
				|| nJob == 212
				|| nJob == 220
				|| nJob == 221
				|| nJob == 222
				|| nJob == 230
				|| nJob == 231
				|| nJob == 232;
	}

	public static boolean isAdventurerArcher(short nJob) {
		return nJob == 300 || nJob == 310 || nJob == 311 || nJob == 312 || nJob == 320 || nJob == 321 || nJob == 322;
	}

	public static boolean isAdventurerThief(short nJob) {
		return nJob == 400
				|| nJob == 420
				|| nJob == 421
				|| nJob == 422
				|| nJob == 410
				|| nJob == 411
				|| nJob == 412
				|| nJob / 10 == 43;
	}

	public static boolean isAdventurerPirate(short nJob) {
		return nJob == 500
				|| nJob == 510
				|| nJob == 511
				|| nJob == 512
				|| nJob == 520
				|| nJob == 521
				|| nJob == 522
				|| isCannonShooter(nJob);
	}

	public static boolean isCannonShooter(short nJob) {
		return nJob / 10 == 53 || nJob == 501;
	}

	public static boolean isCygnus(short nJob) {
		return nJob / 1000 == 1;
	}

	public static boolean isResistance(short nJob) {
		return nJob / 1000 == 3;
	}

	public static boolean isEvan(short nJob) {
		return nJob / 100 == 22 || nJob == 2001;
	}

	public static boolean isMercedes(short nJob) {
		return nJob / 100 == 23 || nJob == 2002;
	}

	public static boolean isPhantom(short nJob) {
		return nJob / 100 == 24 || nJob == 2003;
	}

	public static boolean isLeader(short nJob) {
		return nJob / 1000 == 5;
	}

	public static boolean isLuminous(short nJob) {
		return nJob / 100 == 27 || nJob == 2004;
	}

	public static boolean isKaiser(short nJob) {
		return nJob / 1000 == 6;
	}

	public static boolean isZero(short nJob) {
		return nJob == 10000 || nJob == 10100 || nJob == 10110 || nJob == 10111 || nJob == 10112;
	}

	public static boolean isHidden(short nJob) {
		return nJob / 100 == 25 || nJob == 2005;
	}

	public static boolean isAran(short nJob) {
		return nJob / 100 == 21 || nJob == 2000;
	}

	public static boolean isKenesis(short nJob) {
		return nJob == 14000 || nJob == 14200 || nJob == 14210 || nJob == 14211 || nJob == 14212;
	}

	public static boolean isExtendSpJob(short nJob) {
		return isAdventurerWarrior(nJob)
				|| isAdventurerMage(nJob)
				|| isAdventurerArcher(nJob)
				|| isAdventurerThief(nJob)
				|| isAdventurerPirate(nJob)
				|| isCygnus(nJob)
				|| isResistance(nJob)
				|| isEvan(nJob)
				|| isMercedes(nJob)
				|| isPhantom(nJob)
				|| isLeader(nJob)
				|| isLuminous(nJob)
				|| isKaiser(nJob)
				|| isZero(nJob)
				|| isHidden(nJob)
				|| isAran(nJob)
				|| isKenesis(nJob);
	}

	public static boolean isDemon(short nJob) {
		return nJob / 100 == 31 || nJob == 3001 || nJob == 3002 || nJob / 100 == 36;
	}
}
