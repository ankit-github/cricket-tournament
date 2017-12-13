import { MATCH_STATES } from '../common/Constants';
import { matchActions } from '../components/MatchSelection/actions';
import { TossActions } from '../components/Toss/actions';

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
    case TossActions.COMPLETE_TOSS:
      matchDetails = { ...matchDetails, stage: MATCH_STATES.FIRSTINNING }
      break;
  }
  return matchDetails;
};

export default matchDetailsReducer;