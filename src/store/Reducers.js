import { combineReducers } from 'redux';

import matchDetailsReducer from '../reducers/MatchDetailsReducer';
import tossReducer from '../reducers/TossReducer';
import inningsReducer from '../reducers/InningsReducer';

const reducers = {
  matchDetail: matchDetailsReducer,
  toss: tossReducer,
  innings: inningsReducer
}

export default combineReducers(reducers);