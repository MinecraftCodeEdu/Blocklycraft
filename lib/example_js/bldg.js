var bldg = function(floors) {
  var i,
      eyeball1,
      eyeball2;
  if ( typeof(floors) == 'undefined' ) {
    floors = 10;
  }
  
  this.down(1).fwd(15)
  .chkpt('testskyscraper');

  for ( i = 0; i < floors; i++ ) {
    this.box(blocks.iron,22,1,20)
      .up()
      .box0(blocks.iron,22,3,20)
      .right(2)
      .box(blocks.glass_pane,2,2,1)
      .right(4)
      .box(blocks.glass_pane,2,2,1)
      .right(4)
      .box(blocks.glass_pane,2,2,1)
      .right(4)
      .box(blocks.glass_pane,2,2,1)
      .right(4)
      .box(blocks.glass_pane,2,2,1)
      .left(18)
      .up(3);

    // second to last
    if(i == floors - 3){
      
      // get eye locations
      this.up()
      .right(6)
      .chkpt('eyeball1');

      this.fwd(4).up();
      eyeball1 = this.getLocation();
      this.back(4).down();
      
      this.right(8)
      .chkpt('eyeball2');

      this.fwd(4).up();
      eyeball2 = this.getLocation();
      this.back(4).down();
      
      this.left(14)
      .down();
      
    }
  }

  // roof
  this.box(blocks.iron,22,1,20);

  var d = this;
  // spawn the eyes
  setTimeout( function() {
    eyeball1.world.spawnEntity(eyeball1, org.bukkit.entity.EntityType.PRIMED_TNT);
    eyeball2.world.spawnEntity(eyeball2, org.bukkit.entity.EntityType.PRIMED_TNT);
  }, 1000*floors);

  setTimeout( function () {
    d.move('eyeball1')
    .left(1).back()
    .box(51,3,3,2);

    d.move('eyeball2')
    .left(1).back()
    .box(51,3,3,2);
  }, 1000*(floors+4));
  

  return this.move('testskyscraper'); // return to where we started
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('bldg',bldg);
