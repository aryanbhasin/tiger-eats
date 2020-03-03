import {StyleSheet, Dimensions} from 'react-native'
import {colors} from 'TigerEats/src/styles'
import { Platform } from 'react-native'

let {width, height} = Dimensions.get('window');

export var styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  dHallCoverImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dHallCoverImage: {
    flex: 1,
    width: width,
    resizeMode: 'cover',
    borderRadius: 3
  },
  dHallFrontalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3
  },
  dHallFrontalName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dHallFrontalAddress: {
    color: 'dimgrey',
    fontSize: 15,
    paddingBottom: 4,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  currDateText: {
    fontSize: 24,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  chevron: {
    color: colors.grey,
    fontSize: 24,
  },
  dHallTabViewContainer: {
    flex: 2.5,
  },
  tabViewScene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: colors.darkGrey,
  },
  tabBarIndicator: {
    backgroundColor: colors.orange
  },
  tabBarLabel: {
    color: 'white'
  }
})

export var dishesStyles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  dishCategoryContainer: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'dimgrey'
  },
  dishCategory: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  dishItems: {
    fontSize: 18,
    paddingVertical: 1,
    color: (Platform.OS !== 'ios') && colors.darkGrey
  },
  pawIcon: {
    marginRight: 3,
    borderWidth: 2
  }
})

export var cornerCaseStyles = StyleSheet.create({
  cornerCaseContainer: {
    flex: 1,
    marginHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cornerCaseText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})