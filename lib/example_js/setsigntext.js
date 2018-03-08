//이미 배치 된 표지판에 표지판 텍스트를 설정하기위한 Minecraft Bukkit ScriptCraft 확장판. 사용법 : / js setsigntext (X, Y, Z, [ "Hello", "There", "Line 3", "Line 4"]); ScriptCraft drone / contrib / 폴더에 설치하고 서버를 다시 시작하거나 / js refresh ();를 입력하십시오. 다시로드하십시오.

/* Set sign text on an already placed sign. */
/* Specify sign block coordinates and array of strings. */
/* This will currently only work on the main overworld on a server. */

/* Usage: /js setsigntext(-847, 63, 107, ["Hello", "There"]); */

/* Author: Joseph Huckaby, December 29, 2013 */
/* License: Public Domain */

// For ScriptCraft 1.7, uncomment this, I think:
// var Drone = require('../drone').Drone;

Drone.extend("setsigntext", function(x, y, z, texts) {
	var world = server.worlds.get(0);
	var block = world.getBlockAt(x,y,z);
	var state = block.state;
	if (state instanceof org.bukkit.block.Sign){
	    for (var i = 0;i < texts.length; i++)
	        state.setLine(i%4,texts[i]);
	    state.update(true);
	}
});
