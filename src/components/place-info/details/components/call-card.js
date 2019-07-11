import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import call from 'react-native-phone-call';

import {placeInfoStyles} from 'TigerEats/src/styles/index.js';

export default class CallCard extends Component {
  
  
  async handleCallPress(number) {
    
    const callData = {
      number: number,
      prompt: true,
    };
    
    try {
      await call(callData);
    } catch(e) {
      alert(e);
    }
    
  }
  
  render() {
    
    const {number} = this.props;
    
    return (
      <View style={styles.callCardContainer}>
        <View style={styles.textContainer}>
          <Text style={placeInfoStyles.defaultHeader}>Have a question?</Text>
          <Text style={placeInfoStyles.defaultSubHeader}>Call the place to find out more</Text>
        </View>
        <TouchableOpacity onPress={() => this.handleCallPress(number)} >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Call</Text>  
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    buttonText: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
    buttonContainer: {
      backgroundColor: 'darkgreen',
      width: 60,
      height: 30,
      borderRadius: 7,
      justifyContent: 'center',
    },
    textQ: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'darkgrey',
      paddingBottom: 4,
    },
    textSub: {
      fontSize: 16,
      color: 'cornflowerblue',
      fontWeight: '700'
    },
    textContainer: {
      flexDirection: 'column'
    },
    callCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 20,
    }
});


