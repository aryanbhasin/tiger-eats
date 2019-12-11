import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import GetDirectionsButton from './components/buttons/get-directions-button';
import WebsiteButton from './components/buttons/website-button';
import CallButton from './components/buttons/call-button';

import ReviewStars from './components/review-stars';
import MapBox from './components/place-info-map-box'

import {placeInfoStyles} from 'TigerEats/src/styles/index.js'
import {styles} from './styles.js'

class Details extends Component {
  
  static propTypes = {
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    phone_number: PropTypes.string,
    website: PropTypes.string
  }
  
  render() {
    
    let {reviewPlace, location, phone_number, website} = this.props;
    // position: our current position; location: destination coords of the place whose details are open
    let {position} = this.props
    
    let hasPhoneNumber = !!phone_number ? true : false;
    let hasWebsite = !!website ? true : false;
    
    return (
      <View style={{flex: 1}}>
        {/* <ReviewStars reviewPlace={reviewPlace} /> */}
        <View style={styles.mapContainer}>
          <MapBox destination={location} position={position} />
          <GetDirectionsButton position={position} destination={location}/>
        </View>
        <View style={styles.buttonsRowContainer}>
          {hasWebsite && <WebsiteButton website={website} />}
          {hasPhoneNumber && <CallButton number={phone_number} />}
        </View>
      </View>
      
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    position: state.location.coordinates
  });
}
export default connect(mapStateToProps)(Details);


// Renders list of items (not to be added) 
function Menu ({itemList}) {
  return (
    <View style={placeInfoStyles.defaultContainer}>
      <Text style={placeInfoStyles.defaultHeader}>Main Items</Text>
      <View style={{height: 100}}>{itemList.map((item) => 
        (<Text key={item} style={styles.mainItemStyle}>{item}</Text>)
      )}</View>
    </View>
  );
}