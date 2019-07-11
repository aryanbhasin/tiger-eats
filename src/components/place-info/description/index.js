import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import OpeningHrs from './OpeningHrs';

import {styles} from './styles'

export default class Description extends Component {
  
  render() {
    
    const {location, tags, openHrs} = this.props;
    const openingHr = openHrs[0];
    const closingHr = openHrs[1];
    
    return (
      <View style={styles.container}>
        <Location location={location} />
        <TagRow tags={tags} />
        <OpeningHrs openingHr={openingHr} closingHr={closingHr} />
      </View>

    );
  }
}

function Location ({location}) {
  return (
    <View>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
}

function TagRow ({tags}) {
  return (
    <View style={styles.tagRow}>
      {tags.map((item) => (
        <View key={item} style={styles.tagContainer}>
          <Text style={styles.tagText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}