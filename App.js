

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TabBarIOS} from 'react-native';
import MainNav from './src/components/MainNav'


export default class App extends Component<{}> {
  render() {
    return (
      <MainNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  }
})
