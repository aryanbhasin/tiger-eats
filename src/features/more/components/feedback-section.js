import React, {Component} from 'react';
import {View, Text, Linking, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-share'

import {db} from 'TigerEats/App'

import Touchable from 'react-native-platform-touchable'; 
import PropTypes from "prop-types";

import {styles} from '../styles'

export default class Feedback extends Component {
  // add share-sheet, customisation abilities for feedback row
  
  state = {
    appLink: 'www.yahoo.com'
  }
  
  constructor(props) {
    super(props);
    
    db.ref('app-store-link').once('value', (snapshot) => {
      this.setState({
        appLink: snapshot.val()
      })
    })
  }
  
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='edit' style={styles.sectionHeaderIcon} />
          <Text style={styles.sectionHeader}>Feedback</Text>
        </View>
        <View>
          <FeedbackRowComponent name={Platform.OS==='ios' ? 'Rate on the App Store' : 'Rate on the Play Store'} url={this.state.appLink}/>
          <FeedbackRowComponent name='Give feedback' url={this.state.appLink}/>
          <ShareApp url={this.state.appLink} message='Check out TigerEats: a one-stop guide to eating at Princeton'/>
        </View>
      </View>
    );
  }
}

function FeedbackRowComponent({name, url}) {
  return (
    <Touchable onPress={() => Linking.openURL(url)} style={{marginVertical: 4}}>
      <View style={styles.linkContainer}>
        <View>
          <Text style={styles.link}>{name}</Text>
        </View>
        <View>
          <Icon name='chevron-right' style={styles.chevron}/>
        </View>
      </View>
    </Touchable>
  );
}

function ShareApp({url, message}) {
  let options = {
    url: url,
    message: message,
  }
  return (
    <Touchable 
      onPress={() => {
        Share.open(options)
          .then((res) => { console.log(res) })
          .catch((err) => { err && console.log(err); })}
        }
      style={{marginVertical: 4}}>
      <View style={styles.linkContainer}>
        <View>
          <Text style={styles.link}>Share the app</Text>
        </View>
        <View>
          <Icon name='chevron-right' style={styles.chevron}/>
        </View>
      </View>
    </Touchable>
  );
}

FeedbackRowComponent.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
}
