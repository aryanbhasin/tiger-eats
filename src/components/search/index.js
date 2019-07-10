import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Picker} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import {connect} from 'react-redux';

import {styles} from './styles.js';
import {updateSearch} from 'TigerEats/src/actions';

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data'

class Search extends Component {
  
  render() {
    
    return (
      <View style={styles.searchSortRow}>
        <View style={{flex: 1, marginLeft: 10, marginBottom: 10}}>
          <Dropdown 
            pickerStyle={{width: 120}} 
            label='Sort' 
            data={[{value: 'By Distance'}, {value: 'By Rating'}]} 
            selectedItemColor='cornflowerblue' 
            onChangeText={(value) => this.props.applySort(value)}
            containerStyle={{}}
          />
        </View>
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