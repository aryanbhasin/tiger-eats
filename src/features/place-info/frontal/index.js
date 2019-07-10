import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles'
import {defaultStyles} from '../index.js'

export default class Frontal extends Component {
  render() {
    const {uri, name, ratingNum} = this.props;
    return (
      <View>
        <CoverImage uri={uri} />
        <Title name={name} />
        <Rating ratingNum={ratingNum} customStyle={styles.rating} />
      </View>
    );
  }
}

class CoverImage extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={uri}/>
      </View>
    );
  }
}

export class Rating extends Component {
  render() {
    let {ratingNum, customStyle} = this.props;
    return (
      <View style={[styles.ratingContainer, customStyle]}>
        <Text style={styles.rating}>{ratingNum}</Text>
      </View>
    );
  }
}

class Title extends Component {
  render() {
    let {name} = this.props;
    return(
      <View style={styles.titleContainer}>
        <Text style={[styles.name, defaultStyles.defaultFont]}>{name}</Text>
      </View>
    );
  }
}