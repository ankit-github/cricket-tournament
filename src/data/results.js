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
  },
  "t1.1": {
    "royal": {"runs": 25, "wickets": 6, "overs": 5.4 },
    "hawk": {"runs": 33, "wickets": 4, "overs": 6 },
    "result": {
      "winner": "hawk",
      "margin": "8 runs"
    }
  },
  "t1.2": {
    "hawk": {"runs": 27, "wickets": 4, "overs": 5.3 },
    "goblin": {"runs": 26, "wickets": 5, "overs": 6 },
    "result": {
      "winner": "hawk",
      "margin": "2 wickets"
    }
  },
  "t1.3": {
    "royal": {"runs": 13, "wickets": 6, "overs": 5.3 },
    "goblin": {"runs": 14, "wickets": 2, "overs": 4.3 },
    "result": {
      "winner": "goblin",
      "margin": "4 wickets"
    }
  },
  "t2.1": {
    "slingers": {"runs": 17, "wickets": 4, "overs": 6 },
    "lions": {"runs": 39, "wickets": 4, "overs": 6 },
    "result": {
      "winner": "lions",
      "margin": "22 runs"
    }
  },
  "t2.2": {
    "slingers": {"runs": 15, "wickets": 6, "overs": 4.3 },
    "musketeers": {"runs": 21, "wickets": 3, "overs": 5.2 },
    "result": {
      "winner": "musketeers",
      "margin": "3 wickets"
    }
  },
  "t2.3": {
    "lions": {"runs": 27, "wickets": 2, "overs": 3.4 },
    "musketeers": {"runs": 26, "wickets": 5, "overs": 6 },
    "result": {
      "winner": "lions",
      "margin": "4 wickets"
    }
  }
};

const matches = {};

const addMatches = (phase, prefix) => (matchArray, scheduleDay, dayIndex) => {
  const modifiedMatches = scheduleDay.matches.map((match, index) =>{
    const matchKey = `${prefix}${dayIndex+1}.${match.matchNo}`;
    const matchObj = { key: matchKey, phase, result: results[matchKey] };
    for(const matchDataKey in match) {
      matchObj[matchDataKey] = match[matchDataKey];
    }
    return matchObj;
  });
  matchArray.push(...modifiedMatches);
  return matchArray;
};

matches.practice = schedule.practice.days.reduce(addMatches('Practice', 'p'), new Array());
matches.tournament = schedule.tournament.days.reduce(addMatches('Tournament', 't'), new Array());

export default matches;