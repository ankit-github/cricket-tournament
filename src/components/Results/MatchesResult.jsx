import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Layer from 'grommet/components/Layer';
import ScoreCard from './ScoreCard';
import TeamData from '../../data/teams';

class MatchesResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
      matchKey: '',
      details: {}
    }
  }

  openScorecard = (matchKey, details) => {
    if(this.props.detailedResult) {
      this.setState({
        showLayer: true,
        matchKey: matchKey,
        details: details
      });
    }
  }

  closeScorecard = (matchKey) => {
    this.setState({
      showLayer: false,
      matchKey: '',
      details: {}
    });
  }

  render() {
    const { matches } = this.props;
    const { showLayer, matchKey, details} = this.state;
    return (
      <Box>
      { matches.map((match, index) => {
          return match.result && <React.Fragment key={match.key}>
            <Box pad="xsmall" align="center" className="match-result" onClick={() => this.openScorecard(match.key, match)}>
              <Box direction="row">
                <Box direction="row" align="center">
                  <Box align="center" margin={{ horizontal: 'medium' }}>
                    <Box><strong>{match.result[match.teams[0]].runs}/{match.result[match.teams[0]].wickets}</strong></Box>
                    <Box>({match.result[match.teams[0]].overs})</Box>
                  </Box>
                  <Image src={TeamData[match.teams[0]].image} {...TeamData[match.teams[0]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[0]].name}</Box>
                </Box>
                <Box justify="center" margin={{horizontal:'small'}}>Vs.</Box>
                <Box direction="row" align="center" reverse>
                  <Box align="center" margin={{ horizontal: 'medium' }}>
                    <Box><strong>{match.result[match.teams[1]].runs}/{match.result[match.teams[1]].wickets}</strong></Box>
                    <Box>({match.result[match.teams[1]].overs})</Box>
                  </Box>
                  <Image src={TeamData[match.teams[1]].image} {...TeamData[match.teams[1]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[1]].name}</Box>
                </Box>
              </Box>
              <Box direction="row"><strong>{TeamData[match.result.result.winner].name}</strong>&nbsp;won by&nbsp;<strong>{match.result.result.margin}.</strong></Box>
            </Box>
          </React.Fragment>
        })
      }
      { showLayer && <Layer position="center" onEsc={this.closeScorecard}>
          <ScoreCard matchKey={matchKey} closeHandler={this.closeScorecard} matchDetails={details} />
        </Layer> }
      </Box>);
  }
}

MatchesResult.defaultProps = {
  detailedResult: true
};

export default MatchesResult;