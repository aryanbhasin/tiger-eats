import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {connect} from 'react-redux';
import {getEateryData} from './actions'

import {RootTabNav} from './navigators/bottom-tab-nav.js'

const AppContainer = createAppContainer(RootTabNav);

class Main extends Component {
  
  // calling getEateryData() to fetch data from Firebase in the beginning
  constructor(props) {
    super(props);
    this.props.getEateryData();
  }
  
  render() {
    
    return (
      <AppContainer />
    );
  }
}

const mapDispatchToProps = {
  getEateryData: getEateryData
}

export default connect(null, mapDispatchToProps)(Main);