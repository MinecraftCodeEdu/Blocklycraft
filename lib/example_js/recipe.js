
var items=require('items');
var fac=server.getItemFactory();

//package
var bukkit=org.bukkit;
var Inv=bukkit.inventory;
var E=bukkit.enchantments;

addRecipe({
	item: items.book(),
	name: '\u00A7bSword Art Online',
	shape: [' B ','BBB',' B '],
	ingredient: [
		{ch: 'B', item: items.book()}
	],
	enchant: [
		{
			type: E.Enchantment.KNOCKBACK,
			level: 48763,
			over: true
		}
	],
	unbreakable: true,
	lore: ['C','8','7','6','3']
});
addRecipe({
	item: items.diamondSword(),
	name: '\u00A70Obsidian Sword',
	shape: [' O ',' O ',' S '],
	ingredient: [
		{ch: 'O', item: items.obsidian()},
		{ch: 'S', item: items.stick()}
	],
	enchant: [
		{
			type: E.Enchantment.KNOCKBACK,
			level: 3,
			over: true
		},
		{
			type: E.Enchantment.DURABILITY,
			level: 3,
			over: true
		},
		{
			type: E.Enchantment.DAMAGE_ALL,
			level: 3,
			over: true
		}
	],
	unbreakable: true,
	lore: ['very very very hard sword']
});


function addRecipe(r){
	r.item=r.item||items.air();
	r.name=r.name||'null';
	r.lore=r.lore||[];
	r.unbreakable=r.unbreakable||false;
	r.enchant=r.enchant||[];
	r.ingredient=r.ingredient||[];
	r.shape=r.shape||[];
	r.shape[0]=r.shape[0]||'   ';
	r.shape[1]=r.shape[1]||'   ';
	r.shape[2]=r.shape[2]||'   ';
	(function(){
		var stack=new Inv.ItemStack(r.item,1);
		var meta=fac.getItemMeta(r.item);
		meta.setDisplayName(r.name);
		for(var i in r.enchant){
			meta.addEnchant(r.enchant[i].type,r.enchant[i].level,r.enchant[i].over||false);
		}
		meta.setLore(new java.util.ArrayList(r.lore));
		stack.setItemMeta(meta);
		var recipe=new Inv.ShapedRecipe(stack);
		recipe.shape(r.shape[0],r.shape[1],r.shape[2]);
		for(var i in r.ingredient){
			recipe.setIngredient(r.ingredient[i].ch,r.ingredient[i].item);
		}
		if(server.addRecipe(recipe)){
			console.log('[Recipe]'+meta.getDisplayName()+' added');
		}
	})();
}

exports.addRecipe=addRecipe;

/*
https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ShapedRecipe.html
https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemStack.html
https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/meta/ItemMeta.html
https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html
*/

