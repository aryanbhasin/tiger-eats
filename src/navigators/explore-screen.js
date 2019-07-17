import {createStackNavigator} from 'react-navigation';

import PlaceInfo from '../components/place-info';
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