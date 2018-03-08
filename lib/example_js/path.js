//Scriptcraft - Blocks Follow

var utils = require('utils');

events.on("player.PlayerMoveEvent", function(evt) { 
	var playerLoc = utils.getPlayerPos(evt.player);
	var drone = new Drone(playerLoc);

	// console.log(playerLoc);
	drone.box(blocks.wood, 1, 1, 1);
});
