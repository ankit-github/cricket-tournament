import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = (props) => (
  <MuiThemeProvider>
    <AppBar
      title="iBASEt Box Cricket Tournament - 2017"
    />
  </MuiThemeProvider>
);

export default App;