import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getDistance} from 'geolib';

export default function SortByDistance(eateryData) {
  
  eateryData = Object.assign(...
    Object.keys(eateryData)
    .sort((key1, key2) => {
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
      const dist1 = getDistance(currPosition2, eateryData[key1].location); // currPosition2 is just for testing
      const dist2 = getDistance(currPosition2, eateryData[key2].location); // replace it with currPosition on actual device
      // comparison method returns -ve if place1 closer, +ve if place2 closer
      return (dist1 - dist2);
    })
    .map(key => ({ [key]: eateryData[key] }) )
  );    
  return (eateryData);
  
}