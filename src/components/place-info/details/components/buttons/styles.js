import {StyleSheet} from 'react-native'
// StyleSheet for the three button
export var styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'slategray',
    shadowOpacity: 0.4,
    elevation: 5
  },
  directionsButtonContainer: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    borderRadius: 13,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  directionsButtonText: {
    fontSize: 17,
    color: 'cornflowerblue',
    fontWeight: '500'
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 7,
  },
  icon: {
    marginRight: 5,
    fontSize: 19,
    color: 'white',
  },
  callButtonContainer: {
    backgroundColor: 'darkgreen',
  },
  websiteButtonContainer: {
    backgroundColor: 'cornflowerblue',
  },
})