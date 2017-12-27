import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Grid from 'grommet/components/Grid';
import Text from 'grommet/components/Text';
import Accordian from '../Rules/Accordian';
import ScoreData from '../../data/scoreboard';
import TeamData from '../../data/teams';

const ScoreCard = (props) => {
  const matchScorecard = ScoreData[props.matchKey];
  const matchDetails = props.matchDetails;
  return (
    <Box pad="small" className="score-board" flex={false}>
      <Box direction="row" justify="between">
        <Heading level={2} margin="none">Scorecard - {TeamData[matchDetails.teams[0]].name} Vs. {TeamData[matchDetails.teams[1]].name}</Heading>
        <Button onClick={props.closeHandler}>Close</Button>
      </Box>
      <Text><strong>{TeamData[matchScorecard.toss.wonBy].name}</strong> won the toss and elected <strong>{matchScorecard.toss.selected}</strong> first.</Text>
      <Box className="bottom-line"></Box>
      <InningDetails data={matchScorecard.innings['1']} />
      <InningDetails data={matchScorecard.innings['2']} />
      <Box className="bottom-line"></Box>
      <Text margin="small"><strong>{TeamData[matchDetails.result.result.winner].name}</strong>&nbsp;won by&nbsp;<strong>{matchDetails.result.result.margin}.</strong></Text>
    </Box>
  );
};

const InningDetails = ({ data }) => {
  return (
    <Accordian title={`${TeamData[data.batting.teamName].name} Score:${data.batting.totalScore}/${data.batting.wickets}(${data.bowling.oversBowled})`} flex={false}>
      <Box className="accordian-item" margin={{horizontal:'medium'}} pad="small" animation={['slideDown', 'fadeIn']} flex={false}>
        <Text tag="div" margin="none" textAlign="center">Batting</Text>
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
        <Text tag="div" margin="none" textAlign="center">Bowling</Text>
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