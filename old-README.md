# Introduction
I created BlocklyCraft to play with my kids and try to get them into more creative gameplay. I'm a huge fan of visual programming since the early days of [Pure Data][pd]: live coding is fun and live coding with Minecraft and with kids is even better!

BlocklyCraft started out as a copy/paste of the [work][pr] of Michael Vorburger & Lauro Canonica for the [Devoxx4Kids Lugano][Devoxx] event.

BlocklyCraft is based on [ScriptCraft][sc], a Minecraft Mod that lets you extend Minecraft using the Javascript Programming Language. ScriptCraft makes modding Minecraft easier. It includes a logo-like "Drone" object that can be used to build complex buildings, roads, villages, even entire cities. It also includes many other features that make modding Minecraft easier.

If you're new to visual programming, I highly recommend to start with
 * [Scratch][scratched]
 * [Blockly "Generating JavaScript" demo][bldem]

# Example
Let's make a 2 floor house in Blockly editor:

![House Blockly Command](src/main/js/www/docs/house_command.jpg?raw=true "")

At the in-game prompt, type:

```javascript
/jsp house
```
![House](src/main/js/www/docs/house_run.jpg?raw=true "")

Somehow a sheep and a chicken got interested, they are NOT part of the code.

[pd]: https://puredata.info/
[sc]: https://github.com/walterhiggins/ScriptCraft
[scratched]: https://scratch.mit.edu/
[bldem]: https://blockly-demo.appspot.com/static/demos/generator/index.html
[pr]: https://github.com/walterhiggins/ScriptCraft/pull/257
[Devoxx]: https://twitter.com/vorburger/status/597075410040553472

# Description
BlocklyCraft is a plugin for Minecraft Servers which lets younger programmers to create their own Minecraft Mods. Mods are written with [Blockly][blockly], a visual programming editor. It runs in a web browser, and resembles [Scratch][scratch].

BlocklyCraft works with all of the following Minecraft Server software:
* [SpigotMC][sg] (Bukkit-compatible)(Recommended)
* [CanaryMod][cm] 
* [GlowStone][gs] (Bukkit-compatible)

Because BlocklyCraft is based on ScriptCraft, the mod also lets you enter javascript commands at the in-game prompt. To bring up the in-game prompt press the `/` key then type `js ` followed by any javascript statement.  For example: `/js 1 + 1` will print 2.

[blockly]: https://github.com/google/blockly
[scratch]: https://en.wikipedia.org/wiki/Scratch_%28programming_language%29

# Prerequisites

* You will need to have Java version 6 or later installed on your
  machine. Check the version by typing `java -version` at a command
  prompt.

* You will need to [install SpigotMC][is] on your
  machine. SpigotMC is a customized version of Minecraft Server that
  makes it easy to install plugins and customize Minecraft.

* If you don't want to compile from source SpigotMC, you can use 
CanaryMod and [download the CanaryMod server here][ic]

[sg]: http://www.spigotmc.org/
[cm]: http://canarymod.net/
[gs]: http://www.glowstone.net/
[is]: https://www.spigotmc.org/wiki/spigot-installation/
[ic]: http://canarymod.net/releases

# BlocklyCraft Plugin Installation

If you don't want to compile the plugin from source, you can [download the
compiled plugin here][dl] and copy it to the Minecraft server plugins directory.

[dl]:https://github.com/bgon/BlocklyCraft/releases/
# Post Install

Once installed, a new scriptcraft/plugins directory is automatically
created.  All files in the scriptcraft/plugins directory will be
automatically loaded when the server starts.  *Only players who are
ops can use this plugin.* You can grant a player `op` privileges by
typing 'op <username>' (replacing <username> with your own Minecraft
user name) at the server console prompt or by adding the player's
username to the ops.txt file in your server directory.

Launch the server, then open [http://localhost:7070][local] in a web browser. Create your first command by following the example below, don't forget to give a name to your command (`house` in the example) and then click the deploy red button on the top right, this will compile the javascript and install it on the Minecraft server.

![Hello Blockly](src/main/js/www/docs/hello_world_command.png?raw=true "")

then launch the Minecraft client and create a new server connection. The IP address will be `localhost` . Once you've connected to your server and have entered the game, look at a ground-level block and type the name of the newly created command:

```javascript
/jsp hello
```

This will create a stone structure 2 blocks wide by 1
blocks high by 4 block long.

![Hello Minecraft](src/main/js/www/docs/hello_world_run.jpg?raw=true "")

A BlockyCraft mod for Minecraft is just a JavaScript source file (.js)
located in the scriptcraft/plugins/blocklycraft/ directory.
```javascript
command( 'hello', function ( parameters, player ) {
    var theDrone = new Drone(player);
    theDrone.up();
    theDrone.chkpt('start');
    var timeoutStop = new Date().getTime()+500;
    theDrone.box ('1',4,1,2);
});
```
All .js files in this directory will be automatically loaded when the server starts and reloaded each time you deploy from the Blockly visual programming editor


[local]: http://localhost:7070

# Create a Paddock

![Paddock Command](src/main/js/www/docs/paddock_command.jpg?raw=true "")
![Paddock run](src/main/js/www/docs/paddock_run.jpg?raw=true "")
