import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class OpeningHrs extends Component {
  
  render() {
    
    const {openingHr, closingHr} = this.props;
            
    return (
      <View style={styles.openStatusContainer}>
        <OpenOrClosed openingHr={openingHr} closingHr={closingHr} />
        <Text style={styles.openingHrsText}>{openingHr}:00 - {closingHr}:00 hrs</Text>
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
    this.intervalID = setInterval(() =>  this.updateHour, 1000 * 180);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  static propTypes = {
    addClosedOverlay: PropTypes.func,
  }
  
  render() {
    
    
    const {openingHr, closingHr, customStyle} = this.props;
    const {currHr} = this.state;
    const isOpen = ((currHr >= openingHr) && (currHr <= closingHr));

    return (
      <View style={customStyle}>
        {isOpen ? (
          <Text style={[styles.open, styles.openStatus]}>Open</Text>
        ) : (
          <Text style={[styles.closed, styles.openStatus]}>Closed</Text>
        )}
      </View>
      
    );
  }
}

var styles = StyleSheet.create({
  openStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    textAlignVertical: 'bottom',
    marginRight: 20,
  },
  openStatus: {
    fontSize: 18,
    fontWeight: '700',
  },
  openingHrsText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'slategray'

  },
  open: {
    color: 'forestgreen'
  }, 
  closed: {
    color: 'tomato'
  }
});