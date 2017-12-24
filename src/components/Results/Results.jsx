import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import scheduleData from '../../data/schedule';
import TeamData from '../../data/teams';
import ResultData from '../../data/results';

const Results = (props) => (
  <Box>
    <Heading level={3}>Results</Heading>
    <Box className="bottom-line"></Box>
    {
      scheduleData.practice.days.map((day, dayIndex) => (
        <React.Fragment key={day}>
          <Box pad={{vertical: 'small'}}>
            <strong>{day.date}</strong>
          </Box>
          {day.matches.map((match, matchIndex) => (
            <Box pad="xsmall" align="center" className="match-result">
              <Box direction="row" >
                <Box direction="row" align="center">
                  <Box align="center" margin={{ horizontal: 'medium' }}>
                    <Box><strong>{ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[0]].runs}/{ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[0]].wickets}</strong></Box>
                    <Box>({ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[0]].overs})</Box>
                  </Box>
                  <Image src={TeamData[match.teams[0]].image} {...TeamData[match.teams[0]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[0]].name}</Box>
                </Box>
                <Box justify="center" margin={{horizontal:'small'}}>Vs.</Box>
                <Box direction="row" align="center" reverse>
                  <Box align="center" margin={{ horizontal: 'medium' }}>
                    <Box><strong>{ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[1]].runs}/{ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[1]].wickets}</strong></Box>
                    <Box>({ResultData[`p${dayIndex+1}.${matchIndex+1}`][match.teams[1]].overs})</Box>
                  </Box>
                  <Image src={TeamData[match.teams[1]].image} {...TeamData[match.teams[1]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[1]].name}</Box>
                </Box>
              </Box>
              <Box direction="row"><strong>{TeamData[ResultData[`p${dayIndex+1}.${matchIndex+1}`].result.winner].name}</strong>&nbsp;won by&nbsp;<strong>{ResultData[`p${dayIndex+1}.${matchIndex+1}`].result.margin}.</strong></Box>
            </Box>
          ))}
        </React.Fragment>
      ))
    }
  </Box>
);

export default Results;