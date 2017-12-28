export const t33 = {
  teams: [ 'lions', 'goblin'],
  toss: {
    wonBy: 'lions',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'lions',
        players: ['Kartik Patel', 'Viresh Shah', 'Kashyap Thakkar','Maulik Shah','Ashish Sangani','Chirag Nathwani'],
        score: {
          'Kashyap Thakkar': { balls:[1,1,0], '4s': 0, '6s': 0, total: 2, balls: 4, out: 'b Ketul B Patel'},
          'Ashish Sangani': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 1, out: 'c Parth Patel b Milan Chuhan'},
          'Chirag Nathwani': { balls:[0,0,0,1,0,0], '4s': 0, '6s': 0, total: 1, balls: 6, out: 'b Parth Patel'},
          'Kartik Patel': { balls:[1,1,1,1,1,0,1,0,1], '4s': 0, '6s': 0, total: 7, balls: 10, out: '(uppernet) b Milan Chauhan'},
          'Maulik Shah': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 3, out: 'runout (Milan Chauhan)'},
          'Viresh Shah': { balls:[1,1,0,0], '4s': 0, '6s': 0, total: 2, balls: 0, out: '(uppernet) b Pathik Mehta'}
        },
        extra: 1, wickets: 6,
        totalScore: 15
      },
      bowling: {
        team: 'goblin',
        bowlers: ['Pravin Prajapati','Pathik Mehta','Ketul B Patel','Milan Chauhan','Parth Patel'],
        overs: {
          'Parth Patel': {overs: 1, balls:[0,0,1,0,0,'WK'], runs: 1, wickets:1}, 
          'Ketul B Patel': {overs: 1, balls:[0,'WK',1,0,1,1], runs: 3, wickets:1}, 
          'Pravin Prajapati': {overs: 1, balls:[1,1,1,1,1,0], runs: 5, wickets:0}, 
          'Milan Chauhan': {overs: 1, balls:['WK',0,1,'WK','WK','WD',0], runs: 2, wickets:2}, 
          'Pathik Mehta': {overs: 1, balls:[1,0,'WK',1,1,1], runs: 4, wickets:1}, 
          'Kewal Yadav': {overs: 0, balls:[], runs: 0, wickets:0}
        },
        extra: 1,
        oversBowled: 5
      }
    },
    2: {
      batting: {
        teamName: 'goblin',
        players: ['Ketul B Patel', 'Pathik Mehta', 'Pravin Prajapati','Parth Patel','Milan Chauhan'],
        score: {
          'Parth Patel': { balls:[0,0], '4s': 0, '6s': 0, total: 0, balls: 2, out: 'runout (Viresh Shah)'},
          'Ketul B Patel': { balls:[0,0,0], '4s': 0, '6s': 0, total: 0, balls: 4, out: 'c Kartik Patel b Maulik Shah'},
          'Kewal Yadav': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 0, out: ''},
          'Pathik Mehta': { balls:[1,1,0,0,0,0,0,1,1,0,0,0,0,1], '4s': 0, '6s': 0, total: 5, balls: 15, out: 'c Ashish Sangani b Viresh Shah'},
          'Milan Chauhan': { balls:[1,1], '4s': 0, '6s': 0, total: 2, balls: 2, out: ''},
          'Pravin Prajapati': { balls:[1,0,1,1,1,1,0,2,1,1], '4s': 0, '6s': 0, total: 9, balls: 10, out: ''}
        },
        extra: 0, wickets: 3,
        totalScore: 16
      },
      bowling: {
        team: 'lions',
        bowlers: ['Maulik Shah','Kashyap Thakkar','Ashish Sangani','Kartik Patel','Viresh Shah','Chirag Nathwani'],
        overs: {
          'Maulik Shah': {overs: 1, balls:[0,0,0,'WK',1,1], runs: 2, wickets:1}, 
          'Kartik Patel': {overs: 1, balls:[0,0,0,0,1,1], runs: 2, wickets:0}, 
          'Kashyap Thakkar': {overs: 1, balls:[1,0,1,0,0,0], runs: 2, wickets:0}, 
          'Viresh Shah': {overs: 1, balls:[0,2,1,'WK',0,0], runs: 3, wickets:1}, 
          'Chirag Nathwani': {overs: 0.4, balls:['WK',1,1,1], runs: 3, wickets:1}, 
          'Ashish Sangani': {overs: 1, balls:[1,0,0,1,1,1], runs: 4, wickets:0}
        },
        extra: 0,
        oversBowled: 5.4
      }
    }
  }
};

export default t33;