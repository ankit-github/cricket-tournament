import React from 'react';
import Box from 'grommet/components/Box';
import Text from 'grommet/components/Text';
import Heading from 'grommet/components/Heading';
import Pin from 'grommet-icons/icons/Pin';
import Accordian from './Accordian';
import PlayingRules from '../../data/rules';

const Rules = (props) => (
  <React.Fragment>
    <Heading level={3}>Rules</Heading>
    {
      PlayingRules.areas.map((area) => (
        <Accordian title={area.name}>
          {area.rules.map((rule) => 
            <Box margin={{horizontal: 'small'}} direction="row">
              <Pin />
              <Text margin={{left: "small"}}>{rule}</Text>
            </Box>)}
        </Accordian>   
      ))
    }
  </React.Fragment>
);

export default Rules;