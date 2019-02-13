//script by Derick. 
importPackage(Packages.server); 
importPackage(Packages.client.inventory);
importPackage(Packages.client.inventory.manipulator); 
var item=Array( 
[-3, -3, [[5, 5221001]]],[-3, -2, [[5, 5221001]]],[-3, -1, [[5, 5221001]]],[-3, 1, [[5, 5221001]]],[-3, 2, [[5, 5221001]]],[-3, 3, [[5, 5221001]]],
[-3, 4, [[5, 5221001]]],[-3, 5, [[5, 5221001]]],[-2, -3, [[5, 5221001]]],[-2, -2, [[5, 5221001]]],[-2, -1, [[5, 5221001]]],[-2, 1, [[5, 5221001]]],[-2, 2, [[5, 5221001]]],[-2, 3, [[5, 5221001]]],
[-2, 4, [[5, 5221001]]],[-2, 5, [[5, 5221001]]],[-1, -3, [[5, 5221001]]],[-1, -2, [[5, 5221001]]],[-1, -1, [[5, 5221001]]],[-1, 1, [[5, 5221001]]],[-1, 2, [[5, 5221001]]],[-1, 3, [[5, 5221001]]],
[-1, 4, [[5, 5221001]]],[-1, 5, [[5, 5221001]]],[1, -3, [[5, 5221001]]],[1, -2, [[5, 5221001]]],[1, -1, [[5, 5221001]]],[1, 1, [[5, 5221001]]],[1, 2, [[5, 5221001]]],[1, 3, [[5, 5221001]]],
[1, 4, [[5, 5221001]]],[1, 5, [[5, 5221001]]],[2, -3, [[5, 5221001]]],[2, -2, [[5, 5221001]]],[2, -1, [[5, 5221001]]],[2, 1, [[5, 5221001]]],[2, 2, [[5, 5221001]]],[2, 3, [[5, 5221001]]],
[2, 4, [[5, 5221001]]],[2, 5, [[5, 5221001]]],[3, -3, [[5, 5221001]]],[3, -2, [[5, 5221001]]],[3, -1, [[5, 5221001]]],[3, 1, [[5, 5221001]]],[3, 2, [[5, 5221001]]],[3, 3, [[5, 5221001]]],
[3, 4, [[5, 5221001]]],[3, 5, [[5, 5221001]]],[4, -3, [[5, 5221001]]],[4, -2, [[5, 5221001]]],[4, -1, [[5, 5221001]]],[4, 1, [[5, 5221001]]],[4, 2, [[5, 5221001]]],[4, 3, [[5, 5221001]]],
[4, 4, [[5, 5221001]]],[4, 5, [[5, 5221001]]],[5, -3, [[5, 5221001]]],[5, -2, [[5, 5221001]]],[5, -1, [[5, 5221001]]],[5, 1, [[5, 5221001]]],[5, 2, [[5, 5221001]]],[5, 3, [[5, 5221001]]],
[5, 4, [[5, 5221001]]],[5, 5, [[5, 5221001]]]);
/*
[-3, -3, -3, -3, -3, -2, [[5, 5221001]]],
[-3, -3, -3, -3, -3, -1, [[5, 5221001]]],
[-3, -3, -3, -3, -3, 0, [[5, 5221001]]],
[-3, -3, -3, -3, -3, 1, [[5, 5221001]]],
[-3, -3, -3, -3, -3, 2, [[5, 5221001]]],
[-3, -3, -3, -3, -3, 3, [[5, 5221001]]],
[-3, -3, -3, -3, -2, -3, [[5, 5221001]]],
[-3, -3, -3, -3, -2, -2, [[5, 5221001]]],
[-3, -3, -3, -3, -2, -1, [[5, 5221001]]],
[-3, -3, -3, -3, -2, 0, [[5, 5221001]]],
[-3, -3, -3, -3, -2, 1, [[5, 5221001]]],
[-3, -3, -3, -3, -2, 2, [[5, 5221001]]],
[-3, -3, -3, -3, -2, 3, [[5, 5221001]]],
[-3, -3, -3, -3, -1, -3, [[5, 5221001]]],
[-3, -3, -3, -3, -1, -2, [[5, 5221001]]],
[-3, -3, -3, -3, -1, -1, [[5, 5221001]]],
[-3, -3, -3, -3, -1, 0, [[5, 5221001]]],
[-3, -3, -3, -3, -1, 1, [[5, 5221001]]],
[-3, -3, -3, -3, -1, 2, [[5, 5221001]]],
[-3, -3, -3, -3, -1, 3, [[5, 5221001]]],
[-3, -3, -3, -3, 0, -3, [[5, 5221001]]],
[-3, -3, -3, -3, 0, -2, [[5, 5221001]]],
[-3, -3, -3, -3, 0, -1, [[5, 5221001]]],
[-3, -3, -3, -3, 0, 0, [[5, 5221001]]],
[-3, -3, -3, -3, 0, 1, [[5, 5221001]]],
[-3, -3, -3, -3, 0, 2, [[5, 5221001]]],
[-3, -3, -3, -3, 0, 3, [[5, 5221001]]],
[-3, -3, -3, -3, 1, -3, [[5, 5221001]]],
[-3, -3, -3, -3, 1, -2, [[5, 5221001]]],
[-3, -3, -3, -3, 1, -1, [[5, 5221001]]],
[-3, -3, -3, -3, 1, 0, [[5, 5221001]]],
[-3, -3, -3, -3, 1, 1, [[5, 5221001]]],
[-3, -3, -3, -3, 1, 2, [[5, 5221001]]],
[-3, -3, -3, -3, 1, 3, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -3, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -2, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -1, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 0, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 1, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 2, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 3, [[5, 5221001]]],
[-3, -3, -3, -3, 3, -3, [[5, 5221001]]],
[-3, -3, -3, -3, 3, -2, [[5, 5221001]]],
[-3, -3, -3, -3, 3, -1, [[5, 5221001]]],
[-3, -3, -3, -3, 3, 0, [[5, 5221001]]],
[-3, -3, -3, -3, 3, 1, [[5, 5221001]]],
[-3, -3, -3, -3, 3, 2, [[5, 5221001]]],
[-3, -3, -3, -3, 3, 3, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -3, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -2, [[5, 5221001]]],
[-3, -3, -3, -3, 2, -1, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 0, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 1, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 2, [[5, 5221001]]],
[-3, -3, -3, -3, 2, 3, [[5, 5221001]]],*/
// syntax: [(increase on dex/str/int/luk), (increase in Wep Attack), [[item 1 amount, item 1 ID], [item 2 amount, item 2 ID], (this is optional) [item3 amount, item 3 id]] 
var itemid=Math.floor(Math.random()*item.length); 
var st =-1; 
var equip; 
var equip2; 
var se; 
function removeItems(){ 
    for (var i = 0;  i<item[itemid][2].length; i++){ 
        cm.gainItem(item[itemid][2][i][1], -item[itemid][2][i][0]); 
    } 
} 
function haveItem(){ 
    var b=true; 
    for (var i = 0;  i<item[itemid][2].length; i++){ 
        if (!cm.haveItem(item[itemid][2][i][1],item[itemid][2][i][0])){ 
            b=false; 
            break; 
        } 
    } 
    return b; 
} 
function getItems(){ 
    var derp =""; 
    for (var i =0;i<item[itemid][2].length;i++){ 
        derp+=item[itemid][2][i][0]+" #i"+item[itemid][2][i][1]+"# #t"+item[itemid][2][i][1]+"#\r\n"; 
    } 
    return derp; 
} 
function start(){ 
if (cm.upgradesLeft() < 1) {
    cm.sendYesNo("Hey I can re-roll the stats on your items by either +5 or -3. Take a chance or don't. However, you'll need the following items: \r\n"+getItems()); 
} else {
cm.sendOk("You need to have 0 Upgrade Slots on that item to use my services");
cm.dispose();
	}
}	
function action(m,t,s){ 
    if (m<1) 
        cm.dispose(); 
    else{ 
        st++; 
        if (st==0){ 

            if (haveItem()){ 
                cm.sendSimple("Pick an item to update.\r\n"+cm.EquipList(cm.getClient())); 
            }else { 
                cm.sendOk("You don't have these items: "+getItems()); 
                cm.dispose(); 
            } 
        } else if (st==1){ 
			se=s; 
            var gain0 = item[itemid][0];
			var gain1 = item[itemid][1];
			var gain2 = item[itemid][2];
			var gain3 = item[itemid][3];
			var gain4 = item[itemid][4];
            var gain5 = item[itemid][5];
            equip=MapleItemInformationProvider.getInstance().getEquipById(cm.getPlayer().getInventory(MapleInventoryType.getByType(1)).getItem(s).getItemId()); 
            equip2 = cm.getPlayer().getInventory(MapleInventoryType.getByType(1)).getItem(s); 
            /*equip.setDex(equip2.getDex()+gain3); 
            equip.setStr(equip2.getDex()+gain2); 
            equip.setInt(equip2.getInt()+gain4); 
            equip.setLuk(equip2.getLuk()+gain5); 
            */equip.setWatk(equip2.getWatk()+gain0);
            equip.setMatk(equip2.getMatk()+gain1);			
            cm.sendYesNo("Are you sure you want to upgrade your #r#t"+equip.getItemId()+"#?"); 
         } else if (st==2){ 
            MapleInventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.getByType(1), se, 1, true); 
            MapleInventoryManipulator.addFromDrop(cm.getClient(), equip); 
            removeItems(); 
            cm.dispose(); 
        } 
    } 
}  