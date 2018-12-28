export const t35 = {
  teams: ['eagles', 'knights'],
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
          'Rahul Joshi': { balls:[0,1,0,1,0], '4s': 0, '6s': 0, total: 3, balls: 5, out: '(caught) b Maulik'},
          'Chirag Nathwani': { balls:[0,0,0,0,1,1], '4s': 0, '6s': 0, total: 1, balls: 3,out : '(caught) b Chirag'},
          'Chintan Patel': { balls:[1,1,1,0,1,1,1], '4s': 0, '6s': 0, total: 0, balls: 2, out: '(bowled) b Maulik'},
          'Ashish Sangani': { balls:[0,0,4,1,0,0,0], '4s': 0, '6s': 0, total: 10, balls: 8, out: '(uppernet) b Abhishek'},
          'Bhavesh Lakhani': { balls:[1,0,1,1,0], '4s': 0, '6s': 0, total: 10, balls: 12, out: '(bowled) b Ketul'},
          'Divyang Golaviya': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 2, out: '(runout)'}
        },
        extra: 5, wickets: 6,
        totalScore: 29
      },
      bowling: {
        team: 'knights',
        bowlers: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        overs: {
          'Abhishek Varma': {overs: 1, balls:[0,0,4,1,1,0], runs: 9, wickets:1}, 
          'Parth Patel': {overs: 1, balls:[0,1,0,0,'WK',0], runs: 5, wickets:1}, 
          'Chirag Prajapati': {overs: 1, balls:['WD',1,1,0,'WK',0,'WD',0], runs: 5, wickets:0}, 
          'Maulik M Patel': {overs: 1, balls:[0,1,'WK',1,'WK',0], runs: 6, wickets:2}, 
          'Ketul M Patel': {overs: 0.2, balls:['WD','WD','WD',1,0,0,1,0,1], runs: 0, wickets:1}, 
          'Aleef Gandluru': {overs: 1, balls:[1,0,1,1,1,0], runs: 4, wickets:0}
        },
        extra: 5,
        oversBowled: 5
      }
    },
    2: {
      batting: {
        teamName: 'knights',
        players: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        score: {
          'Aleef Gandluru': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 11, balls: 19, out: ''},
          'Ketul M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 3, balls: 4, out: '(uppernet) b Ashish'},
          'Abhishek Varma': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(uppernet) b Bhavin'},
          'Maulik M Patel': { balls:[0,1,1,1,1,0,1,0,0], '4s': 0, '6s': 0, total: 1, balls: 1, out: '(runout)'},
          'Parth Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 9, balls: 5, out: ''},
          'Chirag Prajapati': { balls:[1,0,0,1,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 1, wickets: 3,
        totalScore: 30
      },
      bowling: {
        team: 'eagles',
        bowlers: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        overs: {
          'Chintan Patel': {overs: 1, balls:[0,1,0,1,1,0], runs: 6, wickets:0}, 
          'Ashish Sangani': {overs: 1, balls:[1,1,1,'WD',1,1,1], runs: 4, wickets:1},
          'Bhavesh Lakhani': {overs: 1, balls:[4,1,'WD',0,0,1,1], runs: 3, wickets:1}, 
          'Divyang Golaviya': {overs: 1, balls:['WD',1,0,0,'WK',0,0], runs: 5, wickets:1}, 
          'Chirag Nathwani': {overs: 1, balls:[], runs: 10, wickets:0}, 
          'Rahul Joshi': {overs: 0.2, balls:[6,1,1,'WD',1], runs: 2, wickets:0} 
        },        
        extra: 1,
        oversBowled: 5.2
      }
    }
  }
};

export default t35;