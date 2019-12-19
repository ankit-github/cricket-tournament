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
  
  //Object.keys(TeamData).forEach((teamKey) => {

    /*let teamCard = {};  
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
    teamCard.totalOversBowled = 0;*/
    
    if(matches!=undefined )
    {
      Object.keys(matches).forEach(index => {
        let match = matches[index];        
        
        if(match.result!=undefined)
          //&& (match.teams[0]=== "stars" || match.teams[1]==="stars"))
        {
          let team0 = initializeTeamBoard(teamGroupArray, match.teams[0] );          
          let team1 = initializeTeamBoard(teamGroupArray, match.teams[1] );
          //console.log(team0.teamKey, team1.teamKey);
          if((match.teams[0]=== team0.teamKey || match.teams[1]===team1.teamKey))
          {

            //teamCard.played++;
            team0.played++;
            team1.played++;
            
            if(team0.teamKey === match.result.result.winner)
            {
              let batFirstBallFaced = 0;
              let batSecondBallFaced = 0;
              batFirstBallFaced = match.result[team0.teamKey].overs;
              batSecondBallFaced = match.result[team1.teamKey].overs;

              if(match.result.result.winner === team0.teamKey            
                  && match.result[team0.teamKey].overs != 6)
              {
                //batSecondBallFaced = 6;
              }
              //console.log(batFirstBallFaced,batSecondBallFaced) ;

              batFirstBallFaced = parseInt(batFirstBallFaced) * 6 + (batFirstBallFaced - parseInt(batFirstBallFaced)) * 10;
              batSecondBallFaced = parseInt(batSecondBallFaced) * 6 + (batSecondBallFaced - parseInt(batSecondBallFaced)) * 10;

              team0.totalRuns = match.result[team0.teamKey].runs +  team0.totalRuns;
              team0.totalOvers = batFirstBallFaced +  team0.totalOvers;
              team0.totalRunsConced = match.result[team1.teamKey].runs +  team0.totalRunsConced;
              team0.totalOversBowled = batSecondBallFaced +  team0.totalOvers;

              team1.totalRuns = match.result[team1.teamKey].runs +  team1.totalRuns;
              team1.totalOvers = batSecondBallFaced +  team1.totalOvers;
              team1.totalRunsConced = match.result[team0.teamKey].runs +  team1.totalRunsConced;
              team1.totalOversBowled = batFirstBallFaced +  team1.totalOversBowled;
              
              //console.log("0",match.key, team0.totalOvers, team1.totalOversBowled);

            }            
            else if (team1.teamKey === match.result.result.winner)
            {
              let batFirstBallFaced = 0;
              let batSecondBallFaced = 0;
              batFirstBallFaced = match.result[team0.teamKey].overs;
              batSecondBallFaced = match.result[team1.teamKey].overs;

              
              if(match.result.result.winner === team1.teamKey
                  && match.result[team1.teamKey].overs!=6)
              {
                batSecondBallFaced = 6;
              }
              //console.log(batFirstBallFaced,batSecondBallFaced) ;
              
              batFirstBallFaced = parseInt(batFirstBallFaced) * 6 + (batFirstBallFaced - parseInt(batFirstBallFaced)) * 10;
              batSecondBallFaced = parseInt(batSecondBallFaced) * 6 + (batSecondBallFaced - parseInt(batSecondBallFaced)) * 10;

              team1.totalRuns = match.result[team1.teamKey].runs +  team1.totalRuns;
              team1.totalOvers = batSecondBallFaced +  team1.totalOvers;
              team1.totalRunsConced = match.result[team0.teamKey].runs +  team1.totalRunsConced;
              team1.totalOversBowled = batFirstBallFaced +  team1.totalOversBowled;

              team0.totalRuns = match.result[team0.teamKey].runs +  team0.totalRuns;
              team0.totalOvers = batFirstBallFaced +  team0.totalOvers;
              team0.totalRunsConced = match.result[team1.teamKey].runs +  team0.totalRunsConced;
              team0.totalOversBowled = batSecondBallFaced +  team0.totalOversBowled;
             
              //console.log("1",match.key, team0.totalOvers, team1.totalOversBowled);
            }
          }
          if(match.result.result.winner === team0.teamKey)
          {
            team0.won++;   
            team1.loss++;
            team0.points = team0.won * 2;   

          }
          else if(match.result.result.winner === team1.teamKey)
          {
            team1.won++;
            team0.loss++;
            team1.points = team1.won * 2;
          }
                 
        }
      });
    }

    /*
    teamCard.loss = teamCard.played - teamCard.won;
    teamCard.points = teamCard.won * 2;
    let totalBallsPlayed = teamCard.totalOvers;
    let totalBallsBowled = teamCard.totalOversBowled;
    let finalTotalOvers = Math.trunc(totalBallsPlayed/6) + (totalBallsPlayed%6)/10;
    let finalTotalOversBowled = Math.trunc(totalBallsBowled/6) + (totalBallsBowled%6)/10;
    //let nrr = parseFloat((teamCard.totalRuns/teamCard.totalOvers )-(teamCard.totalRunsConced/teamCard.totalOversBowled)).toFixed(2);
    let nrr = parseFloat((teamCard.totalRuns/finalTotalOvers )-(teamCard.totalRunsConced/finalTotalOversBowled)).toFixed(2);
    teamCard.nrr = isNaN(nrr) ? 0 : nrr;
    //teamGroupArray.push(teamCard);    
  //});
  teamGroupArray.sort((a,b) => ((a.points <= b.points && (parseFloat(a.nrr)<=parseFloat(b.nrr))) ? 1 : -1));  
  */
  teamGroupArray.map(teamCard => {
    let totalBallsPlayed = teamCard.totalOvers > 108 ? 108 : teamCard.totalOvers;
    let totalBallsBowled = teamCard.totalOversBowled > 108 ? 108 : teamCard.totalOversBowled;
    let finalTotalOvers = Math.trunc(totalBallsPlayed/6) + (totalBallsPlayed%6)/10;
    let finalTotalOversBowled = Math.trunc(totalBallsBowled/6) + (totalBallsBowled%6)/10;
    //let nrr = parseFloat((teamCard.totalRuns/teamCard.totalOvers )-(teamCard.totalRunsConced/teamCard.totalOversBowled)).toFixed(2);
    let nrr = parseFloat((teamCard.totalRuns/finalTotalOvers )-(teamCard.totalRunsConced/finalTotalOversBowled)).toFixed(2);
    teamCard.nrr = isNaN(nrr) ? 0 : nrr;
  });

  teamGroupArray.sort((a,b) => ((a.points <= b.points && (parseFloat(a.nrr)<=parseFloat(b.nrr))) ? 1 : -1));  
  console.log(teamGroupArray);
  return teamGroupArray;
}

const initializeTeamBoard = (teamGrpArray, teamKey) => {
  let teamCard = teamGrpArray.find(team => team.teamKey === teamKey );
  if(teamCard === undefined)
  {
     teamCard = {};  
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
    teamGrpArray.push(teamCard);
    
  }
  return teamCard;
}
export default Group;