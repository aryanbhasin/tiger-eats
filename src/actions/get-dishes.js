const ERROR = 'ERROR';
const CONNECTION_ERROR = 'CONNECTION_ERROR';
const GET_DISHES = 'GET_DISHES';

// **************************************** ACTION CREATORS FOR UPDATING MENU ****************************************
import JSSoup from 'jssoup';
import axios from 'axios';
import superagent from 'superagent';
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
    
    // overcomes CORS issues
    const corsProxyurl = 'https://cors-anywhere.herokuapp.com/';
    menuUrl = corsProxyurl + menuUrl;
    
    axios.get(menuUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        }
      })
      .then(res => {
        
        let data = res.data;

        console.log(data.length, dHallCodeName, res.headers, res);
        
        if (!data) {
          console.log('!data');
          return dispatch(dispatchError(dHallCodeName, 'No Data Available'))
        }
        
        if (!!data && data.includes("No Data Available")) {
          console.log('no data for ' + dHallCodeName);
          return dispatch(setDhallClosedStatus(dHallCodeName, true))
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
        console.log("ERROR: ", error); 
        return dispatch(dispatchError(dHallCodeName, error))
      })
    
    
    
    
    /*
    fetch(menuUrl, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => {
        console.log(dHallCodeName + ". Type: " + response.type + ". Status: " + response.status + ". URL: " + menuUrl);
      
        return response.text();
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
          return dispatch(setDhallClosedStatus(dHallCodeName, true))
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
    */
    
  }
}