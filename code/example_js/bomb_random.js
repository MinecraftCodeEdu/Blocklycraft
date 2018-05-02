var i, room;

function mathRandomInt(a, b) {
	  if (a > b) {
		      var c = a;
		      a = b;
		      b = c;
		    }
	  return Math.floor(Math.random() * (b - a + 1) + a);
}

function listsRepeat(value, n) {
	  var array = [];
	  for (var k = 0; k < n; k++) {
		      array[k] = value;
		    }
	  return array;
}

i = listsRepeat(0, 10);
room = listsRepeat(i, 10);

command( 'test12', function ( parameters, player ) {
  var theDrone = new Drone(player);
  theDrone.up();
  theDrone.chkpt('start');
  //var timeoutStop = new Data().getTime()+500;
  for (var l=0; l<=9; l++){
    for (var j=0; j<=9; j++){
      if (mathRandomInt(1,10) <= 3)
        {room[l][j] = '46'}
      else { room[l][j] = '0' }
    theDrone.box(room[l][j]);
    theDrone.fwd();
    }
    theDrone.move('start');
    theDrone.right();
    theDrone.chkpt('start');
  }
);
