import schedule from './schedule';

const results = {
  "p1.1": {
    "phoenix": {"runs": 26, "wickets": 5, "overs": 5 },
    "tigers": {"runs": 27, "wickets": 4, "overs": 4 },    
    "result": {
      "winner": "tigers",
      "margin": "2 wickets"
    }
  },
  "p1.2": {
    "eagles": {"runs": 25, "wickets": 3, "overs": 5 },
    "spirit": {"runs": 13, "wickets": 3, "overs": 5 },    
    "result": {
      "winner": "eagles",
      "margin": "12 runs"
    }
  },
  "p1.3": {
    "tigers": {"runs": 15, "wickets": 5, "overs": 4.3 },
    "eagles": {"runs": 21, "wickets": 4, "overs": 3 },
    "result": {
      "winner": "eagles",
      "margin": "2 wicekt"
    }
  },
  "p1.4": {
    "spirit": {"runs": 39, "wickets": 6, "overs": 5 },
    "phoenix": {"runs": 15, "wickets": 4, "overs": 5 },
    "result": {
      "winner": "spirit",
      "margin": "24 runs"
    }
  },
  "p2.1": {
    "birds": {"runs": 12, "wickets": 2, "overs": 5 },
    "smashers": {"runs": 13, "wickets": 0, "overs": 2.5 },    
    "result": {
      "winner": "smashers",
      "margin": "5 wickets"
    }
  },
  "p2.2": {
    "smashers": {"runs": 8, "wickets": 1, "overs": 3 },
    "birds": {"runs": 9, "wickets": 1, "overs": 1.5 },
    "result": {
      "winner": "birds",
      "margin": "4 wickets"
    }
  },
  "p2.3": {
    "knights": {"runs": 5, "wickets": 6, "overs": 4.5 },
    "stars": {"runs": 6, "wickets": 0, "overs": 0.4 },    
    "result": {
      "winner": "stars",
      "margin": "6 wickets"
    }
  },
  "p2.4": {
    "stars": {"runs": 13, "wickets": 5, "overs": 5 },
    "knights": {"runs": 14, "wickets": 2, "overs": 2.5 },
    "result": {
      "winner": "knights",
      "margin": "4 wickets"
    }
  }/*
  "t1.1": {
    "tigers": {"runs": 25, "wickets": 6, "overs": 5.4 },
    "spirit": {"runs": 33, "wickets": 4, "overs": 6 },
    "result": {
      "winner": "spirit",
      "margin": "8 runs"
    }
  },
  "t1.2": {
    "spirit": {"runs": 27, "wickets": 4, "overs": 5.4 },
    "stars": {"runs": 26, "wickets": 5, "overs": 6 },
    "result": {
      "winner": "spirit",
      "margin": "2 wickets"
    }
  },
  "t1.3": {
    "tigers": {"runs": 13, "wickets": 6, "overs": 5.4 },
    "stars": {"runs": 14, "wickets": 2, "overs": 4.3 },
    "result": {
      "winner": "stars",
      "margin": "4 wickets"
    }
  },
  "t2.1": {
    "phoenix": {"runs": 17, "wickets": 4, "overs": 6 },
    "eagles": {"runs": 39, "wickets": 4, "overs": 6 },
    "result": {
      "winner": "eagles",
      "margin": "22 runs"
    }
  },
  "t2.2": {
    "phoenix": {"runs": 15, "wickets": 6, "overs": 4.3 },
    "knights": {"runs": 21, "wickets": 3, "overs": 5.2 },
    "result": {
      "winner": "knights",
      "margin": "3 wickets"
    }
  },
  "t2.3": {
    "eagles": {"runs": 27, "wickets": 2, "overs": 3.4 },
    "knights": {"runs": 26, "wickets": 5, "overs": 6 },
    "result": {
      "winner": "eagles",
      "margin": "4 wickets"
    }
  }*/
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