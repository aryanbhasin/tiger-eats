import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types'

import Directions from './components/directions';
import CallCard from './components/call-card.js';
import ReviewStars from './components/review-stars';

import {placeInfoStyles} from 'TigerEats/src/styles/index.js'
import {styles} from './styles.js'

export default class Details extends Component {
  
  static propTypes = {
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    phone_number: PropTypes.string,
  }
  
  render() {
    
    const {reviewPlace, location, phone_number} = this.props;
    
    const hasPhoneNumber = !!phone_number ? true : false;
    
    return (
      <View>
        <Directions destCoords={location} />
        {hasPhoneNumber ? (<CallCard number={phone_number} />) : null}
        <ReviewStars reviewPlace={reviewPlace} />
      </View>
      
    );
  }
}

// Renders list of items (not to be added) 
function Menu ({itemList}) {
  return (
    <View style={placeInfoStyles.defaultContainer}>
      <Text style={placeInfoStyles.defaultHeader}>Main Items</Text>
      <View style={{height: 100}}>{itemList.map((item) => 
        (<Text key={item} style={styles.mainItemStyle}>{item}</Text>)
      )}</View>
    </View>
  );
}