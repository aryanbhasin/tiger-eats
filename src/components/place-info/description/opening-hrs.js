import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {openStatusStyles as styles} from './styles'

export default class OpeningHrs extends Component {
  
  constructor(props) {
    super(props);
    let currHr = parseInt(new Date().getHours())
    this.isOpen = ((currHr >= this.props.openingHr) && (currHr <= this.props.closingHr));
  }
  
  renderOpenStatusText() {
    if (this.isOpen) {
      text = this.props.closingHr
    } else {
      text = this.props.openingHr
    }
    if (text < 12) {
      return `until ${text} am`
    } else {
      return `until ${text % 12} pm`
    }
  }
  
  render() {
    
    const {openingHr, closingHr} = this.props;       
    return (
      <View style={styles.openStatusContainer}>
        <OpenOrClosed openingHr={openingHr} closingHr={closingHr} customTextStyle={{fontSize: 20}} />
        <Text style={styles.openingHrsText}>{this.renderOpenStatusText()}</Text>
      </View>
    );
  }
}

export class OpenOrClosed extends Component {
  
  constructor(props) {
    super(props);
    var currHours = parseInt(new Date().getHours());
    this.state = {
      currHr: currHours,
    };
  }
  
  updateHour() {
    var currHours = parseInt(new Date().getHours());
    this.setState({
      currHr: currHours,
    });
  }
  
  componentDidMount() {
    // updateHour is called every minute
    this.intervalID = setInterval(() =>  this.updateHour, 1000 * 60);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  static propTypes = {
    openingHr: PropTypes.number.isRequired,
    closingHr: PropTypes.number.isRequired,
    // StyleSheet is shaped as an object
    customStyle: PropTypes.object
  }
  
  render() {
    const {openingHr, closingHr, customStyle, customTextStyle} = this.props;
    const {currHr} = this.state;
    const isOpen = ((currHr >= openingHr) && (currHr <= closingHr));

    return (
      <View style={customStyle}>
        {isOpen ? (
          <Text style={[styles.open, styles.openStatus, customTextStyle]}>Open</Text>
        ) : (
          <Text style={[styles.closed, styles.openStatus, customTextStyle]}>Closed</Text>
        )}
      </View>
      
    );
  }
}