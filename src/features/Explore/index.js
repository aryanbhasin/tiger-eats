import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data.js';
import {styles} from './styles.js';

import TagCarousel from './TagCarousel';
import Search from 'TigerEats/src/components/search';
import CardList from './CardList';
import SortByDistance from 'TigerEats/src/components/search/sort-dist';
import SortByRating from 'TigerEats/src/components/search/sort-rating';
import {connect} from 'react-redux'

const data = PLACES_DATA;

class Explore extends Component {
  
    static navigationOptions = {
      title: 'TigerEats',
      headerTitleStyle: {
        color: '#ff8f00',
        fontWeight: '700',
        fontSize: 28,
      }
    }
  
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
      if (this.state.sortValue === 'By Distance') {result = SortByDistance(data)}
      if (this.state.sortValue === 'By Rating') {result = SortByRating(data)}
      this.setState({
        searchData: result,
        temporaryState: result,
      });    
    }
    
    updateSearchTerm = (newTerm) => {
      const dataToSearch = this.state.temporaryState;
      const searchTerm = newTerm.toUpperCase();
      const searchResults = dataToSearch.filter((place) => {
        const placeName = place.name.toUpperCase();
        return (placeName.indexOf(searchTerm) > -1);
      })
      this.setState({
        searchTerm: newTerm,
        searchData: searchResults,
      });
    } 
    
    applySort = (value) => {
      var result;
      switch(value) {
        case 'By Distance':
          result = this.handleDistanceSort();
          this.setState({
            searchData: result,
            
            sortValue: 'By Distance',
          });
          break;
        case 'By Rating':
          result = this.handleRatingSort();
          this.setState({
            searchData: result,
          
            sortValue: 'By Rating',
          });
          break;
      }
    }
    
    handleDistanceSort = () => {
      return SortByDistance(this.state.searchData);
      
    }
    
    handleRatingSort = () => {
      return SortByRating(this.state.searchData);
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
