
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

export function updateDatesHelper(currDatesState, dHallCodeName, dateIncrement) {
  let d = currDatesState[dHallCodeName];
  d.setDate(d.getDate() + dateIncrement);
  currDatesState[dHallCodeName] = d;
  console.log(currDatesState);
  return currDatesState;
}

export function updateHallDate(currHallState, hallToBeUpdated, dateIncrement) {
  let selectedHall = currHallState.find((hall) => {
    let currName = Object.keys(hall)[0].toString();
    return (currName == hallToBeUpdated);
  })
  let d = selectedHall[hallToBeUpdated]['date'];
  d.setDate(d.getDate() + dateIncrement);
  selectedHall[hallToBeUpdated] = {...selectedHall[hallToBeUpdated], date: d};
  console.log(selectedHall[hallToBeUpdated]['date']);
  console.log(d);
  console.log(selectedHall);
  
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

      return hall2;
    }
  })

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