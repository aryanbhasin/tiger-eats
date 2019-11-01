import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/FontAwesome5'

import {styles} from './styles'

export default class CallButton extends Component {
  
  static propTypes = {
    // number prop is a string (e.g. '(609) 123 456')
    number: PropTypes.string.isRequired
  }
  
  async handleCallPress(number) {
    const callData = {
      number: number.toString(),
      prompt: true,
    };
    try {
      await call(callData);
    } catch(err) {
      alert(err);
    }
  }
  
  render() {
    const {number} = this.props;
    return (
      <TouchableOpacity onPress={() => this.handleCallPress(number)} style={[styles.button, styles.buttonContainer, styles.callButtonContainer]}>
        <Icon name='phone' style={styles.icon}/>
        <Text style={[styles.buttonText]}>Call</Text>
      </TouchableOpacity>
    );
  }
}