import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import scheduleData from '../../data/schedule';
import TeamData from '../../data/teams';

const Results = (props) => (
  <Box>
    <Heading level={3}>Results</Heading>
    <Box className="bottom-line"></Box>
    {
      scheduleData.practice.days.map((day) => (
        <React.Fragment key={day}>
          <Box pad={{vertical: 'small'}}>
            <strong>{day.date}</strong>
          </Box>
          {day.matches.map((match) => (
            <Box pad="xsmall" align="center" className="match-result">
              <Box direction="row">
                <Box direction="row" align="center">
                  <Image src={TeamData[match.teams[0]].image} {...TeamData[match.teams[0]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[0]].name}</Box>
                </Box>
                <Box justify="center" margin={{horizontal:'small'}}>Vs.</Box>
                <Box direction="row" align="center" reverse>
                  <Image src={TeamData[match.teams[1]].image} {...TeamData[match.teams[1]].thumbnilSize}/>
                  <Box margin={{ horizontal: 'small' }}>{TeamData[match.teams[1]].name}</Box>
                </Box>
              </Box>
              <Box>Result</Box>
            </Box>
          ))}
        </React.Fragment>
      ))
    }
  </Box>
);

export default Results;