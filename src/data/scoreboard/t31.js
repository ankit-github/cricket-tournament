export const t31 = {
  teams: [ 'hawk', 'musketeers'],
  toss: {
    wonBy: 'musketeers',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'musketeers',
        players: ['Janak Patel', 'Milan Kamboya', 'Jaydeep Kamani', 'Shreyansh Halani','Jignesh Yadav','Rushikesh Patel'],
        score: {
          'Janak Patel': { balls:[1,0,0,1,1,1,0,0,0,1,0,1,1,1], '4s': 0, '6s': 0, total: 8, balls: 15, out: '(uppernet) b Nishith Patel'},
          'Jaydeep Kamani': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: '(uppernet) b Nishith Patel'},
          'Jignesh Yadav': { balls:[0,1], '4s': 0, '6s': 0, total: 1, balls: 2, out: ''},
          'Milan Kamboya': { balls:[0,0,1,0,1,0,1,1,0], '4s': 0, '6s': 0, total: 4, balls: 10, out: 'b Chintan Patel'},
          'Shreyansh Halani': { balls:[8,1,6,0], '4s': 1, '6s': 1, total: 15, balls: 5, out: 'c & b Ketul Patel'},
          'Rushikesh Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: ''}
        },
        extra: 3, wickets: 4,
        totalScore: 34
      },
      bowling: {
        team: 'hawk',
        bowlers: ['Yogesh Patil','Rajesh Jethva','Rahul Joshi','Chintan Patel','Nishith Patel','Ketul Patel'],
        overs: {
          'Ketul Patel': {overs: 1, balls:[6,0,'WK',1,0,1], runs: 8, wickets:1}, 
          'Chintan Patel': {overs: 1, balls:[0,1,0,'WK',1,1], runs: 3, wickets:1}, 
          'Rahul Joshi': {overs: 1, balls:[1,1,0,0,0,1], runs: 3, wickets:0}, 
          'Rajesh Jethva': {overs: 1, balls:[0,1,1,0,1,1], runs: 4, wickets:0}, 
          'Yogesh Patil': {overs: 1, balls:['WD',1,'WD',0,0,1,0,0], runs: 4, wickets:0}, 
          'Nishith Patel': {overs: 1, balls:[1,1,'WK','WD',8,1,'WK'], runs: 12, wickets:2}
        },
        extra: 3,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'hawk',
        players: ['Rahul Joshi', 'Rajesh Jethva', 'Ketul Patel','Nishith Patel','Chintan Patel','Yogesh Patil'],
        score: {
          'Ketul Patel': { balls:[0,1,0,1,1,1,1,1,0], '4s': 0, '6s': 0, total: 6, balls: 10, out: 'runout (Janak Patel)'},
          'Chintan Patel': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 4, out: 'runout (Rushikesh)'},
          'Rahul Joshi': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'b Shreyansh Halani'},
          'Rajesh Jethva': { balls:[0,0,0,1,1,0,1,0], '4s': 0, '6s': 0, total: 3, balls: 9, out: '(uppernet) b Milan Kamboya'},
          'Yogesh Patil': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'st b Rushikesh Patel'},
          'Nishith Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 2, out: 'runout (Janak Patel)'}
        },
        extra: 3, wickets: 6,
        totalScore: 13
      },
      bowling: {
        team: 'musketeers',
        bowlers: ['Shreyansh Halani','Jaydeep Kamani','Milan Kamboya','Janak Patel','Rushikesh Patel'],
        overs: {
          'Janak Patel': {overs: 1, balls:[0,'WK',1,0,0,0], runs: 1, wickets:0}, 
          'Jaydeep Kamani': {overs: 1, balls:[0,1,1,1,1,1], runs: 5, wickets:0}, 
          'Rushikesh Patel': {overs: 0.3, balls:['WK','WK','WD','WK'], runs: 1, wickets:1}, 
          'Milan Kamboya': {overs: 1, balls:[1,0,1,1,0,'WD','WK'], runs: 4, wickets:1}, 
          'Shreyansh Halani': {overs: 1, balls:['WK',0,1,0,'WD',0,0], runs: 2, wickets:1}, 
          'Jignesh Yadav': {overs: 0, balls:[], runs: 0, wickets:0}
        },
        extra: 3,
        oversBowled: 4.3
      }
    }
  }
};

export default t31;