export const t22 = {
  teams: ['phoenix', 'knights'],
  toss: {
    wonBy: 'phoenix',
    selected: 'Bowling'
  },
  innings: {
    1: {
      batting: {
        teamName: 'knights',
        players: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        score: {
          'Aleef Gandluru': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 7, balls: 12, out: '(runout)'},
          'Ketul M Patel': { balls:[0,1,1,1,1,0,1,0,0], '4s': 0, '6s': 0, total: 6, balls: 10, out: '(bowled) b Janak'},
          'Abhishek Varma': { balls:[1,0], '4s': 0, '6s': 0, total: 19, balls: 9, out: '(uppernet) b Sagar'},
          'Parth Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 3, balls: 4, out: ''},
          'Chirag Prajapati': { balls:[1,0,0,1,0,0,0,0,0,0], '4s': 0, '6s': 0, total: 2, balls: 1, out: ''},
          'Maulik M Patel': { balls:[1,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(uppernet) b Chirag'}
        },
        extra: 0, wickets: 3,
        totalScore: 38
      },
      bowling: {
        team: 'phoenix',
        bowlers: ['Milan Chauhan','Ketul B Patel','Janak Patel','Sagar Gohil','Subodh Kumar','Gaurang Parmar'],
        overs: {
          'Ketul B Patel': {overs: 1, balls:[1,0,1,0,'WK',1], runs: 6, wickets:0}, 
          'Milan Chauhan': {overs: 1, balls:[1,1,1,1,1,1], runs: 3, wickets:0}, 
          'Janak Patel': {overs: 1, balls:[0,0,'WK',0,1,1], runs: 3, wickets:1}, 
          'Gaurang Parmar': {overs: 1, balls:[0,0,1,0,0,1], runs: 11, wickets:0},
          'Subodh Kumar': {overs: 1, balls:[0,'NB',1,'WK',0,'WK',0], runs: 10, wickets:1}, 
          'Sagar Gohil': {overs: 1, balls:[0,0,0,1,0,'WD',0], runs: 5, wickets:0} 
        },
        extra: 0,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'phoenix',
        players: ['Milan Chauhan','Ketul B Patel','Janak Patel','Sagar Gohil','Subodh Kumar','Gaurang Parmar'],
        score: {
          'Janak Patel': { balls:[0,1,0,1,1], '4s': 0, '6s': 0, total: 1, balls: 3, out: '(bowled) b Maulik'},
          'Sagar Gohil': { balls:[1,0,0,4,0,0], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(runout)'},
          'Milan Chauhan': { balls:[1,1,0,0,1,1,4], '4s': 0, '6s': 0, total: 9, balls: 11, out: '(bowled) b Aleef'},
          'Ketul B Patel': { balls:[0,0,0,1,0,0,0,1,8], '4s': 1, '6s': 0, total: 2, balls: 6, out: '(uppernet) b Aleef'},
          'Gaurang Parmar': { balls:[1,0,1,1,4], '4s': 0, '6s': 0, total: 1, balls: 5, out: 'c Ketul b Abhishek'},
          'Subodh Kumar': { balls:[], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'c Aleef b Abhishek'}
        },
        extra: 3, wickets: 6,
        totalScore: 20
      },
      bowling: {
        team: 'knights',
        bowlers: [ 'Parth Patel','Ketul M Patel','Chirag Prajapati','Aleef Gandluru','Abhishek Varma','Maulik M Patel'],
        overs: {
          'Maulik M Patel': {overs: 1, balls:[0,1,'WK',1,'WK',0], runs: 3, wickets:1}, 
          'Chirag Prajapati': {overs: 1, balls:['WD',1,1,0,'WK',0,'WD',0], runs: 10, wickets:0}, 
          'Parth Patel': {overs: 1, balls:[0,1,0,0,'WK',0], runs: 0, wickets:0}, 
          'Aleef Gandluru': {overs: 1, balls:[1,0,1,1,1,0], runs: 2, wickets:2},
          'Abhishek Varma': {overs: 1, balls:[0,0,4,1,1,0], runs: 5, wickets:2}, 
          'Ketul M Patel': {overs: 0, balls:['WD','WD','WD',1,0,0,1,0,1], runs: 0, wickets:0}
        },
        extra: 4,
        oversBowled: 5
      }
    }
  }
};

export default t22;