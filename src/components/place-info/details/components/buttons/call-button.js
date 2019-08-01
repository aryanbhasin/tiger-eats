import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types'
import call from 'react-native-phone-call';

export default class CallButton extends Component {
  
  static propTypes = {
    // number prop is a string (e.g. '(609) 123 456')
    number: PropTypes.string.isRequired
  }
  
  async handleCallPress(number) {
    const callData = {
      number: number,
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
      <Button title='Call' raised type='outline' onPress={() => this.handleCallPress(number)}/>
    );
  }
}