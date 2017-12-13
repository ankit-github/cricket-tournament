import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Text from 'grommet/components/Text';
import FlipCard from './FlipCard';
import TeamData from '../../data/teams';

const Teams = (props) => (
  <React.Fragment>
    <Heading level={3}>Teams</Heading>
    <Box direction="row">
    {
      Object.keys(TeamData).map((teamKey) => (
        <FlipCard key={teamKey}>
          <Box className="team-card-front" align="center">
            <Image src={TeamData[teamKey].image} {...TeamData[teamKey].thumbnilSize}/>
            <Heading level={4}>{TeamData[teamKey].name}</Heading>
          </Box>
          <Box className="team-card-back" align="center">
            {
              TeamData[teamKey].players.map((name, index) => (<Text key={`${index}.${name}`}>{name}</Text>))
            }
          </Box>
        </FlipCard>
      ))
    }
    </Box>
  </React.Fragment>
);

export default Teams;