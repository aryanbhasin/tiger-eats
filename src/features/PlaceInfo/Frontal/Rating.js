import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function ({ratingNum, customStyle}) {
  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.rating}>{ratingNum}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    width: 45,
    height: 30,
    backgroundColor: 'yellowgreen',
    borderTopLeftRadius: 6,
    
    
  },
  rating: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  }
});

