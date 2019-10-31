import React, {Component} from 'react';

export default function SortByRating(placesData) {
  placesData = placesData.sort((place1, place2) => {
    // sorts in descending order of rating
    return (place2.rating - place1.rating); 
  });
  return placesData;
}

    // dropdown for sorting
/*
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
*/


