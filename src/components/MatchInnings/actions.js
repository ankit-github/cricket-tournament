const actions = {
  SET_INNINGS_TEAM_INFO: 'SET_INNINGS_TEAM_INFO'
};

const saveInningsTeamData = (currentInning, inningsTeamData) => ({
    type: actions.SET_INNINGS_TEAM_INFO,
    currentInning,
    data: inningsTeamData
});

export { actions, saveInningsTeamData };