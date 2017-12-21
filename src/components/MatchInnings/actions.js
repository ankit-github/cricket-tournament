const actions = {
  SET_INNINGS_TEAM_INFO: 'SET_INNINGS_TEAM_INFO',
  SET_OPENING_BATSMAN: 'SET_OPENING_BATSMAN',
  SET_BOWLER: 'SET_BOWLER'
};

const saveInningsTeamData = (currentInning, inningsTeamData) => ({
    type: actions.SET_INNINGS_TEAM_INFO,
    currentInning,
    data: inningsTeamData
});

const setOpeningBatsman = (currentInning, onStrike, nonStrike) => ({
  type: actions.SET_OPENING_BATSMAN,
  currentInning,
  data: {onStrike, nonStrike}
});

const setBowler = (currentInning, currentBowler) => ({
  type: actions.SET_BOWLER,
  currentInning,
  data: { currentBowler }
});

export { actions, saveInningsTeamData, setOpeningBatsman, setBowler };