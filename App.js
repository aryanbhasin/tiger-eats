import React, {Component} from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import Main from './src';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}
