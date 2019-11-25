import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Touchable from 'react-native-platform-touchable'; 
import PropTypes from 'prop-types'

import {connect} from 'react-redux';

import {styles} from '../styles'
import MealStatus from './meal-status/'

class DHallCard extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    codeName: PropTypes.string.isRequired,
    imgUrl: PropTypes.any.isRequired,
    info: PropTypes.string.isRequired
  }
  
  render() {
    let {name, codeName, imgUrl, navigation, info} = this.props;
    
    // sets closedStatus for DHall based on Redux state
    let closedStatus = false;
    this.props.halls.forEach((hall) => {
      let currName = Object.keys(hall)[0].toString();
      if ((currName === codeName) && (hall[codeName]['closed'])) {
        closedStatus = true;
      }
    })
    
    return (
      <Touchable onPress={() => navigation.navigate('DHallInfo', {
        dHallName: name,
        dHallCodeName: codeName,
        dHallImg: imgUrl,
        dHallInfo: info
      })}>
        <View style={styles.dHallCardContainer}>
          <Image style={styles.dHallCardImage} source={imgUrl} />
          <View style={styles.dHallInfoContainer}>
            <Text style={styles.dHallNameText}>{name}</Text>
            <MealStatus codeName={codeName} closed={closedStatus} />
          </View>
          <Icon name='chevron-thin-right' color='darkgrey' size={22} style={styles.chevronIcon}/>
        </View>
      </Touchable>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    halls: state.dishes.halls
  }
}

export default connect(mapStateToProps)(DHallCard)
