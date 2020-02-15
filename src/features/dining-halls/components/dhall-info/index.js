/*
  Displays Dining Hall menu screen divided into three parts:
  - Cover Image (prop)
  - Frontal Header: DHall name + address + other info (props)
  - Tab view for menu (menu extracted from fetch-menu.js, get-dishes.js)
*/
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

import {styles} from './styles'
import DHallTabView from './components/dhall-tab-view'
import {getDishes, updateDate} from 'TigerEats/src/actions/get-dishes'
import constructDiningUrl from 'TigerEats/src/components/extract-menu/dining-url-constructor'
import {returnClosestMealIndex} from 'TigerEats/src/features/dining-halls/components/meal-status/functions'

function DHallCoverImage ({imageSrc}) {
  return (
    <View style={styles.dHallCoverImageContainer}>
      <Image style={styles.dHallCoverImage} source={imageSrc}/>
    </View>
  );
}

class DHallFrontalHeader extends Component {
  
  render() {
    let {name, address} = this.props;
    return (
      <View style={styles.dHallFrontalContainer}>
        <Text style={styles.dHallFrontalName}>{name}</Text>
        <Text style={styles.dHallFrontalAddress}>{address}</Text>
      </View>
    );
  }
}

class DHallInfoScreen extends Component {
  
  // dateIncrement = 1 --> tomorrow's date;
  // dateIncrement = -1 --> yesterday's date
  
  renderTomorrowMenu(dHallName, dHallCodeName, dHallStateData) {
    let dateIncrement = 1; // tomorrow's menu
    this.props.updateDate(dHallCodeName, dateIncrement);
    let updatedDate = dHallStateData[dHallCodeName]['date'];
    d = new Date(updatedDate.getTime());
  
    let url = constructDiningUrl(dHallName, d.getDate(), d.getMonth()+1, d.getFullYear());
    console.log(url);
    this.props.getDishes(url, dHallCodeName);
  }
  
  renderYesterdayMenu(dHallName, dHallCodeName, dHallStateData) {
    let dateIncrement = -1; // tomorrow's menu
    this.props.updateDate(dHallCodeName, dateIncrement);
    let updatedDate = dHallStateData[dHallCodeName]['date'];
    d = new Date(updatedDate.getTime());
  
    let url = constructDiningUrl(dHallName, d.getDate(), d.getMonth()+1, d.getFullYear());
    console.log(url);
    this.props.getDishes(url, dHallCodeName);
  }
  
  changeMenu(dHallName, dHallCodeName, dateIncrement, dHallStateData) {
    this.props.updateDate(dHallCodeName, dateIncrement);
    let d = dHallStateData[dHallCodeName]['date'];
    let date = d.getDate();
    let month = d.getMonth();
    month++;
    let year = d.getFullYear();
    let url = constructDiningUrl(dHallName, date, month, year);
    this.props.getDishes(url, dHallCodeName);
    
  }
  
  render() {
    let {navigation} = this.props;
    dHallName = navigation.getParam('dHallName')
    dHallCodeName = navigation.getParam('dHallCodeName')
    dHallImg = navigation.getParam('dHallImg')
    dHallInfo = navigation.getParam('dHallInfo')
    
    let dHallStateData = this.props.halls.find(hall => {
      let currName = Object.keys(hall)[0].toString();
      return (currName == dHallCodeName);
    });
    
    let tabIndex = 0;
    tabIndex = returnClosestMealIndex(dHallCodeName);
    
    return (
      <View style={styles.screenContainer}>
        <DHallCoverImage imageSrc={dHallImg}/>
        <DHallFrontalHeader name={dHallName} address={dHallInfo}/>
        <TouchableOpacity onPress={() => this.renderYesterdayMenu(dHallName, dHallCodeName, dHallStateData)}>
          <Text>Press for yesterday's date</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.renderTomorrowMenu(dHallName, dHallCodeName, dHallStateData)}>
          <Text>Press for tomorrow's date</Text>
        </TouchableOpacity>
        <DHallTabView dHallCodeName={dHallCodeName} tabIndex={tabIndex} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    halls: state.dishes.halls
  }
}

const mapDispatchToProps = {
  getDishes,
  updateDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(DHallInfoScreen)