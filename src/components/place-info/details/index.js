import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Directions from './components/directions';
import CallCard from './components/call-card.js';
import ReviewStars from './components/review-stars';

import {placeInfoStyles} from 'TigerEats/src/styles/index.js'
import {styles} from './styles.js'

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