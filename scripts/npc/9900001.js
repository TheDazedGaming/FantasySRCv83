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
/*
 * @Name         NimaKIN
 * @Author:      Signalize
 * @NPC:         9900000
 * @Purpose:     Hair/Face/Eye Changer -- May set job as GM too
 * @GMSPurpose:  Sets one's job as a GM.
 * @Map:         180000000
 
 Broken Hairs: 32400, 32420, 32350, 32310, 32330, 32320, 33060, 33070, 33090, 33210
 
 
 */
var status = 0;
var beauty = 0;
var haircolor = Array();
var skin = [0, 1, 2, 3, 4, 5, 9, 10];
var fhair= [31360, 31990, 32150, 32160, 32340, 32360];
var hair = [30380, 32050, 32370, 32380, 32390, 32410, 32430, 32440, 32450, 32460, 32470, 32480, 32490, 32500, 32520, 32530, 32540, 32550, 32560, 33030, 33050, 33080, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33220, 33240, 33260, 33270, 33280, 33290, 33310, 33330, 33350, 33360, 33370, 33380, 33390, 33410, 33440, 33450, 33460, 33470, 33480, 33510, 33530, 33540, 33550, 33580, 33590, 33600, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990, 34040, 34060, 34120, 34130, 34150, 34170, 34180, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34450, 34470, 34480];
var hairnew = Array();
var face = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20026];
var fface = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21024, 21025];
var facenew = Array();
var colors = Array();

function start() {
    if(cm.getPlayer().gmLevel() == 0) {
        cm.sendOk("Hey wassup?");
        cm.dispose();
        return;
    }
    
    cm.sendSimple("Hey there, I can change your look. What would you like to change?\r\n#L0#Skin#l\r\n#L1#Hair#l\r\n#L5#Female Hair#l\r\n#L2#Hair Color#l\r\n#L3#Eye#l\r\n#L6#Female Eyes#l\r\n#L4#Eye Color#l");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1 || cm.getPlayer().gmLevel() == 0){
        cm.dispose();
        return;
    }
    if (status == 1) {
        beauty = selection + 1;
        if (selection == 0)
            cm.sendStyle("Pick one?", skin);
        else if (selection == 1 || selection == 5) {
            for each(var i in selection == 1 ? hair : fhair)
                hairnew.push(i);
            cm.sendStyle("Pick one?", hairnew);
        } else if (selection == 2) {
            for(var k = 0; k < 8; k++)
                haircolor.push(cm.getPlayer().getHair() + k);
            cm.sendStyle("Pick one?", haircolor);
        } else if (selection == 3 || selection == 6) {
            for each(var j in selection == 3 ? face : fface)
                facenew.push(j);
            cm.sendStyle("Pick one?", facenew);
        } else if (selection == 4) {
            for(var i = 0; i < 9; i++)
                colors.push(cm.getPlayer().getFace() + (i*100));
            cm.sendStyle("Pick one?", colors);
        }
    } else if (status == 2){
        if (beauty == 1)
            cm.setSkin(skin[selection]);
        if (beauty == 2 || beauty == 6)
            cm.setHair(hairnew[selection]);
        if (beauty == 3)
            cm.setHair(haircolor[selection]);
        if (beauty == 4 || beauty == 7)
            cm.setFace(facenew[selection]);
        if (beauty == 5)
            cm.setFace(colors[selection]);
        cm.dispose();
    }
}