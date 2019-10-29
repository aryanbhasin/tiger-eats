import React, {Component} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {connect} from 'react-redux'

import {getDishes} from 'TigerEats/src/actions'
import {styles} from '../styles'
import TabPage from './tab-menu-page'
import LoadingSpinner from 'TigerEats/src/components/loading-spinner'
import {FetchErrorComponent, NoFoodDataComponent, NoMealAvailableComponent} from './corner-case-components.js'

const {width, height} = Dimensions.get('window');


class DHallTabView extends Component {
  
  state = {
    index: 0,
    routes: [
      {key: 'Breakfast', title: 'Breakfast'},
      {key: 'Lunch', title: 'Lunch'},
      {key: 'Dinner', title: 'Dinner'},
    ],
  }
  
  indexIntoHallData() {
    let codeName = this.props.dHallCodeName;
    let hallDataArray = this.props.halls;
    filteredData = hallDataArray.filter((hall) => (codeName === Object.keys(hall)[0]));
    return filteredData[0][codeName];
  }
  
  _renderScene = ({route}) => {
    
    hallData = this.indexIntoHallData();
    let {dishes, meals, error, loading} = hallData;
    
    // if error message present, show error-message text component
    if (error.length > 1) {
      if (error === 'No Data Available') {
        return (<NoFoodDataComponent/>);
      } else {
        return (<FetchErrorComponent/>);
      }
    } 
    
    // otherwise, spinner if still loading...
    if (loading) {
      return( <LoadingSpinner />);
    } 
    // or tab page if not loading and data for the meal available
    if (route.key in dishes) {
      return (<TabPage dishes={dishes} meals={meals} loading={loading} routeKey={route.key}  />);
    }
    else {
      return (<NoMealAvailableComponent meal={route.key}/>);
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
    halls: state.dishes.halls
  }
}

export default connect(mapStateToProps)(DHallTabView)