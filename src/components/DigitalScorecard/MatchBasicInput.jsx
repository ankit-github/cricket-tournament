import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import MatchData from '../../data/matches';

class MatchBasicInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMatch: undefined
    }
  }

  generateMatchTitle = ({matchNo, teams}) => {
    return `${matchNo}. ${teams[0]} Vs. ${teams[1]}`;
  }

  handleChange = ({option}) => {
    this.setState({
      selectedMatch: this.generateMatchTitle(option)
    });
  }

  render() {
    return (
      <Box>
        <Heading level={3}>Select Match</Heading>
        <Select options={MatchData.matches} 
          placeHolder="Select Match" 
          children={this.generateMatchTitle}
          onChange={this.handleChange}
          value={this.state.selectedMatch} />
        <Button label="Next >" />
      </Box>);
  }
};

export default MatchBasicInput;