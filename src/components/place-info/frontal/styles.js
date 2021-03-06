import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import { Platform} from 'react-native'

export var styles = StyleSheet.create({
  rating: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  image: {
    height: (Platform.OS === 'ios') ? height * 0.25 : height * 0.22,
    width: null,
  },
  ratingContainer: {
    position: 'absolute',
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
  }
});