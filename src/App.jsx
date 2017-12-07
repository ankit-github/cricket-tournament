import React from 'react';
import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';

const App = (props) => (
  <Grommet>
    <Box full align="center">
      <Image height="50" width="200" src="/images/logo.svg"/>
      <Heading level={3}>Box Cricket Tournament - 2017</Heading>
    </Box>
  </Grommet>
);

export default App;