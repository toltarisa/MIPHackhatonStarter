import React, {Component} from 'react';
import Router from './src/Router';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
class App extends Component {
  state = {};
  render() {
    return <Router />;
  }
}

export default App;
