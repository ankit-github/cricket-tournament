import React from 'react';
import { connect } from 'react-redux';
import MatchSelection from '../MatchSelection';
import Toss from '../Toss';
import MatchInning from '../MatchInnings';
import CommingSoon from '../ComingSoon';
import { MATCH_STATES } from '../../common/Constants';

const MatchScorecard = (props) => {
  let ScoreboardComponent;
  const componentProps = {};
  switch(props.currentState) {
    case MATCH_STATES.INITIAL:
      ScoreboardComponent = MatchSelection;
      break;
    case MATCH_STATES.TOSS:
      ScoreboardComponent = Toss;
      break;
    case MATCH_STATES.FIRSTINNING:
      ScoreboardComponent = MatchInning;
      componentProps.currentInning = 'first';
      break;
    case MATCH_STATES.SECONDINNING:
      ScoreboardComponent = MatchInning;
      componentProps.currentInning = 'second';
      break;
    default:
      ScoreboardComponent = CommingSoon;
  }
  return (
    <ScoreboardComponent {...componentProps} />
  );
}

const mapStateToProps = (state) => {
  return {
    currentState: state.matchDetail.stage
  }
}

export default connect(mapStateToProps)(MatchScorecard);