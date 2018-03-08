var MSG = {
    title: "BlocklyCraft",
    blocks: "Blocks",
    linkTooltip: "Save and link to blocks.",
    deployTooltip: "Deploy the program defined by the blocks in the workspace.",
    badCode: "Program error:\n%1",
    timeout: "Maximum execution iterations exceeded.",
    trashTooltip: "Discard all blocks.",
    catLogic: "Logic",
    catLoops: "Loops",
    catMath: "Math",
    catText: "Text",
    catLists: "Lists",
    catColour: "Colour",
    catVariables: "Variables",
    catDrone: "Drone",
    catInventory: "Inventory",

    catMaca:"Maca",

    listVariable: "list",
    textVariable: "text",
    httpRequestError: "There was a problem with the request.",
    linkAlert: "Share your blocks with this link:\n\n%1",
    hashError: "Sorry, '%1' doesn't correspond with any saved program.",
    xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
    badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML."
};

Blockly.Msg.DRONE = "Drone";
Blockly.Msg.MATERIALS = "Materials";
Blockly.Msg.MOUVEMENT = "Mouvement";
Blockly.Msg.RECTANGLE = "Rectangle";
Blockly.Msg.DELETE = "Delete";
Blockly.Msg.CIRCLE = "Circle";
Blockly.Msg.WIDTH = "Width";
Blockly.Msg.HEIGHT = "Height";
Blockly.Msg.LENGTH = "Length";
Blockly.Msg.RADIUS = "Radius";
Blockly.Msg.FULL = "Full";
Blockly.Msg.EMPTY = "Empty";
Blockly.Msg.INVENTORY = "Inventory";
Blockly.Msg.ITEMS_TOOLS = "Tools";
Blockly.Msg.ITEMS_FOOD = "Food";
Blockly.Msg.ITEMS_TRANSPORTATION = "Transportation";
Blockly.Msg.ITEMS_WEAPONS_ARMOR = "Weapons & Armor";
Blockly.Msg.ANIMALS = "Animals";
Blockly.Msg.MOUVEMENT_UP = "up";
Blockly.Msg.MOUVEMENT_DOWN = "down";
Blockly.Msg.MOUVEMENT_FWD = "forward";
Blockly.Msg.MOUVEMENT_BACK = "back";
Blockly.Msg.MOUVEMENT_RIGHT = "right";
Blockly.Msg.MOUVEMENT_LEFT = "left";
Blockly.Msg.MOUVEMENT_TURN_RIGHT = "turn right";
Blockly.Msg.MOUVEMENT_TURN_LEFT = "turn left";
Blockly.Msg.MOUVEMENT_BACKTOSTART = "go back to start";
Blockly.Msg.MOUVEMENT_SAVESTART = "save this start";

Blockly.Msg.DEPLOY_SUCCESS = "Perfect, now you can test your command in Minecraft";
Blockly.Msg.MISSING_NAME = "Your command doesn't have a name.";

Blockly.Msg.TOOLTIP_DRONE = "Construct a Drone Object";
Blockly.Msg.TOOLTIP_MATERIALS = "Naturally generated and created material blocks.";
Blockly.Msg.TOOLTIP_ANIMALS = "Spawn passive and pameable animals.";
Blockly.Msg.TOOLTIP_DRONEMOVE = "Control the Drone's movement using any of the following methods.";
Blockly.Msg.TOOLTIP_RECTANGLE = "'A convenience method for building things.'";
Blockly.Msg.TOOLTIP_CIRCLE = "A convenience method for building cylinders. Building begins radius blocks to the right and forward.";
Blockly.Msg.TOOLTIP_DELETE = "A convenience method to delete things or areas.";
Blockly.Msg.TOOLTIP_INVENTORY = "Provides functions to add items to, remove items from and check the contents of a player's inventory";
Blockly.Msg.TOOLTIP_TOOLS = "Tools are items used by the player while held to perform actions faster and more efficiently.";
Blockly.Msg.TOOLTIP_FOOD = "Foods are consumable items that when eaten restore hunger points and sometimes cause status effects.";
Blockly.Msg.TOOLTIP_TRANSPORTATION = "Transportation involves the methods by which players move around the world.";
Blockly.Msg.TOOLTIP_WEAPONS_ARMOR = "Armor is used to reduce damage from mobs, players, lava, and explosions. Weapons are mostly used to kill mobs and players faster strategically.";

Blockly.Msg.ANIMALS_NAMES = []; // init blocks array
Blockly.Msg.ANIMALS_NAMES.BAT = 'Bat';
Blockly.Msg.ANIMALS_NAMES.CHICKEN = 'Chicken';
Blockly.Msg.ANIMALS_NAMES.COW = 'Cow';
Blockly.Msg.ANIMALS_NAMES.PIG = 'Pig';
Blockly.Msg.ANIMALS_NAMES.RABBIT = 'Rabbit';
Blockly.Msg.ANIMALS_NAMES.WOLF = 'Wolf';
Blockly.Msg.ANIMALS_NAMES.SHEEP = 'Sheep';
Blockly.Msg.ANIMALS_NAMES.HORSE = 'Horse';
Blockly.Msg.ANIMALS_NAMES.OCELOT = 'Ocelot';


Blockly.Msg.ITEMS_NAMES = []; // init items array
//tools
Blockly.Msg.ITEMS_NAMES.diamondAxe = "Diamond Axe";
Blockly.Msg.ITEMS_NAMES.diamondHoe = "Diamond Hoe";
Blockly.Msg.ITEMS_NAMES.diamondSpade = "Diamond Shovel";
Blockly.Msg.ITEMS_NAMES.diamondPickaxe = "Diamond Pickaxe";
Blockly.Msg.ITEMS_NAMES.shears = "Shears";
Blockly.Msg.ITEMS_NAMES.flintAndSteel = "Flint and Steel";
Blockly.Msg.ITEMS_NAMES.fishingRod = "Fishing Rod";
Blockly.Msg.ITEMS_NAMES.bed = "Bed";
Blockly.Msg.ITEMS_NAMES.torch = "Torch";

//food
Blockly.Msg.ITEMS_NAMES.carrot = "Carrot";
Blockly.Msg.ITEMS_NAMES.potato = "Potatoe";
Blockly.Msg.ITEMS_NAMES.cocoa = "Cocoa Beans";
Blockly.Msg.ITEMS_NAMES.apple = "Apple";
Blockly.Msg.ITEMS_NAMES.melon = "Melon";
Blockly.Msg.ITEMS_NAMES.sugar = "Sugar";
Blockly.Msg.ITEMS_NAMES.milkBucket = "Milk bucket";
Blockly.Msg.ITEMS_NAMES.egg = "Egg";
Blockly.Msg.ITEMS_NAMES.wheat = "Wheat";
Blockly.Msg.ITEMS_NAMES.pumpkin = "Pumpkin";

//transportation
Blockly.Msg.ITEMS_NAMES.rails = "Rail";
Blockly.Msg.ITEMS_NAMES.minecart = "Minecart";
Blockly.Msg.ITEMS_NAMES.poweredRail = "Rail (Powered)";
Blockly.Msg.ITEMS_NAMES.redstoneTorchOn = "Redstone Torch (active)";

//weapons & armor
Blockly.Msg.ITEMS_NAMES.bow = "Bow";
Blockly.Msg.ITEMS_NAMES.arrow = "Arrow";
Blockly.Msg.ITEMS_NAMES.diamondSword = "Diamond Sword";
Blockly.Msg.ITEMS_NAMES.diamondBoots = "Diamond Boots";
Blockly.Msg.ITEMS_NAMES.diamondChestplate = "Diamond Chestplate";
Blockly.Msg.ITEMS_NAMES.diamondHelmet = "Diamond Helmet";
Blockly.Msg.ITEMS_NAMES.diamondLeggings = "Diamond Leggings";
Blockly.Msg.ITEMS_NAMES.tnt = "tnt";



Blockly.Msg.OBJNAMES = []; // init blocks array
Blockly.Msg.OBJNAMES[0] = "air";
Blockly.Msg.OBJNAMES[1] = "stone";
Blockly.Msg.OBJNAMES[2] = "grass";
Blockly.Msg.OBJNAMES[3] = "dirt";
Blockly.Msg.OBJNAMES[4] = "cobblestone";
Blockly.Msg.OBJNAMES[5] = "oak";
Blockly.Msg.OBJNAMES[6] = "sapling oak";
Blockly.Msg.OBJNAMES[7] = "bedrock";
Blockly.Msg.OBJNAMES[8] = "water";
Blockly.Msg.OBJNAMES[9] = "water still";
Blockly.Msg.OBJNAMES[10] = "lava";
Blockly.Msg.OBJNAMES[11] = "lava still";
Blockly.Msg.OBJNAMES[12] = "sand";
Blockly.Msg.OBJNAMES[13] = "gravel";
Blockly.Msg.OBJNAMES[14] = "gold ore";
Blockly.Msg.OBJNAMES[15] = "iron ore";
Blockly.Msg.OBJNAMES[16] = "coal ore";
Blockly.Msg.OBJNAMES[17] = "wood";
Blockly.Msg.OBJNAMES[18] = "leaves";
Blockly.Msg.OBJNAMES[19] = "sponge";
Blockly.Msg.OBJNAMES[20] = "glass";
Blockly.Msg.OBJNAMES[21] = "lapis lazuli ore";
Blockly.Msg.OBJNAMES[22] = "lapis lazuli block";
Blockly.Msg.OBJNAMES[23] = "dispenser";
Blockly.Msg.OBJNAMES[24] = "sandstone";
Blockly.Msg.OBJNAMES[25] = "note";
Blockly.Msg.OBJNAMES[26] = "bed";
Blockly.Msg.OBJNAMES[27] = "powered rail";
Blockly.Msg.OBJNAMES[28] = "detector rail";
Blockly.Msg.OBJNAMES[29] = "sticky piston";
Blockly.Msg.OBJNAMES[30] = "cobweb";
Blockly.Msg.OBJNAMES[31] = "grass tall";
Blockly.Msg.OBJNAMES[32] = "dead bush";
Blockly.Msg.OBJNAMES[33] = "piston";
Blockly.Msg.OBJNAMES[34] = "piston extn";
Blockly.Msg.OBJNAMES[35] = "wool white";
Blockly.Msg.OBJNAMES[37] = "dandelion";
Blockly.Msg.OBJNAMES[37] = "flower yellow";
Blockly.Msg.OBJNAMES[38] = "rose";
Blockly.Msg.OBJNAMES[38] = "flower red";
Blockly.Msg.OBJNAMES[39] = "mushroom brown";
Blockly.Msg.OBJNAMES[40] = "mushroom red";
Blockly.Msg.OBJNAMES[41] = "gold";
Blockly.Msg.OBJNAMES[42] = "iron";
Blockly.Msg.OBJNAMES[43] = "double slab stone";
Blockly.Msg.OBJNAMES[44] = "slab stone";
Blockly.Msg.OBJNAMES[45] = "brick red";
Blockly.Msg.OBJNAMES[46] = "tnt";
Blockly.Msg.OBJNAMES[47] = "bookshelf";
Blockly.Msg.OBJNAMES[48] = "moss stone";
Blockly.Msg.OBJNAMES[49] = "obsidian";
Blockly.Msg.OBJNAMES[50] = "torch";
Blockly.Msg.OBJNAMES[51] = "fire";
Blockly.Msg.OBJNAMES[52] = "monster spawner";
Blockly.Msg.OBJNAMES[53] = "stairs oak";
Blockly.Msg.OBJNAMES[67] = "stairs cobblestone";
Blockly.Msg.OBJNAMES[54] = "chest";
Blockly.Msg.OBJNAMES[55] = "redstone wire";
Blockly.Msg.OBJNAMES[56] = "diamond ore";
Blockly.Msg.OBJNAMES[57] = "diamond";
Blockly.Msg.OBJNAMES[58] = "crafting table";
Blockly.Msg.OBJNAMES[59] = "wheat seeds";
Blockly.Msg.OBJNAMES[60] = "farmland";
Blockly.Msg.OBJNAMES[61] = "furnace";
Blockly.Msg.OBJNAMES[62] = "furnace burning";
Blockly.Msg.OBJNAMES[63] = "sign post";
Blockly.Msg.OBJNAMES[64] = "door wood";
Blockly.Msg.OBJNAMES[65] = "ladder";
Blockly.Msg.OBJNAMES[66] = "rail";
Blockly.Msg.OBJNAMES[68] = "sign";
Blockly.Msg.OBJNAMES[69] = "lever";
Blockly.Msg.OBJNAMES[70] = "pressure plate stone";
Blockly.Msg.OBJNAMES[71] = "door iron";
Blockly.Msg.OBJNAMES[72] = "pressure plate wood";
Blockly.Msg.OBJNAMES[73] = "redstone ore";
Blockly.Msg.OBJNAMES[74] = "redstone ore glowing";
Blockly.Msg.OBJNAMES[75] = "torch redstone";
Blockly.Msg.OBJNAMES[76] = "torch redstone active";
Blockly.Msg.OBJNAMES[77] = "stone button";
Blockly.Msg.OBJNAMES[78] = "slab snow";
Blockly.Msg.OBJNAMES[79] = "ice";
Blockly.Msg.OBJNAMES[80] = "snow";
Blockly.Msg.OBJNAMES[81] = "cactus";
Blockly.Msg.OBJNAMES[82] = "clay";
Blockly.Msg.OBJNAMES[83] = "sugar cane";
Blockly.Msg.OBJNAMES[84] = "jukebox";
Blockly.Msg.OBJNAMES[85] = "fence";
Blockly.Msg.OBJNAMES[86] = "pumpkin";
Blockly.Msg.OBJNAMES[87] = "netherrack";
Blockly.Msg.OBJNAMES[88] = "soulsand";
Blockly.Msg.OBJNAMES[89] = "glowstone";
Blockly.Msg.OBJNAMES[90] = "netherportal";
Blockly.Msg.OBJNAMES[91] = "jackolantern";
Blockly.Msg.OBJNAMES[92] = "cake";
Blockly.Msg.OBJNAMES[93] = "redstone repeater";
Blockly.Msg.OBJNAMES[94] = "redstone repeater active";
Blockly.Msg.OBJNAMES[95] = "stained glass white";
Blockly.Msg.OBJNAMES[96] = "trapdoor";
Blockly.Msg.OBJNAMES[97] = "monster egg";
Blockly.Msg.OBJNAMES[98] = "brick stone";
Blockly.Msg.OBJNAMES[99] = "mushroom brown huge";
Blockly.Msg.OBJNAMES[100] = "mushroom red huge";
Blockly.Msg.OBJNAMES[101] = "iron bars";
Blockly.Msg.OBJNAMES[102] = "glass pane";
Blockly.Msg.OBJNAMES[103] = "melon";
Blockly.Msg.OBJNAMES[104] = "pumpkin stem";
Blockly.Msg.OBJNAMES[105] = "melon stem";
Blockly.Msg.OBJNAMES[106] = "vines";
Blockly.Msg.OBJNAMES[107] = "fence gate";
Blockly.Msg.OBJNAMES[110] = "mycelium";
Blockly.Msg.OBJNAMES[111] = "lily pad";
Blockly.Msg.OBJNAMES[112] = "nether";
Blockly.Msg.OBJNAMES[113] = "nether fence";
Blockly.Msg.OBJNAMES[115] = "netherwart";
Blockly.Msg.OBJNAMES[116] = "table enchantment";
Blockly.Msg.OBJNAMES[117] = "brewing stand";
Blockly.Msg.OBJNAMES[118] = "cauldron";
Blockly.Msg.OBJNAMES[119] = "endportal";
Blockly.Msg.OBJNAMES[120] = "endportal frame";
Blockly.Msg.OBJNAMES[121] = "endstone";
Blockly.Msg.OBJNAMES[122] = "dragon egg";
Blockly.Msg.OBJNAMES[123] = "redstone lamp";
Blockly.Msg.OBJNAMES[124] = "redstone lamp active";
Blockly.Msg.OBJNAMES[126] = "slab oak";
Blockly.Msg.OBJNAMES[127] = "cocoa";
Blockly.Msg.OBJNAMES[129] = "emerald ore";
Blockly.Msg.OBJNAMES[130] = "enderchest";
Blockly.Msg.OBJNAMES[131] = "tripwire hook";
Blockly.Msg.OBJNAMES[132] = "tripwire";
Blockly.Msg.OBJNAMES[133] = "emerald";
Blockly.Msg.OBJNAMES[137] = "command";
Blockly.Msg.OBJNAMES[138] = "beacon";
Blockly.Msg.OBJNAMES[139] = "cobblestone wall";
Blockly.Msg.OBJNAMES[140] = "flowerpot";
Blockly.Msg.OBJNAMES[141] = "carrots";
Blockly.Msg.OBJNAMES[142] = "potatoes";
Blockly.Msg.OBJNAMES[143] = "button wood";
Blockly.Msg.OBJNAMES[144] = "mobhead";
Blockly.Msg.OBJNAMES[145] = "anvil";
Blockly.Msg.OBJNAMES[146] = "chest trapped";
Blockly.Msg.OBJNAMES[147] = "pressure plate weighted light";
Blockly.Msg.OBJNAMES[148] = "pressure plate weighted heavy";
Blockly.Msg.OBJNAMES[149] = "redstone comparator";
Blockly.Msg.OBJNAMES[150] = "redstone comparator active";
Blockly.Msg.OBJNAMES[151] = "daylight sensor";
Blockly.Msg.OBJNAMES[152] = "redstone";
Blockly.Msg.OBJNAMES[153] = "netherquartzore";
Blockly.Msg.OBJNAMES[154] = "hopper";
Blockly.Msg.OBJNAMES[155] = "quartz";
Blockly.Msg.OBJNAMES[157] = "rail activator";
Blockly.Msg.OBJNAMES[158] = "dropper";
Blockly.Msg.OBJNAMES[159] = "stained clay white";
Blockly.Msg.OBJNAMES[161] = "acacia leaves";
Blockly.Msg.OBJNAMES[162] = "acacia wood";
Blockly.Msg.OBJNAMES[170] = "hay";
Blockly.Msg.OBJNAMES[171] = "carpet white";
Blockly.Msg.OBJNAMES[172] = "hardened clay";
Blockly.Msg.OBJNAMES[173] = "coal block";
Blockly.Msg.OBJNAMES[174] = "packed ice";
Blockly.Msg.OBJNAMES[175] = "double plant";
