import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import { MatchAreas } from '../../data/defaults';
import TeamData from '../../data/teams'
import { completeTossAction } from './actions';

class Toss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      selection: ''
    };
  }

  handleTeamChange = ({ option }) => {
    this.setState({
      teamName: option
    });
  }

  handleAreaChange = ({ option }) => {
    this.setState({
      selection: option
    });
  }

  handleNext = (e) => {
    e.stopPropagation();
    this.props.completeToss(this.state);
  }

  generateTeamTitles = (team) => TeamData[team].name;

  render ()  {
    return (
      <Box>
        <Heading level={3}>Toss</Heading>
        <Box direction="row">
          <Select options={this.props.teams}
            onChange={this.handleTeamChange}
            children={this.generateTeamTitles}
            value={this.state.teamName} />
          <Select options={Object.keys(MatchAreas)} 
            onChange={this.handleAreaChange}
            value={this.state.selection} />
          <Button type="button" label="Next >" fill={false} onClick={this.handleNext}/>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.matchDetail.teams
});

const mapDispatchToProps = (dispatch) => ({
  completeToss: (result) => dispatch(completeTossAction(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toss);