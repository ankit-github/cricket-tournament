import React from 'react';
import MatchBasicInput from './MatchBasicInput';

const STATE = {
  INITIAL: 'INITIAL',
  TOSS: 'TOSS',
  FIRSTINNING: 'FIRSTINNING',
  SECONDINNING: 'SECONDINNING',
  RESULT: 'RESULT'
};

const EVENT_SEQUENCE = [STATE.INITIAL, STATE.TOSS, STATE.FIRSTINNING, STATE.SECONDINNING, STATE.RESULT];

class MatchScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventIndex: 0
    };
  }

  render() {
    let ScoreboardComponent;
    switch(EVENT_SEQUENCE[this.state.eventIndex]) {
      case STATE.INITIAL:
        ScoreboardComponent = MatchBasicInput
        break;
    }
    return <ScoreboardComponent />;
  }
}

export default MatchScoreBoard;