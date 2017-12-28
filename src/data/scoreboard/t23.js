export const t23 = {
  teams: ['lions', 'musketeers'],
  toss: {
    wonBy: 'musketeers',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'musketeers',
        players: ['Janak Patel', 'Milan Kamboya', 'Jignesh Yadav', 'Rushikesh Patel', 'Jaydeep Kamani', 'Shreyansh Halani'],
        score: {
          'Janak Patel': { balls:[0,1], '4s': 0, '6s': 0, total: 1, balls: 3, out: '(uppernet) b Maulik Shah'},
          'Jaydeep Kamani': { balls:[1,1,0,1,1,1], '4s': 0, '6s': 0, total: 5, balls: 6, out: ''},
          'Jignesh Yadav': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 2, out: '(uppernet) b Viresh Shah'},
          'Milan Kamboya': { balls:[0,1,1,1,1,0,0,0,1,0], '4s': 0, '6s': 0, total: 5, balls: 10, out: '(uppernet) b Ashish Sangani'},
          'Shreyansh Halani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: '(uppernet) b Kartik Patel'},
          'Rushikesh Patel': { balls:[0,1,1,1,0,1,1,0,1,1,1], '4s': 0, '6s': 0, total: 8, balls: 12, out: 'c Kashyap Thakkar b Kartik Patel'}
        },
        extra: 6, wickets: 5,
        totalScore: 26
      },
      bowling: {
        team: 'lions',
        bowlers: ['Maulik Shah', 'Viresh Shah', 'Kashyap Thakkar', 'Ashish Sangani', 'Chirag Nathwani', 'Kartik Patel'],
        overs: {
          'Maulik Shah': {overs: 1, balls:[0,1,'WD',0,1,'WK',1], runs: 4, wickets:1}, 
          'Kartik Patel': {overs: 1, balls:['WK',0,1,'WK',1,1], runs: 3, wickets:2}, 
          'Kashyap Thakkar': {overs: 1, balls:['WD',1,1,0,0,0,0], runs: 3, wickets:0}, 
          'Viresh Shah': {overs: 1, balls:['WK',0,1,'WD',1,1,1], runs: 5, wickets:1}, 
          'Chirag Nathwani': {overs: 1, balls:[0,'WD',1,1,'WD',1,1,1], runs: 7, wickets:0}, 
          'Ashish Sangani': {overs: 1, balls:[0,1,1,'NB',1,0,'WK'], runs: 4, wickets:1}
        },
        extra: 6,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'lions',
        players: ['Kartik Patel', 'Viresh Shah', 'Kashyap Thakkar', 'Maulik Shah'],
        score: {
          'Kashyap Thakkar': { balls:[1,1,1,1,1], '4s': 0, '6s': 0, total: 5, balls: 5, out: ''},
          'Ashish Sangani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Chirag Nathwani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Kartik Patel': { balls:[4,1,1], '4s': 1, '6s': 0, total: 6, balls: 3, out: '(uppernet) b Jaydip Kamani'},
          'Maulik Shah': { balls:[0,0,1,1,1,6,1,1], '4s': 0, '6s': 1, total: 11, balls: 8, out: ''},
          'Viresh Shah': { balls:[0,0,1], '4s': 0, '6s': 0, total: 1, balls: 4, out: 'c b Jaydip Kamani'}
        },
        extra: 4, wickets: 2,
        totalScore: 27
      },
      bowling: {
        team: 'musketeers',
        bowlers: ['Shreyansh Halani', 'Jaydeep Kamani', 'Jignesh Yadav', 'Rushikesh Patel'],
        overs: {
          'Janak Patel': {overs: 0, balls:[], runs: 0, wickets:0}, 
          'Jaydeep Kamani': {overs: 1, balls:['WK','WD',1,0,'WK',0,0], runs: 2, wickets:2}, 
          'Rushikesh Patel': {overs: 0.4, balls:[6,1,1,'WD',1], runs: 10, wickets:0}, 
          'Milan Kamboya': {overs: 0, balls:[], runs: 0, wickets:0}, 
          'Shreyansh Halani': {overs: 1, balls:[4,1,'WD',0,0,1,1], runs: 8, wickets:0}, 
          'Jignesh Yadav': {overs: 1, balls:[1,1,1,'WD',1,1,1], runs: 7, wickets:0}
        },
        extra: 4,
        oversBowled: 3.4
      }
    }
  }
};

export default t23;