export const t11 = {
  teams: [ 'spirit', 'tigers'],
  toss: {
    wonBy: 'spirit',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'spirit',
        players: ['Kartik Patel', 'Viresh Shah', 'Avesh Gaji', 'Bhavin Vachani', 'Pradhyumn'],
        score: {
          'Kartik Patel': { balls:[0,1,0], '4s': 0, '6s': 0, total: 1, balls: 3, out: 'runout'},
          'Viresh Shah': { balls:[0,0,1,4,1,0], '4s': 1, '6s': 0, total: 6, balls: 6, out: 'runout'},
          'Avesh Gaji': { balls:[0,1,4,0,0], '4s': 1, '6s': 0, total: 5, balls: 5, out: 'b Dhaval'},
          'Bhavin Vachani': { balls:[0,0,1,0,1,0,1,2,1,4,1,0,1,1,0,1,0,0,2], '4s': 1, '6s': 0, total: 16, balls: 19, out: ''},
          'Pradhyumn': { balls:[1,1,1,0], '4s': 0, '6s': 0, total: 3, balls: 4, out: '(upper cut) b Dhaval'}          
        },
        extra: 6, wickets: 4,
        totalScore: 35
      },
      bowling: {
        team: 'tigers',
        bowlers: ['Tushar Patel', 'Navin Prajapati', 'Saumil Mehta', 'Dhaval Atri 1','Dhaval Atri 2', 'Umang Bhavsar'],
        overs: {
          'Tushar Patel': {overs: 1, balls:[0,1,'WK',0,1,0], runs: 2, wickets:0}, 
          'Dhaval Atri 1': {overs: 1, balls:[4,0,'WK',0,0,1 ], runs: 5, wickets:1},
          'Umang Bhavsar': {overs: 1, balls:[0,1,0,1,0,1], runs: 3, wickets:0}, 
          'Navin Prajapati': {overs: 1, balls:[2,'WD',1,4,1,4,1], runs: 14, wickets:0}, 
          'Saumil Mehta': {overs: 1, balls:['WD','WD',0,1,'1NB',1,1,1,0], runs: 8, wickets:0}, 
          'Dhaval Atri 2': {overs: 1, balls:[1,1,'WK',0,0,2], runs: 4, wickets:1}
        },
        extra: 4,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'tigers',
        players: ['Tushar Patel', 'Navin Prajapati', 'Saumil Mehta', 'Dhaval Atri', 'Umang Bhavsar'],
        score: {
          'Tushar Patel': { balls:[0,0,1,0,1,0,1], '4s': 0, '6s': 0, total: 3, balls: 7, out: '(top) b Viresh'},
          'Navin Prajapati': { balls:[1,1,0,0,0,0,1,0,1,0,1,0], '4s': 0, '6s': 0, total: 5, balls: 12, out: 'runout'},
          'Saumil Mehta': { balls:[1,1,0,0], '4s': 0, '6s': 0, total: 2, balls: 4, out: '(top) b Avesh'},
          'Dhaval Atri': { balls:[0,4,0,3,1,0], '4s': 1, '6s': 0, total: 8, balls: 5, out: 'runout'},
          'Umang Bhavsar': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: 'runout'}
        },
        extra: 1, wickets: 6,
        totalScore: 17
      },
      bowling: {
        team: 'spirit',
        bowlers: ['Viresh Shah', 'Avesh Gaji', 'Kartik Patel', 'Bhavin Vachani'],
        overs: {
          'Viresh Shah': {overs: 1, balls:[1,1,'WK','WD',1,1,1], runs: 6, wickets:1}, 
          'Avesh Gaji': {overs: 1, balls:[0,'WK',0,4,0,3], runs: 7, wickets:1},
          'Kartik Patel': {overs: 1, balls:['1WK',1,'WK',0,0,0], runs: 2, wickets:0}, 
          'Bhavin Vachani': {overs: 1, balls:[1,0,1,0,1,'WK'], runs: 3, wickets:0}
        },
        extra: 1,
        oversBowled: 4
      }
    }
  }
};

export default t11;