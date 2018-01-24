import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';


export default class Events extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text> You're </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
})
