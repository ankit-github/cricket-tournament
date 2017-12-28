export const t13 = {
  teams: [ 'royal', 'goblin'],
  toss: {
    wonBy: 'royal',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'royal',
        players: ['Ankit Parikh', 'Dhaval Atri', 'Maulik B Patel', 'Nirav Patel', 'Bhavin Hariyani', 'Jaykishan Hirpara'],
        score: {
          'Maulik B Patel': { balls:[0,1,0,0,0], '4s': 0, '6s': 0, total: 1, balls: 5, out: 'runout (Parth Patel)'},
          'Dhaval Atri': { balls:[1,0,1,0,1,0], '4s': 0, '6s': 0, total: 3, balls: 6, out: '(uppernet) b Milan Chauhan'},
          'Bhavin Hariyani': { balls:[0,1,1,1], '4s': 0, '6s': 0, total: 3, balls: 4, out: '(uppernet) b Kewal Yadav'},
          'Ankit Parikh': { balls:[0,0,1], '4s': 0, '6s': 0, total: 1, balls: 4, out: 'runout'},
          'Jaykishan Hirpara': { balls:[0,0,1,0,0,0,0,1,0], '4s': 0, '6s': 0, total: 2, balls: 9, out: '(uppernet) b Kewal Yadav'},
          'Nirav Patel': { balls:[1], '4s': 0, '6s': 0, total: 1, balls: 1, out: 'b Ketul B Patel'}
        },
        extra: 2, wickets: 6,
        totalScore: 13
      },
      bowling: {
        team: 'goblin',
        bowlers: ['Pravin Prajapati', 'Pathik Mehta', 'Ketul B Patel', 'Milan Chauhan', 'Parth Patel', 'Kewal Yadav'],
        overs: {
          'Parth Patel': {overs: 1, balls:[1,0,0,0,0,1], runs: 2, wickets:0}, 
          'Ketul B Patel': {overs: 1, balls:[0,0,1,1,'WK',0], runs: 2, wickets:1},
          'Pravin Prajapati': {overs: 1, balls:[0,0,1,1,'WK',0], runs: 2, wickets:0}, 
          'Milan Chauhan': {overs: 1, balls:[0,'WK',0,0,1,1], runs: 2, wickets:1}, 
          'Pathik Mehta': {overs: 1, balls:[0,1,1,0,0,0], runs: 2, wickets:0}, 
          'Kewal Yadav': {overs: 0.4, balls:['WK','WD','WD',0,1,'WK'], runs: 3, wickets:2}
        },
        extra: 2,
        oversBowled: 5.4
      }
    },
    2: {
      batting: {
        teamName: 'goblin',
        players: ['Pravin Prajapati', 'Milan Chauhan', 'Pathik Mehta', 'Ketul B Patel'],
        score: {
          'Parth Patel': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0},
          'Ketul B Patel': { balls:[0,0,1,1], '4s': 0, '6s': 0, total: 2, balls: 4},
          'Kewal Yadav': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0},
          'Pathik Mehta': { balls:[0,0,0,1,1,0,0,1,0], '4s': 0, '6s': 0, total: 3, balls: 9, out: 'b Ankit Parikh'},
          'Milan Chauhan': { balls:[1,0,0,0,1,0,1], '4s': 0, '6s': 0, total: 3, balls: 7},
          'Pravin Prajapati': { balls:[0,0,1,1], '4s': 0, '6s': 0, total: 2, balls: 4, out: 'runout'}
        },
        extra: 4, wickets: 2,
        totalScore: 14
      },
      bowling: {
        team: 'royal',
        bowlers: ['Jaykishan Hirpara', 'Nirav Patel', 'Maulik B Patel', 'Ankit Parikh', 'Bhavin Hariyani'],
        overs: {
          'Jaykishan Hirpara': {overs: 1, balls:[0,0,1,1,1,'WK'], runs: 3, wickets:1}, 
          'Nirav Patel': {overs: 1, balls:[0,0,0,1,'NB',0,0], runs: 2, wickets:0},
          'Maulik B Patel': {overs: 1, balls:['WD',1,0,1,0,0,1], runs: 4, wickets:0}, 
          'Ankit Parikh': {overs: 1, balls:[0,'WD','WD','WK',0,0,0,1], runs: 3, wickets:1}, 
          'Bhavin Hariyani': {overs: 0.3, balls:[1,0,1], runs: 2, wickets:0}, 
          'Dhaval Atri': {overs: 0, balls:[], runs: 0, wickets:0}
        },
        extra: 4,
        oversBowled: 4.3
      }
    }
  }
};

export default t13;