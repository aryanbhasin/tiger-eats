export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const FETCH_ERROR = 'FETCH_ERROR';
export const GET_MEALS_HTML = 'GET_MEALS_HTML';
export const SAVE_DISHES = 'SAVE_DISHES';


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
import {extractMealData} from '../components/extract-menu/get-dishes'

// uses thunk
export function getMenu(menuUrl) {
  return (dispatch) => {
    fetch(menuUrl)
      .then(response => response.text())
      .catch(error => {dispatch({type: FETCH_ERROR, payload: error})})
      .then(htmlText => {
        var soup = new JSSoup(htmlText);
        var meals = soup.findAll('div', 'mealCard');
        dispatch({
          type: GET_MEALS_HTML,
          payload: {
            meals: meals,
            loading: false
          }
        })
      })
  }
}

export function getDishesFromMenu(mealCardArray) {
  mealData = new Object();
  mealCardArray.forEach(mealCard => extractMealData(mealCard, mealData));
  console.log(mealCardArray)
  return {
    type: SAVE_DISHES,
    payload: mealData
  }
}