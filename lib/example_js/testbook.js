//A simple example of creating a book with ScriptCraft

'use strict';
/* globals require, command, echo, console  */

/**
 * testbook - a simple book creation test.  Will be used as a template for a simple library
 *      to easily create books in a similar fashion to how Scriptcraft generates other items.
 *
 * AUTHOR:
 *      Growlf 2016-01-11 - created initial command structure
 *      Carisus - tweaks and tests
 *
 * RESOURCES:
 *      - https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/BookMeta.html
 *      - https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/ItemMeta.html
 *
 * NEEDS(TBD):
 *      - more info on the book class itself.
 *      - how to use the JSON style of metadata so that we can add events and more.
 *
 */


var testbook = function (parameters, player) {
    var _usage = "Try using: /testbook";

    // Make sure the user is logged in so that we can add the book to their inventory
    if(!player.location){
        echo(player, "This command only works when you are in-game, not from the system console.");
        echo(player, _usage);
        return;
    }

    var inventory = require('inventory');
    var items = require('items');
    var book = items.writtenBook(1);
    var contents = book.getItemMeta();

    contents.setAuthor('The NetYeti');
    contents.setLore(['Test Book']);
    contents.setDisplayName('A test Book');
    contents.setTitle('Book of Testing');

    // Create a page for the book
    //var page1 = {
    //        text: "Book of Testing\n",
    //        color: "gold",
    //        bold: true,
    //        italic: false,
    //        hoverEvent: {action: "show_text", value: "click to get updates and happenings"},
    //        clickEvent: {action: "open_url", value: "http://yeticraft.net"},
    //        extra: [
    //            {
    //                text: " v1.0  By The NetYeti\n",
    //                color: "gray",
    //                bold: false,
    //                italic: true,
    //                hoverEvent: {action: 'show_text', value: "yeticraft.net"},
    //                clickEvent: {action: 'open_url', value: "http://yeticraft.net"}
    //            }
    //        ]
    //    };
    // --OR
    var page1 = "Content goes here\n§2And More...";

    // Add the page to the BookMeta
    //contents.pages = [page1]
    // --OR
    contents.addPage(page1);

    // DEBUG: lets see the pages, raw
    //console.info(contents.pages);

    // Set the book's BookMeta to our completed content
    book.setItemMeta(contents);

    // Add the book into the players inventory
    inventory(player).add(book);
};

// Export as command types
// First, create a standard command as '/testbook'
var commando = require('../commando/commando').commando;
commando('testbook', testbook);

// Also expose this function as '/jsp testbook' for easier debugging
command('testbook', testbook);

