import {combineReducers} from 'redux';
import {UPDATE_SEARCH} from '../actions'
import {GET_DISHES, ERROR, CONNECTION_ERROR} from '../actions'

import {initialSearchState, initialMealsState} from './constants'

// **************************************** REDUCER FOR SEARCH ****************************************

function search(state = initialSearchState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {...state, searchTerm: action.payload.text, searchResults: action.payload.results};
    default:
      return state;
  }
}

// **************************************** REDUCER FOR GETTING DISHES ****************************************
// const initialDishesState = {
//   error: '',
//   connectionError: '',
//   meals: [],
//   dishes: [],
//   loading: true,
// }

import {updateHallDishes, updateErrorMessage} from './functions'

function dishes(state = initialMealsState, action) {
  switch (action.type) {
    case GET_DISHES:
      const {dHallCodeName, meals, dishes} = action.payload
      const updatedHallData = {meals, dishes, error: '', loading: false};
      let newHallState = updateHallDishes(state.halls, dHallCodeName, updatedHallData);
      return {...state, halls: newHallState}
    case ERROR:
      const {codeName, message} = action.payload
      let newState = updateErrorMessage(state.halls, codeName, message);
      return {...state, halls: newState}
    case CONNECTION_ERROR:
      return {...state, connectionError: 'Internet not connected'}
    default:
      return state;
  }
}

// combines the reducers
export default combineReducers({
  search,
  dishes
});