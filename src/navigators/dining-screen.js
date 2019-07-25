import {createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';

import HeaderTitle from './custom-nav-header'
import DiningHalls from '../features/dining-halls'
import DHallInfoScreen from '../components/dhall-info'
// import FetchMenu from '../components/extract-menu/fetch-menu'

export default createStackNavigator(
  {
    Dining: {
      screen: DHallInfoScreen,
    },
  },
  {
    initialRouteName: 'Dining',
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle />
    }
  }
);

