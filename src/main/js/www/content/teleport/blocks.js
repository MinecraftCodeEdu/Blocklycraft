//Naturally generated and created material blocks http://minecraft.gamepedia.com/Block
var materials = getObjNames('Plane_objnames', [0, 1, 2, 3, 4, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 24, 27, 31, 32, 37, 38, 39, 40, 41, 44, 46, 49, 51, 55, 56, 65, 66, 73, 78, 79, 80, 81, 82, 83, 85, 86, 93, 99, 100, 103, 106, 110, 111, 129, 152, 159, 161, 162, 172, 174, 175]);


// extract objects translation names from their ids/names
function getObjNames(prefix, ids) {
    var shortList = [];
    var id = '';
    if (prefix === undefined) {
        //TODO - switch to english translation file in case of a non-existent translation
        for (i = 0; i < ids.length; i++) {
            id = '';
            if (typeof (ids[i]) == "number") {
                id = "'" + ids[i] + "'";
            } else {
                id = ids[i];
            }
            shortList[i] = [ids[i], id];
        }
    } else {
	    for (i = 0; i < ids.length; i++) {
		    id = ids[i];
		    if (typeof id === 'string')
			    id = "'" + id + "'";
		    //shortList[i] = [prefix[ids[i]], id];
		    shortList[i] = [Plane.getMsg(prefix + '[' + id + ']'), id];
	    }
    }
    return shortList;
}

/***
	Coalab (2018.03.12) 
***/
Blockly.Blocks['teleport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("입력한 좌표로 텔레포트 : ")
        .appendField(new Blockly.FieldTextInput("teleport"), "command")
        .appendField("x y z");
    this.setInputsInline(false);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['teleport'] = function(block) {
  var text_command = block.getFieldValue('command');
  // TODO: Assemble JavaScript into code variable.
  var code = "command('"+text_command+"', function(parameters, player) {\n"
			+"	var bkLocation = Packages.org.bukkit.Location;\n"
			+"	player.teleport(new bkLocation(player.world, parameters[0], parameters[1], parameters[2]));\n"
			+"});";
  return code;
};


Blockly.Blocks['teleport_coordinate'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("coordinate")
        .appendField("해당 좌표로 텔레포트");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("현재 플레이어를 다른 위치로 텔레포트합니다.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['teleport_coordinate'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "	var bkLocation = Packages.org.bukkit.Location;\n"
			+"	player.teleport("+value_name+");\n";
  return code;
};
// x, y, z


Blockly.Blocks['relative_coordinate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("상대 좌표");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("~");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("~");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("~");
    this.setInputsInline(true);
    this.setOutput(true, "coordinate");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['relative_coordinate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "new bkLocation(player.world, player.getLocation().x+Number("+value_x+"), player.getLocation().y+Number("+value_y+"), player.getLocation().z+Number("+value_z+") )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['absolute_coordinate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("월드 좌표");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setInputsInline(true);
    this.setOutput(true, "coordinate");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['absolute_coordinate'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "new bkLocation(player.world, "+value_x+", "+value_y+", "+value_z+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

