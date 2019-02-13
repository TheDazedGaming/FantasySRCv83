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
/* Le Tierre (2154002)
	Map Name (Multiple Maps)
	Used to exchange FantasyPoints for Maple Leaves, and Maple Leaves for rewards.
 */

var status;

function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
                        cm.sendSimple("You must be #b#h ##k. I am Le Tierre#k, the Point Exchange NPC here in Fantasy. I can exchange various different points that" +
						" you are offered here in the server.\r\n#b#L0#Trade Fantasy Points#l\r\n#L1#Trade Donor Points#l\r\n#L2#Let me check all the different points I have#l");
                } else if (status == 1) {
					if (selection == 0 && cm.getPlayer().getLevel() >= 25) {
					cm.sendSimple("Welcome to the Fantasy Point Exchange Portion of the NPC. The following options are what are offered for Fantasy Points:\r\n" +
						"#e#d#L3#Nexon Cash Packages#l\r\n#L4#Player Perks#l\r\n#L5#Chairs#l\r\n#L6#NX Equips#l\r\n#L7#Miscellaneous NX#l\r\n#L8#Scrolls#l");
				} else if (selection == 1 && cm.getPlayer().getLevel() >= 25) {
					cm.sendSimple("Welcome to the Donor Point Exchange Portion of the NPC. The following options are what is offered for Donor Points:\r\n" +
						"#e#d#L9#Hair Stylist (up to v148)#l#e\r\n#L10#Cosmestic Stylist (up to v148)#l\r\n#e#L11#Perma NX (untradeable)#l");
					} else if (selection == 2 && cm.getPlayer().getLevel() >= 25) {
						cm.sendPrev("You currently have the following points:\r\n\r\n#r" + cm.getPlayer().getFantasyPoints() + " #bFantasy Points\r\n#r" + cm.getDonorPoints() + " #bDonor Points");
					} else {
						cm.sendOk("You must be #e#rLEVEL 25#n#k to see these options. Come back when you reach level 25!");
						cm.dispose();
						}
				} else if (status == 2) {
					if (selection == 3) {
					cm.sendSimple("You chose #e#bNexon Cash Packages#k!#r\r\n2 Fantasy Points = 1k NX Cash\r\n\r\n#n#e#d#L20#1,000 NX Cash#l\r\n#L21#5,000 NX Cash#l" +
						"\r\n#L22#10,000 NX Cash#l\r\n#L23#15,000 NX Cash#l\r\n#L24#20,000 NX Cash#l\r\n#L25#25,000 NX Cash#l\r\n#L26#30,000 NX Cash#l");
				} else if (selection == 4) {
						cm.sendSimple("You chose #e#bPlayer Perks#n#k! Please remember the EXP coupons are #e#rNOT#k#n stackable.\r\n\r\n#e#d#L30#12-Hour 2x EXP " +
						"Coupon - 60 Points#l\r\n#L31#6-Hour 3x EXP Coupon - 100 Points#l\r\n#L32#12-Hour 2x Drop Coupon - 75 Points#l");			
				} else if (selection == 5) {
						cm.sendOk("Under Construction");
						//cm.sendOk("You chose #e#bChairs#k#n!\r\n#rAll chairs cost #e#b15 Fantasy Points#k#n\r\n\r\n");
						cm.dispose();
				} else if (selection == 6) {
						cm.sendOk("Under Construction");
						//cm.sendOk("You chose #e#bNX Equips#n#k!");
						cm.dispose();
				} else if (selection == 7) {
						cm.sendOk("Under Construction");
						//cm.sendOk("You chose #e#bMiscellaneous NX#n#k!\r\n#L60#100 Gachapon Tickets - ");
						cm.dispose();
				} else if (selection == 8) {
						cm.sendSimple("You chose #e#bScrolls#n#k!\r\n#e#rEach Scroll will vary by points.#n#k#e#d\r\n\r\n#dScrolls for 20 Fantasy Points:\r\n#b#L70##i2044712# - 100% Scroll Claw For ATT#l" +
						"\r\n#L71##i2044612# - 100% Scroll Crossbow For ATT#l\r\n#L72##i2044512# - 100% Scroll Bow For ATT#l\r\n#L73##i2044417# - 100% Scroll Polearm " +
						"For ATT#l\r\n#L74##i2044317# - 100% Scroll Spear For ATT#l\r\n#L75##i2044217# - 100% Scroll 2H Blunt Weapon For ATT#l\r\n#L76##i2044117# - " +
						"100% Scroll 2H Axe For ATT#l\r\n#L77##i2044025# - 100% Scroll 2H Sword For ATT#l\r\n#L78##i2043712# - 100% Scroll Wand For Magic ATT#l" +
						"\r\n#L79##i2043812# - 100% Scroll Staff For Magic ATT#l\r\n#L80##i2043312# - 100% Scroll Dagger For ATT#l\r\n#L81##i2043217# - 100% " +
						"Scroll 1H Blunt Weapon For ATT#l\r\n#L82##i2043117# - 100% Scroll 1H Axe For ATT#l\r\n#L83##i2043023# - 100% Scroll 1H Sword For ATT#l" +
						"\r\n#L84##i2044815# - 100% Scroll Knuckle For ATT#l\r\n#L85##i2044908# - 100% Scroll Gun For ATT#l\r\n\r\n#L86##i2040538# - 100% Scroll Overall Armor For DEX#l" +
						"\r\n#L87##i2040334# - 100% Scroll Earring For INT#l\r\n\r\n#e#dScrolls for 25 Fantasy Points:\r\n#b#L88##i2040830# - 100% Scroll Glove For ATT#l" + 
						"\r\n\r\n#e#dScrolls for 35 Fantasy Points:\r\n#b#L89##i2049100# - Chaos Scroll#l\r\n\r\n#dScrolls for 50 Fantasy Points:#b\r\n#L90##i2340000# - White Scroll#l");
						}
				} else if (status == 3) {
					if (selection == 20) {
						if (cm.getFantasyPoints() >= 2) {
						cm.sendOk("You have gained 1,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-2);
						cm.modifyNX(1000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 21) {
						if (cm.getFantasyPoints() >= 10) {
						cm.sendOk("You have gained 5,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-10);
						cm.modifyNX(5000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 22) {
						if (cm.getFantasyPoints() >= 20) {
						cm.sendOk("You have gained 10,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-20);
						cm.modifyNX(10000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 23) {
						if (cm.getFantasyPoints() >= 30) {
						cm.sendOk("You have gained 15,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-30);
						cm.modifyNX(15000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 24) {
						if (cm.getFantasyPoints() >= 40) {
						cm.sendOk("You have gained 20,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-40);
						cm.modifyNX(20000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 25) {
						if (cm.getFantasyPoints() >= 50) {
						cm.sendOk("You have gained 25,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-50);
						cm.modifyNX(25000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 26) {
						if (cm.getFantasyPoints() >= 60) {
						cm.sendOk("You have gained 30,000 Nexon Cash. Spend it wisely!");
						cm.gainFantasyPoints(-60);
						cm.modifyNX(30000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 30) {
				if(cm.getFantasyPoints() >= 60) {
						cm.gainItem(5211046, 1, false, true, 1000 * 60 * 60 * 12);
						cm.gainFantasyPoints(-60);
						cm.sendOk("You have gained a 12-Hour 2x EXP Coupon. This will expire in exactly 12 Hours from now.");
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
		}
				} else if (selection == 31) {
				if(cm.getFantasyPoints() >= 100) {
						cm.gainItem(5211060, 1, false, true, 1000 * 60 * 60 * 6);
						cm.gainFantasyPoints(-100);
						cm.sendOk("You have gained a 6-Hour 3x EXP Coupon. This will expire in exactly 6 Hours from now.");
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
		}
				} else if (selection == 32) {
				if(cm.getFantasyPoints() >= 75) {
						cm.gainItem(5360000, 1, false, true, 1000 * 60 * 60 * 12);
						cm.gainFantasyPoints(-75);
						cm.sendOk("You have gained a 12-Hour 3x EXP Coupon. This will expire in exactly 12 Hours from now.");
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you don't have enough Fantasy Points.");
						cm.dispose();
		}
				} else if (selection == 70) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Claw for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044712, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				
				} else if (selection == 71) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Crossbow for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044612, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 72) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Bow for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044512, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 73) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Polearm for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044417, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 74) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Spear for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044317, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 75) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 2H Blunt Weapon for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044217, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 76) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 2H Axe for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044117, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 77) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 2H Sword for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044025, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 78) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Wand for Magic ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043712, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 79) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Staff for Magic ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043812, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 80) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Dagger for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043312, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 81) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 1H Blunt Weapon for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043217, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 82) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 1H Axe for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043117, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 83) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for 1H Sword for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2043023, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 84) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Knuckler for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044815, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 85) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Gun for ATT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2044908, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 86) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Overall Armor for DEX. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2040538, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 87) {
						if (cm.getFantasyPoints() >= 20 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Earring for INT. USE it wisely!");
						cm.gainFantasyPoints(-20);
						cm.gainItem(2040334, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 88) {
						if (cm.getFantasyPoints() >= 25 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a 100% Scroll for Gloves for ATT. USE it wisely!");
						cm.gainFantasyPoints(-25);
						cm.gainItem(2040830, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 89) {
						if (cm.getFantasyPoints() >= 35 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a Chaos Scroll. USE it wisely!");
						cm.gainFantasyPoints(-35);
						cm.gainItem(2049100, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
				} else if (selection == 90) {
						if (cm.getFantasyPoints() >= 50 && !cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
						cm.sendOk("You have gained a White Scroll. USE it wisely!");
						cm.gainFantasyPoints(-50);
						cm.gainItem(2340000, 1);
						cm.dispose();
				} else {
						cm.sendOk("Sorry, you either don't have enough space in your Use Inventory or don't have enough Fantasy Points.");
						cm.dispose();
					}
	}
}
}
}
/*var hiredMerchantLength = 30;

				} else if (status == 1) {
				if(!cm.haveItem(5030000, 1) && cm.getFantasyPoints() > 99) {
					if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).isFull(1)){
						cm.gainItem(5030000, 1, false, true, 1000 * 60 * 60 * 24 * hiredMerchantLength);
						cm.gainFantasyPoints(-100);
						cm.sendOk(hiredMerchantLength + " day hired merchant");
						cm.dispose();
					} else {
						cm.sendOk("Please make sure you have enough space to hold these items!");
						cm.dispose();
					}
				} else {
					cm.sendOk("I can't give you a Hired Merchant for 1 of the following reasons:#r\r\n1. You already have one!\r\n2. You don't have enough space in your Cash Slot Tab!\r\n3. You don't have enough Fantasy Points for this item!");
					cm.dispose();
				}
			}
    }
	}*/