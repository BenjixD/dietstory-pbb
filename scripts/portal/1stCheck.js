/*
 * �����¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * Translated / Recoded by JakeK from AthenaMS .
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("Please talk to Yuri first !");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}