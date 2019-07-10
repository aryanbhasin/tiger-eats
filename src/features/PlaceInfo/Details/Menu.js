import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {defaultStyles} from '../index.js'

export default class Menu extends Component {

  render() {
    
    const {itemList} = this.props;

    return (
      <View style={defaultStyles.defaultContainer}>
        <Text style={defaultStyles.defaultHeader}>Main Items</Text>
        <View style={{height: 100}}>{itemList.map((item) => 
          (<Text key={item} style={styles.itemStyle}>{item}</Text>)
        )}</View>
      </View>
    );
  }
  
}

var styles = StyleSheet.create({
  itemStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'slategray',
    marginVertical: 2,
    
  }
});