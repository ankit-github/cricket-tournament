import React from 'react';
import Box from 'grommet/components/Box';
import Grid from 'grommet/components/Grid';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Text from 'grommet/components/Text';
import FlipCard from './FlipCard';
import TeamData from '../../data/teams';

const Teams = (props) => (
  <React.Fragment>
    <Heading level={3}>Teams</Heading>
    <Grid align="stretch" columns={['1/4', '1/4', '1/4', '1/4']} gap="small">
    {
      Object.keys(TeamData).map((teamKey) => (
        <FlipCard key={teamKey}>
          <Box className="team-card-front" align="center" alignSelf="stretch" pad="small" justify="center">
            <Image src={TeamData[teamKey].image} {...TeamData[teamKey].mediumSize} />
          </Box>
          <Box className="team-card-back" align="center" alignSelf="stretch" pad="small" justify="center">
            <Box direction="row" align="center" margin={{vertical:'medium'}}>
              <Image src={TeamData[teamKey].image} {...TeamData[teamKey].thumbnilSize} />
              <Heading level={3} margin="small">{TeamData[teamKey].name}</Heading>
            </Box>
            {
              TeamData[teamKey].players.map((name, index) => (<Text tag="div" key={`${index}.${name}`} size="large" margin={{top:"small"}}>{name}</Text>))
            }
          </Box>
        </FlipCard>
      ))
    }
    </Grid>
  </React.Fragment>
);

export default Teams;