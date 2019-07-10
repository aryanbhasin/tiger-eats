import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Type extends Component {
  
  render() {
    
    const {tags} = this.props;
    
    return (
      <View style={styles.tagRow}>{tags.map((item) => (
        <View key={item} style={styles.tagContainer}>
          <Text style={styles.tagText}>{item}</Text>
        </View>
        
        ))}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tagText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white'
  },
  tagContainer: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  tagRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  
});