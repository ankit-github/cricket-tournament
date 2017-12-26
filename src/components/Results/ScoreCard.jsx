import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Grid from 'grommet/components/Grid';
import Text from 'grommet/components/Text';
import Accordian from '../Rules/Accordian';
import ScoreData from '../../data/scoreboard';
import TeamData from '../../data/teams';

const ScoreCard = (props) => {
  const matchScorecard = ScoreData[props.matchKey];
  const matchDetails = props.matchDetails;
  return (
    <Box pad="small" className="score-board">
      <Heading level={2}>Scorecard - {TeamData[matchDetails.teams[0]].name} Vs. {TeamData[matchDetails.teams[1]].name}</Heading>
      <Box className="bottom-line"></Box>
      <InningDetails data={matchScorecard.innings['1']} />
      <Box className="bottom-line"></Box>
      <InningDetails data={matchScorecard.innings['2']} />
    </Box>
  );
};

const InningDetails = ({ data }) => {
  return (
    <Accordian title={data.batting.teamName}>
      <Box className="accordian-item" margin={{horizontal:'medium'}} pad={{vertical:'small'}} animation={['slideDown', 'fadeIn']}>
        <Heading level={4} margin="none">Batting</Heading>
        <Grid align="stretch" columns={['small', 'flex', 'small']} gap="small">
          <Text tag="div" size="small"><strong>Name</strong></Text>
          <Text tag="div" size="small">&nbsp;</Text>
          <Text tag="div" size="small"><strong>Runs(Balls)</strong></Text>
          {data.batting.players.map((name, index) => (
            <React.Fragment key={`${index}.${name}`}>
              <Text tag="div" size="small">{name}</Text>
              <Text tag="div" size="small">{data.batting.score[name].out}</Text>
              <Text tag="div" size="small">{data.batting.score[name].total}({data.batting.score[name].balls})</Text>
            </React.Fragment>
          ))}
        </Grid>
        <Box>&nbsp;</Box>
        <Heading level={4} margin="none">Bowling</Heading>
        <Grid align="stretch" columns={['flex', 'small', 'small', 'small']} gap="small">
          <Text tag="div" size="small"><strong>Name</strong></Text>
          <Text tag="div" size="small"><strong>Overs</strong></Text>
          <Text tag="div" size="small"><strong>Runs</strong></Text>
          <Text tag="div" size="small"><strong>Wickets</strong></Text>
          {data.bowling.bowlers.map((name, index) => (
            <React.Fragment key={`${index}.${name}`}>
              <Text tag="div" size="small">{name}</Text>
              <Text tag="div" size="small">{data.bowling.overs[name].overs}</Text>
              <Text tag="div" size="small">{data.bowling.overs[name].runs}</Text>
              <Text tag="div" size="small">{data.bowling.overs[name].wickets}</Text>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Accordian>
  );
}
export default ScoreCard;