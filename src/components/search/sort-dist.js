import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getDistance} from 'geolib';

export default function SortByDistance(placesData) {
  
  placesData.sort((place1, place2) => {
    const currPosition = navigator.geolocation.getCurrentPosition (
      (position) => {position.coords},
      (error) => {alert(error)},
      {enableHighAccuracy: true}
    );
    // The Nest Coordinates
    const currPosition2 = {
      latitude: 40.345226,
      longitude: -74.656353
    }
    const dist1 = getDistance(currPosition2, place1.destCoords); // currPosition2 is just for testing
    const dist2 = getDistance(currPosition2, place2.destCoords); // replace it with currPosition on actual device
    return (dist1 - dist2);
  });
    
  return (placesData);
  
}