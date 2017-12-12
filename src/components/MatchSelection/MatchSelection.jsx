import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import MatchData from '../../data/matches';
import { matchSelectedAction } from './actions';

class MatchSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMatch: undefined,
      option: {}
    }
  }

  generateMatchTitle = ({matchNo, teams}) => {
    return `${matchNo}. ${teams[0]} Vs. ${teams[1]}`;
  }

  handleChange = ({option}) => {
    this.setState({
      selectedMatch: this.generateMatchTitle(option),
      option: {
        matchNo: option.matchNo, teams: option.teams
      }
    });
  }

  handleNext = (e) => {
    e.stopPropagation();
    this.props.proceedNext(this.state.option);
  }

  render() {
    return (
      <Box>
        <Heading level={3}>Select Match</Heading>
        <Box direction="row">
          <Select options={MatchData.matches} 
            placeHolder="Select Match" 
            children={this.generateMatchTitle}
            onChange={this.handleChange}
            value={this.state.selectedMatch} />
          <Button type="button" label="Next >" fill={false} onClick={this.handleNext}/>
        </Box>
      </Box>);
  }
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  proceedNext: (selectedMatch) => dispatch(matchSelectedAction(selectedMatch))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(MatchSelection);