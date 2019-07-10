import React, {Component} from 'react';

export default function SortByRating(placesData) {
  placesData = placesData.sort((place1, place2) => {
    // helps sort in descending order of rating
    return (place2.ratingNum - place1.ratingNum); 
  });
  return placesData;
}