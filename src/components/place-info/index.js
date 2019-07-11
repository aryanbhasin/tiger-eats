import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, ScrollView, StatusBar} from 'react-native';

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data.js';

import Frontal from './frontal';
import Description from './description';
import Details from './details';

const data = PLACES_DATA;

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
    
    var placeInformation = data.find((item) => {
      return item.name === placeName;
    })
    
    return (
      <View>
        <ScrollView>
          <Frontal 
            uri={placeInformation.uri} 
            name={placeInformation.name}
            ratingNum={this.state.rating.toFixed(1)} 
          />
          <Description 
            location={placeInformation.location}
            tags={placeInformation.tags} 
            openHrs={placeInformation.openHrs} 
          />
          <Details 
            reviewPlace={this.updateRating} 
            itemList={placeInformation.itemList} 
            number={placeInformation.number}
            destCoords={placeInformation.destCoords}
          />
        </ScrollView>
      </View>
      
    );
  }
}