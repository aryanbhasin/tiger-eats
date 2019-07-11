import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback} from 'react-native';

import {styles} from '../styles'

export default class TagCarousel extends Component {
  
  state = {
    isTagPressed: false,
    tagNamePressed: ''
  }
  
  updateisTagPressed = (tagName) => {
    this.setState({
      isTagPressed: !this.state.isTagPressed,
    })
    this.setState({
      tagNamePressed: this.state.isTagPressed ? '' : tagName,
    })
  }
  
  render() {
    const tagList = ['Mexican', 'Ice Cream', 'Drinks', 'Sandwiches', 'Korean', 'Tacos', 'Desserts', 'Continental']
    return (
        <ScrollView horizontal scrollEventThrottle={16} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tagCarouselContainer}>
          {tagList.map((tagName) => (<TagButton 
              onPress={this.props.handleTagPress} 
              onDeselect={this.props.handleTagDeselect} 
              key={tagName} 
              tagName={tagName}
              updateisTagPressed={this.updateisTagPressed}
              tagState={this.state}
            />)
            )}
        </ScrollView>
    );
  }
}

class TagButton extends Component {
  
  state = {
    pressStatus: false,
  }
  
  handlePress() {
    this.setState({pressStatus: !this.state.pressStatus})
  }
  
  render() {
    const {tagName, onPress, onDeselect, updateisTagPressed, tagState} = this.props;
    if (!tagState.isTagPressed || tagName === tagState.tagNamePressed) {
      return (
        <TouchableWithoutFeedback onPress={() => {this.state.pressStatus ? onDeselect() : onPress(tagName); this.handlePress(); updateisTagPressed(tagName)}}>
          <View style={[styles.tagButtonContainer, this.state.pressStatus ? styles.tagButtonPressed : null]}>
            <Text style={styles.tagButtonName}>{tagName}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <View style={[styles.tagButtonContainer, this.state.pressStatus ? styles.tagButtonPressed : null]}>
          <Text style={styles.tagButtonName}>{tagName}</Text>
        </View>
      );
      
    }
      
    
  }
}