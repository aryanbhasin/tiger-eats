// Library Imports
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Touchable from 'react-native-platform-touchable'; 
import PropTypes from "prop-types";

import {openLink} from 'TigerEats/src/functions/general'
import {styles} from '../styles'

export default function Link({name, description, url}) {
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