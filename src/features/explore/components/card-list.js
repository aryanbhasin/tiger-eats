import React, {Component} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux'
import { Platform} from 'react-native'

import PlaceCard from './place-card'
import {getLocation} from 'TigerEats/src/actions'
import {styles} from '../styles';

class CardList extends Component {
  
  constructor(props) {
    super(props);
    
    if (Platform.OS !== 'ios') {
      this.props.getLocation();
    }
    
  }
  
  render() {
    const {dataResults, navigation} = this.props;
    
    return (
      <KeyboardAvoidingView>
        <ScrollView style={styles.listContainer} keyboardShouldPersistTaps='never' showsVerticalScrollIndicator={false}>
          {Object.keys(dataResults).map((key, index) => {
            return (            
              <PlaceCard 
                key={index}
                data={dataResults[key]}
                position={this.props.position}
                navigation={navigation}
               />
            );
          })}
          {/* {dataResults.map((item, index) => {
            return (            
              <PlaceCard 
                key={index}
                data={item}
                navigation={navigation}
               />
            );
          })} */}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    position: state.location.coordinates
  });
}

const mapDispatchToProps = {
  getLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)