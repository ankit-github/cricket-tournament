export const t33 = {
  teams: ['eagles', 'stars'],
  toss: {
    wonBy: 'eagles',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'stars',
        players: ['Rajesh Jethva','Rushikesh Patel','Jignesh Patel','Shreyans Halani', 'Pravin Prajapati'],
        score: {
          'Rajesh Jethva': { balls:[1,1,1,1,1,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 3, out : '(upper) b Divyang'},          
          'Pravin Prajapati': { balls:[0,'WK'], '4s': 0, '6s': 0, total: 0, balls: 0, out : '(runout)'},
          'Rushikesh Patel': { balls:[6,0,0,0,0,1,1,0,1,1], '4s': 0, '6s': 0, total: 1, balls: 5, out : '(uppernet) b Chirag'},
          'Shreyans Halani': { balls:[0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1], '4s': 0, '6s': 1, total: 11, balls: 10},            
          'Jignesh Patel': { balls:[], '4s': 0, '6s': 0, total: 4, balls: 12,out : '(caught) b Ashish'}
        },
        extra: 5, wickets: 5,
        totalScore: 19
      },
      bowling: {
        team: 'eagles',
        bowlers: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        overs: {
          'Divyang Golaviya': {overs: 1, balls:['WD',1,0,0,'WK',0,0], runs: 1, wickets:1}, 
          'Chirag Nathwani': {overs: 1, balls:[], runs: 2, wickets:1}, 
          'Chintan Patel': {overs: 1, balls:[0,1,0,1,1,0], runs: 7, wickets:0}, 
          'Rahul Joshi': {overs: 0, balls:[6,1,1,'WD',1], runs: 0, wickets:0}, 
          'Bhavesh Lakhani': {overs: 1, balls:[4,1,'WD',0,0,1,1], runs: 1, wickets:0}, 
          'Ashish Sangani': {overs: 1, balls:[1,1,1,'WD',1,1,1], runs: 8, wickets:1}
        },
        extra: 5,
        oversBowled: 5
      }
    },
    2: {
      batting: {
        teamName: 'eagles',
       players: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        score: {
          'Bhavesh Lakhani': { balls:[1,0,1,1,0], '4s': 0, '6s': 0, total: 9, balls: 11, out: ''},
          'Divyang Golaviya': { balls:[0,0,0], '4s': 0, '6s': 0, total: 7, balls: 12, out: ''},
          'Rahul Joshi': { balls:[0,1,0,1,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Chirag Nathwani': { balls:[0,0,0,0,1,1], '4s': 0, '6s': 0, total: 0, balls: 0,out : ''},
          'Chintan Patel': { balls:[1,1,1,0,1,1,1], '4s': 0, '6s': 0, total: 0, balls: 0},
          'Ashish Sangani': { balls:[0,0,4,1,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 1, wickets: 0,
        totalScore: 20
      },
      bowling: {
        team: 'stars',
        bowlers: ['Rajesh Jethva','Rushikesh Patel','Jignesh Patel','Shreyans Halani', 'Pravin Prajapati'],
        overs: {
          'Shreyans Halani': {overs: 1, balls:[0,0,1,0,0,1], runs: 5, wickets:0}, 
          'Pravin Prajapati': {overs: 1, balls:['WK',0,0,1,'NB',0,1], runs: 5, wickets:0},
          'Rajesh Jethva': {overs: 1, balls:[1,1,0,1,1,1], runs: 5, wickets:0},
          'Rushikesh Patel': {overs: 0.4, balls:[1,1,0,8,1,0], runs: 5, wickets:0},
          'Jignesh Patel': {overs: 0, balls:['WK','WD',1,'WK',6,1,6], runs: 0, wickets:0}          
        },
        extra: 1,
        oversBowled: 3.4
      }
    }
  }
};

export default t33;