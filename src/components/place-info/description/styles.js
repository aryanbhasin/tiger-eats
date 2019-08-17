import {StyleSheet} from 'react-native'
import {colors} from 'TigerEats/src/styles'

export var styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
    marginRight: 15
  },
  titleAndAddressContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5,
    marginHorizontal: 10,
  },
  titleText: {
    color: colors.darkGrey,
    fontSize: 44,
    fontWeight: '700'
  },
  addressText: {
    color: colors.grey,
    fontSize: 17,
    fontWeight: 'bold',
  },
  tagText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white'
  },
  tagContainer: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  tagRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export var openStatusStyles = StyleSheet.create({
  openStatusContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  openStatus: {
    fontSize: 18,
    fontWeight: '700',
  },
  openingHrsText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'slategray'

  },
  open: {
    color: 'forestgreen'
  }, 
  closed: {
    color: 'tomato'
  }
});