import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {getDistance} from 'geolib';

import {Rating} from 'TigerEats/src/components/place-info/frontal';
import {OpenOrClosed} from 'TigerEats/src/components/place-info/description/OpeningHrs';
import {styles} from '../styles';

export default class PlaceCard extends Component {
  
  calculateDistance(destCoords) {
    const currPosition = navigator.geolocation.getCurrentPosition (
      (position) => {position.coords},
      (error) => {alert(error)},
      {enableHighAccuracy: true}
    );
    
    // The Nest Coordinates
    const currPosition2 = {
      latitude: 40.345226,
      longitude: -74.656353
    }
    
    let distance = getDistance(currPosition2, destCoords);
    distance = Math.ceil(distance / 10) * 10;
    return (distance);
  }
  
  render() {
    const {uri, name, ratingNum, openHrs, destCoords} = this.props.data
    const openingHr = openHrs[0];
    const closingHr = openHrs[1];
    const currHr = parseInt(new Date().getHours());
    const isOpen = ((currHr >= openingHr) && (currHr <= closingHr));
    const distance = this.calculateDistance(destCoords);
    
    StatusBar.setBarStyle('dark-content', true);
    
    return (
      <View>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PlaceInfo', {placeName: name})
          }}>
            <View style={styles.cardImageContainer}>
              <Image source={uri} style={styles.cardImage} />
              <Rating ratingNum={ratingNum} customStyle={{marginBottom: 0}} />
            </View>
            <View style={styles.cardInfo}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <Text style={styles.cardTitle}>{name}</Text>
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