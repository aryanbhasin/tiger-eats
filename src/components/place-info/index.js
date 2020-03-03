import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data.js';

import {indexIntoOpeningHrs} from 'TigerEats/src/functions/explore-functions'
import {getLocation} from 'TigerEats/src/actions'
import {showMessage} from 'react-native-flash-message'

import Frontal from './frontal';
import Description from './description';
import Details from './details';

const data = EATERY_DATA;

class PlaceInfo extends Component {
  
  constructor(props) {
    super(props);
    
    this.props.getLocation();

    this.state = {
      firstLaunch: null
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

  render() {
    var {eateryData} = this.props;
    const {navigation} = this.props;
    const placeName = navigation.getParam('placeName', 'Tandoori Palace');
    
    var placeInformation = eateryData[placeName]

    var opening_hours = indexIntoOpeningHrs(placeInformation);
    
    return (
      <View style={{flex: 1}}>
          <Frontal 
            uri={{uri: placeInformation.imageUri}} 
            rating={placeInformation.rating} 
          />
          <View style={{flex: 1}}>
            <View style={{}}>
              <Description 
                address={placeInformation.address}
                tags={placeInformation.tags} 
                name={placeInformation.name}
                opening_hours={opening_hours} 
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Details 
                reviewPlace={this.updateRating} 
                phone_number={placeInformation.phone_number}
                location={placeInformation.location}
                website={placeInformation.website}
              />
            </View>
          </View>
      </View>
      
    );
  }
}

mapStateToProps = (state) => {
  return({
    eateryData: state.eatery.data,
    position: state.location.coordinates,
    locWarningShown: state.location.warningShown,
  })
}

const mapDispatchToProps = {
  getLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInfo)