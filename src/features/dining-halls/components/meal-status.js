import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MealStatus extends Component {
  
  state = {
    openStatus: null,
    nextMeal: null,
    mealTimings: null,
  }
  
  componentDidMount() {
    this.checkOpenStatus();
    // Interval for 1 minute to update Open/Close status
    this.timerId = setInterval(
      () => this.checkOpenStatus(),
      1000 * 60
    );
  }
  
  getTime() {
    var currDate = new Date();
    var currHrs = currDate.getHours();
    var currMins = currDate.getMinutes();
    var currDay = currDate.getDay()
    return [currHrs, currMins, currDay];
  }
  
  checkOpenStatus() {
    var [hrs, mins, day] = this.getTime();
    
    if (14 <= hrs && hrs < 20) {
      this.updateState((hrs < 17) ? 'Closed' : 'Open', 'Dinner', [17, 20])
    }
    else {
      this.updateState('Open', 'Breakfast', [10, 14])
    }
    // halls closed, next meal breakfast
    // else {
    //   // next meal is on weekend morning (brunch)
    //   if ((day >= 5 && hrs < 24) || ((day == 6 || day == 0) && hrs < 7)) {
    //     this.updateState('Closed', 'Brunch', [10, 14])
    //   }
    // }
  }
  
  updateState(openStatus, nextMeal, mealTimings) {
    this.setState({
      openStatus, nextMeal, mealTimings
    });
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
  buildMealTimingString(hr1, hr2, period) {
    return `${hr1}:00 - ${hr2}:00 ${period}`
  }
  
  buildMealTimingString(hr1, hr2, period1, period2) {
    
    return `${hr1}:00 ${period1} - ${hr2}:00 ${period2}`
  }
  
  renderMealTimings(mealTimings) {
    if (typeof mealTimings !== 'Array') {
      console.log(mealTimings)
    }
    var openHr = mealTimings[0];
    var closingHr = mealTimings[1];
    if (openHr >= 12) {
      // opening hr is p.m., checking for closing hr period
      if (closingHr >= 12) {
        console.log('hello');
        return (this.buildMealTimingString(openHr % 12, closingHr % 12, 'pm'));
      } else {
        console.log('lolol');
        return (this.buildMealTimingString(openHr % 12, closingHr, 'pm', 'am'));
      }
    } else {
      if (closingHr >= 12) {
        return (this.buildMealTimingString(openHr, closingHr % 12, 'am', 'pm'));
      } else {
        // both opening and closing hr in morning (a.m.)
        return (this.buildMealTimingString(openHr, closingHr, 'pm'));
      }
    }
  }
  
  openStatusIcon(openStatus) {
    return (
      <Icon name='circle'
        color={(openStatus === 'Open') ? 'green' : 'red'}
        size={15}
      />
    );
  }
  
  render() {
    let {openStatus, nextMeal, mealTimings} = this.state;
    console.log(mealTimings);
    if (mealTimings !== null) {
      return (
        <View>
          <Text style={styles.dHallMealStatusText}>{this.openStatusIcon(openStatus)}  {nextMeal}: {this.renderMealTimings(mealTimings)}</Text>
        </View>
      );
    } else {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
          </View>
        );
    }
  }
}