import schedule from './schedule';

const matches = [];

const addMatches = (phase, prefix) => (matchArray, scheduleDay, dayIndex) => {
  const modifiedMatches = scheduleDay.matches.map((match, index) =>({key: `${prefix}${dayIndex}.${match.matchNo}`, phase, ...match}));
  matchArray.push(...modifiedMatches);
  return matchArray;
};

matches.push(...schedule.practice.days.reduce(addMatches('Practice', 'p'), new Array()));
matches.push(...schedule.tournament.days.reduce(addMatches('Tournament', 't'), new Array()));

const MatchData = {
  matches
};

export default MatchData;