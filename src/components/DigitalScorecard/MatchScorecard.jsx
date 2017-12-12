import React from 'react';
import { connect } from 'react-redux';
import MatchSelection from '../MatchSelection';
import Toss from '../Toss';
import CommingSoon from '../ComingSoon';
import { MATCH_STATES } from '../../common/Constants';

const MatchScorecard = (props) => {
  let ScoreboardComponent;
  switch(props.currentState) {
    case MATCH_STATES.INITIAL:
      ScoreboardComponent = MatchSelection;
      break;
    case MATCH_STATES.TOSS:
      ScoreboardComponent = Toss;
      break;
    default:
      ScoreboardComponent = CommingSoon;
  }
  return (
    <ScoreboardComponent />
  );
}

const mapStateToProps = (state) => {
  return {
    currentState: state.matchDetail.stage
  }
}

export default connect(mapStateToProps)(MatchScorecard);