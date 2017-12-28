const t21 = {
  teams: ['lions', 'slingers'],
  toss: {
    wonBy: 'lions',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'lions',
        players: ['Kartik Patel', 'Viresh Shah', 'Kashyap Thakkar', 'Ashish Sangani', 'Maulik Shah', 'Chirag Nathwani'],
        score: {
          'Kashyap Thakkar': { balls:[1,1,0,0,1,1,4], '4s': 1, '6s': 0, total: 8, balls: 7, out: ''},
          'Ashish Sangani': { balls:[0,0,0,1,0,0,0,1,8], '4s': 1, '6s': 0, total: 10, balls: 10, out: '(uppernet) b Divyang'},
          'Chirag Nathwani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Kartik Patel': { balls:[0,1,0,1,1], '4s': 0, '6s': 0, total: 3, balls: 6, out: 'runout'},
          'Maulik Shah': { balls:[1,0,0,4,0,0], '4s': 1, '6s': 0, total: 5, balls: 7, out: 'c Sagar Gohil b Suresh Prajapati'},
          'Viresh Shah': { balls:[1,0,1,1,4], '4s': 1, '6s': 0, total: 7, balls: 6, out: '(uppernet) b Sagar Gohil'}
        },
        extra: 6, wickets: 4,
        totalScore: 39
      },
      bowling: {
        team: 'slingers',
        bowlers: ['Bhavin Vachhani', 'Kishan Patel', 'Sagar Gohil', 'Umang Bhavsar', 'Divyang Gholaviya', 'Suresh Prajapati'],
        overs: {
          'Umang Bhavsar': {overs: 1, balls:[0,0,0,1,0,0], runs: 1, wickets:0}, 
          'Bhavin Vachhani': {overs: 1, balls:[0,1,1,0,1,0], runs: 3, wickets:0}, 
          'Divyang Gholaviya': {overs: 1, balls:[8,'WD','WK','WD',1,1,'WD',0,0], runs: 13, wickets:1}, 
          'Kishan Patel': {overs: 1, balls:[1,1,'WK',1,1,4], runs: 8, wickets:0}, 
          'Sagar Gohil': {overs: 1, balls:[1,'WK','WD','WD','WD',0,0,0,1], runs: 5, wickets:1}, 
          'Suresh Prajapati': {overs: 1, balls:[1,4,0,0,'WK',4], runs: 9, wickets:1}
        },
        extra: 6,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'slingers',
        players: ['Bhavin Vachhani', 'Umang Bhavsar', 'Sagar Gohil', 'Kishan Patel', 'Divyang Gholaviya', 'Suresh Prajapati'],
        score: {
          'Umang Bhavsar': { balls:[1,1,1,0,0], '4s': 0, '6s': 0, total: 3, balls: 6, out: 'b Kashyap Thakkar'},
          'Bhavin Vachhani': { balls:[1,1,1,1,0,0,0,1,0,0,1], '4s': 0, '6s': 0, total: 6, balls: 12, out: '(uppernet) b Chirag Nathwani'},
          'Divyang Gholaviya': { balls:[0,0,1], '4s': 0, '6s': 0, total: 1, balls: 4, out: '(uppernet) b Kartik Patel'},
          'Kishan Patel': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 2, out: 'b Chirag Nathwani'},
          'Sagar Gohil': { balls:[0,1,0,0,0,1,0,1,1,0], '4s': 0, '6s': 0, total: 4, balls: 10, out: ''},
          'Suresh Prajapati': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: ''}
        },
        extra: 2, wickets: 4,
        totalScore: 17
      },
      bowling: {
        team: 'lions',
        bowlers: ['Maulik Shah', 'Kashyap Thakkar', 'Viresh Shah', 'Ashish Sangani', 'Chirag Nathwani', 'Kartik Patel'],
        overs: {
          'Maulik Shah': {overs: 1, balls:[1,1,1,1,1,1], runs: 6, wickets:0}, 
          'Kartik Patel': {overs: 1, balls:[1,0,1,0,'WK',1], runs: 3, wickets:1}, 
          'Kashyap Thakkar': {overs: 1, balls:[0,0,'WK',0,1,1], runs: 2, wickets:1}, 
          'Viresh Shah': {overs: 1, balls:[0,0,0,1,0,'WD',0], runs: 2, wickets:0}, 
          'Chirag Nathwani': {overs: 1, balls:[0,'NB',1,'WK',0,'WK',0], runs: 2, wickets:2}, 
          'Ashish Sangani': {overs: 1, balls:[0,0,1,0,0,1], runs: 2, wickets:0}
        },
        extra: 2,
        oversBowled: 6
      }
    }
  }
};

module.exports = t21;