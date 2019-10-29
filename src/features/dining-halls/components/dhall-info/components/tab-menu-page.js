import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors} from 'TigerEats/src/styles'

import {styles, dishesStyles} from '../styles'

export default class TabPage extends React.PureComponent {
  
  static propTypes = {
    loading: PropTypes.bool,
    meals: PropTypes.array,
    dishes: PropTypes.object.isRequired,
    getDishes: PropTypes.func,
    routeKey : PropTypes.string.isRequired
  }
  
  
  // showDishItems and showDishCategories are helper functions for showMeal
  showDishItems(itemsArray) {
    return itemsArray.map((item, index) => {
      return (
        <Text key={index} style={dishesStyles.dishItems}>{item}</Text>
      );
    })
  }
  
  showDishCategories(categoriesArray) {
    return categoriesArray.map((category, index) => {
      return (
        <View key={index} style={dishesStyles.dishCategoryContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name='paw' size={20} color={colors.orange} style={{marginRight: 5}} />
            <Text style={dishesStyles.dishCategory}>{category.title}</Text>
          </View>
          {this.showDishItems(category.items)}
        </View>
      );
    })
  }
  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  showMeal() {
    // show dishes of the meal corresponding to routeKey (e.g. breakfast dishes if routeKey='Breakfast')
    let {routeKey, dishes} = this.props;
    return this.showDishCategories(dishes[routeKey])
  }
  
  render() {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={dishesStyles.container}>
        {this.showMeal()}
        <Spacer />
      </ScrollView>
    );
  }
}

function Spacer() {
  return (
    <View style={{height: 20}} />
  );
}