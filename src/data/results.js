import schedule from './schedule';

const results = {
  
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