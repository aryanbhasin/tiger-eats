export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INTERNET_ERROR = 'INTERNET_ERROR';
export const GET_DISHES = 'GET_DISHES';


// **************************************** ACTION CREATORS FOR SEARCH ****************************************

export function updateSearch(text, initData) {
  let searchData;
  (text === '') 
    ? searchData = initData
    : searchData = initData.filter((place) => {
        const searchTerm = text.toUpperCase();
        const placeName = place.name.toUpperCase();
        return (placeName.indexOf(searchTerm) > -1);
      })
  return {
    type: UPDATE_SEARCH,
    payload: {
      text: text,
      results: searchData
    },
  }
}

// **************************************** ACTION CREATORS FOR UPDATING MENU ****************************************
import JSSoup from 'jssoup';
import axios from 'axios'
import {extractMealData} from '../components/extract-menu/get-dishes'
import checkInternetConnection from 'TigerEats/src/components/flash-messages/check-connection'

// uses thunk
export function getDishes(menuUrl) {

  // add validation for URL
  
  return (dispatch) => {
    
    let isInternetConnected = checkInternetConnection();
    if (!isInternetConnected) {
      dispatch({type: INTERNET_ERROR, payload: 'Internet not connected'})
    }
    
    // overcomes 'Access to fetch from origin blocked due to CORS policy'
    const corsProxyurl = 'https://cors-anywhere.herokuapp.com/';
    axios.get(menuUrl)
      .then(response => response.data)
      .catch(error => {console.log(error); dispatch({type: FETCH_ERROR, payload: 'Can’t access url response'})})
      .then(data => {
        var soup = new JSSoup(data);
        var meals = soup.findAll('div', 'mealCard');
        dishes = new Object();
        meals.forEach(mealCard => extractMealData(mealCard, dishes));
        console.log(corsProxyurl + menuUrl, data)
        dispatch({
          type: GET_DISHES,
          payload: {
            meals: meals,
            dishes: dishes,
            loading: false
          }
        })
      })
      .catch(error => {console.log(error); dispatch({type: FETCH_ERROR, payload: 'Can’t access url response'})})
  }
}