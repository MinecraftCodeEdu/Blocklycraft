
// scriptcraft/plugins/tutorial-world.js
/*global echo, require, isOp,setTimeout, persist */
var Drone = require('drone'),
    utils = require('utils'),
    _ = require('underscore'),
    firework = require('fireworks').firework,
    blocks = require('blocks');
/*
 construct an array of colored blocks to make a
 mario-cart-like rainbow road
*/
var r2 = blocks.rainbow.concat();
r2 = r2.concat(blocks.rainbow.reverse());
/*
 store launch coordinates for firework show
*/
var fwLaunch = persist('tutorial-launch-coords', {coords: [] });
/*
 firework show begins each evening at 19:30
*/
function fworkShow(){
  var count = 30;
  function launch(){
    _.each(fwLaunch.coords, function( c ){
      if (!c.x)
	return;
      var coords = _.extend({},c);
      coords.x += Math.round(Math.random() * 20);
      coords.z += Math.round(Math.random() * 20);
      coords.y += Math.round(Math.random() * 10);
      firework(utils.locationFromJSON(coords));
      if (count-- > 0){
	setTimeout(launch,1500);
      }
    });
  }
  launch();
}
/*
 this is the drone extension to build a sufficiently interesting
 world for kids to learn javascript (it's a work in progress)
*/
function tutorialworld(){
  if (!isOp(self)){
    echo(self, 'Only ops can do this');
    return;
  }
  this
    .chkpt('twstart')
    // rainbow road; let's a go!
    .boxa(r2,14,1,105)
    .fwd(100)
    .left(10)
    .up()
    // castle at end of road
    .castle()
    .chkpt('twcastle')
    .move('twstart')
    .left(3);
  // now plant some trees along each side of the road
  for (var i = 0;i < 10; i++){
    this
      .oak()
      .right(20)
      .oak()
      .left(20)
      .fwd(10);
  }
  // a big rainbow over the castle
  this
    .move('twcastle')
    .left(33)
    .fwd(23)
    .rainbow(50)
    .move('twstart');
  // move to launch coordinates
  this
    .move('twcastle')
    .up()
    .right(17);
  // set launch coordinates
  fwLaunch.coords.push(utils.locationToJSON(this.getLocation()));

  this.move('twstart');
}
utils.at('19:30',fworkShow);
Drone.extend(tutorialworld);
