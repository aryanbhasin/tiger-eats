/*
  Displays Dining Hall menu screen divided into three parts:
  - Cover Image (prop)
  - Frontal Header: DHall name + address + other info (props)
  - Tab view for menu (menu extracted from fetch-menu.js, get-dishes.js)
*/
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
        {/* <Text style={styles.dHallFrontalAddress}>{address}</Text> */}
      </View>
    );
  }
}

class DHallInfoScreen extends Component {
  
  // dateIncrement = 1 --> tomorrow's date;
  // dateIncrement = -1 --> yesterday's date
  
  componentDidMount() {
    dHallCodeName = this.props.navigation.getParam('dHallCodeName');
    let d = this.props.dates[dHallCodeName];
    this.setState({
      date: d
    })
  }
  state = {
    date: new Date()
  }
  
  changeMenu(dHallName, dHallCodeName, dateIncrement, dates) {
    this.props.updateDate(dHallCodeName, dateIncrement);
    let updatedDate = dates[dHallCodeName];
    d = new Date(updatedDate.getTime());
    this.setState({date: d})
    let date = d.getDate();
    let month = d.getMonth();
    month++;
    let year = d.getFullYear();
    let url = constructDiningUrl(dHallName, date, month, year);
    this.props.getDishes(url, dHallCodeName);
    
  }
  
  isToday(someDate) {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }
  
  render() {
    let {navigation, dates} = this.props;
    dHallName = navigation.getParam('dHallName')
    dHallCodeName = navigation.getParam('dHallCodeName')
    dHallImg = navigation.getParam('dHallImg')
    dHallInfo = navigation.getParam('dHallInfo')
        
    let tabIndex = 0;
    tabIndex = returnClosestMealIndex(dHallCodeName);
    
    let currDate = this.state.date.toDateString();
    currDate = currDate.substring(0, currDate.length - 5);
    
    if (this.isToday(this.state.date)) {currDate = 'Today';}
    
    return (
      <View style={styles.screenContainer}>
        <DHallCoverImage imageSrc={dHallImg}/>
        <DHallFrontalHeader name={dHallName} address={dHallInfo}/>
        <GestureRecognizer
          onSwipeRight={() => this.changeMenu(dHallName, dHallCodeName, -1, dates)}
          onSwipeLeft={() => this.changeMenu(dHallName, dHallCodeName, 1, dates)}
          >
          <View style={styles.datesContainer}>
          
            <TouchableOpacity onPress={() => this.changeMenu(dHallName, dHallCodeName, -1, dates)}>
              <Icon name='chevron-left' style={styles.chevron} />
            </TouchableOpacity>
            <Text style={styles.currDateText}>{currDate}</Text>
            <TouchableOpacity onPress={() => this.changeMenu(dHallName, dHallCodeName, 1, dates)}>
              <Icon name='chevron-right' style={styles.chevron} />
            </TouchableOpacity>
          
          </View>
        </GestureRecognizer>
        <DHallTabView dHallCodeName={dHallCodeName} tabIndex={tabIndex} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dates: state.dishes.dates
  }
}

const mapDispatchToProps = {
  getDishes,
  updateDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(DHallInfoScreen)