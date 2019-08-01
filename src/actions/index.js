export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const ERROR = 'ERROR';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const GET_DISHES = 'GET_DISHES';
export const GET_LOCATION = 'GET_LOCATION';
export const LOCATION_ERROR = 'LOCATION_ERROR';


// **************************************** ACTION CREATORS FOR SEARCH ****************************************

export function updateSearch(text, initData) {
  let searchData;
  (text === '') 
    ? searchData = initData
    : searchData = Object.assign(...
        Object.keys(initData)
        .filter((key) => {
          const searchTerm = text.toUpperCase();
          const placeName = initData[key].name.toUpperCase();
          return (placeName.indexOf(searchTerm) > -1);
        })
        .map(key => ({ [key]: initData[key] }) )
      );
    
    // initData.filter((place) => {
    //     const searchTerm = text.toUpperCase();
    //     const placeName = place.name.toUpperCase();
    //     return (placeName.indexOf(searchTerm) > -1);
    //   })
  return {
    type: UPDATE_SEARCH,
    payload: {
      text: text,
      results: searchData
    },
  }
}

// **************************************** ACTION CREATOR FOR GETTING LOCATION ****************************************

export function getLocation() {
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
        dispatch({
          type: LOCATION_ERROR,
          payload: error
        })
      },
      {enableHighAccuracy: true}
    );
  }
}

// **************************************** ACTION CREATORS FOR UPDATING MENU ****************************************
import JSSoup from 'jssoup';
import axios from 'axios'
import {extractMealData} from '../components/extract-menu/get-dishes'
import checkInternetConnection from 'TigerEats/src/components/flash-messages/check-connection'

function dispatchError(codeName, message) {
  return {
    type: ERROR,
    payload: {
      message,
      codeName,
    }
  }
}

// uses thunk
export function getDishes(menuUrl, dHallCodeName) {

                                        // add validation for URL
  
  return (dispatch) => {
    
    let isInternetConnected = checkInternetConnection();
    if (!isInternetConnected) {
      dispatch({type: CONNECTION_ERROR})
    }
    
    // overcomes 'Access to fetch from origin blocked due to CORS policy'
    const corsProxyurl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(menuUrl)
      .then(response => {
        return(response.data)
      })
      .catch(error => {
        console.log(error); 
        return dispatch(dispatchError(dHallCodeName, error))
      })
      .then(data => {
        if (!!data && data.includes("No Data Available")) {
          return dispatch(dispatchError(dHallCodeName, 'No Data Available'))
        }
        
        var soup = new JSSoup(data);
        var meals = soup.findAll('div', 'mealCard');
        dishes = new Object();
        meals.forEach(mealCard => extractMealData(mealCard, dishes));
        return dispatch({
          type: GET_DISHES,
          payload: {
            dHallCodeName,
            meals,
            dishes
          }
        })
      })
      .catch(error => {
        console.log(error); 
        return dispatch(dispatchError(dHallCodeName, error))
      })
  }
}