import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';

import {styles} from './styles.js';
import {updateSearch} from 'TigerEats/src/actions';

import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data'

class Search extends Component {
  
  render() {
    
    return (
      <View style={styles.searchSortRow}>
        <SearchBar           
          placeholder='Search for a place'
          onChangeText={(text) => {this.props.updateSearch(text, EATERY_DATA)}}
          onClear={(text) => {this.props.updateSearch('', EATERY_DATA)}}
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