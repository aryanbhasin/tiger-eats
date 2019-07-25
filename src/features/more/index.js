import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Linking } from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import Touchable from 'react-native-platform-touchable'; 
import PropTypes from "prop-types";
import {colors} from 'TigerEats/src/styles'

import {styles} from './styles'

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <About />
        <LinksFlatlist />
      </View>
    );
  }
}

function About() {
  
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>About</Text>
      <View>
        <Text style={styles.text}>
          TigerEats is your one-stop guide to eating at Princeton. Explore restaurants and cafés around the campus, 
          check out dining hall menus, and be notified of when your favorite dish is being served.
        </Text>
      </View>
    </View>
  );
}

function LinksFlatlist() {
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
    <Touchable onPress={() => openLink(name, url)} style={{marginVertical: 4}}>
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

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string
}

async function openLink(name, url) {
  console.log(url)
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'done',
        preferredControlTintColor: colors.orange,
        // android Properties
        showTitle: true,
        enableUrlBarHiding: true,
        enableDefaultShare: true,
      });
    } else {
      Linking.canOpenURL(url)
        .then(() => Linking.openURL(url))
        .catch(error => console.error('An error occurred while opening this URL: ', error))
    }
  }
  catch (error) {
    alert(error)
  }
}