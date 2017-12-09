import React from 'react';
import Box from 'grommet/components/Box';
import Grid from 'grommet/components/Grid';
import Text from 'grommet/components/Text';

const MatchSchedule = ({ schedule }) => (
  <Grid align="center" columns={["flex", "flex"]} gap={{horizontal: 'small'}}>
    {schedule.days.map((day) => (
      <React.Fragment>
        <Box className="schedule-day">
          {day.date}
        </Box>
        <Box>
          <Box direction="row" justify="between">
            { day.teams.map((teamName) => <Text>{teamName}</Text>)}
          </Box>
          <Grid align="center" columns={["xsmall", "flex", "xsmall"]} gap="none">
            {
              day.matches.map((match) => (
                <React.Fragment>
                  <Box>{match.matchNo}</Box>
                  <Box>{match.teams}</Box>
                  <Box>{match.time}</Box>
                </React.Fragment>
              ))
            }
          </Grid>
        </Box>
      </React.Fragment>
    ))}
  </Grid>
);

export default MatchSchedule;