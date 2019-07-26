import React, {Component} from 'react';
import {ScrollView, View} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import DHallCard from './components/dhall-card'
import constructDiningUrl from 'TigerEats/src/components/extract-menu/dining-url-constructor'
import {getDishes} from 'TigerEats/src/actions'
import {DHallList} from './constants'

class DiningHalls extends Component {
  
  getDHallDishes(name, codeName) {
    let URL = constructDiningUrl(name);
    this.props.getDishes(URL, codeName);
  }
  
  render() {
    return (
      <ScrollView>
        {DHallList.map((DHall, index) => {
          
          this.getDHallDishes(DHall.name, DHall.codeName)
          
          return (
            <View key={index}>
              <DHallCard name={DHall.name} codeName={DHall.codeName} imgUrl={DHall.imgUrl} navigation={this.props.navigation} />
              <View style={styles.lineStyle} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  getDishes,
}

export default connect(null, mapDispatchToProps)(DiningHalls)