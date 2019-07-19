import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const {width, height} = Dimensions.get('window');


function BreakfastRoute() {
  return (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}/>
  );
}

function LunchRoute() {
  return (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]}/>
  );
}

function DinnerRoute() {
  return (
    <View style={[styles.scene, { backgroundColor: '#d2ca13' }]}/>
  );
}

export default class DHallTabView extends Component {
  
  state = {
    index: 0,
    routes: [
      {key: 'breakfast', title: 'Breakfast'},
      {key: 'lunch', title: 'Lunch'},
      {key: 'dinner', title: 'Dinner'},
    ]
  }
  
  render() {
    return (
      <TabView 
        navigationState={this.state}
        onIndexChange={(index) => this.setState({index: index})}
        initalLayout={{width}}
        renderScene={SceneMap({
          breakfast: BreakfastRoute,
          lunch: LunchRoute,
          dinner: DinnerRoute
        })}
      />
    );
  }
  
}