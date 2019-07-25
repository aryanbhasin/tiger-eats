import React, {Component} from 'react';
import {View, Text} from 'react-native'

import {cornerCaseStyles} from '../styles'

export class FetchErrorComponent extends Component {
  render() {
    return (
      <View style={cornerCaseStyles.cornerCaseContainer}>
        <Text style={cornerCaseStyles.cornerCaseText}>Error loading data</Text>
      </View>
    );
  }
}

export class NoFoodDataComponent extends Component {
  render() {
    return (
      <View style={cornerCaseStyles.cornerCaseContainer}>
        <Text style={cornerCaseStyles.cornerCaseText}>No food data available at this dining hall</Text>
      </View>
    )
  }
}