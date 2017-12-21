import { combineReducers } from 'redux';
import { actions as InningsActions } from '../components/MatchInnings/actions';

const getInitialState = () => ({
  batting: {
    teamName: '',
    players: [],
    onStrike: '',
    nonStrike: '',
    onBench: [], 
    playerScore: [],
    totalScore: 0
  },
  bowling: {
    teamName: '',
    players: [],
    overDetails: [],
    currentBowler: '',
    currentOver: [],
    extra: {},
    wickets: 0
  }
});

const inningsReducer = (inningKey, initialState) => (state = initialState, action) => {
  let inningData = state;
  if(action.currentInning !== inningKey) {
    return inningData;
  }
  
  switch(action.type) {
    case InningsActions.SET_INNINGS_TEAM_INFO:
      inningData.batting = {...inningData.batting, ...action.data.batting};
      inningData.bowling = {...inningData.bowling, ...action.data.bowling};
      break;
    case InningsActions.SET_OPENING_BATSMAN:
      const remainingOnBench = inningData.batting.onBench.filter((player) => player != action.data.onStrike && player != action.data.nonStrike);
      inningData.batting = {...inningData.batting, ...action.data, onBench: remainingOnBench};
      break;
    case InningsActions.SET_BOWLER:
      inningData.bowling = {...inningData.bowling, ...action.data};
      break;
    default:
      console.log(action.type);
  }

  return inningData;
};

const bothInningsReducer = {
  first: inningsReducer('first', getInitialState()),
  second: inningsReducer('second', getInitialState()),
}

export default combineReducers(bothInningsReducer);