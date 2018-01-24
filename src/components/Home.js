import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';


export default class Home extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text> Hi </Text>
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
