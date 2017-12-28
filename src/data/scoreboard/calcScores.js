const t11 = require( './t11a');
const t12 = require( './t12a');
const t13 = require( './t13a');
const t21 = require( './t21a');
const t22 = require( './t22a');
const t23 = require( './t23a');

const playersBattingStat  = {};
const playersBowlingStat  = {};

function batttingStat (match) {
	match.innings['1'].batting.players.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].total = stat[name].total + match.innings[1].batting.score[name].total;
			stat[name]['4s'] = stat[name]['4s'] + match.innings[1].batting.score[name]['4s'];
			stat[name]['6s'] = stat[name]['6s']+ match.innings[1].batting.score[name]['6s'];
			stat[name]['balls'] = stat[name]['balls']+ match.innings[1].batting.score[name]['balls'];
		} else {
			stat[name] = match.innings[1].batting.score[name];
			delete stat[name].out;
		}
		return stat;
	},playersBattingStat);
	
	match.innings['2'].batting.players.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].total = stat[name].total + match.innings[2].batting.score[name].total;
			stat[name]['4s'] = stat[name]['4s'] + match.innings[2].batting.score[name]['4s'];
			stat[name]['6s'] = stat[name]['6s']+ match.innings[2].batting.score[name]['6s'];
			stat[name]['balls'] = stat[name]['balls']+ match.innings[2].batting.score[name]['balls'];
		} else {
			stat[name] = match.innings[2].batting.score[name];
			delete stat[name].out;
		}
		return stat;
	},playersBattingStat);
}

batttingStat(t11);
batttingStat(t12);
batttingStat(t13);
batttingStat(t21);
batttingStat(t22);
batttingStat(t23);

console.log(playersBattingStat)

