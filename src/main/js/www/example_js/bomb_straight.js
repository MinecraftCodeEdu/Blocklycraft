command( 'test199', function ( parameters, player ) {
	  var theDrone = new Drone(player);
	  theDrone.chkpt('start');
	  var timeoutStop = new Data().getTime()+500;

	  for (var l=0; l<=15; l++){
		      theDrone.box('46');
		      theDrone.fwd();
		      theDrone.box('0');
		      theDrone.fwd();
		      theDrone.box('0');
		      theDrone.fwd();
		      theDrone.box('0');
		      theDrone.fwd();

		    }

});

