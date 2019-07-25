import React, {Component} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {connect} from 'react-redux'

import {styles} from '../styles'
import TabPage from './tab-menu-page'
import constructDiningUrl from 'TigerEats/src/components/extract-menu/dining-url-constructor'
import {getDishes} from 'TigerEats/src/actions'
import LoadingSpinner from 'TigerEats/src/components/loading-spinner'
import {FetchErrorComponent} from './corner-case-components.js'

const {width, height} = Dimensions.get('window');


class DHallTabView extends Component {
  
  constructor(props) {
    super(props);
    let URL = constructDiningUrl(this.props.dHallName);
    this.props.getDishes(URL);
    this.state = {
      index: 0,
      routes: [
        {key: 'breakfast', title: 'Breakfast'},
        {key: 'lunch', title: 'Lunch'},
        {key: 'dinner', title: 'Dinner'},
      ]
    }
  }
  
  _renderScene = ({route}) => {
    // if error message present, show fetch-error text component
    if (this.props.error.length > 1) {
      console.log(this.props.error);
      return (<FetchErrorComponent />);
    } else {
      if (this.props.loading) {
        return( <LoadingSpinner />);
      } else {
        return (<TabPage {...this.props} routeKey={route.key}  />);
      }
    }
  }
  
  _renderTabBar = (props) => {
    return (
      <TabBar 
        {...props}
        style={styles.tabBar}
        indicatorStyle={styles.tabBarIndicator}
        labelStyle={styles.tabBarLabel}
      />
    );
  }

  render() {
    return (
      <View style={styles.dHallTabViewContainer}>
        <TabView 
          navigationState={this.state}
          onIndexChange={(index) => this.setState({index: index})}
          initalLayout={{flex: 3, width: width, height: height * 0.5}}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
        />
      </View>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    meals: state.dishes.meals,
    dishes: state.dishes.dishes,
    loading: state.dishes.loading,
    error: state.dishes.error
  }
}

const mapDispatchToProps = {
  getDishes,
}

export default connect(mapStateToProps, mapDispatchToProps)(DHallTabView)