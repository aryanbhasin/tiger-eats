import {createStackNavigator} from 'react-navigation';

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
      title: 'TigerEats',
      headerTitleStyle: {
        color: '#ff8f00',
        fontWeight: '700',
        fontSize: 28,
      }
    }
  }
);

