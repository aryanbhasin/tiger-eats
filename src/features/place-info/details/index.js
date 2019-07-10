import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Directions from './Directions';
import CallCard from './CallCard';
import ReviewStars from './ReviewStars';

import {defaultStyles} from '../index.js'
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
    <View style={defaultStyles.defaultContainer}>
      <Text style={defaultStyles.defaultHeader}>Main Items</Text>
      <View style={{height: 100}}>{itemList.map((item) => 
        (<Text key={item} style={styles.mainItemStyle}>{item}</Text>)
      )}</View>
    </View>
  );
}