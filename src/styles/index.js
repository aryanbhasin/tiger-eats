import {StyleSheet, Platform} from 'react-native';

export var placeInfoStyles = StyleSheet.create({
  defaultFont: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto', 
  },
  defaultHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'darkgrey',
    paddingVertical: 4,
  },
  defaultSubHeader: {
    fontSize: 16,
    color: 'cornflowerblue',
    fontWeight: '700'
  },
  defaultContainer: {
    marginLeft: 20,
    marginRight: 20,
  }
})