export const t12 = {
  teams: ['spirit', 'stars'],
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
          'Kartik Patel': { balls:[0,0,1,0,1,1,0,8,1,1,0,1,1,0], '4s': 1, '6s': 0, total: 15, balls: 14, out: 'b Jignesh'},
          'Viresh Shah': { balls:[0,0,1,0], '4s': 0, '6s': 0, total: 1, balls: 4, out: '(top) b Pravin'},
          'Avesh Gaji': { balls:[0,0,1,1,0,1,1,0], '4s': 0, '6s': 0, total: 4, balls: 8, out: 'b Jignesh'},
          'Bhavin Vachani': { balls:[1,6,6,0], '4s': 0, '6s': 2, total: 13, balls: 4},
          'Pradhyumn': { balls:[6,1,0,0,1,0], '4s': 0, '6s': 1, total: 8, balls: 6, out: 'runout (Rajesh)'}    
        },
        extra: 2, wickets: 4,
        totalScore: 43
      },
      bowling: {
        team: 'stars',
        bowlers: ['Rajesh Jethva','Rushikesh Patel','Jignesh Patel','Shreyans Halani', 'Jatin Patel', 'Pravin Prajapati'],
        overs: {
          'Shreyans Halani': {overs: 1, balls:[0,0,1,0,0,1], runs: 1, wickets:0}, 
          'Pravin Prajapati': {overs: 1, balls:['WK',0,0,1,'NB',0,1], runs: 3, wickets:1},
          'Rushikesh Patel': {overs: 1, balls:[1,1,0,8,1,0], runs: 11, wickets:0},
          'Rajesh Jethva': {overs: 1, balls:[1,1,0,1,1,1], runs: 5, wickets:0},
          'Jignesh Patel': {overs: 1, balls:['WK','WD',1,'WK',6,1,6], runs: 15, wickets:2},
          'Jatin Patel': {overs: 1, balls:[0,0,1,6,0,'WK'], runs: 7, wickets:0}          
        },
        extra: 2,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'stars',
        players: ['Rajesh Jethva','Rushikesh Patel','Jignesh Patel','Shreyans Halani', 'Jatin Patel', 'Pravin Prajapati'],
        score: {
          'Pravin Prajapati': { balls:[0,'WK'], '4s': 0, '6s': 0, total: 0, balls: 2, out : 'runout (Kartik Patel)'},
          'Shreyans Halani': { balls:[0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1], '4s': 0, '6s': 0, total: 7, balls: 16},    
          'Rajesh Jethva': { balls:[1,1,1,1,1,0,0,0], '4s': 0, '6s': 0, total: 5, balls: 8, out : '(upper) b Bhavin'},          
          'Rushikesh Patel': { balls:[6,0,0,0,0,1,1,0,1,1], '4s': 0, '6s': 1, total: 10, balls: 10},
          'Jatin Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0},
          'Jignesh Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0}
        },
        extra: 3, wickets: 2,
        totalScore: 26
      },
      bowling: {
        team: 'spirit',
        bowlers: ['Viresh Shah', 'Avesh Gaji', 'Kartik Patel 1','Kartik Patel 2', 'Bhavin Vachani','Pradhyumn'],
        overs: {
          'Kartik Patel 1': {overs: 1, balls:[0,'WK',1,1,0,0], runs: 2, wickets:0},
          'Viresh Shah': {overs: 1, balls:[1,1,0,0,0,0], runs: 2, wickets:0}, 
          'Avesh Gaji': {overs: 1, balls:[1,1,1,1,1,0], runs: 5, wickets:0},
          'Bhavin Vachani': {overs: 1, balls:[0,0,'WK','WD',6,0,0], runs: 7, wickets:1},
          'Pradhyumn': {overs: 1, balls:[0,1,'NB',0,'WD',0,0,1], runs: 5, wickets:0},           
          'Kartik Patel 2': {overs: 1, balls:[1,1,0,1,1,1], runs: 5, wickets:0},
        },
        extra: 3,
        oversBowled: 6
      }
    }
  }
};

export default t12;