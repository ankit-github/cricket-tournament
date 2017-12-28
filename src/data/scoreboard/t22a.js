const t22 = {
  teams: ['slingers', 'musketeers'],
  toss: {
    wonBy: 'slingers',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'slingers',
        players: ['Umang Bhavsar', 'Kishan Patel', 'Bhavin Vachhani', 'Sagar Gohil', 'Divyang Gholaviya', 'Suresh Prajapati'],
        score: {
          'Umang Bhavsar': { balls:[0,1,0,0,0,1,0,0,0,1,0,0,0,4,0], '4s': 1, '6s': 0, total: 7, balls: 16, out: '(uppernet) b Janak Patel'},
          'Bhavin Vachhani': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'c Jignesh Yadav b Rushikesh Patel'},
          'Divyang Gholaviya': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'c Jignesh Yadav b Janak Patel'},
          'Kishan Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'runout'},
          'Sagar Gohil': { balls:[1,0,1,1], '4s': 0, '6s': 0, total: 4, balls: 5, out: 'runout (Jignesh Yadav)'},
          'Suresh Prajapati': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'b Janak Patel'}
        },
        extra: 1, wickets: 6,
        totalScore: 15
      },
      bowling: {
        team: 'musketeers',
        bowlers: ['Jaydeep Kamani', 'Shreyansh Halani', 'Rushikesh Patel', 'Jignesh Yadav', 'Janak Patel'],
        overs: {
          'Janak Patel': {overs: 0.3, balls:['WK','WK','WK'], runs: 0, wickets:3}, 
          'Jaydeep Kamani': {overs: 1, balls:[0,1,'WK',0,0,0], runs: 1, wickets:0}, 
          'Rushikesh Patel': {overs: 1, balls:['WK',1,1,0,'WD',1,0], runs: 4, wickets:1}, 
          'Milan Kamboya': {overs: 0, balls:[], runs: 0, wickets:0}, 
          'Shreyansh Halani': {overs: 1, balls:[1,1,'WD',1,0,0,0], runs: 4, wickets:0}, 
          'Jignesh Yadav': {overs: 1, balls:[1,0,'WD',0,4,0,'WK'], runs: 6, wickets:0}
        },
        extra: 3,
        oversBowled: 4.3
      }
    },
    2: {
      batting: {
        teamName: 'musketeers',
        players: ['Janak Patel', 'Milan Kamboya', 'Shreyansh Halani', 'Jignesh Yadav', 'Jaydeep Kamani'],
        score: {
          'Janak Patel': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 4, out: 'st Suresh Prajapati b Sagar Gohil'},
          'Jaydeep Kamani': { balls:[0,6], '4s': 0, '6s': 1, total: 6, balls: 2, out: ''},
          'Jignesh Yadav': { balls:[1,0,1,1,1], '4s': 0, '6s': 0, total: 4, balls: 5, out: ''},
          'Milan Kamboya': { balls:[0,0,0,0,1,1,0,0,0], '4s': 0, '6s': 0, total: 2, balls: 9, out: 'b Umang Bhavsar'},
          'Shreyansh Halani': { balls:[0,1,1,1,0,1,0,0,0,1], '4s': 0, '6s': 0, total: 5, balls: 10, out: '(uppernet) b Suresh Prajapati'},
          'Rushikesh Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 4, wickets: 3,
        totalScore: 21
      },
      bowling: {
        team: 'slingers',
        bowlers: ['Sagar Gohil', 'Kishan Patel', 'Umang Bhavsar', 'Bhavin Vachhani', 'Suresh Prajapati', 'Divyang Gholaviya'],
        overs: {
          'Umang Bhavsar': {overs: 1, balls:['WD',1,1,0,0,0,'WK'], runs: 3, wickets:1}, 
          'Bhavin Vachhani': {overs: 1, balls:[0,1,'WD',1,0,0,0], runs: 3, wickets:0}, 
          'Divyang Gholaviya': {overs: 0.2, balls:[1,6], runs: 7, wickets:0}, 
          'Kishan Patel': {overs: 1, balls:[1,0,'WD',0,0,0,1], runs: 3, wickets:0}, 
          'Sagar Gohil': {overs: 1, balls:[0,0,0,'WK',0,'NB',1], runs: 2, wickets:1}, 
          'Suresh Prajapati': {overs: 1, balls:[0,1,1,1,'WK',0], runs: 3, wickets:1}
        },
        extra: 4,
        oversBowled: 5.2
      }
    }
  }
};

module.exports = t22;