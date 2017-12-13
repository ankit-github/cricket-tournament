import React from 'react';
import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import { RoutedAnchor } from 'grommet/components/Anchor';
import Stack from 'grommet/components/Stack';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import LocationMap from './components/LocationMap';
import Gallery from './components/Gallery';
import Teams from './components/Teams';
import ComingSoon from './components/ComingSoon';
import Text from 'grommet/components/Text';

import './style.css';
import "react-image-gallery/styles/css/image-gallery.css";

const App = (props) => (
  <Grommet>
    <Box full="horizontal" align="center" tag="header" pad={{horizontal: 'xlarge'}}>
      <Image height="50" width="200" src="/images/logo.svg"/>
      <Heading level={3}>Box Cricket Tournament - 2017</Heading>
    </Box>
    <Box tag="section" pad={{horizontal: 'xlarge'}}>
      <Router>
        <Box>
          <Box className="menu-bar" full="horizontal" align="center" direction="row" justify="center">
            <RoutedAnchor path="/">Home</RoutedAnchor>
            <RoutedAnchor path="/rules">Rules</RoutedAnchor>
            <RoutedAnchor path="/schedule">Schedule</RoutedAnchor>
            <RoutedAnchor path="/teams">Teams</RoutedAnchor>
            <RoutedAnchor path="/gallery">Gallery</RoutedAnchor>
            <RoutedAnchor path="/venue">Venue Details</RoutedAnchor>            
          </Box>
          <Box>
            <Route path="/" exact component={Home} />
            <Route path="/rules" exact component={Rules} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/venue" exact component={LocationMap} />            
          </Box>
        </Box>
      </Router>
    </Box>
    <Box tag="footer" align="center" pad={{horizontal: 'xlarge', vertical: 'large'}} alignSelf="end">
      For internal use only @ iBASEt india<br/>  
      <Text size="small">For any query mail on gpw-shf-india@ibaset.com</Text>      
    </Box>
  </Grommet>
);

export default App;