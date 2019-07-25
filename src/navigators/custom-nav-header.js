import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../styles'

export default class HeaderTitle extends Component {
  render() {
    return (
      <Text style={[styles.headerText, styles.textTiger]}>
        TIGER
        <Text style={[styles.headerText, styles.textEats]}>eats</Text>
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  textTiger: {
    color: colors.orange,
  },
  textEats: {
    color: colors.black,
    fontSize: 29,
    fontFamily: 'Courgette-Regular',
    fontWeight: 'bold'
  }
})