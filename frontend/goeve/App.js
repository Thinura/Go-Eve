/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Main } from './src/Routes';

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render() {
    return (
        <Main/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// import React from 'react';
// import { Main } from './Screen/Routers';

// export default class App extends React.Component{ render() { return( <Main/> ); } };