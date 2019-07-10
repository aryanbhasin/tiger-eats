import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Directions from './Directions';
import CallCard from './CallCard';
import Menu from './Menu';
import ReviewStars from './ReviewStars';

export default class Details extends Component {
  render() {
    
    const {reviewPlace, itemList, destCoords, number} = this.props;
    
    const hasPhoneNumber = !!number ? true : false;
    
    return (
      <View>
        <Directions destCoords={destCoords} />
        {hasPhoneNumber ? (<CallCard number={number} />) : null}
        <ReviewStars reviewPlace={reviewPlace} />
        <Menu itemList={itemList} />
      </View>
      
    );
  }
}