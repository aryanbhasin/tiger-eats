import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import { Platform } from 'react-native'

import OpeningHrs from './opening-hrs';
import {toTitleCase} from 'TigerEats/src/functions/general'
import {styles} from './styles'

export default class Description extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    opening_hours: PropTypes.arrayOf(PropTypes.number),
  }
  
  render() {
    
                                // Should tag strip be in description or detail???
    const {address, tags, opening_hours, name} = this.props;
    const openingHr = opening_hours[0];
    const closingHr = opening_hours[1];
    
    return (
      <View>
        <View style={styles.titleAndAddressContainer}>
          <Title name={toTitleCase(name)} />
          <Text style={styles.addressText}>{address}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <TagStrip tags={tags} />
          <View>
            <OpeningHrs openingHr={openingHr} closingHr={closingHr} />
          </View>
        </View>
      </View>
    );
  }
}

function Title ({name}) {
  return(
    <Text style={[styles.titleText, (name.length > 14) && (Platform.OS === 'ios') ? {fontSize: 34} : {fontSize: 29}]}>{name}</Text>
  );
}

function TagStrip ({tags}) {
  return (
    <View style={styles.tagRow}>
      {Object.keys(tags).map((key) => (
        <View key={tags[key]} style={styles.tagContainer}>
          <Text style={styles.tagText}>{tags[key]}</Text>
        </View>
      ))}
    </View>
  );
}