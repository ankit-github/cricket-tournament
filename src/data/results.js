import schedule from './schedule';

const results = {
  "p1.1": {
    "royal": {"runs": 100, "wickets": 6, "overs": 5 },
    "slingers": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "royal",
      "margin": "XXXX"
    }
  },
  "p1.2": {
    "hawk": {"runs": 100, "wickets": 6, "overs": 5 },
    "lions": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "hawk",
      "margin": "XXXX"
    }
  },
  "p1.3": {
    "royal": {"runs": 100, "wickets": 6, "overs": 5 },
    "lions": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "lions",
      "margin": "XXXX"
    }
  },
  "p1.4": {
    "hawk": {"runs": 100, "wickets": 6, "overs": 5 },
    "slingers": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "slingers",
      "margin": "XXXX"
    }
  },
  "p2.1": {
    "guts": {"runs": 100, "wickets": 6, "overs": 5 },
    "hit": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "slingers",
      "margin": "XXXX"
    }
  },
  "p2.2": {
    "goblin": {"runs": 100, "wickets": 6, "overs": 5 },
    "musketeers": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "goblin",
      "margin": "XXXX"
    }
  },
  "p2.3": {
    "goblin": {"runs": 100, "wickets": 6, "overs": 5 },
    "musketeers": {"runs": 100, "wickets": 6, "overs": 5},
    "result": {
      "winner": "musketeers",
      "margin": "XXXX"
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