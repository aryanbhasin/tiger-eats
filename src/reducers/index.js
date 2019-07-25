import {combineReducers} from 'redux';
import {UPDATE_SEARCH} from '../actions'
import {GET_DISHES, FETCH_ERROR, CONNECTION_ERROR, NO_DATA} from '../actions'

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
  connectionError: '',
  meals: [],
  dishes: [],
  loading: true,
}

function dishes(state = initialDishesState, action) {
  switch (action.type) {
    case GET_DISHES:
      const {meals, loading, dishes} = action.payload
      return {...state, meals: meals, dishes: dishes, loading: false}
    case FETCH_ERROR:
      return {...state, error: action.payload}
    case CONNECTION_ERROR:
      return {...state, connectionError: 'Internet not connected'}
    case NO_DATA:
      return {...state, error: 'No Data Available'}
    default:
      return state;
  }
}

// combines the reducers
export default combineReducers({
  search,
  dishes
});