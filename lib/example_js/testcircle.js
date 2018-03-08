// Circle
function rasterCircle(radius, height, material) {
	var f = 1 - radius;
 	var ddF_x = 1;
  	var ddF_y = -2 * radius;
  	var x = 0;
  	var y = radius;
 
	fwd(radius).box(material,1,height,1);
	fwd(0-radius).box(material,1,height,1);
	right(radius).box(material,1,height,1);
	right(0-radius).box(material,1,height,1);
 
	while(x < y)
	{
		// ddF_x == 2 * x + 1;
		// ddF_y == -2 * y;
		// f == x*x + y*y - radius*radius + 2*x - y + 1;
		if(f >= 0) {
			y--;
			ddF_y += 2;
			f += ddF_y;
		}
		x++;
		ddF_x += 2;
		f += ddF_x;
		right(x).fwd(y).box(material,1,height,1);
		right(0-x).fwd(y).box(material,1,height,1);
		right(x).fwd(0-y).box(material,1,height,1);
		right(0-x).fwd(0-y).box(material,1,height,1);
		right(y).fwd(x).box(material,1,height,1);
		right(0-y).fwd(x).box(material,1,height,1);
		right(y).fwd(0-x).box(material,1,height,1);
		right(0-y).fwd(0-x).box(material,1,height,1);
	}
}

function thick_circle(radius, height, material, thickness) {
	for (var i = 0; i <= thickness; i++) {
		rasterCircle(radius+i, height, material);
	}
}

//rasterCircle(50, 10);
