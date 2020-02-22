import {db} from 'TigerEats/App'

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const ERROR = 'ERROR';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const GET_DISHES = 'GET_DISHES';
export const GET_LOCATION = 'GET_LOCATION';
export const LOCATION_ERROR = 'LOCATION_ERROR';
export const GET_LINKS_LIST = 'GET_LINKS_LIST';
export const GET_EATERY_DATA = 'GET_EATERY_DATA';
export const SORT_DATA = 'SORT_DATA';
export const DHALL_CLOSED = 'DHALL_CLOSED';
export const UPDATE_DHALL_DATE = 'UPDATE_DHALL_DATE';


// **************************************** ACTION CREATORS FOR SEARCH ****************************************

export function updateSearch(text, initData) {
  let searchData;
  /*
  if (text === '') {
    searchData = initData // empty search string
  } else {
    keyArr = Object.keys(initData)
                   .filter((key) => {
                      const searchTerm = text.toUpperCase();
                      const placeName = initData[key].name.toUpperCase();
                      return (placeName.indexOf(searchTerm) > -1);
                   })
    if (keyArr.length > 0) {
      searchData = Object.assign(... keyArr.map(key => ({ [key]: initData[key] }) ))
    } else { 
      searchData = {}; 
    }
  }
  */
  if (text === '') {
    searchData = initData
  } else {
    keyArr = Object.keys(initData).filter((key) => {
       const placeName = initData[key].name.toUpperCase();
       return (placeName.indexOf(text.toUpperCase()) > -1);
    })
                   
    if (keyArr.length == 0) {
      searchData = null // search string yielded 0 results
    } else {
      searchData = Object.assign(...
        Object.keys(initData)
        .filter((key) => {
          const searchTerm = text.toUpperCase();
          const placeName = initData[key].name.toUpperCase();
          return (placeName.indexOf(searchTerm) > -1);
        })
        .map(key => ({ [key]: initData[key] }) )
      );
    }
  }
  return {
    type: UPDATE_SEARCH,
    payload: {
      text: text,
      results: searchData
    },
  }
}

// **************************************** ACTION CREATORS FOR SORTING ****************************************
import SortByDistance from 'TigerEats/src/functions/sort/sort-dist'
import SortByRating from 'TigerEats/src/functions/sort/sort-rating'

export function sortData(sortMetric, dataToSort) {
  let sortedList = {};
  switch (sortMetric) {
    case 'Distance':
      sortedList = SortByDistance(dataToSort);
      break;
    case 'Rating':
      sortedList = SortByRating(dataToSort);
      break;
  }
  return {
    type: SORT_DATA,
    payload: sortedList
  }
}

// **************************************** ACTION CREATOR FOR GETTING LOCATION ****************************************
import checkInternetConnection from 'TigerEats/src/components/flash-messages/check-connection'
import {showMessage} from 'react-native-flash-message'

export function getLocation() {
  checkInternetConnection();
  // geolocation.getCurrentPosition() is asynchronous so need to use redux-thunk
  return (dispatch) => {
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type: GET_LOCATION,
          payload: {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude)
          }
        })
      },
      (error) => {
        if (error.code == error.PERMISSION_DENIED) {
          showMessage({
            message: "Allow location access to get directions and distances to restaurants",
            type: "danger",
            icon: "warning",
            duration: 3000
          })
        }
        dispatch({
          type: LOCATION_ERROR,
          payload: error
        })
      },
      {enableHighAccuracy: true}
    );
  }
}

// ***************************** ACTION CREATOR FOR GETTING LINKS FROM FIREBASE ****************************************


export function getLinksList() {
  // uses thunk
  return (dispatch) => {
    let linksRef = db.ref('links-list');
    
    linksRef.once('value', (snapshot) => {
        var linksData = {};
        // get list of links from Firebase and push each onto linksData
        snapshot.forEach((link) => {
          let data = link.val();
          var currLink = {
            name: data.name,
            description: data.description,
            url: data.url
          }
          linksData[link.key] = currLink;
        })
        return dispatch({
          type: GET_LINKS_LIST,
          payload: linksData
        });
      }), (err) => {return dispatch({type: ERROR})}
    
  }

}

// ***************************** ACTION CREATOR FOR GETTING EATERY DATA FROM FIREBASE ****************************************

export function getEateryData() {
  
  return (dispatch) => {
    var dataRef = db.ref('eatery-data');
    dataRef.on('value', (snapshot) => {
      return dispatch({
        type: GET_EATERY_DATA,
        payload: snapshot.val()
      })
    }), (err) => {return dispatch({type: ERROR})}
  }
}
