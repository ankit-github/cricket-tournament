import { MATCH_STATES } from '../common/Constants';
import { matchActions } from '../components/MatchSelection/actions';

const initialState = {
  matchNo: -1,
  teams: [],
  stage: MATCH_STATES.INITIAL
};

const matchDetailsReducer = (state = initialState, action) => {
  let matchDetails = state;
  switch(action.type) {
    case matchActions.PROCEED_NEXT:
      matchDetails = { ...action.selectedMatch, stage: MATCH_STATES.TOSS }
      break;
  }
  return matchDetails;
};

export default matchDetailsReducer;