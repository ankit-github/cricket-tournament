export const t31 = {
  teams: ['spirit', 'knights'],
  toss: {
    wonBy: 'knights',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'spirit',
        players: ['Kartik Patel', 'Viresh Shah', 'Avesh Gaji', 'Bhavin Vachani', 'Pradhyumn','Kunjan'],
        score: {
          'Kartik Patel': { balls:[0,1,0], '4s': 0, '6s': 0, total: 11, balls: 13, out: ''},
          'Viresh Shah': { balls:[0,0,1,4,1,0], '4s': 0, '6s': 0, total: 6, balls: 8, out: 'runout'},
          'Avesh Gaji': { balls:[0,1,4,0,0], '4s': 0, '6s': 0, total: 4, balls: 8, out: '(uppernet) b Aleef'},
          'Bhavin Vachani': { balls:[0,0,1,0,1,0,1,2,1,4,1,0,1,1,0,1,0,0,2], '4s': 0, '6s': 0, total: 0, balls: 1, out: '(bowled) b Aleef'},
          'Pradhyumn': { balls:[1,1,1,0], '4s': 0, '6s': 0, total: 0, balls: 2, out: 'runout'},
		  'Kunjan': { balls:[1,1,1,0], '4s': 0, '6s': 0, total: 1, balls: 3, out: 'runout'}          
        },
        extra: 5, wickets: 6,
        totalScore: 26
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
          'Aleef Gandluru': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 7, balls: 11, out: '(bowled) b Bhavin'},
          'Ketul M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 5, balls: 7, out: '(caught) b Pradhyumn'},
          'Abhishek Varma': { balls:[1,0], '4s': 0, '6s': 0, total: 7, balls: 10, out: '(runout)'},
          'Parth Patel': { balls:[0,1,1,1,1,0,1,0,0], '4s': 0, '6s': 0, total: 5, balls: 6, out: ''},
          'Maulik M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Chirag Prajapati': { balls:[1,0,0,1,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 1, wickets: 3,
        totalScore: 26
      },
      bowling: {
        team: 'spirit',
        bowlers: ['Viresh Shah', 'Avesh Gaji', 'Kartik Patel', 'Bhavin Vachani','Pradhyumn','Kunjan'],
        overs: {
          'Viresh Shah': {overs: 1, balls:[1,1,'WK','WD',1,1,1], runs: 5, wickets:0}, 
          'Avesh Gaji': {overs: 1, balls:[0,'WK',0,4,0,3], runs: 4, wickets:0},
          'Pradhyumn': {overs: 1, balls:['1WK',1,'WK',0,0,0], runs: 3, wickets:1}, 
          'Kartik Patel': {overs: 1, balls:[1,0,1,0,1,'WK'], runs: 4, wickets:0},
		  'Bhavin Vachani': {overs: 1, balls:[1,0,1,0,1,'WK'], runs: 4, wickets:1},
		  'Kunjan': {overs: 1, balls:[1,0,1,0,1,'WK'], runs: 5, wickets:0}
        },
        extra: 1,
        oversBowled: 6
      }
    }
  }
};

export default t31;