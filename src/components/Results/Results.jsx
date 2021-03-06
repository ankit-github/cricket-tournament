import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { Tabs, Tab } from 'grommet/components/Tabs';
import MatchesResult from './MatchesResult';
import Group from './Group';
import ResultData from '../../data/results';
import Teams from '../../data/teams';

const Results = (props) => (
  <Box>
     <Heading level={3}>Results</Heading>
    <Box className="bottom-line"></Box>
    <Tabs justify="center">
      <Tab title="Point Table">
        <Group matches={ResultData.tournament} teams={Teams} />
      </Tab>
      <Tab title="Practice Matches">
        <MatchesResult matches={ResultData.practice} />
      </Tab>
      <Tab title="Tournament Matches">
        <MatchesResult matches={ResultData.tournament} />
      </Tab>
    </Tabs> 
  </Box>
);

export default Results;