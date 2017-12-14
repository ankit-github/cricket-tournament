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
      PlayingRules.areas.map((area, index) => (
        <Accordian title={area.name} key={index}>
          <Box className="accordian-item" margin={{horizontal:'medium'}} pad={{vertical:'small'}} animation={['slideDown', 'fadeIn']}>
          {area.rules.map((rule, ruleIndex) => 
            <Box pad={{horizontal: 'medium'}} direction="row" key={`${index}.${ruleIndex}`}>
              <Pin />
              <Text margin={{left: "small"}}>{rule}</Text>
            </Box>)}
          </Box>
        </Accordian>   
      ))
    }
  </React.Fragment>
);

export default Rules;