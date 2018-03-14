//Naturally generated and created material blocks http://minecraft.gamepedia.com/Block
var materials = getObjNames(Blockly.Msg.OBJNAMES, [0, 1, 2, 3, 4, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 24, 27, 31, 32, 37, 38, 39, 40, 41, 44, 46, 49, 51, 55, 56, 65, 66, 73, 78, 79, 80, 81, 82, 83, 85, 86, 93, 99, 100, 103, 106, 110, 111, 129, 152, 159, 161, 162, 172, 174, 175]);

var stairs = getObjNames(Blockly.Msg.OBJNAMES, [53, 108, 109, 128, 134, 135, 136]);

// extract objects translation names from their ids/names
function getObjNames(list, ids) {
    var shortList = [];
    var id = '';
    if (list === undefined) {
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
            id = '';
            if (typeof (ids[i]) == "number") {
                id = "'" + ids[i] + "'";
            } else {
                id = ids[i];
            }
            shortList[i] = [list[ids[i]], id];
        }
    }
    return shortList;
}

Blockly.Blocks['drone'] = {
    init: function () {
        this.appendStatementInput("statements")
            .setCheck("")
            .appendField(Blockly.Msg.DRONE)
            .appendField(new Blockly.FieldTextInput(""), "param");
        this.setInputsInline(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DRONE);
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
            .appendField(Blockly.Msg.MOUVEMENT)
            .appendField(
            new Blockly.FieldDropdown([
                [Blockly.Msg.MOUVEMENT_UP, "up()"],
                [Blockly.Msg.MOUVEMENT_DOWN, "down()"],
                [Blockly.Msg.MOUVEMENT_FWD, "fwd()"],
                [Blockly.Msg.MOUVEMENT_BACK, "back()"],
                [Blockly.Msg.MOUVEMENT_RIGHT, "right()"],
                [Blockly.Msg.MOUVEMENT_LEFT, "left()"],
                [Blockly.Msg.MOUVEMENT_TURN_RIGHT, "turn()"],
                [Blockly.Msg.MOUVEMENT_TURN_LEFT, "turn(2)"],
                [Blockly.Msg.MOUVEMENT_BACKTOSTART, "move('start')"],
                [Blockly.Msg.MOUVEMENT_SAVESTART, "chkpt('start')"]
            ]), "direction");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DRONEMOVE);
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
            .appendField(Blockly.Msg.RECTANGLE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.EMPTY, "0"],
                [Blockly.Msg.FULL, " "]
            ]), "fill");
        this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
        this.appendValueInput("lenght").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIAL)
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_RECTANGLE);
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


Blockly.Blocks['prism'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PRISM);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.EMPTY, "0"],
                [Blockly.Msg.FULL, " "]
            ]), "fill");
        this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
        this.appendValueInput("lenght").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIAL)
            .appendField(new Blockly.FieldDropdown(stairs), "stair");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_RECTANGLE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronebox-method');
    }
};

Blockly.JavaScript['prism'] = function (block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var value_lenght = Blockly.JavaScript.valueToCode(block, 'lenght', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_stair = block.getFieldValue('stair');
    var dropdown_fill = block.getFieldValue('fill');
    var code = "theDrone.prism" + dropdown_fill + "(" + dropdown_stair + "," + value_width + "," + value_lenght + ");\n";
    return code;
};
