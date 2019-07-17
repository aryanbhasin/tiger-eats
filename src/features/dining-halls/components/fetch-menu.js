import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import HTMLParser from 'fast-html-parser'
import JSSoup from 'jssoup'

import DHallDishesExtractor from './get-dishes.js'

export default class FetchMenu extends Component {
  
  state = {
    html: null,
    loading: true,
  }
  
  URLConstructor() {
    let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining';
    let date = '&dtdate=7%2F12%2F2019';
    let dhall = '&locationNum=02&locationName=%20Butler+%26+Wilson+Colleges&naFlag=1'
    return base + date + dhall;
  }
  
  async componentDidMount() {
    try {
      let url = this.URLConstructor();
      let response = await fetch(url);
      let htmlText = await response.text()
      let html = HTMLParser.parse(htmlText);
      var soup = new JSSoup(htmlText);
      this.setState({html: soup, loading: false })
    } catch (error) {
      console.log(error);
    }
  }
  
  extractMeals() {
    const {loading, html} = this.state;
    if (!loading) {
      return html.findAll('div', 'mealCard')
    }
  }
  
  render() {
    let {html, loading, meals} = this.state;
    if (!loading) {
      let meals = this.extractMeals()
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