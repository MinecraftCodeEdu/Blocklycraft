//ScriptCraft deathstar plugin

var utils = require('utils');
var last_deathstar_tnt_location;
exports.deathstar = function deathstar(){
  var pointer = new Drone();
  pointer.fwd(10).left(3).sphere0(blocks.stone,4).fwd(2).right(2).up(3);

  var tnt_location_json = { world: pointer.world,
    x: pointer.x,
    y: pointer.y,
    z: pointer.z,
    yaw: 0.0,
    pitch: 0.0
  };
  last_deathstar_tnt_location = utils.locationFromJSON(tnt_location_json);

  echo("When deathstar is complete, run blow_deathstar();");
};
exports.blow_deathstar = function blow_deathstar(amount){
  amount = amount || 3;
  for (var i = amount - 1; i >= 0; i--) {
    self.location.world.spawnEntity(last_deathstar_tnt_location, org.bukkit.entity.EntityType.PRIMED_TNT);
  }
  echo("You can also pass in the amount of TNT to use blow_deathstar(amount);");
};
