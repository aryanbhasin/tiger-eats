import React, {Component} from 'react';
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import JSSoup from 'jssoup'

export default class DHallDishesExtractor extends Component {
  
  static propTypes = {
    mealCardArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  
  state = {
    breakfast: null,
    lunch: null,
    dinner: null
  }
  
  getMealName(mealCard) {
    let mealName = mealCard.contents[0].contents[0].contents[0]._text;
    return mealName;
  }
  
  /*
  HTML Structure:
  mealCard
  --> cardHeader
  ---> ul list-group
    ---> li category1
      ---> h6 category header
      ---> ul
        ---> li dish1
        ---> li dish2
    ---> li category2
  */
  
  getCategoryDishes(category, mealItems) {
    var categoryObj = new Object();
    var dishes = new Array();
    let itemTitle = category.contents[0].contents[0]._text;
    itemTitle = itemTitle.trim();
    itemTitle = itemTitle.slice(3, itemTitle.length - 3)
    categoryObj['title'] = itemTitle;
    let items = category.contents[1].contents;
    for (var key in items) {
      let dish = items[key].contents[0]._text;
      dishes.push(dish)
    }
    categoryObj['dishes'] = dishes;
    mealItems.push(categoryObj)
  }
  
  getMealItems(mealCard) {
    let categories = mealCard.contents[1].contents;
    var mealItems = new Array();
    // gets dishes from each category (entrees, salads, etc.)
    for (var key in categories) {
      if (categories.hasOwnProperty(key)) {
        let category = categories[key];
        // object is an html tag not html comment
        if ("name" in category) {
          this.getCategoryDishes(category, mealItems)
        }
      }
    }
    return mealItems;
  }
  
  extractMealData(mealCard, mealData) {
    mealName = this.getMealName(mealCard);
    mealData[mealName] = this.getMealItems(mealCard);
  }
  
  render() {
    let {mealCardArray} = this.props;
    mealData = new Object();
    mealCardArray.forEach(mealCard => this.extractMealData(mealCard, mealData));
    console.log(mealData);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>done</Text>
      </View>
    );
  }
}
