import { combineReducers } from 'redux';
import { actions as InningsActions } from '../components/MatchInnings/actions';

const getInitialState = () => ({
  batting: {
    teamName: '',
    players: [],
    playersScore: [],
    totalScore: 0
  },
  bowling: {
    teamName: '',
    players: [],
    overDetails: [],
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