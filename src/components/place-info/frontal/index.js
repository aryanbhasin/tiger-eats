import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types'

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
        <View>
          <Image style={styles.image} source={uri}/>
        </View>
        <Rating rating={rating} customStyle={styles.rating} />
      </View>
    );
  }
}

export class Rating extends Component {
  render() {
    let {rating, customStyle} = this.props;
    return (
      <View style={[styles.ratingContainer, customStyle]}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    );
  }
}

