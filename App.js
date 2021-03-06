import React, {Component} from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import FlashMessage from "react-native-flash-message";

import firebase from 'firebase';
import {firebaseConfig} from './config'


import Main from './src';

// Adding Firebase SDK
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const storage = firebase.storage();

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
