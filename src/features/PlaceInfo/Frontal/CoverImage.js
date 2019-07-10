import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default function CoverImage ({uri}) {
  return (
    <View>
      <Image style={styles.image} source={uri}/>
    </View>
  );
}

var styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: width,
  }
});