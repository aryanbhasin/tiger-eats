import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import { Platform} from 'react-native'

export var styles = StyleSheet.create({
  mainItemStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'slategray',
    marginVertical: 2,
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    flex: (Platform.OS === 'ios') ? 0.5 : 0.4,
    justifyContent: 'space-around',
    alignItems: 'flex-end',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8
  },
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.25, 
    width: width * 0.92,

  }
});