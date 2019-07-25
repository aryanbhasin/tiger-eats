import React from 'react';
import {View, Text, Linking, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Touchable from 'react-native-platform-touchable'; 
import PropTypes from "prop-types";

import {styles} from '../styles'

export default function Feedback() {
  // add share-sheet, customisation abilities for feedback row
  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name='edit' style={styles.sectionHeaderIcon} />
        <Text style={styles.sectionHeader}>Feedback</Text>
      </View>
      <View>
        <FeedbackRowComponent name={Platform.OS==='ios' ? 'Rate on the App Store' : 'Rate on the Play Store'} url='https://www.google.com'/>
        <FeedbackRowComponent name='Give feedback' url='https://www.google.com'/>
        <FeedbackRowComponent name='Share the app' url='https://www.google.com'/>
      </View>
    </View>
  );
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

FeedbackRowComponent.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
}
