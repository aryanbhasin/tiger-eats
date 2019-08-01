import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import PropTypes from 'prop-types'
import {getRegionForCoordinates} from 'TigerEats/src/functions/explore-functions'

import {styles} from '../styles'

export default class MapBox extends Component {
  
  static propTypes = {
    destination: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    position: PropTypes.exact({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }
  
  constructor(props) {
    super(props);
    // using dummy location for simulator testing; replace with this.props.position
    this.nest_location = {
      latitude: 40.345226,
      longitude: -74.656353
    }
    coords_array = [this.props.destination, this.nest_location];
    this.region = getRegionForCoordinates(coords_array);
  }
  
  render() {
    let {destination} = this.props;
    return (
      <MapView 
        style={styles.map}
        initialRegion={this.region}
        // showsUserLocation={true}
        // followsUserLocation={true}
      >
        <Marker
          coordinate={destination}
        />
        <Marker
          coordinate={this.nest_location}
        />
      </MapView>
    );
  }
}