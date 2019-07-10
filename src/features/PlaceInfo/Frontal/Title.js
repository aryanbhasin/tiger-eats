import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {defaultStyles} from '../index.js'

export default function Title ({name}) {
  return(
    <View style={styles.container}>
      <Text style={[styles.name, defaultStyles.defaultFont]}>{name}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    width: 200,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  name: {
    color: 'white',
    fontSize: 44,
    fontWeight: '700'
  }
});