import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export var styles = StyleSheet.create({
  mainItemStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'slategray',
    marginVertical: 2,
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8
  },
  mapContainer: {
    alignSelf: 'center',
    height: height * 0.25, 
    width: width * 0.92,
  }
});