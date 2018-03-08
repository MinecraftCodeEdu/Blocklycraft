/*
/jsp addRecipe <recipe name>
/jsp removeRecipe <recipe name>
Minecraft Gson Library *Required
https://www.spigotmc.org/resources/gson-for-1-8-3-or-older.30852/
Installation: put it into "plugins" directory
*/
var ItemStack=org.bukkit.inventory.ItemStack;
var ShapedRecipe=org.bukkit.inventory.ShapedRecipe;
var Material=org.bukkit.Material;

var store=persist('recipes',[]);
function update(){
	if(com.google.gson.Gson){
		var gson=new com.google.gson.Gson();
		for(var i in store){
			var res=ItemStack.deserialize(gson.fromJson(store[i].result,java.util.Map.class));
			var recipe=new ShapedRecipe(res);
			recipe.shape(store[i].shape);
			for(var j in store[i].ingredient){
				var ig=store[i].ingredient[j];
				recipe.setIngredient(ig.ch,Material.getMaterial(ig.material));
			}
			server.addRecipe(recipe);
		}
	}
}
update();
var sess={};

function showUI(player,name){
	var inv=server.createInventory(null,27,'Recipe');
	var ok=createItem(Material.WOOL,'\u00A7aOK','',5);
	var none=createItem(Material.STAINED_GLASS_PANE,'\u00A78NONE','',7);
	for(var i=0;i<27;i++){
		var im3=parseInt(i/3);
		if(!(im3==1||im3==4||im3==7)){
			inv.setItem(i,none);
		}
	}
	inv.setItem(16,ok);
	player.openInventory(inv);
	sess[player.getName()]=name;
}

command('addRecipe',function(params,sender){
	if(!isOp(sender))echo(sender,'\u00A74only op can use this command!');
	else{
		if(sender.getInventory().getItemInMainHand().getType()==Material.AIR)echo(sender,'need a item in hand to create recipe');
		else if(params.length<1)echo(sender,'\u00A74need recipe name to create');
		else{
			for(var i in store){
				if(store[i].name==params[0]){
					echo(sender,'\u00A74recipe name already exists.');
					break;
				}
			}
			showUI(sender,params[0]);
		}
	}
});
command('removeRecipe',function(params,sender){
	if(!isOp(sender))echo(sender,'\u00A74only op can use this command!');
	else{
		if(params.length<1)echo(sender,'\u00A74need recipe name to remove');
		else{
			for(var i in store){
				if(store[i].name==params[0]){
					store.splice(i,1);
					echo(sender,'\u00A76Recipe Removed!');
					server.clearRecipes();
					update();
					return;
				}
			}
			echo(sender,'\u00A74Recipe Not Found!');
		}
	}
});

events.inventoryClick(function(e){
	try{
		var player=e.getWhoClicked();
		var clicked=e.getCurrentItem();
		var inv=e.getInventory();
		if(inv.getName()=='Recipe'){
			var type=clicked.getType();
			if(type==Material.STAINED_GLASS_PANE){
				e.setCancelled(true);
			}
			if(type==Material.WOOL){
				e.setCancelled(true);
				var chars=['A','B','C','D','E','F','G','H','I'];
				var cc=0;
				var map={};//Material -> char
				var umap={};
				var shape=['','',''];
				var s=3;
				for(var l=0;l<=20;l+=10){
					for(var i=s;i<=s+2;i++){
						var idx=l+i;
						var item=inv.getItem(idx);
						if(item==null){
							shape[l/10]+=' ';
						}
						else if(!map[item.getType()]){
							umap[chars[cc]]=item.getType();
							map[item.getType()]=chars[cc++];
							shape[l/10]+=map[item.getType()];
						}
						else{
							shape[l/10]+=map[item.getType()];
						}
					}
					s--;
				}
				var res=player.getInventory().getItemInMainHand();
				console.log(res);
				var recipe=new ShapedRecipe(res);
				recipe.shape(shape[0],shape[1],shape[2]);
				for(var i in umap){
					recipe.setIngredient(i,umap[i]);
				}
				if(server.addRecipe(recipe)){
					echo(player,'\u00A76Recipe Added!');
					if(com.google.gson.Gson){
						var gson=new com.google.gson.Gson();
						var o={};
						o.name=sess[player.getName()];
						o.result=gson.toJson(res.serialize());
						o.shape=shape;
						o.ingredient=[];
						for(var i in umap){
							o.ingredient.push({ch: i,material: umap[i].toString()});
						}
						store.push(o);
					}
					
					
				}
				player.closeInventory();
			}
		}
	}catch(e){
		
	}
});

function createItem(material,name,lore,m) {
	var item;
	if(!m){
		item=new ItemStack(material,1);
	}
	else{
		item=new ItemStack(material,1,new java.lang.Byte(m));
	}
	var meta=item.getItemMeta();
	meta.setDisplayName(name);
	var Lore = new java.util.ArrayList();
	Lore.add(lore);
	if(!lore)meta.setLore(Lore);
	item.setItemMeta(meta);
	return item;
}
