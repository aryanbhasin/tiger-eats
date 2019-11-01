import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export var styles = StyleSheet.create({
  listContainer: {
    alignSelf: 'center',
    width: width,
    height: height * 0.72,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'slategray',
    shadowOpacity: 0.4,

  
  },
  cardImageContainer: {
    overflow: 'hidden', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
  },
  cardImage: {
    height: 100,
    width: null,
    
  },
  cardTitle: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 22,
    color: 'black',
  },
  cardInfo: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  tagCarouselContainer: {
  },
  tagButtonContainer: {
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
    height: 30,
    marginVertical: 5,
    width: null,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 5
    
  },
  tagButtonName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  tagButtonPressed: {
    backgroundColor: 'cornflowerblue',
  }
});