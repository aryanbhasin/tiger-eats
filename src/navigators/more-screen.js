import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation';

class Temp extends Component {
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
    More: Temp
  },
  {
    initialRouteName: 'More'
  }
);