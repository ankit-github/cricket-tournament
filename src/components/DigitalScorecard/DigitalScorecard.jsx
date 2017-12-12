import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import MatchScorecard from './MatchScorecard';

const DigitalScorecard = (props) => (
  <Provider store={store}>
    <MatchScorecard />
  </Provider>
);

export default DigitalScorecard;