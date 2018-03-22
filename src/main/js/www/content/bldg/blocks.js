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


Blockly.Blocks['drone'] = {
    init: function () {
        this.appendStatementInput("statements")
            .setCheck("")
            .appendField(Plane.getMsg('Plane_drone'))
            .appendField(new Blockly.FieldTextInput(""), "param");
        this.setInputsInline(true);
        this.setColour(0);
        this.setTooltip(Plane.getMsg('Plane_tooltip_drone'));
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-plugin');
    }
};

Blockly.JavaScript['drone'] = function (block) {
    var fname = block.getFieldValue('param');
    var statements_statements = Blockly.JavaScript.statementToCode(block, 'statements');
    var code = "command( '" + fname + "', function ( parameters, player ) {\nvar theDrone = new Drone(player);\ntheDrone.up();\ntheDrone.chkpt('start');\n";
    code = code + "var timeoutStop = new Date().getTime()+500;\n"; // set maximum run time for a script
    code = code + statements_statements;
    code = code + "});";
    return code;
};

Blockly.Blocks['drone_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Plane.getMsg('Plane_movement'))
            .appendField(
            new Blockly.FieldDropdown([
                [Plane.getMsg('Plane_movement_up'), "up()"],
                [Plane.getMsg('Plane_movement_down'), "down()"],
                [Plane.getMsg('Plane_movement_fwd'), "fwd()"],
                [Plane.getMsg('Plane_movement_back'), "back()"],
                [Plane.getMsg('Plane_movement_right'), "right()"],
                [Plane.getMsg('Plane_movement_left'), "left()"],
                [Plane.getMsg('Plane_movement_turn_right'), "turn()"],
                [Plane.getMsg('Plane_movement_turn_left'), "turn(2)"],
                [Plane.getMsg('Plane_movement_backtostart'), "move('start')"],
                [Plane.getMsg('Plane_movement_savestart'), "chkpt('start')"]
            ]), "direction");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Plane.getMsg('Plane_tooltip_dronemove'));
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-movement');
    }
};

Blockly.JavaScript['drone_move'] = function (block) {
    var dropdown_direction = block.getFieldValue('direction');
    var code = "theDrone." + dropdown_direction + ";\n";
    return code;
};

Blockly.Blocks['rectangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Plane.getMsg('Plane_rectangle'));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Plane.getMsg('Plane_empty'), "0"],
                [Plane.getMsg('Plane_full'), " "]
            ]), "fill");
        this.appendValueInput("width").setCheck("Number")
            .appendField(Plane.getMsg('Plane_width'));
        this.appendValueInput("lenght").setCheck("Number")
            .appendField(Plane.getMsg('Plane_length'));
        this.appendDummyInput()
            .appendField(Plane.getMsg('Plane_material'))
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Plane.getMsg('Plane_tooltip_rectangle'));
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronebox-method');
    }
};

Blockly.JavaScript['rectangle'] = function (block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_lenght = Blockly.JavaScript.valueToCode(block, 'lenght', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_material = block.getFieldValue('material');
    var dropdown_fill = block.getFieldValue('fill');
    var code = "theDrone.box" + dropdown_fill + "(" + dropdown_material + "," + value_width + ",1," + value_lenght + ");\n";
    return code;
};

