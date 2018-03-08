//Sometimes when your server is lonely it helps to know that others were there recently

'use strict';

console.log('Initializing mmLast scriptcraft plugin');
var mmLast = (function(visits, utils) { return {
	logUser: function(name) {
		var time = Date.now();
		visits[name] = time;
	},
	listOnline: function(player, prevlength) {
		var online = utils.playerNames().map(function(a){return '' + a;});
		if (online.length > 1 || online.length > 0 && online.indexOf('' + player.name) < 0) {
			echo(player,'Online Players (' + online.length + '/' + server.maxPlayers + '): ' + online.join(', '));
		}
		var plist = [];
		for (var vp in visits)
		{
			if (vp != player.name && online.indexOf(vp) < 0)
			{
				plist.push({ 'name': vp, 'time': visits[vp]});
			}
		}
		// sort by time (desc)
		plist.sort(function(a,b){return b.time - a.time;});
		// send results to player
		echo(player,'Recently Seen Players: ' + plist.slice(0,prevlength).map(function(a){return a.name + ' (' + mmLast.formatTime(a.time) + ')';}).join(', '));
	},
	formatTime: function(time) {
		var diff = mmLast.timeDiff(Date.now() - time);
		return '' + diff.value + diff.unit;
	},
	timeDiff: function(diff)
	{
		if (diff <= 1000 * 60) return { unit: "sec", value: Math.ceil(diff / 1000) };
		if (diff <= 1000 * 60 * 120) return { unit: "min", value: Math.ceil(diff / (1000 * 60)) };
		if (diff <= 1000 * 60 * 60 * 25) return { unit: "hr", value: Math.ceil(diff * 10 / (1000 * 60 * 60)) / 10.0 };
		return { unit: "d", value: Math.ceil(diff * 10 / (1000 * 60 * 60 * 24)) / 10.0 };
	}
}})(
  persist('mmLast', {}),
  require('utils')
);

console.log('Registering mmLast events');
events.playerQuit(function(evnt,cncl){
  mmLast.logUser(evnt.player.name);
});

events.playerJoin(function(evnt,cncl){
	mmLast.listOnline(evnt.player, 3);
	mmLast.logUser(evnt.player.name);
});

console.log('Registering mmLast commands');
var commando = require('./commando').commando;
commando('list', function(args,player){
	mmLast.listOnline(player, args.length > 0 ? args[0] : 3);
});
