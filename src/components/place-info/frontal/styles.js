import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export var styles = StyleSheet.create({
  rating: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  image: {
    height: width * 0.7,
    width: null,
  },
  ratingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    width: 45,
    height: 30,
    backgroundColor: 'yellowgreen',
    borderTopLeftRadius: 6,
  },
  ratingText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    width: 200,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  name: {
    color: 'white',
    fontSize: 44,
    fontWeight: '700'
  }
});