import {StyleSheet} from 'react-native';
import {colors} from 'TigerEats/src/styles'

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
    resizeMode: 'cover',
    borderRadius: 3
  },
  dHallFrontalContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  dHallFrontalName: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  dHallFrontalAddress: {
    color: 'dimgrey',
    fontSize: 17,
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
    paddingVertical: 1
  },
  pawIcon: {
    marginRight: 3,
    borderWidth: 2
  }
})

export var cornerCaseStyles = StyleSheet.create({
  cornerCaseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cornerCaseText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})