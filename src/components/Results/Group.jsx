import React from 'react';
import Box from 'grommet/components/Box';
import Text from 'grommet/components/Text';
import Heading from 'grommet/components/Heading';
import TeamData from '../../data/teams';
import Image from 'grommet/components/Image';

const Group = (props) => (
  
  <Box direction="row">         
    <Box basis="1/2">
      <Box direction="column" border="all" >
        <Box align="center">
          <Heading level="2">Group A</Heading>
        </Box>        
        <GroupHeader />                  
        <TeamRow groupName="A" matches={props.matches}/>
      </Box>
    </Box> 
    <Box basis="1/2" >
      <Box direction="column" border="all" > 
        <Box align="center">
          <Heading level="2">Group B</Heading>
        </Box>
        <GroupHeader />                  
          <TeamRow groupName="B" matches={props.matches}/>
      </Box> 
    </Box>    
  </Box>
);

const TeamRow = (props) => 
{  
    let teamWinningDetails = getTeamCard(props.matches);
    let groupTeams = teamWinningDetails.map((team) => {
      return (team.group===props.groupName &&      
        <Box direction="row" border={{"side":"top bottom"}} basis="auto" key={team.teamKey} align="center">
          <Box margin="small" basis="small" align="center">
            <Image src={team.image} {...team.thumbnilSize}/>
            <Text weight="bold">{team.teamName}</Text>
          </Box>
          <Box margin="small" basis="small" align="center">
            <Text>{team.played}</Text>
          </Box>
          <Box margin="small" basis="small" align="center">
            <Text>{team.won}</Text>
          </Box>
          <Box margin="small" basis="small" align="center">
            <Text>{team.loss}</Text>
          </Box>
          <Box margin="small" basis="small" align="center">
            <Text>{team.points}</Text>
          </Box>
        </Box>  
    )});
   return groupTeams; 
} 

const GroupHeader = (props) =>
(
  <Box direction="row" border={{"side":"top bottom"}} fill="true" align="center">
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">Team Name</Text>
    </Box>
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">Played</Text>
    </Box>
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">Won</Text>
    </Box>
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">Loss</Text>
    </Box>
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">Points</Text>
    </Box>
    </Box>  
);

const getTeamCard = (matches) =>
{
  let teamGroupArray = [];
  
  Object.keys(TeamData).forEach((teamKey) => {

    let teamCard = {};  
    teamCard.played=0;
    teamCard.won=0;
    teamCard.loss=0;
    teamCard.points=0;
    teamCard.teamKey=teamKey;
    teamCard.image=TeamData[teamKey].image;
    teamCard.group=TeamData[teamKey].group;
    teamCard.thumbnilSize = TeamData[teamKey].thumbnilSize;
    teamCard.teamName = TeamData[teamKey].name;    
    if(matches!=undefined )
    {
      Object.keys(matches).forEach(index => {
        let match = matches[index];

        /*if((TeamData[match.teams[0]]!=undefined || TeamData[match.teams[1]]!=undefined)
              && (teamGroupArray[match.teams[0]]===undefined || )
        {
          let t = 
          teamGroupArray[]
        }*/

        if(match.result!=undefined && (match.teams[0]===teamKey || match.teams[1]===teamKey))
        {
          teamCard.played++;
        }
        if(match.result!=undefined && match.result.result.winner === teamKey)
        {
          teamCard.won++;
        }
      });
    }

    teamCard.loss = teamCard.played - teamCard.won;
    teamCard.points = teamCard.won * 2;
    teamGroupArray.push(teamCard);    
  });
  teamGroupArray.sort((a,b) =>(a.won<b.won)?1:-1);
  return teamGroupArray;
}

export default Group;