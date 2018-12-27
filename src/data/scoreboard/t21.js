export const t21 = {
  teams: ['eagles', 'phoenix'],
  toss: {
    wonBy: 'phoenix',
    selected: 'Batting'
  },
  innings: {
    1: {
      batting: {
        teamName: 'phoenix',
        players: ['Milan Chauhan','Ketul B Patel','Janak Patel','Sagar Gohil','Subodh Kumar','Gaurang Parmar'],
        score: {
          'Gaurang Parmar': { balls:[1,0,1,1,4], '4s': 0, '6s': 0, total: 2, balls: 9, out: ''},
          'Milan Chauhan': { balls:[1,1,0,0,1,1,4], '4s': 0, '6s': 0, total: 2, balls: 4, out: ''},
          'Janak Patel': { balls:[0,1,0,1,1], '4s': 0, '6s': 0, total: 2, balls: 4, out: ''},
          'Subodh Kumar': { balls:[], '4s': 0, '6s': 0, total: 0, balls: 2, out: ''},
          'Sagar Gohil': { balls:[1,0,0,4,0,0], '4s': 0, '6s': 0, total: 3, balls: 6, out: ''},
          'Ketul B Patel': { balls:[0,0,0,1,0,0,0,1,8], '4s': 1, '6s': 0, total: 10, balls: 15, out: ''}
        },
        extra: 4, wickets: 5,
        totalScore: 24
      },
      bowling: {
        team: 'eagles',
        bowlers: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        overs: {
          'Divyang Golaviya': {overs: 1, balls:['WD',1,0,0,'WK',0,0], runs: 2, wickets:0}, 
          'Chirag Nathwani': {overs: 1, balls:[], runs: 3, wickets:1}, 
          'Chintan Patel': {overs: 1, balls:[0,1,0,1,1,0], runs: 6, wickets:3}, 
          'Rahul Joshi': {overs: 1, balls:[6,1,1,'WD',1], runs: 4, wickets:0}, 
          'Bhavesh Lakhani': {overs: 1, balls:[4,1,'WD',0,0,1,1], runs: 2, wickets:1}, 
          'Ashish Sangani': {overs: 0.1, balls:[1,1,1,'WD',1,1,1], runs: 7, wickets:1}
        },
        extra: 4,
        oversBowled: 6
      }
    },
    2: {
      batting: {
        teamName: 'eagles',
       players: ['Chintan Patel','Rahul Joshi','Bhavesh Lakhani','Ashish Sangani','Chirag Nathwani','Divyang Golaviya'],
        score: {
          'Bhavesh Lakhani': { balls:[1,0,1,1,0], '4s': 0, '6s': 0, total: 8, balls: 10, out: ''},
          'Rahul Joshi': { balls:[0,1,0,1,0], '4s': 0, '6s': 0, total: 0, balls: 1, out: ' b Milan'},
          'Chirag Nathwani': { balls:[0,0,0,0,1,1], '4s': 0, '6s': 0, total: 4, balls: 5,out : '(bowled) b Janak'},
          'Divyang Golaviya': { balls:[0,0,0], '4s': 0, '6s': 0, total: 8, balls: 6, out: '(uppernet) b Subodh'},
          'Chintan Patel': { balls:[1,1,1,0,1,1,1], '4s': 0, '6s': 0, total: 4, balls: 5},
          'Ashish Sangani': { balls:[0,0,4,1,0,0,0], '4s': 1, '6s': 0, total: 0, balls: 0, out: ''}
        },
        extra: 2, wickets: 3,
        totalScore: 25
      },
      bowling: {
        team: 'phoenix',
        bowlers: ['Milan Chauhan','Ketul B Patel','Janak Patel','Sagar Gohil','Subodh Kumar','Gaurang Parmar'],
        overs: {
          'Milan Chauhan': {overs: 1, balls:[1,1,1,1,1,1], runs: 4, wickets:1}, 
          'Janak Patel': {overs: 1, balls:[0,0,'WK',0,1,1], runs: 5, wickets:1}, 
          'Subodh Kumar': {overs: 1, balls:[0,'NB',1,'WK',0,'WK',0], runs: 8, wickets:1}, 
          'Gaurang Parmar': {overs: 1, balls:[0,0,1,0,0,1], runs: 8, wickets:0},
          'Ketul B Patel': {overs: 0, balls:[1,0,1,0,'WK',1], runs: 0, wickets:0}, 
          'Sagar Gohil': {overs: 0, balls:[0,0,0,1,0,'WD',0], runs: 0, wickets:0} 
        },
        extra: 2,
        oversBowled: 3.4
      }
    }
  }
};

export default t21;