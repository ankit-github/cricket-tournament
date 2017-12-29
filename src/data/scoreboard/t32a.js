const t32 = {
  teams: ['hit', 'guts'],
  toss: {
    wonBy: 'guts',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'hit',
        players: ['Bhumita Vidja', 'Ekta Patel', 'Ekta Kabra','Khushali Patel','Shefali Shah'],
        score: {
          'Ekta Patel': { balls:[1,0,1,0,0,0,2], '4s': 0, '6s': 0, total: 4, balls: 8, out: 'c & b Aditi Patel'},
          'Ekta Kabra': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: ''},
          'Bhumita Vidja': { balls:[0,0,0,0,0,0,1,0,0,1,0,0,0], '4s': 0, '6s': 0, total: 2, balls: 14, out: 'c & b Anjali Patel'},
          'Khushali Patel': { balls:[0,0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Shefali Shah': { balls:[0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 10, wickets: 3,
        totalScore: 16
      },
      bowling: {
        team: 'guts',
        bowlers: ['Hetal Shah','Neha Dhandhukiya','Aditi Patel','Jasmina Kamani','Anjali Patel'],
        overs: {
          'Jasmina Kamani': {overs: 1, balls:[1,0,0,0,0,0], runs: 1, wickets:0}, 
          'Neha Dhandhukiya': {overs: 1, balls:['WD','WD',1,1,'WD',0,1,0,0], runs: 6, wickets:0}, 
          'Anjali Patel': {overs: 1, balls:[0,0,0,'WK','WD',0,'WD','WD',0], runs: 3, wickets:1}, 
          'Hetal Shah': {overs: 1, balls:[0,0,0,0,0,0], runs: 0, wickets:0}, 
          'Aditi Patel': {overs: 1, balls:[0,'WD','WD',0,0,'WD',2,'WD','WK','WK'], runs: 6, wickets:0}
        },
        extra: 10,
        oversBowled: 5
      }
    },
    2: {
      batting: {
        teamName: 'guts',
        players: ['Anjali Patel', 'Neha Dhadhukiya', 'Jasmina Kamani','Aditi Patel'],
        score: {
          'Jasmina Kamani': { balls:[0,0,1,0,0], '4s': 0, '6s': 0, total: 1, balls: 6, out: 'runout'},
          'Aditi Patel': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 1, out: ''},
          'Neha Dhadhukiya': { balls:[0,1,0], '4s': 0, '6s': 0, total: 1, balls: 4, out: 'b Bhumita Vidja'},
          'Anjali Patel': { balls:[0,4,0,2,0,0,0,0,0,0,1,0,1], '4s': 1, '6s': 0, total: 8, balls: 14, out: 'b Khushali Patel'},
          'Hetal Shah': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: ''}
        },
        extra: 6, wickets: 3,
        totalScore: 17
      },
      bowling: {
        team: 'hit',
        bowlers: ['Ekta Patel','Ekta Kabra','Bhumita Vidja','Khushali Patel','Shefali Shah'],
        overs: {
          'Ekta Patel': {overs: 1, balls:['NB',0,'WD',4,0,2,0,0], runs: 8, wickets:0}, 
          'Bhumita Vidja': {overs: 1, balls:[0,1,0,'WK','WD',0,1], runs: 3, wickets:1}, 
          'Khushali Patel': {overs: 1, balls:[0,0,'WK','WK','NB',0,0], runs: 1, wickets:1}, 
          'Shefali Shah': {overs: 0.1, balls:[1], runs: 1, wickets:0}, 
          'Ekta Kabra': {overs: 1, balls:['WD','WD',1,0,0,0,0,1], runs: 4, wickets:0}
        },
        extra: 6,
        oversBowled: 4.1
      }
    }
  }
};

module.exports = t32;