import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import teamLogo from '../../data/home';



const Home = (props) => (
  <Box>
    <Heading>
      Box Cricket
    </Heading>
    <Box  align="left" >
     Box Cricket is a variant of and shares many basic concepts with cricket.
     The game is most often played between two teams each consisting of six or eight players.
     </Box>
     <Box align="center">
        <Image size="large" full="vertical" src="/images/Ground.jpeg" />
     </Box>
     <Box align="left" >
     <p>Show your sport ship  and team spirit to win the game with best possible score and unexpected wins.</p>
     <p>Small Format, Less Time and Unlimited Fun, Excitement.</p>
      <p>Total 46 players including 10 girls; Formed two groups for men, each group having 3 teams; Two girl teams</p>

    </Box>
    <Box full="true" direction="row" justify="center" alignContent="stretch">
       {teamLogo.teams.map((team, teamIndex) => 
            <Image key={teamIndex} src={team.original} size="small"  fit="contain"  />  
       )}
    
    </Box>    
  </Box>
);

export default Home;