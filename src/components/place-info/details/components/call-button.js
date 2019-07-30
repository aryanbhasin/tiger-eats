import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import call from 'react-native-phone-call';

import {placeInfoStyles} from 'TigerEats/src/styles/index.js';
import {styles} from '../styles'

export default class CallButton extends Component {
  
  async handleCallPress(number) {
    const callData = {
      number: number,
      prompt: true,
    };
    try {
      await call(callData);
    } catch(err) {
      alert(err);
    }
  }
  
  render() {
    const {number} = this.props;
    return (
      <Button title='Call' raised type='outline' onPress={() => this.handleCallPress(number)}/>
    );
  }
}

/* 
<TouchableOpacity onPress={() => this.handleCallPress(number)} >
  <View style={styles.callButtonContainer}>
    <Text style={styles.callButtonText}>Call</Text>  
  </View>
</TouchableOpacity> 
*/


