// Library Imports
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// Local Imports
import {getLinksList} from 'TigerEats/src/actions'
import {openLink} from 'TigerEats/src/functions/general'
import {styles} from '../styles'

import LoadingSpinner from 'TigerEats/src/components/loading-spinner'
import Link from './link'

class LinksList extends Component {
  
  constructor(props) {
    super(props);
    this.props.getLinksList();
  }
  
  renderLinks() {
    let {linksData} = this.props;
    let keys = Object.keys(linksData)
    console.log(linksData[0]);
    if (keys.length > 0) { 
      return (
        <View>
          {keys.map((key) => {
            link = linksData[key];
            return (
              <Link name={link.name} description={link.description} url={link.url} key={key} />
            );
          })}
        </View>
      );
    } else {
      return (
        <LoadingSpinner />
      );
    }
  }
  
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='external-link' style={styles.sectionHeaderIcon} />
          <Text style={styles.sectionHeader}>Links</Text>
        </View>
        <View> 
          {this.renderLinks()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    linksData: state.links.list
  });
}

const mapDispatchToProps = {
  getLinksList
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksList)