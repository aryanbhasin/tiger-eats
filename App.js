import React, {Component} from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import FlashMessage from "react-native-flash-message";

import Main from './src';


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
