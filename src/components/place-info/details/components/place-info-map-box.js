import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import {colors} from 'TigerEats/src/styles'
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
                          // dummy location for simulator testing
    // this.nest_location = {
    //   latitude: 40.345226,
    //   longitude: -74.656353
    // }
    coords_array = [this.props.destination, this.props.position];
    this.region = getRegionForCoordinates(coords_array);
  }
  
  render() {
    let {destination} = this.props;
    return (
      <MapView 
        style={styles.map}
        initialRegion={this.region}
                                                        // uncomment the two lines below to add user location
        // showsUserLocation={true}
        // followsUserLocation={true}
      >
        <Marker coordinate={destination}>
          <Icon name='map-pin' color={colors.orange} size={27}/>
        </Marker> 
        <Marker coordinate={this.nest_location} />
      </MapView>
    );
  }
}