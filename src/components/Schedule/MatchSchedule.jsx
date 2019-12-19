import React from 'react';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Text from 'grommet/components/Text';
import TeamData from '../../data/teams';

const MatchSchedule = ({ schedule }) => (
  <React.Fragment>
    {schedule.days.map((day) => (
      <Box direction="column" key={day.date} className="day-match">
        <Box align="center" className="schedule-date">
          <Heading level={4} size="large" margin="small">{day.date}</Heading>
        </Box>
        <Box direction="row" justify="center">
        {
          day.matches.map((match, index) => (
            <Box key={`${index}.${match.matchNo}`} align="center" margin="small" className="battle-match">
              <Box margin="small">{match.matchName!=undefined? match.matchName : `Battle-${match.matchNo}`}</Box>
                {(match.teams.length > 0) ?
                  <Box direction="row" align="center" margin="small">
                    <Image src={TeamData[match.teams[0]].image} {...TeamData[match.teams[0]].thumbnilSize} />
                    <Text margin="small">Vs.</Text>
                    <Image src={TeamData[match.teams[1]].image} {...TeamData[match.teams[1]].thumbnilSize} />
                  </Box>
                  :<Box margin="small" pad="medium">{match.matchName}</Box>
                }
              <Box margin="small">{match.time}</Box>
            </Box>
          ))
        }
        </Box>
      </Box>
    ))}
  </React.Fragment>
);

export default MatchSchedule;