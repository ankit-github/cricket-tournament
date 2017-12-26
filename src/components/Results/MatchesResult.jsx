import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import TeamData from '../../data/teams';

const MatchesResult = ({ matches }) => (
  <Box>
  { matches.map((match, index) => {
      return match.result && <React.Fragment key={match.key}>
        <Box pad="xsmall" align="center" className="match-result">
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
  </Box>
);

export default MatchesResult;