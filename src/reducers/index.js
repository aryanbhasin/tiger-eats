import {combineReducers} from 'redux';
import {UPDATE_SEARCH} from '../actions'
import {GET_DISHES, ERROR, CONNECTION_ERROR, GET_LOCATION, LOCATION_ERROR, GET_LINKS_LIST, GET_EATERY_DATA, SORT_DATA, DHALL_CLOSED, UPDATE_DHALL_DATE} from '../actions'

import {initialSearchState, initialMealsState, initialLocationState, initialLinksState, initialEateryState, initialDateState} from './constants'

// **************************************** REDUCER FOR SEARCH ****************************************

function search(state = initialSearchState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {...state, searchTerm: action.payload.text, searchResults: action.payload.results};
    case SORT_DATA:
      return {...state, searchResults: action.payload}
    default:
      return state;
  }
}

// **************************************** REDUCER FOR LOCATION ****************************************


function location(state = initialLocationState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {...state, coordinates: action.payload, warningShown: true}
    case LOCATION_ERROR:
      let error = action.payload
      console.log(error)
      return {...state, error: error, warningShown: true}
    default:
      return state
  }
}

// **************************************** REDUCER FOR GETTING LINKS LIST ****************************************

function links(state = initialLinksState, action) {
  switch (action.type) {
    case GET_LINKS_LIST:
      const linksData = action.payload;
      return {...state, list: linksData}
    default:
      return state
  }
}

// **************************************** REDUCER FOR GETTING EATERY DATA ****************************************

function eatery(state = initialEateryState, action) {
  switch (action.type) {
    case GET_EATERY_DATA:
      return {...state, data: action.payload}
    default:
      return state
  }
}

// **************************************** REDUCER FOR UPDATING DATES ****************************************

/* import {updateDates} from './functions'

function dates(state = initialDateState, action) {
  switch (action.type) {
    case UPDATE_DHALL_DATE:
      let {dHallCodeName, dateIncrement} = action.payload;
      let newDateState = updateDates(state.dates, dHallCodeName, dateIncrement);
      return {...state, dates: newDateState};
    default:
      return state;
  }
}
*/

// **************************************** REDUCER FOR GETTING DISHES ****************************************

import {updateHallDishes, updateErrorMessage, updateHallClosedStatus, updateDatesHelper} from './functions'

function dishes(state = initialMealsState, action) {
  switch (action.type) {
    case GET_DISHES:
      let {dHallCodeName, meals, dishes} = action.payload
      let updatedHallData = {meals, dishes, error: '', loading: false, date: new Date()};
      let newHallState = updateHallDishes(state.halls, dHallCodeName, updatedHallData);
      return {...state, halls: newHallState}
    case UPDATE_DHALL_DATE:
      let {dateIncrement} = action.payload;
      let newDateState = updateDatesHelper(state.dates, action.payload.dHallCodeName, dateIncrement);
      return {...state, dates: newDateState};
    // case UPDATE_DHALL_DATE:
    //   let dHallCodeName_copy = action.payload.dHallCodeName;
    //   let dateIncrement = action.payload.dateIncrement;
    //   let newDateState = updateHallDate(state.halls, dHallCodeName_copy, dateIncrement);
    //   return {...state, halls: newDateState}
    case ERROR:
      let {codeName, message} = action.payload
      let newState = updateErrorMessage(state.halls, codeName, message);
      return {...state, halls: newState}
    case CONNECTION_ERROR:
      return {...state, connectionError: 'Internet not connected'}
    case DHALL_CLOSED:
      let {closedStatus} = action.payload;
      let newClosedState = updateHallClosedStatus(state.halls, action.payload.codeName, closedStatus);
      return {...state, halls: newClosedState}
    default:
      return state;
  }
}

// combines the reducers
export default combineReducers({
  search,
  location,
  links,
  eatery,
  dishes
});