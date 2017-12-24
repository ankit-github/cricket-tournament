import schedule from './schedule';

const results = {
  "p1.1": {
    "royal": {"runs": 35, "wickets": 1, "overs": 5 },
    "slingers": {"runs": 17, "wickets": 6, "overs": 4.3 },
    "result": {
      "winner": "royal",
      "margin": "18 runs"
    }
  },
  "p1.2": {
    "hawk": {"runs": 33, "wickets": 4, "overs": 5 },
    "lions": {"runs": 15, "wickets": 6, "overs": 4 },
    "result": {
      "winner": "hawk",
      "margin": "18 runs"
    }
  },
  "p1.3": {
    "royal": {"runs": 20, "wickets": 4, "overs": 5 },
    "lions": {"runs": 30, "wickets": 4, "overs": 5 },
    "result": {
      "winner": "lions",
      "margin": "10 runs"
    }
  },
  "p1.4": {
    "hawk": {"runs": 10, "wickets": 6, "overs": 4 },
    "slingers": {"runs": 47, "wickets": 1, "overs": 5 },
    "result": {
      "winner": "slingers",
      "margin": "37 runs"
    }
  },
  "p2.1": {
    "guts": {"runs": 28, "wickets": 3, "overs": 5 },
    "hit": {"runs": 30, "wickets": 1, "overs": 3.2 },
    "result": {
      "winner": "hit",
      "margin": "4 wickets"
    }
  },
  "p2.2": {
    "goblin": {"runs": 27, "wickets": 4, "overs": 5 },
    "musketeers": {"runs": 36, "wickets": 4, "overs": 5 },
    "result": {
      "winner": "musketeers",
      "margin": "9 runs"
    }
  },
  "p2.3": {
    "goblin": {"runs": 25, "wickets": 4, "overs": 5 },
    "musketeers": {"runs": 17, "wickets": 6, "overs": 4.4 },
    "result": {
      "winner": "goblin",
      "margin": "8 runs"
    }
  }
};
/*
const matches = [];

const addMatches = (phase, prefix) => (matchArray, scheduleDay, dayIndex) => {
  const modifiedMatches = scheduleDay.matches.map((match, index) =>({key: `${prefix}${dayIndex}.${match.matchNo}`, phase, ...match}));
  matchArray.push(...modifiedMatches);
  return matchArray;
};

matches.push(...schedule.practice.days.reduce(addMatches('Practice', 'p'), new Array()));
matches.push(...schedule.tournament.days.reduce(addMatches('Tournament', 't'), new Array()));

const ResultData = {
  matches
};
*/
export default results;