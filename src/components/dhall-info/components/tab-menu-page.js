import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types'
import {styles} from '../styles'

export default class TabPage extends React.PureComponent {
  
  static propTypes = {
    loading: PropTypes.bool,
    meals: PropTypes.array,
    dishes: PropTypes.object.isRequired,
    getDishes: PropTypes.func,
    routeKey : PropTypes.string.isRequired
  }
  
  render() {
    switch (this.props.routeKey) {
      case 'breakfast':
        return <View style={[styles.tabViewScene, { backgroundColor: '#f1d881' }]} />
      case 'lunch':
        return <View style={[styles.tabViewScene, { backgroundColor: '#ff4081' }]} />
      case 'dinner':
        return <View style={[styles.tabViewScene, { backgroundColor: 'blue' }]} />
      default:
        return null
    }
  }
}