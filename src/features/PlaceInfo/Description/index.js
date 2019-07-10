import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import OpeningHrs from './OpeningHrs';
import Type from './Type';
import Location from './Location';

export default class Description extends Component {
  
  render() {
    
    const {location, tags, openHrs} = this.props;
    const openingHr = openHrs[0];
    const closingHr = openHrs[1];
    
    return (
      <View style={styles.container}>
        <Location location={location} />
        <Type tags={tags} />
        <OpeningHrs openingHr={openingHr} closingHr={closingHr} />
      </View>

    );
  }
  
}

var styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  }
});