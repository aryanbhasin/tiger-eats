import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types'

import {openLink} from 'TigerEats/src/functions/general'

export default class WebsiteButton extends Component {
  
  static propTypes = {
    website: PropTypes.string.isRequired
  }
  
  render() {
    let {website} = this.props;
    return (
      <Button title='Website' raised type='outline' onPress={() => openLink(website)}/>
    );
  }
}