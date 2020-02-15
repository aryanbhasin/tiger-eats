
export function updateHallDishes(currHallState, hallToBeUpdated, updatedHallData) {
  return currHallState.map((hall) => {
    let currName = Object.keys(hall)[0].toString();
    if (currName !== hallToBeUpdated) {
      return hall
    } else {
      hall[currName] = updatedHallData
      return hall
    }
  })
}

export function updateHallDate(currHallState, hallToBeUpdated, dateIncrement) {
  let newState = currHallState.map((hall) => {
    let currName = Object.keys(hall)[0].toString();
    if (currName !== hallToBeUpdated) {
      return hall
    } else {
      hall2 = hall;
      let d = new Date(hall2[currName]['date'].getTime());
      d.setDate(d.getDate() + dateIncrement);
      hall2[currName]['date'] = d;
      // let d = new Date(hall[currName]['date'].getTime());
      // d.setDate(d.getDate() + dateIncrement);
      // let hallObj = hall[currName];
      // hallObj = {...hallObj, date: d};
      // Object.assign(hall[currName], hallObj);
      console.log(hall2 + " " + d);
      return hall2;
    }
  })
  console.log(newState);
  return newState;
}

export function updateErrorMessage(currHallState, hallToBeUpdated, errorMessage) {
  return currHallState.map((hall) => {
    let currName = Object.keys(hall)[0].toString();
    if (currName !== hallToBeUpdated) {
      return hall
    } else {
      hall[currName]['error'] = errorMessage;
      return hall
    }
  })
}

export function updateHallClosedStatus(currHallState, hallToBeUpdated, closedStatus) {
  return currHallState.map((hall) => {
    let currName = Object.keys(hall)[0].toString();
    if (currName !== hallToBeUpdated) {
      return hall
    } else {
      hall[currName]['error'] = 'No Data Available';
      hall[currName]['closed'] = closedStatus
      return hall
    }
  })
}