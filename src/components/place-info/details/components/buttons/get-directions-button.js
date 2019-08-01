import React, {Component} from 'react';
import {View} from 'react-native'
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
      <View style={styles.directionsButtonContainer}>
        <Button raised type='outline' title="Get Directions" onPress={() => this.handlePress()} />
      </View>
    );
  }
}
