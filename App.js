import React, {Component} from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import FlashMessage from "react-native-flash-message";

import firebase from 'firebase';
import 'firebase/firestore';

import Main from './src';

// Adding Firebase SDK
var firebaseConfig = {
    apiKey: "AIzaSyCnHuV6QNYSgSyN-yOogneee6I9jznfHR0",
    authDomain: "tiger-eats.firebaseapp.com",
    databaseURL: "https://tiger-eats.firebaseio.com",
    projectId: "tiger-eats",
    storageBucket: "tiger-eats.appspot.com",
    messagingSenderId: "191542565565",
    appId: "1:191542565565:web:00306b6555895c8a51f5d4",
    measurementId: "G-FPEZZ0B2PJ"
  };
  
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Main />
          <FlashMessage position="top" />
      </Provider>
    );
  }
}
