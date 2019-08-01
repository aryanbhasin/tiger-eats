import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {styles} from './styles'
import {openLink} from 'TigerEats/src/functions/general'

export default class WebsiteButton extends Component {
  
  static propTypes = {
    website: PropTypes.string.isRequired
  }
  
  render() {
    let {website} = this.props;
    return (
      <TouchableOpacity onPress={() => openLink(website)} style={[styles.button, styles.buttonContainer, styles.websiteButtonContainer]}>
        <Icon name='globe' style={styles.icon}/>
        <Text style={[styles.buttonText]}>Website</Text>
      </TouchableOpacity>
    );
  }
}