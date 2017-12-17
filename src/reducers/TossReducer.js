import { TossActions } from '../components/Toss/actions';

const initialState = {
  winBy: '',
  selected: ''
};

const tossReducer = (state = initialState, action) => {
  let tossStatus = state;
  switch (action.type) {
    case TossActions.COMPLETE_TOSS: 
      tossStatus = { ...state, winBy: action.result.teamName, selected: action.result.selection };
  }
  return tossStatus;
};

export default tossReducer;