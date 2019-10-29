import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {getDistance} from 'geolib';
import PropTypes from 'prop-types'

import {Rating} from 'TigerEats/src/components/place-info/frontal';
import {OpenOrClosed} from 'TigerEats/src/components/place-info/description/opening-hrs';
import {indexIntoOpeningHrs} from 'TigerEats/src/functions/explore-functions'
import {styles} from '../styles';
import {toTitleCase} from 'TigerEats/src/functions/general'

export default class PlaceCard extends Component {
  
  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    position: PropTypes.exact({
      latitude: PropTypes.any,
      longitude: PropTypes.any
    }).isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      location: PropTypes.object.isRequired
    })
  }
  
  calculateDistance(location) {
    const currPosition = this.props.position
    
    // The Nest Coordinates
    const currPosition2 = {
      latitude: 40.345226,
      longitude: -74.656353
    }
    
            // Replace currPosition2 with currPosition in real-time testing
    let distance = getDistance(currPosition2, location);
    distance = Math.ceil(distance / 10) * 10;
    return (distance);
  }
  
  render() {
    let {name, rating, location} = this.props.data;
    let uri = require('TigerEats/src/assets/images/Tacoria-banner.png')
    let [openingHr, closingHr] = indexIntoOpeningHrs(this.props.data)
    
    const currHr = parseInt(new Date().getHours());
    const isOpen = ((currHr >= openingHr) && (currHr <= closingHr));
    
    const distance = this.calculateDistance(location);
    
    StatusBar.setBarStyle('dark-content', true);
    return (
      <View>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PlaceInfo', {placeName: name})
          }}>
            <View style={styles.cardImageContainer}>
              <Image source={uri} style={styles.cardImage} />
              <Rating rating={rating} customStyle={{marginBottom: 0}} />
            </View>
            <View style={styles.cardInfo}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <Text style={styles.cardTitle}>{toTitleCase(name)}</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <OpenOrClosed openingHr={openingHr} closingHr={closingHr} customStyle={{marginBottom: 3}}/>
                <Text style={{color: 'darkgrey', fontWeight: '600', fontSize: 15}}>{distance}m</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {!isOpen ? <View style={styles.overlay} /> : null}
      </View>
    );
  }
}