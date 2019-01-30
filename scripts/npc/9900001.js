/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var mhair = Array(30380, 33030, 33050, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33220, 33240, 33260, 33270, 33280, 33290, 33310, 33330, 33350, 33360, 33370, 33380, 33390, 33410, 33440, 33450, 33460, 33470, 33480, 33510, 33530, 33540, 33550, 33580, 33590, 33600, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990);
var fhair = Array(31360, 31990, 34040, 34060, 34120, 34130, 34150, 34170, 34180, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34450, 34470, 34480, 34490, 34510, 34560, 34580, 34590, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34750, 34760, 34770, 34780, 34790, 34800, 34810, 34830, 34840, 34850, 34860, 34870, 34880, 34890, 34900, 34910, 34940, 34950, 34960, 34970, 34980);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) 
            cm.sendSimple("I'm the head of the Donor Hair & Cosmetic Salon. If you have #rDonor Points#k allow me to take care of you. Please choose the one you want.\r\n#L1#Haircut: #b1 Donor Point#l\r\n#L2##kDye your hair: #b1 Donor Point#l\r\n#L3##kCheck if I have any #bDonor Points#k#l");
			
			else if (status == 1) {
            if (selection == 1) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair.length; i++)
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair.length; i++)
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b1 Donor Point#k I'll change it for you. Choose the one to your liking~.", hairnew);
			} else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()/10)*10;
                for(var i = 0; i < 8; i++)
                    haircolor.push(current + i);
                cm.sendStyle("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b1 Donor Point#k I'll change it for you. Choose the one to your liking.", haircolor);
				}
			} else if (status == 2){
            if (beauty == 1){
                if (cm.getDonorPoints() >= 1){
                    cm.gainDonorPoints(-1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("Enjoy your new and improved hairstyle!");
					cm.dispose();
				} else
                    cm.sendOk("Hmmm...it looks like you don't have enough Donor Points...I'm afraid I can't give you a haircut without one. I'm sorry...");
					cm.dispose();
			}
            if (beauty == 2){
               if (cm.getDonorPoints() >= 1){
                    cm.gainDonorPoints(-1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("Enjoy your new and improved haircolor!");
					cm.dispose();
				} else
                    cm.sendOk("Hmmm...it looks like you don't have enough Donor Points...I'm afraid I can't dye your hair without one. I'm sorry...");
					cm.dispose();
			}
        }
		}
			}