//ScriptCraft에서 NPC를 만드는 간단한 예

'use strict';
/* globals require, command, echo, console  */

/**
 * testnpc - a simple npc creation test.  Will be used as a template for a simple library
 *      to easily create npcs in a similar fashion to how Scriptcraft generates other objects.
 *
 * AUTHOR:
 *      Growlf 2016-02-12 - created initial command structure
 *      Carisus - tweaks and tests
 *
 * RESOURCES:
 *      - https://dullahansoftware.wordpress.com/2013/02/11/scriptcrafting-a-quest-in-minecraft/
 *      - http://dev.bukkit.org/bukkit-plugins/citizens/
 *
 * NEEDS(TBD):
 *      - use player objects instead of villagers so that we can skin them and more , like Citizens does?
 *
 */


var testnpc = function (parameters, player) {
    var _usage = "Try using: /testnpc";

    // Make sure the user is logged in so that we can add the book to their inventory
    if (!player.location) {
        echo(player, "This command only works when you are in-game, not from the system console.");
        echo(player, _usage);
        return;
    }

    //var NPCTYPE = org.bukkit.entity.Player;  //?? this does not work though
    var NPCTYPE = org.bukkit.entity.EntityType.VILLAGER;
    var NPCPROFESSION = org.bukkit.entity.Villager.Profession.PRIEST;

    // Get a world and location to create the NPC within
    var world = player.getWorld();
    var loc = player.getLocation().add(1, 0, 0);

    // create a villager
    var npc = world.spawnCreature(loc, NPCTYPE);
    npc.setProfession(NPCPROFESSION);

    //quest.store.npcs[quest_npc.getUniqueId()] = quest_npc;
    //events.on("player.PlayerInteractEntityEvent",this.proc_quest);

};

// Export as command types
// First, create a standard command as '/testnpc'
var commando = require('../commando/commando').commando;
commando('testnpc', testnpc);

// Also expose this function as '/jsp testnpc' for easier debugging
command('testnpc', testnpc);
