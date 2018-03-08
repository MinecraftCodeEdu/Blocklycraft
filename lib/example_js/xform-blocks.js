// 오래된블록을 새로운 블록으로 바꾸기
// scriptcraft/plugins/xform-blocks.js

//usage : /js xformBlocks( self.location, 5, blocks.grass, blocks.gold )

function xformBlocks( location, extent, oldBlockType, newBlockType){
  var startX = location.x - extent;
  var endX = location.x + extent;
  var startY = location.y - extent;
  var endY = location.y + extent;
  var startZ = location.z - extent;
  var endZ = location.z + extent;
  var x, y, z, block, world;
  world = location.world;
  for (x = startX; x < endX; x++){
    for (y = startY; y < endY; y++){
      for (z = startZ; z < endZ; z++){
        block = world.getBlockAt(x, y, z);
        if (block.typeId == oldBlockType){
          block.typeId = newBlockType;
          block.update();
        }
      }
    }
  }
}
exports.xformBlocks = xformBlocks;
