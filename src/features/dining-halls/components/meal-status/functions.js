export function getTime() {
  var currDate = new Date();
  var currHrs = currDate.getHours();
  var currMins = currDate.getMinutes();
  var currDay = currDate.getDay();
  var currMonth = currDate.getMonth();
  return [currHrs, currMins, currDay, currMonth];
}

export function buildMealTimingString(hr1, hr2) {
  let openHr, closingHr;
  if (hr1 % 1 === 0.5) {
    openHr = `${Math.floor(hr1)}:30`
  } else  {
    openHr = `${hr1}:00`
  }
  if (hr2 % 1 === 0.5) {
    closeHr = `${Math.floor(hr2)}:30`
  } else  {
    closeHr = `${hr2}:00`
  }
  return `${openHr} - ${closeHr}`
}

// finds number in array closest to 'value' and ahead of it
export function closestCheckPoint(value, array) {
  closest = array[0];
  array.forEach((num, index) => {
    let next = num - value;
    let current = closest - value;
    if ((current < 0) && (next > 0)){
      closest = array[index]
    }
    
  })
  return closest;
}

// gets key in an object that includes 'value' in its array
export function closestMeal(value, object) {
  let mealName = Object.keys(object).find(key => object[key].includes(value))
  return mealName
}

// constructs array of hour 'checkpoints' from an object of arrays
export function constructCheckPointsArray(object) {
  let checkpoints = [];
  let vals = Object.values(object);

  vals.forEach((array) => {
    if (vals === "c") {return 'closed';}
    array.forEach((chkpt) => {
      checkpoints.push(chkpt)
    })
  })
  return checkpoints;
}

export function getMealNameFromLetter(letter) {
  switch (letter) {
    case 'b':
      return 'Breakfast';
    case 'br':
      return 'Brunch';
    case 'l':
      return 'Lunch';
    case 'd':
      return 'Dinner';
  }
}