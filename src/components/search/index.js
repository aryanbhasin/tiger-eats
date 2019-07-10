import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';

import {styles} from './styles.js';
import {updateSearch} from 'TigerEats/src/actions';

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data'

class Search extends Component {
  
  render() {
    
    return (
      <View style={styles.searchSortRow}>
        <SearchBar           
          placeholder='Search for a place'
          onChangeText={(text) => {this.props.updateSearch(text, PLACES_DATA)}}
          onClear={(text) => {this.props.updateSearch('', PLACES_DATA)}}
          value={this.props.searchTerm}
          autoCorrect={false}
          lightTheme
          round
          containerStyle={styles.searchBarContainer}
        />
      </View>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
  }
};

const mapDispatchToProps = {
  updateSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)