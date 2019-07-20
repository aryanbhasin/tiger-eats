import {combineReducers} from 'redux';
import {UPDATE_SEARCH} from '../actions'
import {GET_MEALS_HTML, FETCH_ERROR, SAVE_DISHES} from '../actions'

import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data.js';

// **************************************** REDUCER FOR SEARCH ****************************************
const initialSearchState = {
  searchTerm: '',
  searchResults: PLACES_DATA,
}

function search(state = initialSearchState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {...state, searchTerm: action.payload.text, searchResults: action.payload.results};
    default:
      return state;
  }
}

// **************************************** REDUCER FOR GETTING DISHES ****************************************
const initialDishesState = {
  error: '',
  meals: [],
  dishesArray: [],
  loadingMenu: true,
  loadingDishes: true
}

function dishes(state = initialSearchState, action) {
  switch (action.type) {
    case GET_MEALS_HTML:
      const {meals, loading} = action.payload
      return {...state, meals: meals, loadingMenu: false}
    case FETCH_ERROR:
      return {...state, error: action.payload}
    case SAVE_DISHES:
      return {...state, dishesArray: action.payload, loadingDishes: false}
    default:
      return state;
  }
}

// combines the reducers
export default combineReducers({
  search,
  dishes
});