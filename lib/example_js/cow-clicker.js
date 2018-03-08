// cow-clicker is a minecraft mini-game written in javascript.
// depends on the ScriptCraft Bukkit plugin http://github.com/walterhiggins/ScriptCraft
// see http://www.bogost.com/games/cow_clicker.shtml
var Bukkit = org.bukkit.Bukkit;

var players = {};
var playerCount = 0;

var sb = function(cmd){
    Bukkit.dispatchCommand(server.consoleSender, 'scoreboard ' + cmd) 
};
var startGame = function(){
    sb('objectives add CowClicker dummy Cows Clicked');
};
exports.cowclicker = {
    add: function(player){
        if (playerCount == 0)
            startGame();
        players[player.name] = {clicked: 0};
        player.sendMessage('Go forth and click some cows!');
        playerCount++;
        sb('players set ' + player.name + ' CowClicker 0');
        sb('objectives setdisplay sidebar CowClicker');
    },
    remove: function(player){
        if (!players[player.name])
            return;
        player.sendMessage('You clicked ' + players[player.name].clicked + ' cows! ' + 
                           'You must be tired after all that clicking.');
        delete players[player.name];
        playerCount--;
        if (!playerCount)
            sb('objectives remove CowClicker');
    },
};

events.on('player.PlayerInteractEntityEvent', function(listener, event){
    var player = event.player;
    if (!players[player.name])
        return;

    var clickedEntity = event.rightClicked;
    var loc = clickedEntity.location;
    var sound = function(snd,vol,pitch){
        loc.world.playSound(loc,snd,vol,pitch);
    };
    if (clickedEntity instanceof org.bukkit.entity.Cow)
    {
        players[player.name].clicked++;
        sb('players set ' + player.name + ' CowClicker ' + players[player.name].clicked);
        Bukkit.dispatchCommand(player, 'me clicked a cow!');
        sound(org.bukkit.Sound.CLICK,1,1);
        setTimeout(function(){
            sound(org.bukkit.Sound.COW_HURT,10,0.85) 
        },200);
    }
});
