import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import ExploreScreen from './navigators/explore-screen'
import DiningHallScreen from './navigators/dining-screen';
import MoreScreen from './navigators/more-screen';

import {PLACES_DATA} from './assets/data/places-data.js';

const RootTabNav = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="binoculars" size={18} color={tintColor} />
        )
      }
    },
    Dining: {
      screen: DiningHallScreen,
      navigationOptions: {
        tabBarLabel: "Dining Halls",
        tabBarIcon: ({tintColor}) => (
          <Icon name="cutlery" size={18} color={tintColor} />
          ),
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
    initialRouteName: 'More',
    tabBarOptions: {
      activeTintColor: '#ff8f00',
      labelStyle: {
        fontSize: 14,
        fontWeight: '500',
      },
      showLabel: true,
    }
  }
);

const AppContainer = createAppContainer(RootTabNav);

class Main extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default Main;