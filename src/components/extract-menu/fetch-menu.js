import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux'

import {getMenu} from 'TigerEats/src/actions'
import DHallDishesExtractor from './get-dishes.js'

class FetchMenu extends Component {
  
  constructor(props) {
    super(props);
    this.props.getMenu(this.URLConstructor())
  }
  
  URLConstructor() {
    let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining';
    let date = '&dtdate=7%2F12%2F2019';
    let dhall = '&locationNum=02&locationName=%20Butler+%26+Wilson+Colleges&naFlag=1'
    return base + date + dhall;
  }

  render() {
    
    let {meals, loading} = this.props;

    if (!loading && !!meals) {
      console.log(meals, loading)
      return (
          <DHallDishesExtractor mealCardArray={meals} />
      );
    } else {
      return (
        <ActivityIndicator style={styles.container} />
      );
    }  
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  }
})

const mapStateToProps = (state) => {
  return {
    meals: state.dishes.meals,
    loading: state.dishes.loadingMenu
  }
}

const mapDispatchToProps = {
  getMenu: getMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchMenu)