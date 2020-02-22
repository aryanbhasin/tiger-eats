import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CachedImage} from 'react-native-cached-image';
import {getDistance} from 'geolib';
import PropTypes from 'prop-types'
// Firebase storage ref
import {db} from 'TigerEats/App'

import LoadingSpinner from 'TigerEats/src/components/loading-spinner';

import {Rating} from 'TigerEats/src/components/place-info/frontal';
import {OpenOrClosed} from 'TigerEats/src/components/place-info/description/opening-hrs';
import {indexIntoOpeningHrs} from 'TigerEats/src/functions/explore-functions';
import {styles} from '../styles';
import {openStatusStyles as styles2} from 'TigerEats/src/components/place-info/description/styles'
import {toTitleCase} from 'TigerEats/src/functions/general';

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
    
    // The Nest Coordinates for dummy testing
    const currPosition2 = {
      latitude: 40.345226,
      longitude: -74.656353
    }
  
    let distance = getDistance(currPosition, location);
    distance = Math.ceil(distance / 10) * 10;
    return (distance);
  }
  
  renderOpenStatusText(openingHr, closingHr) {
    text = (this.isOpen) ? closingHr : openingHr
    if (text < 12) {
      return `until ${text} am`
    } else if (text == 12) {
      return `until ${text} pm`
    }
    else {
      return `until ${text % 12} pm`
    }
  }
  
  render() {
    let {name, rating, location, imageUri} = this.props.data;
    let [openingHr, closingHr] = indexIntoOpeningHrs(this.props.data)
    
    // checking if open using current time
    const currHr = parseInt(new Date().getHours());
    const isOpen = ((currHr >= openingHr) && (currHr <= closingHr));
    
    const distance = this.calculateDistance(location);
    
    return (
      <View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('PlaceInfo', {placeName: name})
        }}>
          <View style={styles.cardContainer}>
            
              <View style={styles.cardImageContainer}>
                <CachedImage source={{uri: imageUri}} style={styles.cardImage} loadingIndicator={LoadingSpinner} />
                <Rating rating={rating} customStyle={{marginBottom: 0}} />
              </View>
              <View style={styles.cardInfo}>
                <View style={{flexDirection: 'row', flex: 3}}>
                  <Text style={styles.cardTitle}>{toTitleCase(name)}</Text>
                </View>
                <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <OpenOrClosed openingHr={openingHr} closingHr={closingHr}/>
                  {/* <Text style={{color: 'darkgrey', fontWeight: '600', fontSize: 15}}>{distance}m</Text> */}
                  <Text style={styles2.openingHrsText}>{this.renderOpenStatusText(openingHr, closingHr)}</Text>
                </View>
              </View>
            
          </View>
          {!isOpen ? <View style={styles.overlay} /> : null}
        </TouchableOpacity>
      </View>
    );
  }
}