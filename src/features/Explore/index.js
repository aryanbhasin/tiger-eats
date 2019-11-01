import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux'

import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data.js';
import {styles} from './styles.js';
import {updateSearch} from 'TigerEats/src/actions'

import TagCarousel from './components/tag-carousel';
import Search from 'TigerEats/src/components/search';
import CardList from './components/card-list';
import LoadingSpinner from 'TigerEats/src/components/loading-spinner'



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
      let {eateryData, searchResults} = this.props;
      // shows loading spinner if both eateryData and searchResults are empty objects...
      if ((Object.entries(eateryData).length == 0) && (Object.entries(searchResults).length == 0)) {
        return (
          <LoadingSpinner />
        );
      }
      // ... as soon as eateryData populates, we set our currently empty searchResults to eateryData ...
      else if ((Object.entries(eateryData).length != 0) && (Object.entries(searchResults).length == 0)) {
        this.props.updateSearch('', eateryData);
        return (
          <LoadingSpinner />
        );
      }
      // ... so that now we can use our fetched data under searchResults
      else {
        return (
            <View>
              <Search />
              <TagCarousel handleTagPress={this.handleTagPress} handleTagDeselect={this.handleTagDeselect} />
              <CardList dataResults={this.props.searchResults} navigation={this.props.navigation} />
            </View>
        );
      }
    }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults,
    eateryData: state.eatery.data
  }
}

const mapDispatchToProps = {
  updateSearch: updateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
