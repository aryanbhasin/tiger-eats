import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, ScrollView, StatusBar} from 'react-native';

import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data.js';

import {indexIntoOpeningHrs} from 'TigerEats/src/functions/explore-functions'

import Frontal from './frontal';
import Description from './description';
import Details from './details';

const data = EATERY_DATA;

export default class PlaceInfo extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      rating: 4.23,
      ratingCount: 1,
    }
  }
  
  updateRating = (latestReview) => {
    const {ratingCount, rating} = this.state;
    var newRatingCount = ratingCount + 1;
    // var newRating = (parseInt(rating)*ratingCount + latestReview) / newRatingCount;
    var newRating = ((rating * ratingCount) + latestReview) / newRatingCount;
    
    const {navigation} = this.props;
    const placeName = navigation.getParam('placeName', 'Tandoori Palace');
    
    // updates rating in the data variable
    for (var i = 0; i < data.length; i++) {
      if (data.name === placeName) {
        data.ratingNum = newRating;
        break;
      }
    }
    
    this.setState({
      rating: newRating,
      ratingCount: newRatingCount,
    })
  }
  
  static navigationOptions = {
    header: null
  }

  render() {
    
    const {navigation} = this.props;
    const placeName = navigation.getParam('placeName', 'Tandoori Palace');
    
    var placeInformation = data[placeName]
    var uri = require('TigerEats/src/assets/images/Tacoria-banner.png')
    var tags = ['Mexican', 'Tacos'];

    var opening_hours = indexIntoOpeningHrs(placeInformation);
    
    return (
      <View>
        <ScrollView>
          <Frontal 
            uri={uri} 
            rating={placeInformation.rating} 
          />
          <Description 
            address={placeInformation.address}
            tags={tags} 
            name={placeInformation.name}
            opening_hours={opening_hours} 
          />
          <Details 
            reviewPlace={this.updateRating} 
            phone_number={placeInformation.phone_number}
            location={placeInformation.location}
          />
        </ScrollView>
      </View>
      
    );
  }
}