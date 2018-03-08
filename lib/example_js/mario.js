var Drone = require('../../drone').Drone
var blocks = require('blocks');

/************************************************************************
### Drone.mario() method
Creates an 8-bit mario, 12 blocks wide and 16 blocks high, made out of wool.
#### Parameters
 * none
#### Example
    
    /js mario()
  select a ground, it starts to construct mario right above it, facing you.
***/
Drone.extend('mario', function(){

  // need 4 colors brown (N), blue (B), red (R), and orange (O)

  var N = "35:12",
  B = "35:11",
  R = "35:14",
  O = "35:1";

// He looks like this
// [0,0,0,R,R,R,R,R,0,0,0,0]
// [0,0,R,R,R,R,R,R,R,R,R,0]
// [0,0,N,N,N,O,O,N,O,0,0,0]
// [0,N,O,N,O,O,O,N,O,O,O,0]
// [0,N,O,N,N,O,O,O,N,O,O,O]
// [0,0,N,O,O,O,O,N,N,N,N,0]
// [0,0,0,O,O,O,O,O,O,0,0,0]
// [0,0,R,R,B,R,R,B,R,R,0,0]
// [0,R,R,R,B,R,R,B,R,R,R,0]
// [R,R,R,R,B,B,B,B,R,R,R,R]
// [O,O,R,B,O,B,B,O,B,R,O,O]
// [O,O,O,B,B,B,B,B,B,O,O,O]
// [O,O,B,B,B,B,B,B,B,B,O,O]
// [0,0,B,B,B,0,0,B,B,B,0,0]
// [0,N,N,N,0,0,0,0,N,N,N,0]
// [N,N,N,N,0,0,0,0,N,N,N,N]

  this.chkpt('mario-start');
  this.up(17)
    .boxa([0,0,0,R,R,R,R,R,0,0,0,0], 12, 1, 1).down(1)
    .boxa([0,0,R,R,R,R,R,R,R,R,R,0], 12, 1, 1).down(1)
    .boxa([0,0,N,N,N,O,O,N,O,0,0,0], 12, 1, 1).down(1)
    .boxa([0,N,O,N,O,O,O,N,O,O,O,0], 12, 1, 1).down(1)
    .boxa([0,N,O,N,N,O,O,O,N,O,O,O], 12, 1, 1).down(1)
    .boxa([0,0,N,O,O,O,O,N,N,N,N,0], 12, 1, 1).down(1)
    .boxa([0,0,0,O,O,O,O,O,O,0,0,0], 12, 1, 1).down(1)
    .boxa([0,0,R,R,B,R,R,B,R,R,0,0], 12, 1, 1).down(1)
    .boxa([0,R,R,R,B,R,R,B,R,R,R,0], 12, 1, 1).down(1)
    .boxa([R,R,R,R,B,B,B,B,R,R,R,R], 12, 1, 1).down(1)
    .boxa([O,O,R,B,O,B,B,O,B,R,O,O], 12, 1, 1).down(1)
    .boxa([O,O,O,B,B,B,B,B,B,O,O,O], 12, 1, 1).down(1)
    .boxa([O,O,B,B,B,B,B,B,B,B,O,O], 12, 1, 1).down(1)
    .boxa([0,0,B,B,B,0,0,B,B,B,0,0], 12, 1, 1).down(1)
    .boxa([0,N,N,N,0,0,0,0,N,N,N,0], 12, 1, 1).down(1)
    .boxa([N,N,N,N,0,0,0,0,N,N,N,N], 12, 1, 1).down(1);

  return this.move('mario-start');
});
