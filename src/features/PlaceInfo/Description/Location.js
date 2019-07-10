import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ({location}) {
  return (
    <View style={styles.locContainer}>
      <Text style={styles.locText}>{location}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  locContainer: {
    
  },
  locText: {
    color: 'darkgrey',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  }
});