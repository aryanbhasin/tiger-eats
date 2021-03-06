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
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 28,
    textAlign: 'center',
    flex: 1,
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