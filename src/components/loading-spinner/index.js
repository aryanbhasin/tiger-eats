import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'

export default class LoadingSpinner extends Component {
  render() {
    return (
      <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    );
  }
}