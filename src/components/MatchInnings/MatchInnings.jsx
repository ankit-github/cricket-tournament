import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Grid from 'grommet/components/Grid';
import CommingSoon from '../ComingSoon';
import SelectOpeningBatsman from './SelectOpeningBatsman';
import SelectBowler from './SelectBowler';
import { saveInningsTeamData } from './actions';
import { MatchAreas } from '../../data/defaults';
import TeamData from '../../data/teams';


class MatchInnings extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
      nextAction: 'SELECT_OPENING_BATSMAN'
    };
  }

  componentWillMount() {
    this.props.setInningsTeamData();
  }

  afterSetOpeningBatsman = () => {
    this.setState({
      nextAction: 'SELECT_BOWLER'
    });
  }

  afterSetBowler = () => {
    this.setState({
      nextAction: 'START_OVER'
    });
  }

  render() {
    let InningAction = CommingSoon;
    const componentProps = {};
    componentProps.currentInning = this.props.currentInning;

    switch(this.state.nextAction) {
      case 'SELECT_OPENING_BATSMAN':
        InningAction = SelectOpeningBatsman;
        componentProps.goToNext = this.afterSetOpeningBatsman;
        break;
      case 'SELECT_BOWLER':
        InningAction = SelectBowler;
        componentProps.goToNext = this.afterSetBowler;
        break;
      case 'START_OVER':
        InningAction = StartOver;
        break;
    }
    return <InningAction {...componentProps}/>;
  }
}


/* Redux Portion */
const mapStateToProps = (state, ownProps) => ({
  matchDetail: state.matchDetail,
  toss: state.toss,
  inningData: state.innings[ownProps.currentInning]
});

const mapDispatchToProps = (dispatch, ownProps) => ({ dispatch });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const inningsTeamData = { batting: {}, bowling: {}};
  if(!stateProps.inningData.batting.teamName) {
    const tossWinBy = stateProps.toss.winBy;
    const teams = stateProps.matchDetail.teams;
    const otherTeam = teams[0] === tossWinBy ? teams[1] : teams[0];

    if(stateProps.toss.selected === MatchAreas.BATTING) {
      inningsTeamData.batting.teamName = tossWinBy;
      inningsTeamData.batting.players = TeamData[tossWinBy].players;
      inningsTeamData.batting.onBench = TeamData[tossWinBy].players;
      inningsTeamData.bowling.teamName = otherTeam;
      inningsTeamData.bowling.players = TeamData[otherTeam].players;
    } else {
      inningsTeamData.batting.teamName = otherTeam;
      inningsTeamData.batting.players = TeamData[otherTeam].players;
      inningsTeamData.batting.onBench = TeamData[otherTeam].players;
      inningsTeamData.bowling.teamName = tossWinBy;
      inningsTeamData.bowling.players = TeamData[tossWinBy].players;
    }
  }
  const setInningsTeamData = () => dispatchProps.dispatch(saveInningsTeamData(ownProps.currentInning, inningsTeamData));

  return Object.assign({}, ownProps, stateProps, dispatchProps, {setInningsTeamData});
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MatchInnings);