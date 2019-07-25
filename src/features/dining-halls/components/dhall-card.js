import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Touchable from 'react-native-platform-touchable'; 
import PropTypes from 'prop-types'

import {styles} from '../styles'
import MealStatus from './meal-status'

export default class DHallCard extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.any.isRequired
  }
  
  render() {
    let {name, imgUrl, navigation} = this.props;
    return (
      <Touchable onPress={() => navigation.navigate('DHallInfo', {
        dHallName: name,
        dHallImg: imgUrl
      })}>
        <View style={styles.dHallCardContainer}>
          <Image style={styles.dHallCardImage} source={imgUrl} />
          <View style={styles.dHallInfoContainer}>
            <Text style={styles.dHallNameText}>{name}</Text>
            <MealStatus dHallName={name} />
          </View>
          <Icon name='chevron-thin-right' color='darkgrey' size={22} style={styles.chevronIcon}/>
        </View>
      </Touchable>
    );
  }
} 
