var map = 677000008;
var quest = 28219;
var status = -1;

function start(mode, type, selection) {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
        if (cm.isQuestStarted(quest)) {
            cm.sendYesNo("Would you like to move to #b#m" + map + "##k?");
        } else {
            cm.sendOk("The entrance is blocked by a strange force.");
            cm.dispose();
        }
    } else {
	if(cm.haveItem(4032485, 1)) cm.gainItem(4032485, -1);
	if(cm.haveItem(4001355, 1)) cm.gainItem(4001355, -1);
        
	cm.warp(map, 0);
	cm.dispose();
    }
}