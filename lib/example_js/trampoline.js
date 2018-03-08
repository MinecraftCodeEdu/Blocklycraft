//우리가 시도 할 마지막 것은 점액의 트램폴린을 만드는 것입니다. 코드 클럽에서이 과정을 거치지 만 최종 결과는 다음과 같습니다.

var blocks = require('blocks'),
    sounds = require('sounds');

function bounceOnSlime(event) {
    var player = event.player;
    var location = player.location;
    var x = location.x
        y = location.y - 1 // -1 what's underneath the player 
        z = location.z; 

    var block = location.world.getBlockAt(x, y, z);

    if(block.typeId === blocks.slime){
        sounds.slimeAttack(player);  // play sound
        player.motionY = 3;          // set motion of player upwards 
    }
    
}

events.playerMove(bounceOnSlime); 

// making a slime trampoline
exports.trampoline = function()  { 
    d = new Drone(self); 
    d.box(blocks.slime, 3, 1 ,3); 
}

//js trampoline()
