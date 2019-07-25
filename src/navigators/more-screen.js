import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation';
import More from '../features/more'

import HeaderTitle from './custom-nav-header'
import {colors} from '../styles'

export default createStackNavigator(
  {
    More: More
  },
  {
    initialRouteName: 'More',
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle />,
      headerTintColor: colors.darkGrey,
    }
  }
);