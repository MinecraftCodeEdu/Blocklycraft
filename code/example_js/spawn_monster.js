
command( 're119', function ( parameters, player ) {
var theDrone = new Drone(player);

for (var count = 0; count < 20; count++) {
  theDrone.chkpt('start');
  var timeoutStop = new Date().getTime()+500;

  theDrone.box('42').up().box('42').right().box('42').left().left().box('42').up().right().box('86').move('start');

  }

});


command( 'tt119', function ( parameters, player ) {
	var theDrone = new Drone(player);

	for (var count = 0; count < 100; count++) {
		  theDrone.chkpt('start');
		  var timeoutStop = new Date().getTime()+500;

		  theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType.ZOMBIE);

//		  theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType.FIREBALL);

	}
theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType.ENDER_DRAGON);
theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType.IRON_GOLEM);
theDrone.getLocation().world.spawnEntity(theDrone.getLocation(), org.bukkit.entity.EntityType.IRON_GOLEM);

}); 
