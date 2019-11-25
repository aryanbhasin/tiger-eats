import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../styles'

import ExploreScreen from './explore-screen'
import DiningHallScreen from './dining-screen';
import MoreScreen from './more-screen';

export const RootTabNav = createBottomTabNavigator(
  {
    Dining: {
      screen: DiningHallScreen,
      navigationOptions: {
        tabBarLabel: "Dining Halls",
        tabBarIcon: ({tintColor}) => (
          <Icon name="cutlery" size={18} color={tintColor} />
          ),
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="binoculars" size={18} color={tintColor} />
        )
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ellipsis-h" size={18} color={tintColor}/>
        )
      }
    }
  },
  {
    initialRouteName: 'Dining',
    tabBarOptions: {
      activeTintColor: colors.orange,
      labelStyle: {
        fontSize: 14,
        fontWeight: '500',
      },
      showLabel: true,
    }
  }
);