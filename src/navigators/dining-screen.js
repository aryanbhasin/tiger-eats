import {createStackNavigator} from 'react-navigation';

import DiningHalls from '../features/dining-halls'

export default createStackNavigator(
  {
    Dining: {
      screen: DiningHalls,
    },
  },
  {
    initialRouteName: 'Dining',
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

