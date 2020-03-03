/*
HTML Structure of menus.printceton.edu html mealCard:
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

import React, {Component} from 'react';
import {View, Text} from 'react-native'


function getMealName(mealCard) {
  let mealName = mealCard.contents[0].contents[0].contents[0]._text;
  return mealName;
}

function getCategoryDishes(category, mealItems) {
  var categoryObj = new Object();
  var dishes = new Array();
  let itemTitle = category.contents[0].contents[0]._text;
  itemTitle = itemTitle.trim();
  itemTitle = itemTitle.slice(3, itemTitle.length - 3)
  categoryObj['title'] = itemTitle;
  let items = category.contents[1].contents;
  for (var key in items) {
    let dish = items[key].contents[0]._text;
    if (dish.startsWith("Saut")) {
      dish = dish.replace(/[^\s]*/, 'Sautéed');
    }
    dishes.push(dish)
  }
  categoryObj['items'] = dishes;
  mealItems.push(categoryObj)
}

function getMealItems(mealCard) {
  let categories = mealCard.contents[1].contents;
  var mealItems = new Array();
  // gets dishes from each category (entrees, salads, etc.)
  for (var key in categories) {
    if (categories.hasOwnProperty(key)) {
      let category = categories[key];
      // object is an html tag not html comment
      if ("name" in category) {
        getCategoryDishes(category, mealItems)
      }
    }
  }
  return mealItems;
}

export function extractMealData(mealCard, mealData) {
  mealName = getMealName(mealCard);
  mealData[mealName] = getMealItems(mealCard);
}

