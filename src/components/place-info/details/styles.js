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
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderWidth: 2,
    borderColor: 'pink'
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
    borderWidth: 1,
    borderColor: 'red'
  }
});