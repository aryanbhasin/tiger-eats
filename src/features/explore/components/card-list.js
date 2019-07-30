import React, {Component} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';

import PlaceCard from './place-card'
import {styles} from '../styles';

export default class CardList extends Component {
  
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

