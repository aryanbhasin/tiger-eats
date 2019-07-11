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
          {dataResults.map((item, index) => {
            return (            
              <PlaceCard 
                key={index}
                data={item}
                navigation={navigation}
               />
            );
          })}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

