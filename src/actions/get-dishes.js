const ERROR = 'ERROR';
const CONNECTION_ERROR = 'CONNECTION_ERROR';
const GET_DISHES = 'GET_DISHES';
const UPDATE_DHALL_DATE = 'UPDATE_DHALL_DATE';
const DHALL_CLOSED = 'DHALL_CLOSED';

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

// Only creates the XMLHttpRequest object
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else {
    xhr = null;
  }
  return xhr;
}


// uses thunk
export function getDishes(menuUrl, dHallCodeName) {
                      
  return (dispatch) => {
    
    let isInternetConnected = checkInternetConnection();
    if (!isInternetConnected) {
      return dispatch({type: CONNECTION_ERROR})
    }
    
    var xhr = createCORSRequest('GET', menuUrl);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
    
    xhr.onload = function() {
      // text is the response HTML returned from the fetch() call
      var text = xhr.responseText;
      console.log("From Pure XMLHttpRequest, length of " + dHallCodeName + " is: " + text.length);
      
      if (!text) {
        return dispatch(dispatchError(dHallCodeName, 'No Data Available'));
      }
      
      if (!!text && text.includes("No Data Available")) {
        console.log('no data for ' + dHallCodeName);
        return dispatch(setDhallClosedStatus(dHallCodeName, true))
      }
      
      [meals, dishes] = getDishesHelper(text);   
      return dispatch({
        type: GET_DISHES,
        payload: {
          dHallCodeName,
          meals,
          dishes
        }
      })
      
    };
    
    xhr.onerror = function() {
      console.log('Error');
    };
    
    xhr.send();

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

// ************************************** ACTION CREATORS FOR UPDATING DHALL DATE **************************************

export function updateDate(dHallCodeName, dateIncrement) {
  return {
    type: UPDATE_DHALL_DATE,
    payload: {
      dHallCodeName,
      dateIncrement,
    }
  }
}

// ************************************ ACTION CREATOR FOR DHALL CLOSED STATUS ****************************************

export function setDhallClosedStatus(dHallCodeName, closedStatus) {
  return {
    type: DHALL_CLOSED,
    payload: {
      codeName: dHallCodeName,
      closedStatus: closedStatus
    }
  }
}
