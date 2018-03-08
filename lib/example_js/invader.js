
//var Drone = require('../../drone').Drone;

var Drone = require('drone');
var blocks = require('blocks');

/************************************************************************
### Drone.invader() method
Creates an 8-bit space invader, 11 blocks wide and 8 blocks high, 
made out of black wool, unless otherwise specified.
#### Parameters
 * none
#### Example
    
    /js invader()
  select a ground, it starts to construct invader right above it, facing you.
***/
Drone.extend('invader', function(theblock){

  // need 4 colors brown (N), blue (B), red (R), and orange (O)

  var B = "35:11";
  if ( typeof theblock !== 'undefined' ) {
        B = theblock;
    }

// He looks like this
// [0,0,B,0,0,0,0,0,B,0,0]
// [0,0,0,B,0,0,0,B,0,0,0]
// [0,0,B,B,B,B,B,B,B,0,0]
// [0,B,B,0,B,B,B,0,B,B,0]
// [B,B,B,B,B,B,B,B,B,B,B]
// [B,0,B,B,B,B,B,B,B,0,B]
// [B,0,B,0,0,0,0,0,B,0,B]
// [0,0,0,B,B,0,B,B,0,0,0]

  this.chkpt('invader-start');
  this.up(9)
    .boxa([0,0,B,0,0,0,0,0,B,0,0], 11, 1, 1).down(1)
    .boxa([0,0,0,B,0,0,0,B,0,0,0], 11, 1, 1).down(1)
    .boxa([0,0,B,B,B,B,B,B,B,0,0], 11, 1, 1).down(1)
    .boxa([0,B,B,0,B,B,B,0,B,B,0], 11, 1, 1).down(1)
    .boxa([B,B,B,B,B,B,B,B,B,B,B], 11, 1, 1).down(1)
    .boxa([B,0,B,B,B,B,B,B,B,0,B], 11, 1, 1).down(1)
    .boxa([B,0,B,0,0,0,0,0,B,0,B], 11, 1, 1).down(1)
    .boxa([0,0,0,B,B,0,B,B,0,0,0], 11, 1, 1).down(1);

  return this.move('invader-start');
});
