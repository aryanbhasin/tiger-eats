import {StyleSheet} from 'react-native';
import {colors} from 'TigerEats/src/styles'
export var styles = StyleSheet.create({
  container: {
    backgroundColor: colors.almostWhite,
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 10
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.darkGrey,
    paddingBottom: 5,
  },
  sectionHeaderIcon: {
    color: colors.orange,
    marginRight: 7,
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    color: colors.darkGrey,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.darkGrey, 
  },
  chevron: {
    color: colors.grey,
    fontSize: 17,
  },
  bottomTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomText: {
    alignSelf: 'center',
    marginBottom: 15,
    color: colors.lightGrey
  }
})