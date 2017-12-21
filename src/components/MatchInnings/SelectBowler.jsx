import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import Text from 'grommet/components/Text';
import { setBowler } from './actions';

class SelectBowler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bowler: props.players[0]
    }
  }

  setBowler = ({ option: bowler }) => {
    this.setState({ bowler });
  }

  submitBowler = (e) => {
    this.props.setBowler(this.state.bowler);
    this.props.goToNext();
  }

  render () {
    return (
      <Box>
          <Heading level={3}>Select Bowler - {this.props.team}</Heading>
          <Box direction="row">
            <Box>
              <Text> Bowler </Text>
              <Select options={this.props.players} value={this.state.bowler} onChange={this.setBowler} />
            </Box>
          </Box>
          <Button type="button" label="Next >" onClick={this.submitBowler}/>
      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  team: state.innings[ownProps.currentInning].bowling.teamName,
  players: state.innings[ownProps.currentInning].bowling.players
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setBowler: (bowler) => dispatch(setBowler(ownProps.currentInning, bowler))
});

export default  connect(mapStateToProps, mapDispatchToProps)(SelectBowler);