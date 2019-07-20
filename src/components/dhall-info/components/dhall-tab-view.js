import React, {Component} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {connect} from 'react-redux'

import {getMenu, getDishesFromMenu} from 'TigerEats/src/actions'
const {width, height} = Dimensions.get('window');
import {styles} from '../styles'

function BreakfastRoute() {
  
  return (
    <View style={[styles.tabViewScene], {backgroundColor: 'black'}}/>
  );
}

function LunchRoute() {
  return (
    <View style={[styles.tabViewScene], {backgroundColor: 'black'}}/>
  );
}

function DinnerRoute() {
  return (
    <View style={[styles.tabViewScene], {backgroundColor: 'black'}}/>
  );
}

function LoadingDishes() {
  console.log('Loading...')
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    </View>
  );
}

class DHallTabView extends Component {
  
  constructor(props) {
    super(props);
    this.props.getMenu();
    if (!! this.props.meals) {
      this.props.getDishesFromMenu(this.props.meals);
    }
    this.state = {
      index: 0,
      routes: [
        {key: 'breakfast', title: 'Breakfast'},
        {key: 'lunch', title: 'Lunch'},
        {key: 'dinner', title: 'Dinner'},
      ]
    }
  }

  render() {

    return (
      <View style={styles.dHallTabViewContainer}>
        <TabView 
          navigationState={this.state}
          onIndexChange={(index) => this.setState({index: index})}
          initalLayout={{flex: 3, width: width, height: height * 0.5}}
          renderScene={SceneMap({
            breakfast: (this.props.loadingMenu) ? LoadingDishes : BreakfastRoute,
            lunch: (this.props.loadingMenu) ? LoadingDishes : LunchRoute,
            dinner: (this.props.loadingMenu) ? LoadingDishes : DinnerRoute
          })}
        />
      </View>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    meals: state.dishes.meals,
    dishes: state.dishes.dishesArray,
    loadingMenu: state.dishes.loadingMenu,
    loadingDishes: state.dishes.loadingDishes,
  }
}

const mapDispatchToProps = {
  getMenu,
  getDishesFromMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(DHallTabView)