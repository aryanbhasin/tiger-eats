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

// **************************************** ACTION CREATORS FOR UPDATING MENU ****************************************
import JSSoup from 'jssoup';
import axios from 'axios'
import Frisbee from 'frisbee'
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

function getDishesHelper(htmlData) {
  var soup = new JSSoup(htmlData);
  var meals = soup.findAll('div', 'mealCard');
  dishes = new Object();
  meals.forEach(mealCard => extractMealData(mealCard, dishes));
  return [meals, dishes];
}

// uses thunk
export function getDishes(menuUrl, dHallCodeName) {
                      
  return (dispatch) => {
    
    let isInternetConnected = checkInternetConnection();
    if (!isInternetConnected) {
      return dispatch({type: CONNECTION_ERROR})
    }
    
    // overcomes 'Access to fetch from origin blocked due to CORS policy'
    const corsProxyurl = 'https://cors-anywhere.herokuapp.com/';
    
    // for fetch, use fetch() and .then((response) => response.text())
    // for axios, use axios.get() and .then((response) => response.data)
    
    // fetch(menuUrl, {
    //   mode: "no-cors", 
    //   method: "GET",
    // })
  
    const api = new Frisbee({
      headers: {
        'Accept': 'application/text',
        'Content-Type': 'text/html'
      }
    })
    
    fetch(menuUrl, {
      method: "GET",
      mode: 'navigate',
      headers: {
        'Sec-Fetch-Mode': 'navigate'
      }
    })
      .then(response => {
        console.log(dHallCodeName + ". Type: " + response.type + ". Status: " + response.status + ". URL: " + menuUrl);
        return (response.text());
      })
      .catch(error => {
        console.log("ERROR: " + error); 
        return dispatch(dispatchError(dHallCodeName, error))
      })
      .then(data => {
        if (!data) {
          console.log('!data');
          return dispatch(dispatchError(dHallCodeName, 'No Data Available'))
        }
        console.log(data.length, dHallCodeName);
        if (!!data && data.includes("No Data Available")) {
          console.log('no data for ' + dHallCodeName);
          return dispatch(dispatchError(dHallCodeName, 'No Data Available'))
        }     
        [meals, dishes] = getDishesHelper(data);   
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