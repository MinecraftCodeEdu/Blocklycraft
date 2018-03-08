//randomWeapon.js for ScriptCraft

var bkGameMode = org.bukkit.GameMode;
var bkItemStack = org.bukkit.inventory.ItemStack;
var bkMaterial = org.bukkit.Material;
var bkSnowball = org.bukkit.entity.Snowball;

exports.giveRandomWeapon = function giveRandomWeapon(player) {
// function giveRandomWeapon = function(player) {
	var weapons = [
    'IRON_SWORD',
    'STONE_SWORD',
    'WOOD_SWORD',
    'ENDER_PEARL',
    'DIAMOND_SWORD'
  ];

  var weapon;
  var weapon_type; // for return

  // 1/5 chance to get bow and arrow
  if(Math.random()*5 < 1){
    weapon = [new bkItemStack( bkMaterial['BOW'], 1 ), new bkItemStack( bkMaterial['ARROW'], 32 )];
    weapon_type = "Bow and Arrows";
  }else{
    var random_weapon = Math.floor( Math.random()*weapons.length );
    weapon_type = weapons[random_weapon];
    weapon = [new bkItemStack( bkMaterial[weapon_type], 1 )];
  }
	
	player.inventory.addItem(weapon);
	
  return weapon_type;
}

var mysteryBox = function() {
  // create a box that when touched will trigger giveRandomWeapon
  box(blocks.chest);
}

events.on("block.BlockDamageEvent",function(evt){ // BlockBreakEvent
  // evt.player.sendMessage(evt.block);
  if(evt.block.type == "CHEST"){
    var type = giveRandomWeapon(evt.player);
    evt.player.sendMessage("You got a "+type+" from the Mystery Box");
  }
});

var Drone = require('../drone/drone').Drone; 
Drone.extend('mysteryBox',mysteryBox);
