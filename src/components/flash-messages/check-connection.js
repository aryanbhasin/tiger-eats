import React, {Component} from 'react';
import {View} from 'react-native';
import {showMessage} from 'react-native-flash-message'
import NetInfo from "@react-native-community/netinfo";

export default function checkInternetConnection() {
  NetInfo.fetch().then(state => {
    // console.log(state)
    let isInternetConnected = state.isConnected;
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