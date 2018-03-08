//Teture generation.

/* 
 *  usage: /js generate_texture(width, height)
 * 
 * notes: comment out one of the blocks in the generate_texture method to get started
 * or play with the make_discrete function to get different colors.
*/
load(__folder + "core/scriptcraft.js");

function make_discrete(noise){
   var val = parseInt(noise)+1;
	
  // uncomment below for grayscale
  /*if(val <= 4){
    return "35";
  }
  else if(val > 4 && val <= 8){
    return "35:7"
  }
  else if(val > 8 && val <= 12){
    return "35:8"
  }
  else{
    return "35:15"
  }*/
  // colored wool-scale
  return "35:" +  Math.abs( parseInt(noise) + 1);
}

function turbulence(x, z, size){
  var value = 0.0;
  var initialSize = size;
    
  while(size >= 1){
    value += org.bukkit.util.noise.SimplexNoiseGenerator.getInstance().getNoise(x/size,z/size)*size;
    size /= 2.0;
  }
    
  return(8.0 * value / initialSize);
}

function generate_texture(w,h){
  var d  = new Drone();
  var x0,z0;
	
  x0 = d.x;
  z0 = d.z;
  // adjust the params below to create different textures
  var xPeriod = 5.0;
  var yPeriod = 10.0;
  
  // increases the turbulence's effect
  var turbPower = 5.0;
  // smaller turbSizes zooms the texture in and larger turbSizes zooms out
  var turbSize = 256.0;
	
  var xyPeriod = 5.0;
  
  for(var x = x0; x < x0+w; x++){
    d.chkpt("l0");
    for(var z = z0; z < z0+h; z++){
      /* uncomment one of the blocks below to start creating textures */
      /* below examples are largely based off examples from http://lodev.org/cgtutor/randomnoise.html */
      
      /* straight simplex noise */
      /* var value = org.bukkit.util.noise.SimplexNoiseGenerator.getInstance().getNoise(d.x,d.z)*15; */
		
      /* marbled texture */
      /* var xyValue = x * xPeriod / h + z * yPeriod / w + turbPower * turbulence(x, z, turbSize) / 15.0;
      var value = 15 * Math.abs(Math.sin(xyValue * 3.14159)); */
			
      /* wooden texture (doesn't generate rings though) */
      /* var xValue = (x - h / 2) / h*1.0;
      var zValue = (z - w / 2) / w*1.0;
      var distValue = Math.sqrt(xValue * xValue + zValue * zValue) + turbPower * turbulence(x, z, turbSize) / 15.0;
      var value = 7.0 * Math.abs(Math.sin(2 * xyPeriod * distValue * 3.14159)); */
      
      d.box(make_discrete(value)).right();
    }
    d.move("l0").fwd();
  }
}
