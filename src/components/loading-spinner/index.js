import React, {Component} from 'react'
import {View} from 'react-native'
import * as Progress from 'react-native-progress';
import {colors} from 'TigerEats/src/styles'

export default class LoadingSpinner extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Progress.CircleSnail 
          color={[colors.orange, 'black']} 
          direction='counter-clockwise'
          duration={800}
          spinDuration={2200}
        />
      </View>
    );
  }
}