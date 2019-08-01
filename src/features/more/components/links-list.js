import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import Touchable from 'react-native-platform-touchable'; 
import PropTypes from "prop-types";

import {openLink} from 'TigerEats/src/functions/general'
import {styles} from '../styles'

export default function LinksList() {
  return (
    <View style={styles.sectionContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name='external-link' style={styles.sectionHeaderIcon} />
        <Text style={styles.sectionHeader}>Links</Text>
      </View>
      <View> 
        <Link name='My TigerCard Balance' description='Meal swipes, student charges, guest meals' url='https://fed.princeton.edu/cas/login?service=https%3A//services.jsatech.com/login.php?cid=69'/>  
        <Link name='FreeFood Listserv' url='https://lists.princeton.edu/cgi-bin/wa?A0=freefood&X=O5DB3A70D79AAC8C16E&Y'/>  
        <Link name='TigerMeals Delivery' description='View restaurants around campus' url='https://tigermeals-delivery.herokuapp.com/'/> 
        <Link name='CalcuLateMeal' description='Frist late meal calculator' url='http://calculatemeal.herokuapp.com/'/> 
      </View>
    </View>
  )
}

function Link({name, description, url}) {
  return (
    <Touchable onPress={() => openLink(url)} style={{marginVertical: 4}}>
      <View style={styles.linkContainer}>
        <View>
          <Text style={styles.link}>{name}</Text>
          {(!!description) && <Text style={styles.text}>{description}</Text>}
        </View>
        <View>
          <Icon name='chevron-right' style={styles.chevron}/>
        </View>
      </View>
    </Touchable>
  );
}

// openLink function moved to src/functions/general

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string
}