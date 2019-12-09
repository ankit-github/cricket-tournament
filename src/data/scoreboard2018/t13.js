export const t13 = {
  teams: [ 'tigers', 'stars'],
  toss: {
    wonBy: 'tigers',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'tigers',
        players: ['Tushar Patel', 'Navin Prajapati', 'Saumil Mehta', 'Dhaval Atri', 'Umang Bhavsar'],
        score: {
          'Dhaval Atri': { balls:[0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 4, out: 'b Shreyans'},
          'Tushar Patel': { balls:[0,1,0,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 1, balls: 9, out: 'b Pravin'},
          'Saumil Mehta': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 1, out: '(caught) b Shreyans'},
          'Umang Bhavsar': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 1, out: '(caught) b Shreyans'},
          'Navin Prajapati': { balls:[0,0], '4s': 0, '6s': 0, total: 0, balls: 2, out: '(top) b Jatin'}
          },
        extra: 0, wickets: 5,
        totalScore: 3
      },
      bowling: {
        team: 'stars',
        bowlers: ['Rajesh Jethva','Rushikesh Patel','Jignesh Patel','Shreyans Halani', 'Jatin Patel', 'Pravin Prajapati'],
        overs: {
          'Shreyans Halani': {overs: 1, balls:[0,0,0,'WK','WK','WK'], runs: 0, wickets:3}, 
          'Jatin Patel': {overs: 1, balls:['WD',0,1,'WD',0,'WK',0,0], runs: 3, wickets:1},
          'Pravin Prajapati': {overs: 0.5, balls:[0,0,0,0,'WK'], runs: 0, wickets:1},
          'Jignesh Patel': {overs: 0, balls:[], runs: 0, wickets:0},
          'Rajesh Jethva': {overs: 0, balls:[], runs: 0, wickets:0},
          'Rushikesh Patel': {overs: 0, balls:[], runs: 0, wickets:0}
        },
        extra: 2,
        oversBowled: 2.5
      }
    },
    2: {
      batting: {
        teamName: 'stars',
        players: ['Rajesh Jethva','Pravin Prajapati'],
        score: {
          'Rajesh Jethva': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 2},          
          'Pravin Prajapati': { balls:[1,0,4], '4s': 1, '6s': 0, total: 5, balls: 2}
        },
        extra: 0, wickets: 0,
        totalScore: 7
      },
      bowling: {
        team: 'royal',
        bowlers: [ 'Tushar Patel', 'Navin Prajapati', 'Saumil Mehta', 'Dhaval Atri', 'Umang Bhavsar'],
        overs: {
          'Dhaval Atri': {overs: '0.5', balls:[1,1,1,0,4], runs: 7, wickets:0},
          'Navin Prajapati': {overs: 0, balls:[], runs: 0, wickets:0},
          'Saumil Mehta': {overs: 0, balls:[], runs: 0, wickets:0},
          'Tushar Patel': {overs: 0, balls:[], runs: 0, wickets:0},
          'Umang Bhavsar': {overs: 0, balls:[], runs: 0, wickets:0}
        },
        extra: 0,
        oversBowled: 0.5
      }
    }
  }
};

export default t13;