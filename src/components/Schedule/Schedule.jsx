import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { Tabs, Tab } from 'grommet/components/Tabs';
import MatchSchedule from './MatchSchedule';
import scheduleData from '../../data/schedule';

const Schedule = (props) => (
  <Box>
    <Heading level={3}>Schedule</Heading>
    <Tabs justify="center">
      <Tab title="Warm-ups">
        <MatchSchedule schedule={scheduleData.practice} />
      </Tab>
      <Tab title="Tournament">
        <MatchSchedule schedule={scheduleData.tournament}/>
      </Tab>
    </Tabs>
  </Box>
);

export default Schedule;