import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import PlaceInfo from '../features/place-info';
import Explore from '../features/explore';

export default createStackNavigator(
  {
    Explore: Explore,
    PlaceInfo: PlaceInfo,
  },
  {
    initialRouteName: 'Explore',
    defaultNavigationOptions: {
      title: 'TigerEats',
      headerTitleStyle: {
        color: '#ff8f00',
        fontWeight: '700',
        fontSize: 28,
      }
    }
  }
);