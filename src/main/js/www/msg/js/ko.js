var MSG = {
    title: "마인크래프트 블록코딩",
    blocks: "블\xa0록",
    javascript: "자\xa0바\xa0스\xa0크\xa0립\xa0트",
    linkTooltip: "블록 저장 및 링크.",
    deployTooltip: "작업공간에 블록으로 정의된 프로그램 배포.",
    badCode: "프로그램에러:\n%1",
    timeout: "최대 실행 반복 횟수를 초과했습니다.",
    trashTooltip: "모든블록 삭제.",
    catLogic: "로직",
    catLoops: "루프",
    catMath: "연산",
    catText: "텍스트",
    catLists: "리스트",
    catColour: "색깔",
    catVariables: "변수",
    catDrone: "드론",
    catInventory: "인벤토리",
    catCoala: "코알라",
    listVariable: "리스트",
    textVariable: "텍스트",
    httpRequestError: "요청에 문제가 있습니다.",
    linkAlert: "이 링크로 블록을 공유하십시오.:\n\n%1",
    hashError: "'%1' 은 저장된 프로그램과 일치하지 않습니다.",
    xmlError: "저장된 파일을로드 할 수 없습니다. 어쩌면 다른 버전의 blockly가 생성되었을 겁니다.",
    badXml: "XML파싱 에러:\n%1\n\nSelect 변경 사항을 취소하려면 'OK'을, XML을 추가로 편집하려면 'Cancel'."
};

Blockly.Msg.DRONE = "드론";
Blockly.Msg.MATERIALS = "재료";
Blockly.Msg.MOUVEMENT = "움직임";
Blockly.Msg.RECTANGLE = "직사각형";
Blockly.Msg.DELETE = "삭제";
Blockly.Msg.CIRCLE = "원";
Blockly.Msg.WIDTH = "가로";
Blockly.Msg.HEIGHT = "높이";
Blockly.Msg.LENGTH = "세로";
Blockly.Msg.RADIUS = "반지름";
Blockly.Msg.FULL = "가득 찬";
Blockly.Msg.EMPTY = "텅 빈";
Blockly.Msg.INVENTORY = "인벤토리";
Blockly.Msg.ITEMS_TOOLS = "도구";
Blockly.Msg.ITEMS_FOOD = "식량";
Blockly.Msg.ITEMS_TRANSPORTATION = "교통수단";
Blockly.Msg.ITEMS_WEAPONS_ARMOR = "무기 & 갑옷";
Blockly.Msg.ANIMALS = "동물";
Blockly.Msg.MOUVEMENT_UP = "위로";
Blockly.Msg.MOUVEMENT_DOWN = "아래로";
Blockly.Msg.MOUVEMENT_FWD = "앞으로";
Blockly.Msg.MOUVEMENT_BACK = "뒤로";
Blockly.Msg.MOUVEMENT_RIGHT = "오른쪽";
Blockly.Msg.MOUVEMENT_LEFT = "왼쪽";
Blockly.Msg.MOUVEMENT_TURN_RIGHT = "오른쪽으로 돌기";
Blockly.Msg.MOUVEMENT_TURN_LEFT = "왼쪽으로 돌기";
Blockly.Msg.MOUVEMENT_BACKTOSTART = "다시 시작하기";
Blockly.Msg.MOUVEMENT_SAVESTART = "시작 저장하기";

Blockly.Msg.DEPLOY_SUCCESS = "잘했습니다. 이제 마인크래프트게임에서 명령을 실행할수있습니다.";
Blockly.Msg.MISSING_NAME = "명령에 이름이 없습니다.";

Blockly.Msg.TOOLTIP_DRONE = "드론 객체 생성";
Blockly.Msg.TOOLTIP_MATERIALS = "자연적으로 생성되고 만들어진 블록재료.";
Blockly.Msg.TOOLTIP_ANIMALS = "수동적으로 부화할수있고 기를수있는 동물.";
Blockly.Msg.TOOLTIP_DRONEMOVE = "여러방법들에 따라 드론의 움직임을 제어할수있다.";
Blockly.Msg.TOOLTIP_RECTANGLE = "'건축물들을 짓는 편리한 방법.'";
Blockly.Msg.TOOLTIP_CIRCLE = "원통을 만드는 쉬운 방법. 빌딩은 원형블록에서 오른쪽과 앞에서부터 시작합니다.";
Blockly.Msg.TOOLTIP_DELETE = "건축이나 면적을 삭제하게 편리한 방법.";
Blockly.Msg.TOOLTIP_INVENTORY = "플레이어의 인벤토리에 항목을 추가하고, 항목을 제거하고, 내용을 확인하는 기능을 제공합니다.";
Blockly.Msg.TOOLTIP_TOOLS = "도구는 플레이어가 더 빠르고 효율적으로 행동을 수행하기 위해 사용합니다.";
Blockly.Msg.TOOLTIP_FOOD = "음식은 먹을 때 굶주림을 회복하고 때때로 상태 효과를 유발할 수있는 소모품입니다.";
Blockly.Msg.TOOLTIP_TRANSPORTATION = "운송은 플레이어가 전 세계로 이동하는 방법을 포함합니다.";
Blockly.Msg.TOOLTIP_WEAPONS_ARMOR = "갑옷은 몬스터, 플레이어, 용암 및 폭발로 인한 피해를 줄이기 위해 사용됩니다. 무기는 주로 몬스터들과 플레이어들을 전략적으로 빨리 죽이는 데 사용됩니다.";

Blockly.Msg.ANIMALS_NAMES = []; // init blocks array
Blockly.Msg.ANIMALS_NAMES.BAT = '박쥐';
Blockly.Msg.ANIMALS_NAMES.CHICKEN = '닭';
Blockly.Msg.ANIMALS_NAMES.COW = '소';
Blockly.Msg.ANIMALS_NAMES.PIG = '돼지';
Blockly.Msg.ANIMALS_NAMES.RABBIT = '토끼';
Blockly.Msg.ANIMALS_NAMES.WOLF = '늑대';
Blockly.Msg.ANIMALS_NAMES.SHEEP = '양';
Blockly.Msg.ANIMALS_NAMES.HORSE = '말';
Blockly.Msg.ANIMALS_NAMES.OCELOT = '오셀롯(고양이)';


Blockly.Msg.ITEMS_NAMES = []; // init items array
//tools
Blockly.Msg.ITEMS_NAMES.diamondAxe = "다이아몬드 도끼";
Blockly.Msg.ITEMS_NAMES.diamondHoe = "다이아몬드 괭이(농사용)";
Blockly.Msg.ITEMS_NAMES.diamondSpade = "다이아몬드 삽";
Blockly.Msg.ITEMS_NAMES.diamondPickaxe = "다이아몬드 곡괭이";
Blockly.Msg.ITEMS_NAMES.shears = "양털깎기";
Blockly.Msg.ITEMS_NAMES.flintAndSteel = "부싯돌";
Blockly.Msg.ITEMS_NAMES.fishingRod = "낚싯대";
Blockly.Msg.ITEMS_NAMES.bed = "침대";
Blockly.Msg.ITEMS_NAMES.torch = "횃불";

//food
Blockly.Msg.ITEMS_NAMES.carrot = "당근";
Blockly.Msg.ITEMS_NAMES.potato = "감자";
Blockly.Msg.ITEMS_NAMES.cocoa = "카카오";
Blockly.Msg.ITEMS_NAMES.apple = "사과";
Blockly.Msg.ITEMS_NAMES.melon = "메론";
Blockly.Msg.ITEMS_NAMES.sugar = "설탕";
Blockly.Msg.ITEMS_NAMES.milkBucket = "우유 버킷";
Blockly.Msg.ITEMS_NAMES.egg = "달걀";
Blockly.Msg.ITEMS_NAMES.wheat = "밀";
Blockly.Msg.ITEMS_NAMES.pumpkin = "호박";

//transportation
Blockly.Msg.ITEMS_NAMES.rails = "레일";
Blockly.Msg.ITEMS_NAMES.minecart = "광차";
Blockly.Msg.ITEMS_NAMES.poweredRail = "레일 (Powered)";
Blockly.Msg.ITEMS_NAMES.redstoneTorchOn = "레드스톤 횃불 (active)";

//weapons & armor
Blockly.Msg.ITEMS_NAMES.bow = "활";
Blockly.Msg.ITEMS_NAMES.arrow = "화살";
Blockly.Msg.ITEMS_NAMES.diamondSword = "다이아몬드 검";
Blockly.Msg.ITEMS_NAMES.diamondBoots = "다이아몬드 부츠";
Blockly.Msg.ITEMS_NAMES.diamondChestplate = "다이아몬드 갑옷";
Blockly.Msg.ITEMS_NAMES.diamondHelmet = "다이아몬드 헬멧";
Blockly.Msg.ITEMS_NAMES.diamondLeggings = "다이아몬드 바지";
Blockly.Msg.ITEMS_NAMES.tnt = "다이너마이트";



Blockly.Msg.OBJNAMES = []; // init blocks array
Blockly.Msg.OBJNAMES[0] = "공기";
Blockly.Msg.OBJNAMES[1] = "돌";
Blockly.Msg.OBJNAMES[2] = "잔디";
Blockly.Msg.OBJNAMES[3] = "흙";
Blockly.Msg.OBJNAMES[4] = "조약돌";
Blockly.Msg.OBJNAMES[5] = "참나무";
Blockly.Msg.OBJNAMES[6] = "어린참나무";
Blockly.Msg.OBJNAMES[7] = "기반암(베드록)";
Blockly.Msg.OBJNAMES[8] = "물";
Blockly.Msg.OBJNAMES[9] = "물 블록";
Blockly.Msg.OBJNAMES[10] = "용암";
Blockly.Msg.OBJNAMES[11] = "용암 블록";
Blockly.Msg.OBJNAMES[12] = "모래";
Blockly.Msg.OBJNAMES[13] = "자갈";
Blockly.Msg.OBJNAMES[14] = "금광석";
Blockly.Msg.OBJNAMES[15] = "철광석";
Blockly.Msg.OBJNAMES[16] = "석탄광석";
Blockly.Msg.OBJNAMES[17] = "나무";
Blockly.Msg.OBJNAMES[18] = "나뭇잎";
Blockly.Msg.OBJNAMES[19] = "스펀지";
Blockly.Msg.OBJNAMES[20] = "유리";
Blockly.Msg.OBJNAMES[21] = "lapis lazuli ore";
Blockly.Msg.OBJNAMES[22] = "lapis lazuli block";
Blockly.Msg.OBJNAMES[23] = "dispenser";
Blockly.Msg.OBJNAMES[24] = "모래돌";
Blockly.Msg.OBJNAMES[25] = "note";
Blockly.Msg.OBJNAMES[26] = "침대";
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
Blockly.Msg.OBJNAMES[37] = "노란꽃";
Blockly.Msg.OBJNAMES[38] = "장미";
Blockly.Msg.OBJNAMES[38] = "빨간꽃";
Blockly.Msg.OBJNAMES[39] = "갈색버섯";
Blockly.Msg.OBJNAMES[40] = "빨간버섯";
Blockly.Msg.OBJNAMES[41] = "금";
Blockly.Msg.OBJNAMES[42] = "철";
Blockly.Msg.OBJNAMES[43] = "double slab stone";
Blockly.Msg.OBJNAMES[44] = "판석";
Blockly.Msg.OBJNAMES[45] = "brick red";
Blockly.Msg.OBJNAMES[46] = "tnt";
Blockly.Msg.OBJNAMES[47] = "서재";
Blockly.Msg.OBJNAMES[48] = "이끼돌";
Blockly.Msg.OBJNAMES[49] = "흑요석";
Blockly.Msg.OBJNAMES[50] = "torch";
Blockly.Msg.OBJNAMES[51] = "불";
Blockly.Msg.OBJNAMES[52] = "monster spawner";
Blockly.Msg.OBJNAMES[53] = "stairs oak";
Blockly.Msg.OBJNAMES[67] = "stairs cobblestone";
Blockly.Msg.OBJNAMES[54] = "chest";
Blockly.Msg.OBJNAMES[55] = "redstone wire";
Blockly.Msg.OBJNAMES[56] = "다이아몬드 광석";
Blockly.Msg.OBJNAMES[57] = "다이아몬드";
Blockly.Msg.OBJNAMES[58] = "crafting table";
Blockly.Msg.OBJNAMES[59] = "wheat seeds";
Blockly.Msg.OBJNAMES[60] = "농지";
Blockly.Msg.OBJNAMES[61] = "furnance";
Blockly.Msg.OBJNAMES[62] = "furnace burning";
Blockly.Msg.OBJNAMES[63] = "sign post";
Blockly.Msg.OBJNAMES[64] = "door wood";
Blockly.Msg.OBJNAMES[65] = "ladder";
Blockly.Msg.OBJNAMES[66] = "레일";
Blockly.Msg.OBJNAMES[68] = "표지판";
Blockly.Msg.OBJNAMES[69] = "레버";
Blockly.Msg.OBJNAMES[70] = "pressure plate stone";
Blockly.Msg.OBJNAMES[71] = "door iron";
Blockly.Msg.OBJNAMES[72] = "pressure plate wood";
Blockly.Msg.OBJNAMES[73] = "redstone ore";
Blockly.Msg.OBJNAMES[74] = "redstone ore glowing";
Blockly.Msg.OBJNAMES[75] = "torch redstone";
Blockly.Msg.OBJNAMES[76] = "torch redstone active";
Blockly.Msg.OBJNAMES[77] = "stone button";
Blockly.Msg.OBJNAMES[78] = "slab snow";
Blockly.Msg.OBJNAMES[79] = "얼음";
Blockly.Msg.OBJNAMES[80] = "눈";
Blockly.Msg.OBJNAMES[81] = "선인장";
Blockly.Msg.OBJNAMES[82] = "점토";
Blockly.Msg.OBJNAMES[83] = "사탕수수";
Blockly.Msg.OBJNAMES[84] = "jukebox";
Blockly.Msg.OBJNAMES[85] = "울타리";
Blockly.Msg.OBJNAMES[86] = "호박";
Blockly.Msg.OBJNAMES[87] = "netherrack";
Blockly.Msg.OBJNAMES[88] = "soulsand";
Blockly.Msg.OBJNAMES[89] = "glowstone";
Blockly.Msg.OBJNAMES[90] = "netherportal";
Blockly.Msg.OBJNAMES[91] = "jackolantern";
Blockly.Msg.OBJNAMES[92] = "케이크";
Blockly.Msg.OBJNAMES[93] = "redstone repeater";
Blockly.Msg.OBJNAMES[94] = "redstone repeater active";
Blockly.Msg.OBJNAMES[95] = "stained glass white";
Blockly.Msg.OBJNAMES[96] = "trapdoor";
Blockly.Msg.OBJNAMES[97] = "monster egg";
Blockly.Msg.OBJNAMES[98] = "brick stone";
Blockly.Msg.OBJNAMES[99] = "mushroom brown huge";
Blockly.Msg.OBJNAMES[100] = "mushroom red huge";
Blockly.Msg.OBJNAMES[101] = "쇠막대기";
Blockly.Msg.OBJNAMES[102] = "glass pane";
Blockly.Msg.OBJNAMES[103] = "메론";
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
Blockly.Msg.OBJNAMES[122] = "드래곤 알";
Blockly.Msg.OBJNAMES[123] = "redstone lamp";
Blockly.Msg.OBJNAMES[124] = "redstone lamp active";
Blockly.Msg.OBJNAMES[126] = "slab oak";
Blockly.Msg.OBJNAMES[127] = "코코아";
Blockly.Msg.OBJNAMES[129] = "에메랄드 광석";
Blockly.Msg.OBJNAMES[130] = "enderchest";
Blockly.Msg.OBJNAMES[131] = "tripwire hook";
Blockly.Msg.OBJNAMES[132] = "tripwire";
Blockly.Msg.OBJNAMES[133] = "에메랄드";
Blockly.Msg.OBJNAMES[137] = "command";
Blockly.Msg.OBJNAMES[138] = "beacon";
Blockly.Msg.OBJNAMES[139] = "cobblestone wall";
Blockly.Msg.OBJNAMES[140] = "화분";
Blockly.Msg.OBJNAMES[141] = "당근";
Blockly.Msg.OBJNAMES[142] = "감자";
Blockly.Msg.OBJNAMES[143] = "button wood";
Blockly.Msg.OBJNAMES[144] = "mobhead";
Blockly.Msg.OBJNAMES[145] = "anvil";
Blockly.Msg.OBJNAMES[146] = "chest trapped";
Blockly.Msg.OBJNAMES[147] = "pressure plate weighted light";
Blockly.Msg.OBJNAMES[148] = "pressure plate weighted heavy";
Blockly.Msg.OBJNAMES[149] = "redstone comparator";
Blockly.Msg.OBJNAMES[150] = "redstone comparator active";
Blockly.Msg.OBJNAMES[151] = "daylight sensor";
Blockly.Msg.OBJNAMES[152] = "레드스톤";
Blockly.Msg.OBJNAMES[153] = "netherquartzore";
Blockly.Msg.OBJNAMES[154] = "hopper";
Blockly.Msg.OBJNAMES[155] = "quartz";
Blockly.Msg.OBJNAMES[157] = "rail activator";
Blockly.Msg.OBJNAMES[158] = "dropper";
Blockly.Msg.OBJNAMES[159] = "stained clay white";
Blockly.Msg.OBJNAMES[161] = "acacia leaves";
Blockly.Msg.OBJNAMES[162] = "acacia wood";
Blockly.Msg.OBJNAMES[170] = "건초";
Blockly.Msg.OBJNAMES[171] = "carpet white";
Blockly.Msg.OBJNAMES[172] = "hardened clay";
Blockly.Msg.OBJNAMES[173] = "coal block";
Blockly.Msg.OBJNAMES[174] = "packed ice";
Blockly.Msg.OBJNAMES[175] = "double plant";
