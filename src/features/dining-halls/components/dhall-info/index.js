/*
  Displays Dining Hall menu screen divided into three parts:
  - Cover Image (prop)
  - Frontal Header: DHall name + address + other info (props)
  - Tab view for menu (menu extracted from fetch-menu.js, get-dishes.js)
*/
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles'
import DHallTabView from './components/dhall-tab-view'

function DHallCoverImage ({imageSrc}) {
  return (
    <View style={styles.dHallCoverImageContainer}>
      <Image style={styles.dHallCoverImage} source={imageSrc}/>
    </View>
  );
}

function DHallFrontalHeader ({name, address}) {
  return (
    <View style={styles.dHallFrontalContainer}>
      <Text style={styles.dHallFrontalName}>{name}</Text>
      <Text style={styles.dHallFrontalAddress}>{address}</Text>
    </View>
  );
}

export default class DHallInfoScreen extends Component {
  
  render() {
    let {navigation} = this.props;
    dHallName = navigation.getParam('dHallName')
    dHallCodeName = navigation.getParam('dHallCodeName')
    dHallImg = navigation.getParam('dHallImg')
    dHallInfo = navigation.getParam('dHallInfo')
    return (
      <View style={styles.screenContainer}>
        <DHallCoverImage imageSrc={dHallImg}/>
        <DHallFrontalHeader name={dHallName} address={dHallInfo} />
        <DHallTabView dHallCodeName={dHallCodeName} />
      </View>
    );
  }
}