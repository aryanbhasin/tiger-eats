import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CoverImage from './CoverImage';
import Title from './Title';
import Rating from './Rating';

export default class Frontal extends Component {
  
  render() {
    
    const {uri, name, ratingNum} = this.props;
    
    return (
      <View style={styles.container}>
        <CoverImage uri={uri} />
        <Title name={name} style={styles.title} />
        <Rating ratingNum={ratingNum} style={styles.rating} />
      </View>
    );
    
  }
}

var styles = StyleSheet.create({
  container: {

  },
  title: {
    
  },
  rating: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  }
});