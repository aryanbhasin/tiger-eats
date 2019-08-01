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
  callButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  callButtonContainer: {
    backgroundColor: 'darkgreen',
    width: 60,
    height: 30,
    borderRadius: 7,
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    alignSelf: 'center',
    height: height * 0.25, 
    width: width, 
  }
});