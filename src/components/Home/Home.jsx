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
     <Image size="small" src="/images/Ground.jpeg" />
     <Box align="left" >
     <p>Show your sport ship  and team spirit to win the game with best possible score and unexpected wins.</p>
     <p>Small Format, Less Time and Unlimited Fun, Excitement.</p>
      <p>Total 46 players including 10 girls; Formed two groups for men, each group having 3 teams; Two girl teams</p>

    </Box>
    <Box align="center" full="horizontal" direction="row">
       {teamLogo.teams.map((team, teamIndex) => 
            <Image key={teamIndex} src={team.original} size="small"  height="150px"  />  
       )}
    
    </Box>    
  </Box>
);

export default Home;