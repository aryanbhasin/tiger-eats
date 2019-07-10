import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data.js';
import {styles} from './styles.js';

import TagCarousel from './TagCarousel';
import Search from 'TigerEats/src/components/search';
import CardList from './CardList';

import {connect} from 'react-redux'

const data = PLACES_DATA;

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
      const {searchData} = this.state;

      return (
          <View>
            <Search updateSearchTerm={this.updateSearchTerm} applySort={this.applySort} searchTerm={this.state.searchTerm} />
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
