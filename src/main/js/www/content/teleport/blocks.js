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

Blockly.Blocks['teleport_command'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("입력한 좌표로 텔레포트 : ");
    this.appendDummyInput()
        .appendField("x y z");
    this.setInputsInline(true);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['teleport_location'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("location")
        .appendField("해당 좌표로 텔레포트");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("현재 플레이어를 다른 위치로 텔레포트합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['relative_location'] = {
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
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['absolute_location'] = {
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
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveforward'] = {
  init: function() {
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("숫자만큼 앞으로 이동");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['directforward'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("앞으로 이동 : ");
    this.appendDummyInput()
        .appendField("d");
    this.setInputsInline(true);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['facing'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("방향 바라보기 명령 : ");
    this.appendDummyInput()
        .appendField("각도");
    this.setColour(230);
 this.setTooltip("설정한 명령어와 바라 볼 각도를 입력하세요. 예) /jsp 명령어 각>도");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("일시 정지 ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "second")
        .appendField("초");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['name_location'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("위치 이름");
    this.appendValueInput("location")
        .setCheck(null)
        .appendField("좌표");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['save_teleport'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck(null)
        .appendField("저장한 위치로 이동 : ");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['savelocation'] = {
  init: function() {
    this.appendValueInput("location")
        .setCheck(null)
        .appendField("숫자가 ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "number")
        .appendField("이면");
    this.appendDummyInput()
        .appendField("으로 이동");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/***
        Coalab (2018.03.29) 
***/

Blockly.Blocks['player_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 X 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 Y 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 Z 좌표");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['player_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("플레이어 절대좌표");
    this.setOutput(true, "location");
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

