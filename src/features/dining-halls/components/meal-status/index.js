import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DHallTimings} from 'TigerEats/src/constants/dhall-timings'
import {getTime, buildMealTimingString, constructCheckPointsArray, closestCheckPoint, closestMeal, getMealNameFromLetter} from './functions'
import {colors} from 'TigerEats/src/styles'

export default class MealStatus extends Component {
  
  state = {
    openStatus: null,
    nextMeal: null,
    nextMealTimings: null,
  }
  
  componentDidMount() {
    this.checkOpenStatus();
    // Interval for 1 minute to update Open/Close status
    this.timerId = setInterval(
      () => this.checkOpenStatus(),
      1000 * 60
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
  updateState(openStatus, nextMeal, nextMealTimings) {
    if (arguments.length === 3) {
      this.setState({
        openStatus, nextMeal, nextMealTimings
      });
    } else {
      this.setState({
        openStatus, nextMeal
      });
    }
  }
  
  checkOpenStatus() {
    let [hrs, mins, day, month] = getTime();
    decimalHrs = hrs + (mins / 60);
    decimalHrs = Math.round(decimalHrs * 100) / 100
    let {codeName} = this.props;
    // indexing into DHallTimings array's right day and hall
    let mealTimings = DHallTimings[day][codeName];
    if (mealTimings === 'closed') {
      this.updateState(false, 'Closed today');
      return;
    }
    
    let checkpoints = constructCheckPointsArray(mealTimings);
    
    // if current hour is past last meal time, next meal should be set for next morning
    if (decimalHrs >= checkpoints[checkpoints.length-1]) {
      tomorrowTimings = DHallTimings[(day+1) % 7][codeName];
      closestHr = closestCheckPoint(0, constructCheckPointsArray(tomorrowTimings))
      mealLetter = closestMeal(closestHr, tomorrowTimings)
      closestMealName = getMealNameFromLetter(mealLetter);
      closestMealTimings = tomorrowTimings[mealLetter];
      openStatus = false
    } 
    else {
      closestHr = closestCheckPoint(decimalHrs, checkpoints)
      mealLetter = closestMeal(closestHr, mealTimings)
      closestMealName = getMealNameFromLetter(mealLetter);
      closestMealTimings = mealTimings[mealLetter];
      if ((decimalHrs >= closestMealTimings[0]) && (decimalHrs < closestMealTimings[1])) {
        openStatus = true
      } else {
        openStatus = false
      }
    }

    this.updateState(openStatus, closestMealName,closestMealTimings);
    return;
  }
  
  openStatusIcon(openStatus) {
    return (
      <Icon name='circle'
        color={(openStatus) ? 'green' : colors.red}
        size={15}
      />
    );
  }
  
  renderNextMeal(nextMeal, mealTimings) {
    // doesn't print the ': ' if Grad College is 'Closed Today' (i.e. its mealTimings is null)
    if (mealTimings!==null) {
      return (<Text style={{fontWeight: 'bold'}}> {nextMeal}: </Text>);
    } else {
      return (<Text style={{fontWeight: 'bold'}}> {nextMeal}</Text>);
    }
    
  }
  
  renderMealTimings(nextMealTimings) {
    var openHr = nextMealTimings[0];
    var closingHr = nextMealTimings[1];
    return (buildMealTimingString(openHr % 12, closingHr % 12));
  }
  
  render() {
    let {openStatus, nextMeal, nextMealTimings} = this.state;
    // console.log(mealTimings);
    if (nextMeal !== null) {
      return (
        <View>
          <Text style={styles.dHallMealStatusText}>
            {this.openStatusIcon(openStatus)}
            {this.renderNextMeal(nextMeal, nextMealTimings)}
            {(nextMealTimings!==null) && this.renderMealTimings(nextMealTimings)}
          </Text>
        </View>
      );
    } else {
        return (
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <ActivityIndicator />
          </View>
        );
    }
  }
}

