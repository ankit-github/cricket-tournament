import React from 'react';
import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Image from 'grommet/components/Image';
import { RoutedAnchor } from 'grommet/components/Anchor';
import Stack from 'grommet/components/Stack';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import LocationMap from './components/LocationMap';
import Gallery from './components/Gallery';
import ComingSoon from './components/ComingSoon';

import './style.css';
import "react-image-gallery/styles/css/image-gallery.css";

const App = (props) => (
  <Grommet className="main-content">
    <Router>
      <Box>
        <Box tag='header' direction='row' fixed={true} className="top-hader">
          <Image height="80px" src="/images/logo.png"/>
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
        </Box>
        <Box tag="section" pad={{horizontal: 'xlarge'}} className="content-data">
            <Box>
              <Route path="/" exact component={Home} />
              <Route path="/rules" exact component={Rules} />
              <Route path="/schedule" exact component={Schedule} />
              <Route path="/teams" exact component={ComingSoon} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/statistics" exact component={ComingSoon} />
              <Route path="/fantasy" exact component={ComingSoon} />
              <Route path="/venue" exact component={LocationMap} />
            </Box>
        </Box>
      </Box>
    </Router>
    <Box tag="footer" align="center" pad={{horizontal: 'xlarge', vertical: 'large'}} alignSelf="end" className="footer-content">
      For internal use only @ iBASEt india
    </Box>
  </Grommet>
);

export default App;