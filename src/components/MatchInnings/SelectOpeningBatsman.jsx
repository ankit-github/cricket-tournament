import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import Text from 'grommet/components/Text';
import { setOpeningBatsman } from './actions';

class SelectOpeningBatsman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strike: props.players[0],
      nonStrike: props.players[1]
    }
  }

  setStrikeBatsman = ({ option: batsman }) => {
    console.log(batsman);
    this.setState({
      strike: batsman
    });
  }

  setNonStrikeBatsman = ({ option: batsman }) => {
    this.setState({
      nonStrike: batsman
    });
  }

  submitForm = (e) => {
    if(this.state.strike !== this.state.nonStrike) {
      this.props.setOpeningPlayers(this.state.strike, this.state.nonStrike);
      this.props.goToNext();
    }
  }

  render () {
    return (
      <Box>
          <Heading level={3}>Select Opening Batsman - {this.props.team}</Heading>
          <Box direction="row">
            <Box>
              <Text> Stike </Text>
              <Select options={this.props.players} value={this.state.strike} onChange={this.setStrikeBatsman} />
            </Box>
            <Box>
              <Text> Non Stike </Text>
              <Select options={this.props.players} value={this.state.nonStrike} onChange={this.setNonStrikeBatsman}/>
            </Box>
          </Box>
          <Button type="submit" label="Next >" onClick={this.submitForm}/>
      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  team: state.innings[ownProps.currentInning].batting.teamName,
  players: state.innings[ownProps.currentInning].batting.players
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  setOpeningPlayers: (strike, nonStrike) => dispatch(setOpeningBatsman(ownProps.currentInning, strike, nonStrike))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectOpeningBatsman);