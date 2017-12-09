import React from 'react';
import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import { RoutedAnchor } from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import ComingSoon from './components/ComingSoon';

import './style.css';

const App = (props) => (
  <Grommet>
    <Box full="horizontal" align="center" tag="header">
      <Image height="50" width="200" src="/images/logo.svg"/>
      <Heading level={3}>Box Cricket Tournament - 2017</Heading>
    </Box>
    <Box tag="section">
      <Router>
        <Box pad={{horizontal: 'xlarge'}}>
          <Box className="menu-bar" full="horizontal" align="center" direction="row" justify="center">
            <RoutedAnchor path="/">Home</RoutedAnchor>
            <RoutedAnchor path="/rules">Rules</RoutedAnchor>
            <RoutedAnchor path="/schedule">Schedule</RoutedAnchor>
            <RoutedAnchor path="/teams">Teams</RoutedAnchor>
            <RoutedAnchor path="/gallery">Gallery</RoutedAnchor>
            <RoutedAnchor path="/statistics">Statistics</RoutedAnchor>
            <RoutedAnchor path="/fantasy">Fantasy</RoutedAnchor>
            <RoutedAnchor path="/venue">Venue Details</RoutedAnchor>
          </Box>
          <Box pad={{horizontal: 'xlarge'}}>
            <Route path="/" exact component={Home} />
            <Route path="/rules" exact component={Rules} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/teams" exact component={ComingSoon} />
            <Route path="/gallery" exact component={ComingSoon} />
            <Route path="/statistics" exact component={ComingSoon} />
            <Route path="/fantasy" exact component={ComingSoon} />
            <Route path="/venue" exact component={ComingSoon} />
          </Box>
        </Box>
      </Router>
    </Box>
  </Grommet>
);

export default App;