import {StyleSheet} from 'react-native';

export var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  dHallCoverImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  dHallCoverImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 3
  },
  dHallFrontalContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1,
    paddingLeft: 10
  },
  dHallFrontalName: {
    fontSize: 34,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  dHallFrontalAddress: {
    color: 'dimgrey',
    fontSize: 17,
  },
  dHallTabViewContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  
})