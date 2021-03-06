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
  },
  
  "t1.1": {
    "stars": {"runs": 18, "wickets": 5, "overs": 6 },
    "chaser": {"runs": 19, "wickets": 3, "overs": 4.3 },    
    "result": {
      "winner": "chaser",
      "margin": "3 wickets"
    }
  },
  "t1.2": {
    "beagles": {"runs": 46, "wickets": 4, "overs": 6 },
    "knights": {"runs": 36, "wickets": 6, "overs": 5.5 },    
    "result": {
      "winner": "beagles",
      "margin": "10 runs"
    }
  },
  "t1.3": {
    "ieagles": {"runs": 28, "wickets": 6, "overs": 4.4 },
    "mojila": {"runs": 21, "wickets": 5, "overs": 6 },    
    "result": {
      "winner": "ieagles",
      "margin": "7 runs"
    }
  },
  "t1.4": {
    "spirit": {"runs": 44, "wickets": 4, "overs": 6 },
    "tigers": {"runs": 10, "wickets": 5, "overs": 4.4 },    
    "result": {
      "winner": "spirit",
      "margin": "34 runs"
    }
  },
  "t1.5": {
    "chaser": {"runs": 32, "wickets": 2, "overs": 6 },
    "knights": {"runs": 13, "wickets": 6, "overs": 3 },    
    "result": {
      "winner": "chaser",
      "margin": "19 runs"
    }
  },
  "t1.6": {
    "beagles": {"runs": 31, "wickets": 4, "overs": 6 },
    "stars": {"runs": 32, "wickets": 2, "overs": 5.3 },    
    "result": {
      "winner": "stars",
      "margin": "4 wickets"
    }
  },
  "t2.1": {
    "eagles": {"runs": 36, "wickets": 1, "overs": 5 },
    "dominators": {"runs": 29, "wickets": 1, "overs": 5 },    
    "result": {
      "winner": "eagles",
      "margin": "7 runs"
    }
  },
  "t2.2": {
    "dominators": {"runs": 22, "wickets": 2, "overs": 5 },  
    "eagles": {"runs": 16, "wickets": 4, "overs": 5 },      
    "result": {
      "winner": "dominators",
      "margin": "6 runs"
    }
  },  
  "t3.1": {
    "ieagles": {"runs": 40, "wickets": 5, "overs": 6 },
    "spirit": {"runs": 17, "wickets": 6, "overs": 5.3 },    
    "result": {
      "winner": "ieagles",
      "margin": "23 runs"
    }
  },
  "t3.2": {
    "mojila": {"runs": 24, "wickets": 6, "overs": 5.1 },
    "tigers": {"runs": 25, "wickets": 3, "overs": 5.3 },    
    "result": {
      "winner": "tigers",
      "margin": "3 wickets"
    }
  },
  "t3.3": {
    "spirit": {"runs": 9, "wickets": 6, "overs": 3.3 },
    "mojila": {"runs": 10, "wickets": 2, "overs": 3.3 },    
    "result": {
      "winner": "mojila",
      "margin": "4 wickets"
    }
  },
  "t3.4": {
    "stars": {"runs": 23, "wickets": 6, "overs": 6 },
    "knights": {"runs": 24, "wickets": 2, "overs": 4.4 },    
    "result": {
      "winner": "knights",
      "margin": "4 wickets"
    }
  },
  "t3.5": {
    "chaser": {"runs": 29, "wickets": 6, "overs": 5.3 },
    "beagles": {"runs": 30, "wickets": 3, "overs": 6 },    
    "result": {
      "winner": "beagles",
      "margin": "3 wickets"
    }
  },
  "t3.6": {
    "ieagles": {"runs": 22, "wickets": 3, "overs": 6 },
    "tigers": {"runs": 16, "wickets": 5, "overs": 5 },    
    "result": {
      "winner": "ieagles",
      "margin": "6 runs"
    }
  },
  "t4.1": {
    "eagles": {"runs": 18, "wickets": 1, "overs": 5 },    
    "dominators": {"runs": 19, "wickets": 3, "overs": 4.2 },    
    "result": {
      "winner": "dominators",
      "margin": "2 wickets"
    }
  },
  "t4.2": {
    "spirit": {"runs": 36, "wickets": 4, "overs": 6 },
    "chaser": {"runs": 23, "wickets": 6, "overs": 5.4 },    
    "result": {
      "winner": "spirit",
      "margin": "13 runs"
    }
  },
  "t4.3": {
    "ieagles": {"runs": 33, "wickets": 2, "overs": 6 },
    "beagles": {"runs": 16, "wickets": 5, "overs": 5.3 },    
    "result": {
      "winner": "ieagles",
      "margin": "17 runs"
    }
  },
  "t4.4": {
    "spirit": {"runs": 27, "wickets": 3, "overs": 6 },
    "ieagles": {"runs": 28, "wickets": 1, "overs": 5.2 },    
    "result": {
      "winner": "ieagles",
      "margin": "5 wickets"
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