var recipes = require('recipes');
var items = require('items'); 

// diamond block made with a diagonal line of 2 dirt , 1 cobblestone, and 2 dirt

var recipe2 = {result: items.diamondBlock(1),
	               ingredients: {D: items.dirt(2), C: items.cobblestone(1)},
	               shape: [ 'D  ', ' C ', '  D' ]};

// add the recipe to  the server
recipes.add(recipe2);
