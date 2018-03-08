/************************************************************************
## Blockly-Minecraft blocks
Lauro Canonica: Original author (Devoxx4kids Lugano 2015.04)

Contains the description of the Minecraft blocks for Blockly

***/

//Naturally generated and created material blocks http://minecraft.gamepedia.com/Block 
var materials = getObjNames(Blockly.Msg.OBJNAMES, [0, 1, 2, 3, 4, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 24, 27, 31, 32, 37, 38, 39, 40, 41, 44, 46, 49, 51, 55, 56, 65, 66, 73, 78, 79, 80, 81, 82, 83, 85, 86, 93, 99, 100, 103, 106, 110, 111, 129, 152, 159, 161, 162, 172, 174, 175]);

//http://minecraft.gamepedia.com/Tools
var items_tools = getObjNames(Blockly.Msg.ITEMS_NAMES, ['diamondAxe', 'diamondHoe', 'diamondSpade', 'diamondPickaxe', 'shears', 'flintAndSteel', 'fishingRod', 'bed', 'torch']);

//http://minecraft.gamepedia.com/Food -> Vegetarian diet :-)
var items_food = getObjNames(Blockly.Msg.ITEMS_NAMES, ['carrot', 'potato', 'cocoa', 'apple', 'melon', 'sugar', 'milkBucket', 'egg', 'wheat', 'pumpkin']);

//http://minecraft.gamepedia.com/Transportation
var items_transportation = getObjNames(Blockly.Msg.ITEMS_NAMES, ['rails', 'poweredRail', 'redstoneTorchOn', 'minecart']);

//http://minecraft.gamepedia.com/Armor
var items_weapons_armor = getObjNames(Blockly.Msg.ITEMS_NAMES, ['bow', 'arrow', 'diamondSword', 'diamondBoots', 'diamondChestplate', 'diamondHelmet', 'diamondLeggings', 'tnt']);

//Spawn passive and pameable animals http://minecraft.gamepedia.com/Mob
var animals = getObjNames(Blockly.Msg.ANIMALS_NAMES, ['BAT', 'CHICKEN', 'COW', 'PIG', 'RABBIT', 'WOLF', 'SHEEP', 'HORSE', 'OCELOT']);



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

Blockly.Blocks['materials'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATERIALS)
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_MATERIALS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Block');
    }
};

Blockly.Blocks['animals'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANIMALS)
            .appendField(new Blockly.FieldDropdown(animals), "animal");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_ANIMALS);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#entities-module');
    }
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

Blockly.Blocks['circle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CIRCLE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.EMPTY, "0"],
                [Blockly.Msg.FULL, " "]
            ]), "fill");
        this.appendValueInput("radius").setCheck("Number")
            .appendField(Blockly.Msg.RADIUS);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(materials), "material");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_CIRCLE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronecylinder-method');
    }
};

Blockly.Blocks['delete'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELETE);
        this.appendValueInput("width").setCheck("Number")
            .appendField(Blockly.Msg.WIDTH);
        this.appendValueInput("height").setCheck("Number")
            .appendField(Blockly.Msg.HEIGHT);
        this.appendValueInput("lenght").setCheck("Number")
            .appendField(Blockly.Msg.LENGTH);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(0);
        this.setTooltip(Blockly.Msg.TOOLTIP_DELETE);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#dronebox-method');
    }
};

Blockly.Blocks['inventory'] = {
    init: function () {
        this.appendStatementInput("statements")
            .setCheck("")
            .appendField(Blockly.Msg.INVENTORY)
            .appendField(new Blockly.FieldTextInput(""), "param");
        this.setInputsInline(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_INVENTORY);
        this.setHelpUrl('https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#inventory-module');
    }
};

Blockly.Blocks['tools'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_TOOLS)
            .appendField(new Blockly.FieldDropdown(items_tools), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_TOOLS);
        this.setHelpUrl('http://minecraft.gamepedia.com/Tools');
    }
};

Blockly.Blocks['food'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_FOOD)
            .appendField(new Blockly.FieldDropdown(items_food), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_FOOD);
        this.setHelpUrl('http://minecraft.gamepedia.com/Food');
    }
};

Blockly.Blocks['transportation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_TRANSPORTATION)
            .appendField(new Blockly.FieldDropdown(items_transportation), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_TRANSPORTATION);
        this.setHelpUrl('http://minecraft.gamepedia.com/Transportation');
    }
};

Blockly.Blocks['weapons_armor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ITEMS_WEAPONS_ARMOR)
            .appendField(new Blockly.FieldDropdown(items_weapons_armor), "item");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip(Blockly.Msg.TOOLTIP_WEAPONS_ARMOR);
        this.setHelpUrl('http://minecraft.gamepedia.com/Armor');
    }
};


/************************************************************************
## Blockly-Minecraft blocks
Coalab (2018.03.06)

Contains the description of the Minecraft blocks for Blockly

***/

Blockly.Blocks['onchat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("다음 채팅명령어를 입력하면:")
        .appendField(new Blockly.FieldTextInput("run"), "command");
    this.appendStatementInput("statements")
        .setCheck(null);
    this.setColour(210);
 this.setTooltip("게임 채팅에 특정 메시지를 입력하면 코드를 실행합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['spawn_animal'] = {
  init: function() {
    this.appendValueInput("animal")
        .setCheck("AnimalMob")
        .appendField("소환");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("동물을 생성합니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['animalmob'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("동물")
        .appendField(new Blockly.FieldDropdown([["닭","CHICKEN"], ["젖소","COW"], ["돼지","PIG"], ["양","SHEEP"], ["늑대","WOLF"]]), "ANIMAL");
    this.setOutput(true, "AnimalMob");
    this.setColour(230);
 this.setTooltip("게임에서 동물을 나타냅니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['onmobkilled'] = {
  init: function() {
    this.appendValueInput("Mob")
        .setCheck("AnimalMob")
        .appendField("몹");
    this.appendDummyInput()
        .appendField("이 죽었다면 실행");
    this.appendStatementInput("command")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("특정 유형의 생명체를 죽이면 코드를 실행합니다.");
 this.setHelpUrl("");
  }
};
