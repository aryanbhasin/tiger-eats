import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles'
import {placeInfoStyles} from 'TigerEats/src/styles/index.js'

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

function CoverImage ({uri}){
  return (
    <View>
      <Image style={styles.image} source={uri}/>
    </View>
  );
}

export class Rating extends Component {
  render() {
    let {ratingNum, customStyle} = this.props;
    return (
      <View style={[styles.ratingContainer, customStyle]}>
        <Text style={styles.ratingText}>{ratingNum}</Text>
      </View>
    );
  }
}

function Title ({name}) {
  return(
    <View style={styles.titleContainer}>
      <Text style={[styles.name, placeInfoStyles.defaultFont]}>{name}</Text>
    </View>
  );
}

