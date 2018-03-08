//수영장과 나무가있는 작은 집을 만들 수있는 Scriptcraft 플러그인.

function codedHouse() {
	var myDrone = this;

	// bookmark the drone's position so it can return there later
	myDrone.chkpt('myhome'); 

	// yard
	myDrone
		.down()
		.left(17)
		.back(7)
		.box(blocks.grass, 30,1,20);

	myDrone.move('myhome');

	//floor
	myDrone.down()
		.box(blocks.stone, 10,1,10)
		.up(5)
		.box('126:1',10,1,10);

	myDrone.move('myhome');

	// wallls
	myDrone.box0('17:3', 10, 5, 10)

	// return the drone to where it started
	myDrone.move('myhome'); 

	// roof
	myDrone.up(5).left(1).back()
		.box('18:3',12,1,12)
		.up().fwd().right()
		.box('18:1',10,1,10);
    myDrone.move('myhome');

    // windows
    myDrone.up().box0(blocks.glass,10,2,10);

    myDrone.move('myhome');

    // doors
    myDrone.fwd(4)
    	.turn(3)
    	.door2();

    myDrone.move('myhome');

    // pool
    myDrone.down(4)
    	.left(12)
    	.cylinder(blocks.stone, 4, 1)
    	.up()
    	.cylinder0(blocks.stone, 4, 3)
    	.right()
    	.fwd()
    	.cylinder(blocks.water, 3, 3);
    myDrone.move('myhome');

    // bed
    myDrone
    	.right(5)
    	.fwd()
    	.bed();

    myDrone.move('myhome');

    // torches
    myDrone.up(4)
    	.fwd()
    	
    for(var i=0; i<4; i++) {
    	myDrone
    		.left()
    		.hangtorch()
    		.fwd(10)
    		.hangtorch()
    		.turn();
    }

    myDrone.move('myhome');
    
    // rainbow
   /* myDrone
    	.right(12)
    	.back(3)
    	.turn(3)
    	.rainbow(12);*/

    myDrone.move('myhome');

    // trees
    myDrone
    	.back(5)
    	.oak()
    	.left(10)
    	.oak()
    	.right(20)
    	.oak();

    myDrone.move('myhome');
}

var drone = require('drone');
drone.extend(codedHouse);
