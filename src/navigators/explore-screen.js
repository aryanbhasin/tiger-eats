import {createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';

import HeaderTitle from './custom-nav-header'
import PlaceInfo from '../components/place-info';
import Explore from '../features/explore';
import {colors} from '../styles'

export default createStackNavigator(
  {
    Explore: Explore,
    PlaceInfo: PlaceInfo,
  },
  {
    initialRouteName: 'Explore',
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle />,
      headerTintColor: colors.darkGrey,
    }
  }
);