import {StyleSheet, Dimensions} from 'react-native'

let {width, height} = Dimensions.get('window');
export var styles = StyleSheet.create({
  lineStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'slategrey',
    width: width * 0.85,
    alignSelf: 'center',
  },
  dHallCardContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.16,
    marginRight: 15,
    marginLeft: 15,
    marginVertical: 3,
  },
  dHallCardImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 160,
    height: 100,
    borderRadius: 7,
    padding: 5,
  },
  dHallInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'space-around'
  },
  dHallNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 3
  },
  dHallMealStatusText: {
    color: 'dimgrey'
  },
  chevronIcon: {
    alignSelf: 'center',
  }
})