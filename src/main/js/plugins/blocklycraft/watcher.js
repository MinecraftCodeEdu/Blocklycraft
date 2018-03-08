/*******************************************************************************
## Watcher module
monitor the Blocklycraft scriptfolder. Automatic reload for any changes

***/

var watcher = require('watcher');

watcher.watchDir('scriptcraft/plugins/blocklycraft', function(dir) {
    // refresh after any file modification
    refresh();
});