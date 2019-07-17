import React, {Component} from 'react';
import {ScrollView, View} from 'react-native'
import {styles} from './styles'
import DHallCard from './components/dhall-card'

export default class DiningHalls extends Component {
  render() {
    let DHallList = [
      {name: 'Wu / Wilcox', imgUrl: require('TigerEats/src/assets/images/wu-wilcox-dhall.jpg')}, 
      {name: 'CJL', imgUrl: require('TigerEats/src/assets/images/cjl-front.jpg')}, 
      {name: 'Forbes', imgUrl: require('TigerEats/src/assets/images/forbes-dhall.jpg')},  
      {name: 'Rocky / Mathey', imgUrl: require('TigerEats/src/assets/images/roma-dhall.jpg')}, 
      {name: 'Whitman', imgUrl: require('TigerEats/src/assets/images/whitman-dhall.jpeg')},
      {name: 'Graduate College', imgUrl: require('TigerEats/src/assets/images/graduate-college-dhall.jpg')}, 
    ]
    return (
      <ScrollView>
        {DHallList.map((DHall, index) => {
          return (
            <View key={index}>
              <DHallCard name={DHall.name} imgUrl={DHall.imgUrl} navigation={this.props.navigation} />
              <View style={styles.lineStyle} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}