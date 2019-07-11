import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {placeInfoStyles} from 'TigerEats/src/styles/index.js';

export default class ReviewStars extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ratingGiven: null,
      hasRated: false,
    }
  }
  
  onReviewPress = (rateNumber) => {
    this.props.reviewPlace(rateNumber);
    this.setState({
      ratingGiven: rateNumber,
      hasRated: true,
    })
  }
  
  render() {
    var buttonArray = [];
    const {reviewPlace} = this.props;
    
    for (let i = 1; i <= 5; i++) {
      buttonArray.push(
        <ReviewButton rateNumber={i} onReviewPress={this.onReviewPress} reviewStatus={this.state} key={i} />
      )
    }
    
    return (
      <View style={placeInfoStyles.defaultContainer}>
        <Text style={placeInfoStyles.defaultHeader}>Rate</Text>
        <View style={styles.reviewContainer}>
          {buttonArray}
        </View>
      </View>
    );
  }
  
}

class ReviewButton extends Component {
  
  render() {
    var {rateNumber, onReviewPress, reviewStatus} = this.props;
    
    if (!reviewStatus.hasRated) {
      return (
        <TouchableOpacity onPress={() => onReviewPress(rateNumber)}>
          <View style={styles.reviewButton}>
            <Text style={[styles.reviewValue, styles.reviewValueText]}>{rateNumber}</Text>
            <Icon name='star' style={styles.reviewValueText} color='slategray'/>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
          <View style={[styles.reviewButton, (rateNumber === reviewStatus.ratingGiven) ? styles.hasReviewed : null]}>
            <Text style={[styles.reviewValue, styles.reviewValueText, (rateNumber === reviewStatus.ratingGiven) ? styles.hasReviewedContent : null]}>{rateNumber}</Text>
            <Icon name='star' style={styles.reviewValueText} color={(rateNumber === reviewStatus.ratingGiven) ? 'white' : 'slategray'}/>
          </View>
        
      );
    }
    
    
  }  
}

var styles = StyleSheet.create({
  reviewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'slategray',
    width: 50,
    paddingHorizontal: 10,
  },
  reviewValue: {
    color: 'slategray',
    fontSize: 18,
    fontWeight: '700',
  },
  reviewValueText: {
    fontSize: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  hasReviewed: {
    backgroundColor: 'slategray',
  },
  hasReviewedContent: {
    color: 'white',
  }
});

