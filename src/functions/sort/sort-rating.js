import React, {Component} from 'react';

// Sorts object of eatery data based on rating
export default function SortByRating(eateryData) {
  eateryData = Object.assign(...
    Object.keys(eateryData)
      .sort((key1, key2) => {
        // sorts in descending order of rating
        return (eateryData[key2].rating - eateryData[key1].rating); 
      })
      .map(key => ({ [key]: eateryData[key] }) )
  );
  return eateryData;
}


