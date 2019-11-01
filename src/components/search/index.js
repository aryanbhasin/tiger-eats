import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import {connect} from 'react-redux';

import {styles} from './styles.js';
import {updateSearch, sortData} from 'TigerEats/src/actions';

class Search extends Component {
  
  render() {
    
    return (
      <View style={styles.searchSortRow}>
        <SearchBar           
          placeholder='Search for a place'
          onChangeText={(text) => {this.props.updateSearch(text, this.props.eateryData)}}
          onClear={(text) => {this.props.updateSearch('', this.props.eateryData)}}
          value={this.props.searchTerm}
          autoCorrect={false}
          lightTheme
          round
          containerStyle={styles.searchBarContainer}
        />
        <View style={{flex: 1, marginLeft: 0, marginBottom: 10}}>
          <Dropdown 
            pickerStyle={{width: 100}} 
            label='Sort By' 
            data={[{value: 'Distance'}, {value: 'Rating'}]} 
            selectedItemColor='cornflowerblue' 
            onChangeText={(value) => this.props.sortData(value, this.props.eateryData)}
            containerStyle={{}}
          />
        </View>
      </View>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    eateryData: state.eatery.data,
  }
};

const mapDispatchToProps = {
  updateSearch,
  sortData
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)