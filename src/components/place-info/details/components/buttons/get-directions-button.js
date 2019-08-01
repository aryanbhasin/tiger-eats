import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-elements';
import getDirections from 'react-native-google-maps-directions';
import PropTypes from 'prop-types'

import {styles} from './styles'

export default class GetDirectionsButton extends Component {

  static propTypes = {
    position: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }).isRequired,
    destination: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }).isRequired,
  }
  
  handlePress() {
    let {position, destination} = this.props
    const data = {
      source: {
        latitude: position.latitude,
        longitude: position.longitude,
      },
      destination: {
        latitude: destination.latitude,
        longitude: destination.longitude,
      },
      params: [{
        key: "travelmode",
        value: "walking"
      }]
    }
    getDirections(data);
  }
  
  render() {
    return (
      <TouchableOpacity onPress={() => this.handlePress()} style={[styles.button, styles.directionsButtonContainer]}>
        <Text style={styles.directionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    );
  }
}
