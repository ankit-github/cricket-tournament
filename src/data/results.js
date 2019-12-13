import schedule from './schedule';

const results = {
  "p1.1": {
    "stars": {"runs": 37, "wickets": 3, "overs": 6 },
    "mojila": {"runs": 39, "wickets": 5, "overs": 5.5 },
    "result": {
      "winner": "mojila",
      "margin": "1 wicket"
    }
  },
  "p1.2": {
    "chaser": {"runs": 29, "wickets": 2, "overs": 2.4 },
    "tigers": {"runs": 24, "wickets": 6, "overs": 5 },    
    "result": {
      "winner": "chaser",
      "margin": "4 wickets"
    }
  },
  "p1.3": {
    "beagles": {"runs": 30, "wickets": 6, "overs": 6 },
    "tigers": {"runs": 11, "wickets": 6, "overs": 3.5 },
    "result": {
      "winner": "beagles",
      "margin": "19 runs"
    }
  },
  "p2.1": {
    "knights": {"runs": 6, "wickets": 6, "overs": 3.4 },
    "ieagles": {"runs": 18, "wickets": 0, "overs": 2.3 },
    "result": {
      "winner": "ieagles",
      "margin": "6 wickets"
    }
  },
  "p2.2": {
    "chaser": {"runs": 27, "wickets": 4, "overs": 6 },    
    "mojila": {"runs": 42, "wickets": 0, "overs": 2.2 },    
    "result": {
      "winner": "mojila",
      "margin": "6 wickets"
    }
  },
  "p2.3": {
    "beagles": {"runs": 20, "wickets": 6, "overs": 4 },
    "spirit": {"runs": 24, "wickets": 0, "overs": 1.1 },    
    "result": {
      "winner": "spirit",
      "margin": "6 wickets"
    }
  },
  "p3.1": {
    "spirit": {"runs": 31, "wickets": 4, "overs": 6 },
    "knights": {"runs": 24, "wickets": 6, "overs": 6 },    
    "result": {
      "winner": "spirit",
      "margin": "7 runs"
    }
  },
  "p3.2": {
    "ieagles": {"runs": 27, "wickets": 4, "overs": 6 },    
    "stars": {"runs": 22, "wickets": 4, "overs": 6 },    
    "result": {
      "winner": "ieagles",
      "margin": "5 runs"
    }
  },
  "p3.3": {
    "eagles": {"runs": 21, "wickets": 3, "overs": 5 },
    "dominators": {"runs": 17, "wickets": 5, "overs": 4.1 },    
    "result": {
      "winner": "eagles",
      "margin": "4 runs"
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