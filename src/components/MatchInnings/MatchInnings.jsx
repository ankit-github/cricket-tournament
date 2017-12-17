import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import { saveInningsTeamData } from './actions';
import { MatchAreas } from '../../data/defaults';
import TeamData from '../../data/teams';


class MatchInnings extends React.Component {

  componentWillMount() {
    console.log(this.props);
    this.props.setInningsTeamData();
  }

  render() {
    return(
      <Box>

      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  matchDetail: state.matchDetail,
  toss: state.toss,
  inningData: state.innings[ownProps.currentInning]
});

const mapDispatchToProps = (dispatch) => ({ dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const inningsTeamData = { batting: {}, bowling: {}};
  if(!stateProps.inningData.batting.teamName) {
    const tossWinBy = stateProps.toss.winBy;
    const teams = stateProps.matchDetail.teams;
    const otherTeam = teams[0] === tossWinBy ? teams[1] : teams[0];

    if(stateProps.toss.selected === MatchAreas.BATTING) {
      inningsTeamData.batting.teamName = tossWinBy;
      inningsTeamData.batting.players = TeamData[tossWinBy].players;
      inningsTeamData.bowling.teamName = otherTeam;
      inningsTeamData.bowling.players = TeamData[otherTeam].players;
    } else {
      inningsTeamData.batting.teamName = otherTeam;
      inningsTeamData.batting.players = TeamData[otherTeam].players;
      inningsTeamData.bowling.teamName = tossWinBy;
      inningsTeamData.bowling.players = TeamData[tossWinBy].players;
    }
  }
  const setInningsTeamData = () => dispatchProps.dispatch(saveInningsTeamData(ownProps.currentInning, inningsTeamData));

  return Object.assign({}, ownProps, stateProps, dispatchProps, {setInningsTeamData});
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MatchInnings);