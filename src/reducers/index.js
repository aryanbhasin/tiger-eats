import {combineReducers} from 'redux';
import {UPDATE_SEARCH} from '../actions'

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

// combines the reducers
export default combineReducers({
  search
});