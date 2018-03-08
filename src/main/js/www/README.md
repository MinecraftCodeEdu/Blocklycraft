
# BlocklyCraft key files

- `docs`
Pictures for the readme files. Excluded from the Plugin.

- `google-blockly`
Blockly code, kept in sync through the `build.xml` file in this directory, and is thus on `.gitignore`.

- `msg`
All the language files used by the Blockly editor and the Minecraft blocks.

- `build.xml`
Sync Blockly from its [Git repository][github] with ant.

- `code.js`
Javascript used the Blockly editor: Initialize the page language, Local Storage and XMLHttpRequest POST code to the ScriptCraft Plugin. Started out as a copy/paste from the `google-blockly/demos/code`.

- `customblocks.js`
Contains the description of the Minecraft blocks for the Blockly editor.

- `customblocks-javascript-generator.js`.
Contains the generator for the javascript used in scriptcraft.

- `../plugins/blocklycraft/watcher.js`
Contains the automatic reloading when a new command is deployed.

- `index.html`
The Blockly editor. Started out as a copy/paste from the `google-blockly/demos/code`.

# Useful information
- build the plugin by running the build.xml ant script.
- copy the scriptcraft.jar into the plugin folder of CanaryMod or Bukkit-compatible Minecraft Servers (tested on SpigotMC).
- open blockly at: [http://localhost:7070][localhost].
- run minecraft server with: java -Xmx1024M -Xms1024M

[localhost]:http://localhost:7070
[github]:https://github.com/google/blockly
