import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Welcome from './src/welcome';
import More from './src/more';

var MainScreenNavigation = TabNavigator({
  tab1: { screen: Welcome },
  tab2: {screen: More }
}, 
{
  tabBarPosition: 'bottom',
})

MainScreenNavigation.navigationOptions = {
  title: "Tab Example"
}

export default MainScreenNavigation;
