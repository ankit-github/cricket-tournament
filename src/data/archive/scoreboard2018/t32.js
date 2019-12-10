export const t32 = {
  teams: ['smashers', 'birds'],
  toss: {
    wonBy: 'smashers',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'birds',
        players: ['Bhumita Vidja','Ekta Patel','Mansi Vyas','Amee Badiyani','Sweta Patel'],
        score: {
          'Sweta Patel': { balls:[0,1,0], '4s': 0, '6s': 0, total: 7, balls: 10, out: '(runout)'},
          'Mansi Vyas': { balls:[0,0,1,4,1,0], '4s': 0, '6s': 0, total: 1, balls: 9, out: '(uppernet) b Hetal'},          
          'Bhumita Vidja': { balls:[0,0,1,0,1,0,1,2,1,4,1,0,1,1,0,1,0,0,2], '4s': 0, '6s': 0, total: 1, balls: 5, out: '(bowled) b Prajeesha'},
          'Ekta Patel': { balls:[1,1,1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: 'runout'},
		  'Amee Badiyani': { balls:[1,1,1,0], '4s': 0, '6s': 0, total: 4, balls: 5, out: 'runout'}          
        },
        extra: 5, wickets: 3,
        totalScore: 21
      },
      bowling: {
        team: 'smashers',
        bowlers: [ 'Divya Borad','Niyati Shah','Hetal Shah','Neha Dhandhukiya','Prajeesha Pillai'],
        overs: {
          'Niyati Shah': {overs: 1, balls:[0,0,4,1,1,0], runs: 6, wickets:0}, 
          'Hetal Shah': {overs: 1, balls:[0,1,0,0,'WK',0], runs: 2, wickets:0}, 
          'Neha Dhandhukiya': {overs: 1, balls:['WD',1,1,0,'WK',0,'WD',0], runs: 7, wickets:0}, 
          'Prajeesha Pillai': {overs: 1, balls:[0,1,'WK',1,'WK',0], runs: 0, wickets:1}, 
          'Divya Borad': {overs: 1, balls:['WD','WD','WD',1,0,0,1,0,1], runs: 5, wickets:0}          
        },
        extra: 5,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'smashers',
        players: [ 'Divya Borad','Niyati Shah','Hetal Shah','Neha Dhandhukiya','Prajeesha Pillai'],
        score: {
          'Prajeesha Pillai': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 3, balls: 4, out: '(bowled) b Mansi'},
          'Divya Borad': { balls:[1,0], '4s': 0, '6s': 0, total: 3, balls: 16, out: ''},
          'Niyati Shah': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 7, out: '(runout)'},
          'Neha Dhandhukiya': { balls:[0,1,1,1,1,0,1,0,0], '4s': 1, '6s': 0, total: 4, balls: 1, out: ''},
          'Hetal Shah': { balls:[1,0,0,1,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 1, wickets: 3,
        totalScore: 23
      },
      bowling: {
        teamName: 'birds',
        bowlers: ['Bhumita Vidja','Ekta Patel','Mansi Vyas','Amee Badiyani','Sweta Patel'],
		overs: {
          'Mansi Vyas': {overs: 1, balls:[1,1,'WK','WD',1,1,1], runs: 5, wickets:0}, 
          'Bhumita Vidja': {overs: 1, balls:[0,'WK',0,4,0,3], runs: 5, wickets:0},
          'Ekta Patel': {overs: 1, balls:['1WK',1,'WK',0,0,0], runs: 2, wickets:1}, 
          'Sweta Patel': {overs: 1, balls:[1,0,1,0,1,'WK'], runs: 4, wickets:0},
		  'Amee Badiyani': {overs: 0.4, balls:[1,0,1,0,1,'WK'], runs: 7, wickets:1}		  
        },
        extra: 1,
        oversBowled: 4.4
      }
    }
  }
};

export default t32;