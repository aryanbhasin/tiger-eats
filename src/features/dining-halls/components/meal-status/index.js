import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

// local functions
import {DHallTimings} from 'TigerEats/src/constants/dhall-timings'
import {buildMealTimingString, checkOpenStatusHelper} from './functions'
import {colors} from 'TigerEats/src/styles'

export default class MealStatus extends Component {
  
  state = {
    openStatus: null,
    nextMeal: null,
    nextMealTimings: null,
    functionCallCount: 0
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
        openStatus, nextMeal, nextMealTimings: null
      });
    }
  }
  
  checkOpenStatus() {
    
    let [openStatus, closestMealName, closestMealTimings] = checkOpenStatusHelper(this.props.codeName);
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
    // doesn't print the ': ' if a DHall is 'Closed Today' (i.e. its mealTimings is null)
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
    let {closed} = this.props;
    
    if (closed) {
      return (
        <View>
          <Text style={styles.dHallMealStatusText}>
            {this.openStatusIcon(false)}
            {this.renderNextMeal('Closed Today', null)}
          </Text>
        </View>
      );
    }
    
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