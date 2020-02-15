import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import LinksList from './components/links-list'
import Feedback from './components/feedback-section'
import {styles} from './styles'

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spacer />
        <About />
        <LinksList />
        <Feedback />
        <View style={styles.bottomTextContainer}>
          <Text style={[styles.text, styles.bottomText]}>Made with <Ionicon name='md-heart' style={{fontSize: 15, alignSelf: 'flex-end'}}/> for Princeton</Text>
        </View>
      </View>
    );
  }
}

function Spacer() {
  return (
    <View style={{height: 20}} />
  );
}

function About() {
  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicon name='md-information-circle-outline' style={[styles.sectionHeaderIcon, {fontSize: 23}]} />
        <Text style={styles.sectionHeader}>About</Text>
      </View>
      <View>
        <Text style={styles.text}>
          TigerEats is your one-stop guide to eating at Princeton. Explore restaurants and cafés around the campus, 
          check out dining hall menus, and access useful links instantly.
        </Text>
      </View>
    </View>
  );
}





