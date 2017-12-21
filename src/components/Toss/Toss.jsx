import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Text   from 'grommet/components/Text';
import Button from 'grommet/components/Button';
import { MatchAreas } from '../../data/defaults';
import TeamData from '../../data/teams';
import { completeTossAction } from './actions';

class Toss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: props.teams[0],
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
          <Box>
            <Text><strong>Won By</strong></Text>
            <Select options={this.props.teams}
              onChange={this.handleTeamChange}
              children={this.generateTeamTitles}
              value={TeamData[this.state.teamName].name} />
          </Box>
          <Box>
            <Text><strong>Selected First</strong></Text>
            <Select options={Object.keys(MatchAreas)} 
            onChange={this.handleAreaChange}
            value={this.state.selection} />
          </Box>
          <Box pad="small">
            <Button type="button" label="Next >" fill={false} onClick={this.handleNext}/>
          </Box>
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