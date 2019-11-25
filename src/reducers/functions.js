
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