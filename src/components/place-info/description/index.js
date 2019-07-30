import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'

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
        <View style={styles.descriptionContainer}>
          <View style={styles.titleAndAddressContainer}>
            <Title name={toTitleCase(name)} />
            <Text style={styles.addressText}>{address}</Text>
          </View>
          <View style={{flex: 1, marginRight: 10}}>
            <OpeningHrs openingHr={openingHr} closingHr={closingHr} />
          </View>
        </View>
        <TagStrip tags={tags} />
      </View>
    );
  }
}

function Title ({name}) {
  return(
    <Text style={styles.titleText}>{name}</Text>
  );
}

function TagStrip ({tags}) {
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