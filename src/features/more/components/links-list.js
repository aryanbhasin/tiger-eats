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
        <Link name='TigerMenus' description='View dining hall menus' url='https://tigermenus.herokuapp.com/'/>
        <Link name='TigerMeal' description='View restaurants around campus' url='https://tigermenus.herokuapp.com/'/>  
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
          <Text style={styles.text}>{description}</Text>
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