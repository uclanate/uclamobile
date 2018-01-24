/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput, TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';
import Home from './Home'
import News from './News'
import Apps from './Apps'
import Tabs from 'react-native-tabs'

// ASSETS
import icon_home from '../assets/icon_home.png'
const PageView = [];

export default class MainNav extends Component<{}>{

  constructor(props){
        super(props)
        this.state = {page:'home'}
    }
  render() {

    switch (this.state.page) {
      case 'home':
        PageView = Home;
        break;
      case 'apps':
        PageView = Apps;
        break;
      case 'news':
        PageView = News;
        break;
      case 'events':
        PageView = News;
        break;
      case 'about':
        PageView = News;
        break;
      default:

    }

    return (
      <View style={styles.container}>
        {/* <Header/> */}

        <PageView/>

        <Tabs selected={this.state.page}
              style={{backgroundColor:'gray'}}
              selectedStyle={{backgroundColor:'blue'}}
              onSelect={el=>this.setState({page:el.props.name})}>
            <View name="home" selectedIconStyle={styles.iconTextSelected}>
                <Image style={styles.iconImage} source={icon_home} />
                <Text style={styles.baseIconText}>Home</Text>
            </View>
            <View name="apps" selectedIconStyle={styles.iconTextSelected}>
                <Image style={styles.iconImage} source={icon_home} />
                <Text style={styles.baseIconText}>Apps</Text>
            </View>
            <View name="news" selectedIconStyle={styles.iconTextSelected}>
                <Image style={styles.iconImage} source={icon_home} />
                <Text style={styles.baseIconText}>News</Text>
            </View>
            <View name="events" selectedIconStyle={styles.iconTextSelected}>
                <Image style={styles.iconImage} source={icon_home} />
                <Text style={styles.baseIconText}>Events</Text>
            </View>
            <View name="website" selectedIconStyle={styles.iconTextSelected}>
                <Image style={styles.iconImage} source={icon_home} />
                <Text style={styles.baseIconText}>About</Text>
            </View>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 30,
  },
  tabbar: {
        backgroundColor: '#2c3e50',
  },
  tab: {
      padding: 10,
  },
  indicatorContainer: {
      flex: 1,
  },
  indicator: {
      flex: 1,
      backgroundColor: '#46637f',
      margin: 6,
      borderRadius: 4,
  },
  tabLabel: {
      fontFamily: 'AvenirNext-Medium',
      fontSize: 16,
      backgroundColor: 'transparent',
      margin: 0,
  },
  tabsStyle: {
      backgroundColor: '#1E4B87',
  },
  baseIconText: {
      color: 'white',
      fontFamily: 'System',
      letterSpacing: -0.5,
      fontSize: 13,
  },
  activeIconText: {
      color: '#1E4B87',
      fontFamily: 'System',
      letterSpacing: -0.5,
      fontSize: 13,
  },
  iconTextSelected: {
      backgroundColor:'blue',
  },
  iconImage: {
      height: 20,
      width: 20,
      alignSelf: 'center',
      marginTop: 3,
  },
})
