export const t34 = {
  teams: [ 'hit', 'guts'],
  toss: {
    wonBy: 'hit',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'guts',
        players: ['Anjali Patel', 'Neha Dhadhukiya', 'Jasmina Kamani','Hetal Shah'],
        score: {
          'Jasmina Kamani': { balls:[0,1,0,1], '4s': 0, '6s': 0, total: 2, balls: 4, out: ''},
          'Aditi Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Neha Dhadhukiya': { balls:[0,0,1,1,0,0,1,0,0], '4s': 0, '6s': 0, total: 3, balls: 10, out: '(uppernet) b Ekta Kabra'},
          'Anjali Patel': { balls:[4,0,1,1,0,0,0], '4s': 1, '6s': 0, total: 6, balls: 8, out: 'runout'},
          'Hetal Shah': { balls:[0,0,1,2], '4s': 0, '6s': 0, total: 3, balls: 4, out: ''}
        },
        extra: 3, wickets: 2,
        totalScore: 17
      },
      bowling: {
        team: 'hit',
        bowlers: ['Bhumita Vidja','Khushali Patel','Ekta Patel','Ekta Kabra','Shefali Shah'],
        overs: {
          'Ekta Patel': {overs: 1, balls:[1,1,0,0,1,0], runs: 3, wickets:0}, 
          'Bhumita Vidja': {overs: 1, balls:[4,0,0,1,0,0], runs: 5, wickets:0}, 
          'Khushali Patel': {overs: 1, balls:[0,'WD',0,0,'WK',1,0], runs: 2, wickets:0}, 
          'Shefali Shah': {overs: 1, balls:[1,1,1,'WD',0,'WD',1,1], runs: 7, wickets:0}, 
          'Ekta Kabra': {overs: 1, balls:[0,0,'WK',0,0,0], runs: 0, wickets:1}
        },
        extra: 3,
        oversBowled: 5
      }
    },
    2: {
      batting: {
        teamName: 'hit',
        players: ['Bhumita Vidja', 'Khushali Patel', 'Ekta Kabra','Ekta Patel','Shefali Shah'],
        score: {
          'Ekta Patel': { balls:[0,0,0,0,0,0,0,0,0,0,1], '4s': 0, '6s': 0, total: 1, balls: 11, out: ''},
          'Ekta Kabra': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 2, out: 'runout'},
          'Bhumita Vidja': { balls:[1,1,0,0], '4s': 0, '6s': 0, total: 2, balls: 5, out: 'runout'},
          'Khushali Patel': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'b Jasmina Kamani'},
          'Shefali Shah': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 3, out: 'b Aditi Patel'}
        },
        extra: 13, wickets: 4,
        totalScore: 18
      },
      bowling: {
        team: 'guts',
        bowlers: ['Hetal Shah','Jasmina Kamani','Aditi Patel','Neha Dhandhukiya','Anjali Patel'],
        overs: {
          'Jasmina Kamani': {overs: 1, balls:['WD','WK','WD','WK','NB','WD','WK',0,0,0], runs: 4, wickets:1}, 
          'Neha Dhandhukiya': {overs: 1, balls:[0,'WD',0,0,0,'WD','WD',0], runs: 3, wickets:0}, 
          'Anjali Patel': {overs: 0.2, balls:['WD','WD',1,'WD',1], runs: 5, wickets:0}, 
          'Hetal Shah': {overs: 1, balls:[1,1,1,1,0,0], runs: 4, wickets:0}, 
          'Aditi Patel': {overs: 1, balls:['WD',0,'WD',0,'WD',0,0,'WK',0], runs: 0, wickets:0}
        },
        extra: 13,
        oversBowled: 4.2
      }
    }
  }
};

export default t34;