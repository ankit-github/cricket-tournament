import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import TeamData from '../../data/teams';



const Home = (props) => (
  <Box>
    <Heading>
      Box Cricket
    </Heading>
    <Box>
      Box Cricket is a variant of and shares many basic concepts with cricket.
      The game is most often played between two teams each consisting of six or eight players.
    </Box>
    <Box align="center">
      <Image size="large" full="vertical" src="/images/Ground.jpeg" />
    </Box>
    <Box>
      <p>Show your sport ship  and team spirit to win the game with best possible score and unexpected wins.</p>
      <p>Small Format, Less Time and Unlimited Fun, Excitement.</p>
      <p>Total 46 players including 10 girls; Formed two groups for men, each group having 3 teams; Two girl teams</p>
    </Box>
    <Box direction="row" justify="between">
       {Object.keys(TeamData).map((team) => 
          <Image key={team} src={TeamData[team].image} {...TeamData[team].mediumSize} />
       )}
    </Box>    
  </Box>
);

export default Home;