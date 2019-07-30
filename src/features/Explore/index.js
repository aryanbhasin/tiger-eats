import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data.js';
import {styles} from './styles.js';

import TagCarousel from './components/tag-carousel';
import Search from 'TigerEats/src/components/search';
import CardList from './components/card-list';

import {connect} from 'react-redux'

const data = EATERY_DATA;

class Explore extends Component {
  
    state = {
      searchTerm: '',
      searchData: [],
      temporaryState: [],
      sortValue: ''
    }
    
    componentDidMount() {
      this.setState({
        searchData: data,
        temporaryState: data,
      })
    }
  
    handleTagPress = (tagName) => {
      const tagResults = this.state.searchData.filter((place) => {
        return place.tags.includes(tagName);
      })
      this.setState({
        searchData: tagResults,
        temporaryState: tagResults,
      })
    }
    
    handleTagDeselect = () => {
      var result = data;
      this.setState({
        searchData: result,
        temporaryState: result,
      });    
    }  
      
    render() {      
    
      return (
          <View>
            <Search />
            <TagCarousel handleTagPress={this.handleTagPress} handleTagDeselect={this.handleTagDeselect} />
            <CardList dataResults={this.props.searchResults} navigation={this.props.navigation} />
          </View>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults
  }
}

export default connect(mapStateToProps)(Explore)
