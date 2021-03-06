import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import GoogleMap from 'google-map-react';

const LocationMap = (props) => (
  <React.Fragment>
    <Heading level={3}>Location Map</Heading>
    <Box full="horizontal" className="location-map">
      <GoogleMap 
        center={[23.061867, 72.519537]}
        zoom={16}
        apiKey="AIzaSyAfn6GDah0Qh4ib8gwbc1K7kT0W2B0wYzI" >
        <div lat={23.061714} lng={72.518969} className="circle">A</div>
        <div lat={23.063678} lng={72.511985} className="circle">B</div>
      </GoogleMap>
    </Box>
  </React.Fragment>
);

export default LocationMap;