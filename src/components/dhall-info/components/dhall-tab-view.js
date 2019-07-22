import React, {Component} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {connect} from 'react-redux'

import {getDishes} from 'TigerEats/src/actions'
import LoadingSpinner from 'TigerEats/src/components/loading-spinner'
import TabPage from './tab-menu-page'
const {width, height} = Dimensions.get('window');
import {styles} from '../styles'

class DHallTabView extends Component {
  
  constructor(props) {
    super(props);
    this.props.getDishes(this.URLConstructor());
    this.state = {
      index: 0,
      routes: [
        {key: 'breakfast', title: 'Breakfast'},
        {key: 'lunch', title: 'Lunch'},
        {key: 'dinner', title: 'Dinner'},
      ]
    }
  }
  
  URLConstructor() {
    let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining';
    let date = '&dtdate=7%2F12%2F2019';
    let dhall = '&locationNum=02&locationName=%20Butler+%26+Wilson+Colleges&naFlag=1'
    return base + date + dhall;
  }
  
  _renderScene= ({route}) => {
    return (this.props.loading) ? <LoadingSpinner /> : <TabPage {...this.props} routeKey={route.key}  />
  }

  render() {
    return (
      <View style={styles.dHallTabViewContainer}>
        <TabView 
          navigationState={this.state}
          onIndexChange={(index) => this.setState({index: index})}
          initalLayout={{flex: 3, width: width, height: height * 0.5}}
          renderScene={this._renderScene}
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
  }
}

const mapDispatchToProps = {
  getDishes,
}

export default connect(mapStateToProps, mapDispatchToProps)(DHallTabView)