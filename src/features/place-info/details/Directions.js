import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import getDirections from 'react-native-google-maps-directions';

import {defaultStyles} from '../index.js'

export default class Directions extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    }
  }
  
  getLocation() {
    
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition (
      (currPosition) => {
        this.setState({
          latitude: currPosition.coords.latitude,
          longitude: currPosition.coords.longitude,
        });
      },
      (error) => {
        alert(error);
      },
      {enableHighAccuracy: true}
    );
  }
  
  handlePress(destCoords) {
    
    const {latitude, longitude} = this.state;
    
    this.getLocation();
    
    alert(latitude + ' ' + longitude);
    
    const data = {
      source: {
        latitude: latitude,
        longitude: longitude,
      },
      destination: {
        latitude: destCoords.latitude,
        longitude: destCoords.longitude,
      },
      params: [
        {
          key: "travelmode",
          value: "walking"
        }
      ]
    }
    
    getDirections(data);
    
  }
  
  render() {
    
    const {destCoords} = this.props
    
    return (
      <View style={styles.button}>
        <Button raised title="Get Directions" titleStyle={[styles.buttonText, defaultStyles.defaultFont]} onPress={() => this.handlePress(destCoords)} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    width: 140,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

