export const t23 = {
  teams: ['knights', 'eagles'],
  toss: {
    wonBy: 'knights',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'eagles',
        players: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        score: {
          'Ashish Sangani': { balls:[0,0,4,1,0,0,0], '4s': 1, '6s': 0, total: 5, balls: 8, out: '(caught) Ketul b Parth'},
          'Bhavesh Lakhani': { balls:[1,0,1,1,0], '4s': 0, '6s': 0, total: 3, balls: 6, out: '(caught) Ketul b Chirag'},
          'Rahul Joshi': { balls:[0,1,0,1,0], '4s': 0, '6s': 0, total: 2, balls: 5, out: '(uppernet) b Maulik'},
          'Divyang Golaviya': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 3, out: '(uppernet) b Maulik'},
          'Chintan Patel': { balls:[1,1,1,0,1,1,1], '4s': 0, '6s': 0, total: 6, balls: 7},
          'Chirag Nathwani': { balls:[0,0,0,0,1,1], '4s': 0, '6s': 0, total: 2, balls: 6}
        },
        extra: 5, wickets: 4,
        totalScore: 23
      },
      bowling: {
        team: 'knights',
        bowlers: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        overs: {
          'Abhishek Varma': {overs: 1, balls:[0,0,4,1,1,0], runs: 6, wickets:0}, 
          'Parth Patel': {overs: 1, balls:[0,1,0,0,'WK',0], runs: 1, wickets:1}, 
          'Chirag Prajapati': {overs: 1, balls:['WD',1,1,0,'WK',0,'WD',0], runs: 4, wickets:1}, 
          'Maulik M Patel': {overs: 1, balls:[0,1,'WK',1,'WK',0], runs: 2, wickets:2}, 
          'Ketul M Patel': {overs: 1, balls:['WD','WD','WD',1,0,0,1,0,1], runs: 6, wickets:0}, 
          'Aleef Gandluru': {overs: 1, balls:[1,0,1,1,1,0], runs: 4, wickets:0}
        },
        extra: 5,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'knights',
        players: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        score: {
          'Parth Patel': { balls:[0,1,1,1,1,0,1,0,0], '4s': 0, '6s': 0, total: 5, balls: 9, out: '(uppernet)'},
          'Aleef Gandluru': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 1, balls: 5, out: '(uppernet)'},
          'Abhishek Varma': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(runout)'},
          'Ketul M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(runout)'},
          'Maulik M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(uppernet) b Chirag'},
          'Chirag Prajapati': { balls:[1,0,0,1,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 2, balls: 10, out: 'b Ashish Sangani'}
        },
        extra: 1, wickets: 6,
        totalScore: 12
      },
      bowling: {
        team: 'eagles',
        bowlers: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        overs: {
          'Chintan Patel': {overs: 1, balls:[0,1,0,1,1,0], runs: 3, wickets:0}, 
          'Divyang Golaviya': {overs: 1, balls:['WD',1,0,0,'WK',0,0], runs: 4, wickets:1}, 
          'Rahul Joshi': {overs: 1, balls:[6,1,1,'WD',1], runs: 2, wickets:1}, 
          'Chirag Nathwani': {overs: 1, balls:[], runs: 3, wickets:1}, 
          'Bhavesh Lakhani': {overs: 1, balls:[4,1,'WD',0,0,1,1], runs: 0, wickets:0}, 
          'Ashish Sangani': {overs: 0.1, balls:[1,1,1,'WD',1,1,1], runs: 0, wickets:1}
        },
        extra: 1,
        oversBowled: 5.1
      }
    }
  }
};

export default t23;