/************************************************************************
## Blockly -> ScriptCraft Javascript Code generator
Lauro Canonica: Original author (Devoxx4kids Lugano 2015.04)

Contains the generator for the javascript used in scriptcraft

***/

/*
** javascript get IP Address from RTC
*/
window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
    pc.createDataChannel("");    //create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
    pc.onicecandidate = function(ice){  //listen for candidate events
    if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
    window.myIP = /([1-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1].toString().replace(/[:.]/gi,'');
    //console.log(JSON.stringify(myIP));
 
    //document.getElementById("clientIP").innerHTML = myIP.toString().replace(/[:.]/gi,'');
    pc.onicecandidate = noop;
    };


Blockly.JavaScript['drone'] = function (block) {
    var fname = block.getFieldValue('param');
    var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
    var webip = window.myIP;

    var code = "command( '" + webip + fname + "', function ( parameters, player ) {\nvar theDrone = new Drone(player);\nvar bkBlockFace = Packages.org.bukkit.block.BlockFace;\nvar bkItemStack = Packages.org.bukkit.inventory.ItemStack;\nvar bkMaterial = Packages.org.bukkit.Material;\nvar bkLocation = Packages.org.bukkit.Location;\ntheDrone.up();\ntheDrone.chkpt('start');\n";
    code = code + "var timeoutStop = new Date().getTime()+500;\n"; // set maximum run time for a script
    code = code + statements_statements;
    code = code + "});";
    return code;
};

/*
Blockly.JavaScript['drone'] = function (block) {
    var fname = block.getFieldValue('param');
    var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
    var webip = window.myIP;

    var code = "command( '" + fname + "', function ( parameters, player ) {\n";
    code = code + " if ( " + webip + "  == player.getAddress().getAddress().getHostAddress().replace(/[:.]/gi,'') ) {  \n";
    code = code + "var theDrone = new Drone(player);\nvar bkItemStack = Packages.org.bukkit.inventory.ItemStack;\nvar bkMaterial = Packages.org.bukkit.Material;\nvar bkLocation = Packages.org.bukkit.Location;\ntheDrone.up();\ntheDrone.chkpt('start');\nvar timeoutStop = new Date().getTime()+500;\n"; // set maximum run time for a script
    code = code + statements_statements;
    code = code + "} else{ print('function is not defined')  }\n";
    code = code + "});\n";

    return code;
};
*/

Blockly.JavaScript['drone_move'] = function (block) {
    var dropdown_direction = block.getFieldValue('direction');
    var code = "theDrone." + dropdown_direction + ";\n";
    return code;
};

Blockly.JavaScript['drone_move_count'] = function (block) {
    var dropdown_direction = block.getFieldValue('direction');
    var value_count = Blockly.JavaScript.valueToCode(block, 'COUNT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "theDrone." + dropdown_direction + "(" + value_count + ");\n";
    return code;
};

Blockly.JavaScript['materials'] = function (block) {
    var dropdown_material = block.getFieldValue('material');
//    JSON.stringify(dropdown_material).replace('1','10');
//    var code = "theDrone." + 'box(' + JSON.stringify(dropdown_material) + ');\n';
var code = "theDrone.box(" + JSON.stringify(dropdown_material).replace(/"/g,"").replace(".",":")+ ");\n";

    return code;
};

Blockly.JavaScript['animals'] = function (block) {
    var dropdown_animal = block.getFieldValue('animal');
    var code = "if (__plugin.bukkit) {\n        theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType." + dropdown_animal + ");\n    }\n    if (__plugin.canary) {\n ar Canary = Packages.net.canarymod.Canary,\n            entityInstance = Canary.factory().entityFactory.newEntity('" + dropdown_animal + "', theDrone.getLocation());\n        entityInstance.spawn();\n    }";
    return code;
};

Blockly.JavaScript['trees'] = function (block) {
    var dropdown_tree = block.getFieldValue('tree');
    var code = "theDrone.getLocation().world.generateTree(theDrone.getLocation(), org.bukkit.TreeType."+dropdown_tree+");";
    return code;
};


Blockly.JavaScript['rectangle'] = function (block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_material = block.getFieldValue('material');
    var dropdown_fill = block.getFieldValue('fill');
    var code = "theDrone.box" + dropdown_fill + "(" + JSON.stringify(dropdown_material).replace(/"/g,"").replace(".",":") + "," + value_width + ",1," + value_length + ");\n";

    return code;
};

Blockly.JavaScript['circle'] = function (block) {
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_material = block.getFieldValue('material');
    var dropdown_fill = block.getFieldValue('fill');
    var code = "theDrone.cylinder" + dropdown_fill + "(" + JSON.stringify(dropdown_material).replace(/"/g,"").replace(".",":") + "," + value_radius + ",1);\n";
    return code;
};

Blockly.JavaScript['prism'] = function(block) {
  var dropdown_shape = block.getFieldValue('SHAPE');
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_material = block.getFieldValue('MATERIAL');
  // TODO: Assemble JavaScript into code variable.
  var code = "theDrone.prism" + dropdown_shape + "(" + dropdown_material + "," + value_width + "," + value_length + ");\n";
  return code;
};

Blockly.JavaScript['delete'] = function (block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
    var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "theDrone.box(0," + value_width + "," + value_height + "," + value_length + ");\n";
    return code;
};


Blockly.JavaScript['inventory'] = function (block) {
    var fname = block.getFieldValue('param');
    var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
    var webip = window.myIP;

    var code = "var inventory = require('inventory');\nvar items = require('items');\ncommand( '" + webip + fname + "', function ( parameters, player ) {\nvar theInventory = new inventory(player);\n";
    code = code + "var timeoutStop = new Date().getTime()+500;\n"; // set maximum run time for a script
    code = code + statements_statements;
    code = code + "});";
    return code;
};


/*
Blockly.JavaScript['inventory'] = function (block) {
	var fname = block.getFieldValue('param');
	var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
	var webip = window.myIP;
	
	var code = "var inventory = require('inventory');\nvar items = require('items');\ncommand( '" + fname + "', function ( parameters, player ) {\n";
	code = code + " if ( " + webip + "  == player.getAddress().getAddress().getHostAddress().replace(/[:.]/gi,'') ) {  \n";
	code = code + "var theInventory = new inventory(player);\nvar timeoutStop = new Date().getTime()+500;\n"; // set maximum run time for a script
	code = code + statements_statements;
	code = code + "} else{ print('function is not defined')  }\n";
	code = code + "});\n";
	return code;
};
*/

Blockly.JavaScript['weapons_armor'] = function (block) {
    var dropdown_item = block.getFieldValue('item');
    var code = "theInventory.add(items." + dropdown_item + "(1))" + ";\n";
    return code;
};


Blockly.JavaScript['tools'] = function (block) {
    var dropdown_item = block.getFieldValue('item');
    var code = "theInventory.add(items." + dropdown_item + "(1))" + ";\n";
    return code;
};

Blockly.JavaScript['food'] = function (block) {
    var dropdown_item = block.getFieldValue('item');
    var code = "theInventory.add(items." + dropdown_item + "(1))" + ";\n";
    return code;
};

Blockly.JavaScript['transportation'] = function (block) {
    var dropdown_item = block.getFieldValue('item');
    var code = "theInventory.add(items." + dropdown_item + "(1))" + ";\n";
    return code;
};

/************************************************************************
## Blockly -> ScriptCraft Javascript Code generator
Coalab (2018.03.06)

Contains the generator for the javascript used in scriptcraft

***/

Blockly.JavaScript['onchat'] = function(block) {
	var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
	var webip = window.myIP;
	// TODO: Assemble JavaScript into code variable.
	var code = "command( '"+webip+value_command.replace(/'/g,"")+"', function ( parameters, player ) {\n";
	code = code + statements_statements;
	code = code + "});";
  return code;
};

Blockly.JavaScript['spawn_animal'] = function(block) {
        var value_animal = Blockly.JavaScript.valueToCode(block, 'animal', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var dropdown_age = block.getFieldValue('AGE');
        var checkbox_saddle = block.getFieldValue('SADDLE') == 'TRUE';
        var horse = "'CraftHorse{variant=HORSE, owner=null}'";
        var tryError = "'말 이외에는 안장사용불가'";
        var code = "var theDrone = new Drone(player);\n\
theDrone.up();\n\
theDrone.chkpt('start');\n\
var animal_type = theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType." + value_animal + ");\n\
animal_type."+ dropdown_age +";\n\
if(animal_type=="+horse+"){animal_type.setTamed(true);}\n\
if("+checkbox_saddle+"){\n\
try{\n\
var bkMaterial = Packages.org.bukkit.Material;\n\
var bkItemStack=Packages.org.bukkit.inventory.ItemStack;\n\
animal_type.getInventory().setSaddle(new bkItemStack(bkMaterial.SADDLE));}\n\
catch(e){player.chat("+tryError+")}}";

  return code;
};

Blockly.JavaScript['animalmob'] = function(block) {
  //var dropdown_animal = block.getFieldValue('ANIMAL');
  // TODO: Assemble JavaScript into code variable.
  var code = block.getFieldValue('ANIMAL');
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['onmobkilled'] = function(block) {
  var value_mob = Blockly.JavaScript.valueToCode(block, 'Mob', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  // TODO: Assemble JavaScript into code variable.
  var code = "events.entityDeath( function( event ) {\n"
			+ "  if( event.getEntity().getType() == '"+value_mob+"' ) {\n"
			+ "  var player = event.getEntity().getKiller()\n";
	code = code + statements_command;
	code = code + "}});";
  return code;
};

/***
	Coalab (2018.03.12) 
***/

Blockly.JavaScript['teleport_command'] = function(block) {
  var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
  var webip = window.myIP;
  // TODO: Assemble JavaScript into code variable.
  var code = "command('"+webip+value_command.replace(/'/g,"")+"', function(parameters, player) {\n\
  var bkLocation = Packages.org.bukkit.Location;\n\
  if(isNaN(Number(parameters[0])) || isNaN(Number(parameters[1])) || isNaN(Number(parameters[2]))){\n\
    player.sendMessage('please input number.');\n\
    return false;\n\
  }\n\
  player.teleport(new bkLocation(player.world, parameters[0], parameters[1], parameters[2]));\n\
});\n";
  return code;
};

Blockly.JavaScript['teleport_location'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "var bkLocation = Packages.org.bukkit.Location;\n"
			+"player.teleport("+value_name+");\n";
  return code;
};
// x, y, z

Blockly.JavaScript['relative_location'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "new bkLocation(player.world, player.getLocation().x+Number("+value_x+"), player.getLocation().y+Number("+value_y+"), player.getLocation().z+Number("+value_z+") )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['absolute_location'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "new bkLocation(player.world, "+value_x+", "+value_y+", "+value_z+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/***
	Coalab (2018.03.13) 
***/
Blockly.JavaScript['player_chat'] = function(block) {
  var chat = Blockly.JavaScript.valueToCode(block, 'chat', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "player.chat("+chat+");\n";
  return code;
};

Blockly.JavaScript['player_chatcommand'] = function(block) {
  var chatcommand = Blockly.JavaScript.valueToCode(block, 'chatcommand', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "player.chat('/jsp '+"+chatcommand+");\n";
  return code;
};

Blockly.JavaScript['moveforward'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "var bkLocation = org.bukkit.Location;\n"+
  "var world = player.getWorld();\n"+
  "var loc = player.getLocation();\n"+
  "var distance = "+value_distance+";\n"+
  "var yaw  = ((loc.getYaw() + 90)  * Math.PI) / 180;\n"+
  "var x = Math.cos(yaw);\n"+
  "var z = Math.sin(yaw);\n"+
  "player.teleport(new bkLocation(world, loc.getX()+x*distance,loc.getY(), loc.getZ()+z*distance, loc.getYaw(), loc.getPitch()));\n";
  return code;
};

Blockly.JavaScript['directforward'] = function(block) {
  var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
  var webip = window.myIP;
  // TODO: Assemble JavaScript into code variable.
  var code = "command( '"+webip+value_command.replace(/'/g,"")+"', function ( parameters, player ) {\n\
  var bkLocation = org.bukkit.Location;\n\
  var world = player.getWorld();\n\
  var loc = player.getLocation();\n\
  if(isNaN(Number(parameters[0]))){\n\
    player.sendMessage('please input number.');\n\
    return false;\n\
  }\n\
  var distance = parameters[0];\n\
  var yaw  = ((loc.getYaw() + 90)  * Math.PI) / 180;\n\
  var x = Math.cos(yaw);\n\
  var z = Math.sin(yaw);\n\
  player.teleport(new bkLocation(world, loc.getX()+x*distance,loc.getY(), loc.getZ()+z*distance, loc.getYaw(), loc.getPitch()));\n\
});\n";
  return code;
};

Blockly.JavaScript['facing'] = function(block) {
  var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
  var webip = window.myIP;
  // TODO: Assemble JavaScript into code variable.
    var code = "command( '"+webip+value_command.replace(/'/g,"")+"', function ( parameters, player ) {\n\
  var bkLocation = org.bukkit.Location;\n\
  var world = player.getWorld();\n\
  var loc = player.getLocation();\n\
  if(isNaN(Number(parameters[0]))){\n\
    player.sendMessage('please input number.');\n\
    return false;\n\
  }\n\
  var angle = parameters[0];\n\
  player.teleport(new bkLocation(world, loc.getX(), loc.getY(), loc.getZ(), angle, loc.getPitch()));\n\
});\n";
  return code;
};

Blockly.JavaScript['pause'] = function(block) {
  var dropdown_second = block.getFieldValue('second');
  var ms = dropdown_second * 1000;
  // TODO: Assemble JavaScript into code variable.
  var code = "var unixtime_ms = new Date().getTime();\n\
while(new Date().getTime() < unixtime_ms + "+ms+") {}\n";
  return code;
};

/***
	Coalab (2018.03.27) 
***/

Blockly.JavaScript['name_location'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "player.teleport("+value_location+");";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['save_teleport'] = function(block) {
  var value_command = Blockly.JavaScript.valueToCode(block, 'command', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var webip = window.myIP;
  // TODO: Assemble JavaScript into code variable.
  var code = "\
command('"+webip+value_command.replace(/'/g,"")+"', function ( parameters, player ) {\n\
  var bkLocation = Packages.org.bukkit.Location;\n\
  var bkPrompt = org.bukkit.conversations.Prompt,\n\
  bkConversationFactory = org.bukkit.conversations.ConversationFactory;\n\
\n\
  var prompt = new bkPrompt( ) {\n\
\n\
    getPromptText: function( ctx ) {\n\
      return 'Enter the number of the location to be moved. (1-5) : ';\n\
    },\n\
\n\
    acceptInput: function( ctx, s ) {\n\
      s = s.replace( /^[^0-9]+/, '' );\n\
      s = parseInt( s );\n\
      player.sendMessage('You chose number'+s);\n\
      switch( s ) {\n"
	  +statements_statement+"\
        default:\n\
        ctx.forWhom.sendRawMessage( 'No number.' );\n\
        return null;\n\
        break;\n\
      }\n\
\n\
      return prompt;\n\
    },\n\
\n\
    blocksForInput: function( ctx ) { \n\
	  return true; \n\
    }\n\
  };\n\
\n\
  new bkConversationFactory( __plugin )\n\
    .withModality( true )\n\
    .withFirstPrompt( prompt )\n\
    .buildConversation( player )\n\
    .begin( );\n\
});\n\
";
  return code;
};

Blockly.JavaScript['savelocation'] = function(block) {
  var dropdown_number = block.getFieldValue('number');
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ="\
      case "+dropdown_number+":\n\
      "+value_location+"\n\
	return null;\n";
  return code;
};

/***
	Coalab (2018.03.29) 
***/

Blockly.JavaScript['player_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "player.getLocation().getBlockX()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['player_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "player.getLocation().getBlockY()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['player_z'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "player.getLocation().getBlockZ()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['player_location'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "player.getLocation()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/***
	Coalab (2018.04.03) 
***/

Blockly.JavaScript['notice_standing_block'] = function(block) {
  var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var bkBk = org.bukkit.Bukkit;\n\
var bkBF = org.bukkit.block.BlockFace;\n\
var targetPlayer = bkBk.getPlayer("+value_player+");\n\
if(targetPlayer == null){\n\
	player.chat('There are no players named '+"+value_player+");\n\
} else {\n\
	var x = targetPlayer.getLocation().getBlockX();\n\
	var z = targetPlayer.getLocation().getBlockZ();\n\
	var blockType = targetPlayer.getWorld().getBlockAt(x, 0, z).getType();\n\
	player.chat('The '+targetPlayer.getName()+' is on the '+blockType+'.');\n\
}\n\
";
  return code;
};

Blockly.JavaScript['transform_block'] = function(block) {
  var dropdown_material = block.getFieldValue('material');
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var x = player.getLocation().getBlockX();\n\
var y = player.getLocation().getBlockY();\n\
var z = player.getLocation().getBlockZ();\n\
var blockId = player.getWorld().getBlockAt(x, y-1, z).getTypeId();\n\
player.getWorld().getBlockAt(x, y-1, z).setTypeId("+dropdown_material+");\n\
setTimeout(function() { player.getWorld().getBlockAt(x, y-1, z).setTypeId(blockId) }, 5000);\n\
";
  return code;
};

Blockly.JavaScript['target_teleport'] = function(block) {
  var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_ATOMIC);
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var bkBk = org.bukkit.Bukkit;\n\
var bkLocation = Packages.org.bukkit.Location;\n\
var targetPlayer = bkBk.getPlayer("+value_player+");\n\
if(targetPlayer == null){\n\
	//player.chat('There are no players named '+"+value_player+");\n\
} else {\n\
	targetPlayer.teleport("+value_location+");\n\
}\n\
";
  return code;
};

Blockly.JavaScript['onentitydamage'] = function(block) {
  var value_player = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
  // TODO: Assemble JavaScript into code variable.
    var code = "events.entityDamageByEntity( function( event ) {\n\
  if( event.getEntity().getName().equalsIgnoreCase("+value_player+")){\n\
  var player = event.getEntity();\n"
+statements_command+
  "  }\n\
});";
  return code;
};

Blockly.JavaScript['random_teleport'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var bkLocation = Packages.org.bukkit.Location;\n\
var x = parseInt(Math.random() * ( 149 - (-149) ) + -149);\n\
var z = parseInt(Math.random() * ( 149 - (-149) ) + -149);\n\
setTimeout(function() { player.teleport(new bkLocation(player.world, x, 1, z)); }, 60000);\n\
player.sendMessage('The position is moved after 60 seconds.');\n\
";
  return code;
};
/***
	Coalab (2018.04.12) 
***/
Blockly.JavaScript['materials_limited'] = function (block) {
    var dropdown_material = block.getFieldValue('material');
    var code = "theDrone." + 'box(' + dropdown_material + ');\n';
    return code;
};
/***
	Coalab (2018.04.26) 
***/
Blockly.JavaScript['place_block'] = function(block) {
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_block = block.getFieldValue('block');
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var bkLocation = Packages.org.bukkit.Location;\n\
var blockLocation = "+value_location+";\n\
var block = blockLocation.getBlock();\n\
block.setTypeId("+dropdown_block+");\n\
";
  return code;
};

Blockly.JavaScript['plant'] = function(block) {
  var value_location = Blockly.JavaScript.valueToCode(block, 'location', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_plant = block.getFieldValue('plant');
  // TODO: Assemble JavaScript into code variable.
  var code = "\
var bkBlockFace = Packages.org.bukkit.block.BlockFace;\n\
var bkMaterial = Packages.org.bukkit.Material;\n\
var bkLocation = Packages.org.bukkit.Location;\n\
var blockLocation = "+value_location+";\n\
blockLocation.getBlock().getRelative(bkBlockFace.UP).setType(bkMaterial."+dropdown_plant+");\n\
";
  return code;
}

/*
 * 농사짓기
 */

Blockly.JavaScript['dispenser_direction'] = function(block) {
  var dropdown_item = block.getFieldValue('ITEM');
  var value_name = Blockly.JavaScript.valueToCode(block, 'ITEM_COUNT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var dropdown_item = dropdown_item.split(':');
  var value_block_location = Blockly.JavaScript.valueToCode(block, 'BLOCK_LOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "\
player.getWorld().getBlockAt("+value_block_location+").setType(bkMaterial.DISPENSER);\n\
player.getWorld().getBlockAt("+value_block_location+").setData("+dropdown_direction+");\n\
\n\
var block = "+value_block_location+".getBlock();\n\
var dispenser = block.getState();\n\
var dispenserInv = dispenser.getInventory();\n\
containerInv.addItem(new bkItemStack('"+dropdown_item[0]+"', "+value_number+", "+dropdown_item[1]+"));\n\
";
  return code;
};

Blockly.JavaScript['dispenser_drone'] = function(block) {
  var dropdown_material = block.getFieldValue('MATERIAL');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var dispenser_num = '23';
  var dropdown_material = dropdown_material.split(':');

  var code = "\
var droneData = theDrone.box('" + dispenser_num + ":" + dropdown_direction + "');\n\
var block = droneData.getLocation().getBlock();\n\
block.setType(bkMaterial.DISPENSER);\n\
var container = block.getState();\n\
var containerInv = container.getInventory();\n\
\n\
containerInv.addItem(new bkItemStack('"+dropdown_material[0]+"', "+value_number+", "+dropdown_material[1]+"));\n\
";

  return code;
};

Blockly.JavaScript['block_direction'] = function(block) {
  var dropdown_item = block.getFieldValue('ITEM');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "theDrone.box('" + dropdown_item + ":" + dropdown_direction + "'," + value_width + ",1," + value_length + ");\n";

  return code;
};

Blockly.JavaScript['material_position'] = function(block) {
  var dropdown_material = block.getFieldValue('MATERIAL');
  var value_position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //  var code = "theDrone.right(" + value_x + ").up(" + value_y + ").fwd(" + value_z + ").box(" + dropdown_item + ");\n";
    var code = "\
var bkLocation = Packages.org.bukkit.Location;\n\
var blockLocation = "+value_position+";\n\
var block = blockLocation.getBlock();\n\
block.setTypeId("+dropdown_material+");\n\
";      

  return code;
};


/*
 * 승마, 보트
 */
Blockly.JavaScript['two_dimension'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_j = Blockly.JavaScript.valueToCode(block, 'j', Blockly.JavaScript.ORDER_ATOMIC);
  var value_k = Blockly.JavaScript.valueToCode(block, 'k', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = text_name+"["+value_i+"]["+value_j+"]="+value_k+";\n";
  return code;
};

Blockly.JavaScript['drone_variable'] = function(block) {
  var value_material = Blockly.JavaScript.valueToCode(block, 'material', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "theDrone.box("+value_material+");\n";
  return code;
};

/*
 * 마을짓기, 폭격
 */
Blockly.JavaScript['redstone_comparator'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var checkbox_4 = block.getFieldValue('4') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  if(checkbox_4) {
    var code = "theDrone.box('149:" + (Number(dropdown_direction) + 4) + "');\n";
  } else {
    var code = "theDrone.box('149:" + dropdown_direction + "');\n";
  }

  return code;
};

Blockly.JavaScript['delay_time'] = function(block) {
  var value_second = Blockly.JavaScript.valueToCode(block, 'SECOND', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_delay = Blockly.JavaScript.statementToCode(block, 'DELAY');
  // TODO: Assemble JavaScript into code variable.
  var code = "\
setTimeout(function(){"+statements_delay+"},"+Number(value_second*1000)+"+delay_add);\n\
delay_add += "+ Number(value_second*1000) +";\n";
  return code;
};

Blockly.JavaScript['redstone_repeater'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  // TODO: Assemble JavaScript into code variable.
  var code = "theDrone.box('93:" + dropdown_direction + "');\n";
  return code;
};

Blockly.JavaScript['four_direction'] = function(block) {
  var dropdown_item = block.getFieldValue('ITEM');
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('DIRECTION');
  // TODO: Assemble JavaScript into code variable.
  var code = "theDrone.box('" + dropdown_item + ":" + dropdown_direction + "'," + value_width + ",1," + value_length + ");\n";
  return code;
};

Blockly.JavaScript['button_attached'] = function(block) {
  var dropdown_button_material = block.getFieldValue('BUTTON_MATERIAL');
  var dropdown_block_material = block.getFieldValue('BLOCK_MATERIAL');
  var dropdown_direction = block.getFieldValue('DIRECTION');

  // Case Button direction setData
  var button_setdata = "";
  switch (dropdown_direction) {
    case "WEST" :
    button_setdata = 1;
    break;
    case "EAST" :
    button_setdata = 2;      
    break;
    case "NORTH" :
    button_setdata = 3;
    break;
    case "SOUTH" :
    button_setdata = 4;
    break;
  }
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\
var blockButton = theDrone.box('"+ dropdown_block_material +"').back(2);\n\
var blockLocation = new bkLocation(player.world, blockButton.x, blockButton.y, blockButton.z );\n\
blockLocation.getBlock().getRelative(bkBlockFace."+ dropdown_direction +").setType(bkMaterial."+ dropdown_button_material +");\n\
blockLocation.getBlock().getRelative(bkBlockFace."+ dropdown_direction +").setData("+ button_setdata +");\n";
  return code;
};

Blockly.JavaScript['door_drone'] = function(block) {
  var dropdown_material = block.getFieldValue('material');
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = "global.theDrone.box('" + dropdown_material + ":" + dropdown_direction + "').up().box('64:9');\n";
  return code;
};

Blockly.JavaScript['flower_choice'] = function(block) {
  var dropdown_flowers = block.getFieldValue('FLOWERS');
  // TODO: Assemble JavaScript into code variable.
  var code = ""+dropdown_flowers+"";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

