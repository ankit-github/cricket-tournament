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
          <Box margin="small" basis="medium" align="center">
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
          <Box margin="small" basis="small" align="center">
            <Text>{team.nrr}</Text>
          </Box>
        </Box>  
    )});
   return groupTeams; 
} 

const GroupHeader = (props) =>
(
  <Box direction="row" border={{"side":"top bottom"}} fill="true" align="center">
    <Box margin="small" basis="medium" align="center">
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
    <Box margin="small" basis="small" align="center">
      <Text weight="bold" size="large">NRR</Text>
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
    teamCard.nrr = 0;
    teamCard.totalRuns = 0;
    teamCard.totalOvers = 0;
    teamCard.totalRunsConced = 0;
    teamCard.totalOversBowled = 0;
    
    if(matches!=undefined )
    {
      Object.keys(matches).forEach(index => {
        let match = matches[index];        
        
        if(match.result!=undefined)
        {
          if(match.teams[0]===teamKey || match.teams[1]===teamKey)
          {
            teamCard.played++;
            if(match.teams[0] === teamKey)
            {
              teamCard.totalRuns = match.result[match.teams[0]].runs +  teamCard.totalRuns;
              teamCard.totalOvers = match.result[match.teams[0]].overs +  teamCard.totalOvers;

              teamCard.totalRunsConced = match.result[match.teams[1]].runs +  teamCard.totalRunsConced;
              teamCard.totalOversBowled = match.result[match.teams[1]].overs +  teamCard.totalOversBowled;

            }            
            else if (match.teams[1] === teamKey)
            {
              teamCard.totalRuns = match.result[match.teams[1]].runs +  teamCard.totalRuns;
              teamCard.totalOvers = match.result[match.teams[1]].overs +  teamCard.totalOvers;

              teamCard.totalRunsConced = match.result[match.teams[0]].runs +  teamCard.totalRunsConced;
              teamCard.totalOversBowled = match.result[match.teams[0]].overs +  teamCard.totalOversBowled;
            }
          }
          if(match.result.result.winner === teamKey)
          {
            teamCard.won++;
          }
                 
        }
      });
    }

    teamCard.loss = teamCard.played - teamCard.won;
    teamCard.points = teamCard.won * 2;
    let nrr = parseFloat((teamCard.totalRuns/teamCard.totalOvers )-(teamCard.totalRunsConced/teamCard.totalOversBowled)).toFixed(2);
    teamCard.nrr = isNaN(nrr) ? 0 : nrr;
    teamGroupArray.push(teamCard);    
  });
  teamGroupArray.sort((a,b) =>(a.won<b.won)?1:-1);
  
  return teamGroupArray;
}

export default Group;