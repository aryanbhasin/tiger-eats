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

export default class DHallInfoScreen extends Component {
  
  render() {
    let {navigation} = this.props;
    let dHallName = navigation.getParam('dHallName', 'Wu / Wilcox')
    let dHallImg = navigation.getParam('dHallImg')
    return (
      <View style={styles.screenContainer}>
        <DHallCoverImage imageSrc={dHallImg}/>
        <DHallFrontalHeader name={dHallName} address='Some dummy address line # 1' />
        <DHallTabView dHallName={dHallName} />
      </View>
    );
  }
  
}

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