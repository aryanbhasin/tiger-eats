import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Text, View} from 'react-native';

class DiningHallScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Dining: {
      screen: DiningHallScreen,
      navigationOptions: {
        title: "Dining Hall"
      }
    },
  },
  {
    initialRouteName: 'Dining'
  }
);

