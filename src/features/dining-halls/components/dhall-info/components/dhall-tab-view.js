import React, {Component} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {connect} from 'react-redux'

import {getDishes} from 'TigerEats/src/actions'
import {styles} from '../styles'
import TabPage from './tab-menu-page'
import LoadingSpinner from 'TigerEats/src/components/loading-spinner'
import {FetchErrorComponent, NoFoodDataComponent} from './corner-case-components.js'

const {width, height} = Dimensions.get('window');


class DHallTabView extends Component {
  
  state = {
    index: 0,
    routes: [
      {key: 'breakfast', title: 'Breakfast'},
      {key: 'lunch', title: 'Lunch'},
      {key: 'dinner', title: 'Dinner'},
    ],
  }
  
  indexIntoHallData() {
    let codeName = this.props.dHallCodeName;
    let hallDataArray = this.props.halls;
    console.log(hallDataArray, codeName)
    filteredData = hallDataArray.filter((hall) => (codeName === Object.keys(hall)[0]));
    return filteredData[0][codeName];
  }
  
  _renderScene = ({route}) => {
    
    hallData = this.indexIntoHallData();
    let {dishes, meals, error, loading} = hallData;
    // if error message present, show fetch-error text component
    
    if (error.length > 1) {
      if (error === 'No Data Available') {
        return (<NoFoodDataComponent />);
      } else {
        return (<FetchErrorComponent />);
      }
    } else {
      if (loading) {
        return( <LoadingSpinner />);
      } else {
        return (<TabPage dishes={dishes} meals={meals} loading={loading} routeKey={route.key}  />);
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
    halls: state.dishes.halls
  }
}

export default connect(mapStateToProps)(DHallTabView)