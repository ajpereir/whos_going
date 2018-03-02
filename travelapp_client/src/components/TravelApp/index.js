import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Trips from '../../containers/Trips';
import './TravelApp.css';

const TravelApp = () => (
  <MuiThemeProvider>
    <div className="travel-app">
      <Trips/>
    </div>
  </MuiThemeProvider>
);

export default TravelApp;