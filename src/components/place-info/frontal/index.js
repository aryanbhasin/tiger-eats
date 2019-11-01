import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {CachedImage} from 'react-native-cached-image';
import PropTypes from 'prop-types'

import LoadingSpinner from 'TigerEats/src/components/loading-spinner';

import {styles} from './styles'
import {placeInfoStyles} from 'TigerEats/src/styles/index.js'

export default class Frontal extends Component {
  
  static propTypes = {
    rating: PropTypes.number,
    uri: PropTypes.any.isRequired
  }
  
  render() {
    const {uri, rating} = this.props;
    return (
      <View>      
        <CachedImage style={styles.image} source={uri} loadingIndicator={LoadingSpinner} />
        <Rating rating={rating} customStyle={styles.rating} />
      </View>
    );
  }
}

export class Rating extends Component {
  render() {
    let {rating, customStyle} = this.props;
    return (
      <View style={[customStyle, styles.ratingContainer]}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    );
  }
}

