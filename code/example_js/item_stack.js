var inventory = require('inventory');
var items = require('items');

var bkItemStack = Packages.org.bukkit.inventory.ItemStack;
var bkMaterial = Packages.org.bukkit.Material;

command( 'testsdfsdf', function ( parameters, player ) {
var theInventory = new inventory(player);
var timeoutStop = new Date().getTime()+500;
    theInventory.add(items.wool(10));
    theInventory.add(items.wood(1));

    //theInventory.add(new bkItemStack(bkMaterial.WOOD,10,2));
});
