const t11 = require( './t11a');
const t12 = require( './t12a');
const t13 = require( './t13a');
const t21 = require( './t21a');
const t22 = require( './t22a');
const t23 = require( './t23a');
const t31 = require( './t31a');
const t32 = require( './t32a');
const t33 = require( './t33a');
const t34 = require( './t34a');
const t35 = require( './t35a');

const playersBattingStat  = {};
const playersBowlingStat  = {};
const girlsPlayerPoints  = {};

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
batttingStat(t31);
batttingStat(t33);
batttingStat(t35);

//console.log(Object.keys(playersBattingStat).filter((name) => playersBattingStat[name]['6s']>0));

function bowlingStat (match) {
	match.innings['1'].bowling.bowlers.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].overs = stat[name].overs + match.innings[1].bowling.overs[name].overs;
			stat[name].runs = stat[name].runs + match.innings[1].bowling.overs[name].runs;
			stat[name].wickets = stat[name].wickets + match.innings[1].bowling.overs[name].wickets;
			//stat[name]['balls'] = [...stat[name]['balls'], ...match.innings[1].bowling.overs[name]['balls']];
		} else {
			stat[name] = match.innings[1].bowling.overs[name];
			delete stat[name]['balls'];
		}
		return stat;
	},playersBowlingStat);
	
	match.innings['2'].bowling.bowlers.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].overs = stat[name].overs + match.innings[2].bowling.overs[name].overs;
			stat[name].runs = stat[name].runs + match.innings[2].bowling.overs[name].runs;
			stat[name].wickets = stat[name].wickets + match.innings[2].bowling.overs[name].wickets;
			//stat[name]['balls'] = [...stat[name]['balls'], ...match.innings[2].bowling.overs[name]['balls']];
		} else {
			stat[name] = match.innings[2].bowling.overs[name];
			delete stat[name]['balls'];
		}
		return stat;
	},playersBowlingStat);

}

bowlingStat(t11);
bowlingStat(t12);
bowlingStat(t13);
bowlingStat(t21);
bowlingStat(t22);
bowlingStat(t23);
bowlingStat(t31);
bowlingStat(t33);
bowlingStat(t35);

//console.log(Object.keys(playersBowlingStat).filter((name) => playersBowlingStat[name].wickets>4));

function calcGirlsPoint (match) {
	match.innings['1'].batting.players.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].runs = stat[name].runs + match.innings[1].batting.score[name].total;
		} else {
			stat[name] = {runs: 0, wickets: 0};
			stat[name].runs = match.innings[1].batting.score[name].total;
		}
		return stat;
	},girlsPlayerPoints);
	
	match.innings['1'].bowling.bowlers.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].wickets = stat[name].wickets + match.innings[1].bowling.overs[name].wickets;
		} else {
			stat[name] = {runs: 0, wickets: 0};
			stat[name].wickets = match.innings[1].bowling.overs[name].wickets;
		}
		return stat;
	},girlsPlayerPoints);
	
	match.innings['2'].batting.players.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].runs = stat[name].runs + match.innings[2].batting.score[name].total;
		} else {
			stat[name] = {};
			stat[name].runs = match.innings[2].batting.score[name].total;
		}
		return stat;
	},girlsPlayerPoints);
	
	match.innings['2'].bowling.bowlers.reduce((stat, name, index, array) => {
		if(stat[name]) {
			stat[name].wickets = stat[name].wickets + match.innings[2].bowling.overs[name].wickets;
		} else {
			stat[name] = {runs: 0, wickets: 0};
			stat[name].wickets = match.innings[2].bowling.overs[name].wickets;
		}
		return stat;
	},girlsPlayerPoints);
}

calcGirlsPoint(t32);
calcGirlsPoint(t34);

console.log(girlsPlayerPoints);

