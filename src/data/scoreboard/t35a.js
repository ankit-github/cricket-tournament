const t35 = {
  teams: [ 'goblin', 'musketeers'],
  toss: {
    wonBy: 'musketeers',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'musketeers',
        players: ['Janak Patel', 'Milan Kamboya', 'Jaydeep Kamani','Shreyansh Halani','Jignesh Yadav','Rushikesh Patel'],
        score: {
          'Jaydeep Kamani': { balls:[0,1,1,2,1,1,0,1], '4s': 0, '6s': 0, total: 7, balls: 9, out: 'runout'},
          'Shreyansh Halani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: '(uppernet) b Kewal Yadav'},
          'Janak Patel': { balls:[0,1,1,1,0,1,1,1,0,1,0,1,0,1], '4s': 0, '6s': 0, total: 9, balls: 14, out: ''},
          'Milan Kamboya': { balls:[0,1,0,0,0,1,1], '4s': 0, '6s': 0, total: 3, balls: 8, out: 'b Ketul B Patel'},
          'Jignesh Yadav': { balls:[4], '4s': 1, '6s': 0, total: 4, balls: 2, out: 'runout (Pathik Mehta)'},
          'Rushikesh Patel': { balls:[0], '4s': 0, '6s': 0, total: 0, balls: 2, out: 'b Kewal Yadav'}
        },
        extra: 2, wickets: 5,
        totalScore: 25
      },
      bowling: {
        team: 'goblin',
        bowlers: ['Pravin Prajapati','Pathik Mehta','Ketul B Patel','Milan Chauhan','Parth Patel','Kewal Yadav'],
        overs: {
          'Parth Patel': {overs: 1, balls:[1,1,0,1,'WK',0], runs: 3, wickets:0}, 
          'Ketul B Patel': {overs: 1, balls:[1,1,'WD',1,'WK',0,1], runs: 5, wickets:1}, 
          'Pravin Prajapati': {overs: 1, balls:[0,1,0,1,1,0], runs: 3, wickets:0}, 
          'Milan Chauhan': {overs: 1, balls:[1,0,1,2,1,0], runs: 5, wickets:0}, 
          'Pathik Mehta': {overs: 1, balls:[1,0,0,1,0,1], runs: 3, wickets:0}, 
          'Kewal Yadav': {overs: 1, balls:['WK',4,'WK','WD',1,0,'WK'], runs: 6, wickets:2}
        },
        extra: 2,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'goblin',
        players: ['Parth Patel', 'Pathik Mehta', 'Ketul B Patel','Pravin Prajapati','Milan Chauhan'],
        score: {
          'Parth Patel': { balls:[0,1,1,1,0,0,1,0,1,1,2], '4s': 0, '6s': 0, total: 8, balls: 12, out: 'c Milan Kamboya b Rushikesh Patel'},
          'Ketul B Patel': { balls:[0,0,1], '4s': 0, '6s': 0, total: 1, balls: 3, out: 'runout'},
          'Kewal Yadav': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Pathik Mehta': { balls:[0,1,0,0,0,0,1], '4s': 0, '6s': 0, total: 2, balls: 8, out: 'c Jaydeep Kamani b Milan Kamboya'},
          'Milan Chauhan': { balls:[1,1,3], '4s': 0, '6s': 0, total: 5, balls: 3, out: 'runout'},
          'Pravin Prajapati': { balls:[0,1,0,1,0,4,1,1,1], '4s': 1, '6s': 0, total: 9, balls: 9, out: ''}
        },
        extra: 0, wickets: 4,
        totalScore: 25
      },
      bowling: {
        team: 'musketeers',
        bowlers: ['Shreyansh Halani','Jaydeep Kamani','Milan Kamboya','Janak Patel','Rushikesh Patel','Jignesh Yadav'],
        overs: {
          'Jaydeep Kamani': {overs: 1, balls:[1,0,0,0,1,0], runs: 2, wickets:0}, 
          'Shreyansh Halani': {overs: 1, balls:[0,1,0,1,1,0], runs: 3, wickets:0}, 
          'Janak Patel': {overs: 1, balls:[0,1,'WK',1,0,1], runs: 3, wickets:1}, 
          'Milan Kamboya': {overs: 1, balls:['WK',0,0,1,0,1], runs: 2, wickets:1}, 
          'Jignesh Yadav': {overs: 1, balls:[1,1,1,1,'3WK',1], runs: 8, wickets:0}, 
          'Rushikesh Patel': {overs: 1, balls:[0,1,2,'WK',0,4], runs: 7, wickets:1}
        },
        extra: 0,
        oversBowled: 6
      }
    }
  }
};

module.exports = t35;