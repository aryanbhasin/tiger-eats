import React, {Component} from 'react';
import {ScrollView, FlatList, View} from 'react-native'
import {connect} from 'react-redux'

import {styles} from './styles'
import DHallCard from './components/dhall-card'
import constructDiningUrl from 'TigerEats/src/components/extract-menu/dining-url-constructor'
import {getDishes} from 'TigerEats/src/actions'
import {DHallList} from 'TigerEats/src/constants/dhall-list'

class DiningHalls extends Component {
  
  getDHallDishes(name, codeName) {
    let URL = constructDiningUrl(name);
    this.props.getDishes(URL, codeName);
  }
  
  render() {
    return (
      <FlatList
        data={DHallList}
        renderItem={(DHall) => {
          let {name, codeName, info, imgUrl} = DHall.item;
          this.getDHallDishes(name, codeName)
          return (
            <View>
              <DHallCard name={name} codeName={codeName} info={info} imgUrl={imgUrl} navigation={this.props.navigation} />
              <View style={styles.lineStyle} />
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

const mapDispatchToProps = {
  getDishes,
}

export default connect(null, mapDispatchToProps)(DiningHalls)