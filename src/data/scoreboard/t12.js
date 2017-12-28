export const t12 = {
  teams: ['hawk', 'goblin'],
  toss: {
    wonBy: 'goblin',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'goblin',
        players: ['Ketul B Patel', 'Pathik Mehta', 'Pravin Prajapati', 'Parth Patel', 'Milan Chauhan', 'Kewal Yadav'],
        score: {
          'Parth Patel': { balls:[0,0,0,6], '4s': 0, '6s': 1, total: 6, balls: 5, out: 'c Yogesh Patil b Ketul Patel'},
          'Ketul B Patel': { balls:[1,1,0,0,0,0,0,1,0,1,1,4], '4s': 1, '6s': 0, total: 9, balls: 13, out: '(upper net) b Chintan Patel'},
          'Kewal Yadav': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1},
          'Pathik Mehta': { balls:[0,0,0,1,1,0], '4s': 0, '6s': 0, total: 2, balls: 6, out: 'c Ketul Patel b Chintan Patel'},
          'Milan Chauhan': { balls:[0,0,0,0], '4s': 0, '6s': 0, total: 0, balls: 5, out: 'b Rahul Joshi'},
          'Pravin Prajapati': { balls:[0,4,1], '4s': 1, '6s': 0, total: 5, balls: 3, out: 'b Rahul Joshi'}
        },
        extra: 3, wickets: 5,
        totalScore: 26
      },
      bowling: {
        team: 'hawk',
        bowlers: ['Yogesh Patil', 'Rajesh Jethva', 'Nishith Patel', 'Chintan Patel', 'Rahul Joshi', 'Ketul Patel'],
        overs: {
          'Yogesh Patil': {overs: 1, balls:[1,0,0,0,1,1], runs: 3, wickets:0}, 
          'Rajesh Jethva': {overs: 1, balls:['WD',0,0,0,0,0,1], runs: 2, wickets:0},
          'Chintan Patel': {overs: 1, balls:[4,'WK',0,4,1,'WK'], runs: 9, wickets:2}, 
          'Nishith Patel': {overs: 1, balls:[0,1,'WD',1,'WD',1,0,0], runs: 5, wickets:0}, 
          'Rahul Joshi': {overs: 1, balls:['WK',0,0,0,0,'WK'], runs: 0, wickets:2}, 
          'Ketul Patel': {overs: 1, balls:[0,0,0,6,'WK',1], runs: 7, wickets:1}
        },
        extra: 3,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'hawk',
        players: ['Rahul Joshi', 'Rajesh Jethva', 'Nishith Patel', 'Yogesh Patil', 'Chintan Patel', 'Ketul Patel'],
        score: {
          'Rajesh Jethva': { balls:[1,0,0,0,0,1,1,1,0,0,1,1], '4s': 0, '6s': 0, total: 6, balls: 13, out: '(uppernet) b Milan Chauhan'},
          'Chintan Patel': { balls:[0,0,0,1], '4s': 0, '6s': 0, total: 1, balls: 5, out: 'b Kewal Yadav'},
          'Yogesh Patil': { balls:[1,0,1,1,1,1], '4s': 0, '6s': 0, total: 5, balls: 6},
          'Nishith Patel': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'runout (Ketul B Patel)'},
          'Ketul Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1},
          'Rahul Joshi': { balls:[1,0,1,4,1], '4s': 1, '6s': 0, total: 7, balls: 6, out: 'runout (Ketul B Patel)'}
        },
        extra: 5, wickets: 4,
        totalScore: 27
      },
      bowling: {
        team: 'goblin',
        bowlers: ['Pravin Prajapati', 'Pathik Mehta', 'Parth Patel', 'Ketul B Patel', 'Milan Chauhan', 'Kewal Yadav'],
        overs: {
          'Parth Patel': {overs: 1, balls:['WD',1,1,1,'WK',0,0], runs: 4, wickets:1}, 
          'Ketul B Patel': {overs: 1, balls:[1,1,0,1,1,1], runs: 5, wickets:0},
          'Pravin Prajapati': {overs: 1, balls:[1,1,0,1,0,'NB','WD',0], runs: 5, wickets:0}, 
          'Milan Chauhan': {overs: 1, balls:[1,'WK',0,0,0,1], runs: 2, wickets:1}, 
          'Pathik Mehta': {overs: 1, balls:[4,1,'WD',0,'WK',1,1], runs: 8, wickets:0}, 
          'Kewal Yadav': {overs: 0.4, balls:['WK',1,'WD',1], runs: 3, wickets:1}
        },
        extra: 5,
        oversBowled: 5.4
      }
    }
  }
};

export default t12;