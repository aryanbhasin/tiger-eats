import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types'

import Directions from './components/directions';
import CallButton from './components/call-button.js';
import WebsiteButton from './components/website-button'
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
    website: PropTypes.string
  }
  
  render() {
    
    let {reviewPlace, location, phone_number, website} = this.props;
    
    let hasPhoneNumber = !!phone_number ? true : false;
    let hasWebsite = !!website ? true : false;
    
    return (
      <View style={{flex: 1, borderWidth: 3}}>
        <ReviewStars reviewPlace={reviewPlace} />
        <Directions destCoords={location} />
        <View style={styles.buttonsRowContainer}>
          {hasWebsite && <WebsiteButton website={website} />}
          {hasPhoneNumber && <CallButton number={phone_number} />}
        </View>
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