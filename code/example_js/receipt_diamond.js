var recipes = require('recipes');
var items = require('items'); 

// diamond block made with a diagonal line of 2 dirt , 1 cobblestone, and 2 dirt

var dirt2diamond = {result: items.diamondBlock(10),
	                    ingredients: {D: items.dirt(1)},
	                    shape: [ ' D ',
	                             'D D',
	                             ' D ' ]};

// add the recipe to  the server
recipes.add(recipe2);
