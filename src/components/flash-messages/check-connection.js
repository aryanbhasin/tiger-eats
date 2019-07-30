import React, {Component} from 'react';
import {View} from 'react-native';
import {showMessage} from 'react-native-flash-message'
import NetInfo from "@react-native-community/netinfo";

export default function checkInternetConnection() {
  return NetInfo.fetch().then(state => {
    isInternetConnected = state.isConnected;
    if (!isInternetConnected) {
      showMessage({
        message: "No internet connection",
        type: "danger",
        icon: "warning"
      })
    }
    return isInternetConnected;
  });
  
}