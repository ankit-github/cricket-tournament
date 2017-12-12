const initialState = {
  batting: {
    teamName: '',
    playersScore: [],
    totalScore: 0
  },
  bowling: {
    teamName: '',
    overDetails: [],
    extra: {},
    wickets: 0
  }
};

const inningsReducer = (state = initialState, action) => {
  return state;
};

export default inningsReducer;