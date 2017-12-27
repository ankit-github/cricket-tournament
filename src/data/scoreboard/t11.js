export const t11 = {
  teams: [ 'royal', 'hawk'],
  toss: {
    wonBy: 'hawk',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'hawk',
        players: ['Rajesh Jethva', 'Chintan Patel', 'Yogesh Patil', 'Nishith Patel', 'Ketul Patel', 'Rahul Joshi'],
        score: {
          'Rajesh Jethva': { balls:[0,0,1,0,0,1,0], '4s': 0, '6s': 0, total: 2, balls: 8, out: 'runout'},
          'Chintan Patel': { balls:[0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1], '4s': 0, '6s': 0, total: 8, balls: 19},
          'Yogesh Patil': { balls:[0,1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'runout'},
          'Nishith Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: 'runout'},
          'Ketul Patel': { balls:[1,0,4,1], '4s': 1, '6s': 0, total: 6, balls: 5, out: 'b Bhavin'},
          'Rahul Joshi': { balls:[6,1,1], '4s': 0, '6s': 1, total: 8, balls: 3}
        },
        extra: 6, wickets: 4,
        totalScore: 33
      },
      bowling: {
        team: 'royal',
        bowlers: ['Jaykishan Hirpara', 'Nirav Patel', 'Maulik B Patel', 'Ankit Parikh', 'Bhavin Hariyani', 'Dhaval Atri'],
        overs: {
          'Jaykishan Hirpara': {overs: 1, balls:[0,0,1,0,'WD',0,1], runs: 3, wickets:0}, 
          'Nirav Patel': {overs: 1, balls:[0,'WD',0,'1NB',0,0,1,0 ], runs: 4, wickets:0},
          'Maulik B Patel': {overs: 1, balls:['NB',0,'WK',0,1,0,1], runs: 3, wickets:0}, 
          'Ankit Parikh': {overs: 1, balls:[1,'WK',0,'WD',1,1,'WK'], runs: 4, wickets:0}, 
          'Bhavin Hariyani': {overs: 1, balls:[1,'WD',1,0,4,1,'WD',1,'WK'], runs: 10, wickets:1}, 
          'Dhaval Atri': {overs: 1, balls:[0,1,6,1,1,1], runs: 10, wickets:0}
        },
        extra: 6,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'royal',
        players: ['Maulik B Patel', 'Dhaval Atri', 'Bhavin Hariyani', 'Ankit Parikh', 'Jaykishan Hirpara', 'Nirav Patel'],
        score: {
          'Maulik B Patel': { balls:[0,0,1,0,1,0,1], '4s': 0, '6s': 0, total: 3, balls: 7, out: 'runout'},
          'Dhaval Atri': { balls:[0,0,6,1,1,1,1,0,0], '4s': 0, '6s': 1, total: 10, balls: 9, out: 'b Nishith Patel'},
          'Bhavin Hariyani': { balls:[0,0,1], '4s': 0, '6s': 0, total: 1, balls: 3, out: 'runout'},
          'Ankit Parikh': { balls:[1,1,1,1], '4s': 0, '6s': 0, total: 4, balls: 4, out: 'runout'},
          'Jaykishan Hirpara': { balls:[1,0,0,1], '4s': 0, '6s': 0, total: 2, balls: 4, out: 'b Ketul Patel'},
          'Nirav Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: 'b Ketul Patel'}
        },
        extra: 4, wickets: 6,
        totalScore: 25
      },
      bowling: {
        team: 'hawk',
        bowlers: ['Yogesh Patil', 'Rajesh Jethva', 'Chintan Patel', 'Nishith Patel', 'Rahul Joshi', 'Ketul Patel'],
        overs: {
          'Yogesh Patil': {overs: 1, balls:[0,0,1,0,0,6], runs: 7, wickets:0}, 
          'Rajesh Jethva': {overs: 1, balls:['WD',0,1,1,0,1,1], runs: 5, wickets:0},
          'Chintan Patel': {overs: 1, balls:[1,1,'WK',0,0,0], runs: 2, wickets:0}, 
          'Nishith Patel': {overs: 1, balls:[0,0,1,'WK','1WK',1], runs: 3, wickets:0}, 
          'Rahul Joshi': {overs: 1, balls:[1,'WD',1,1,0,0,'WK'], runs: 4, wickets:0}, 
          'Ketul Patel': {overs: 0.4, balls:[1,1,'WK','WK'], runs: 2, wickets:2}
        },
        extra: 6,
        oversBowled: 5.4
      }
    }
  }
};

export default t11;