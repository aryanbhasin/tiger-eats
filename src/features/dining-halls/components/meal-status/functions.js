import {DHallTimings} from 'TigerEats/src/constants/dhall-timings'

function getTime() {
  var currDate = new Date();
  var currHrs = currDate.getHours();
  var currMins = currDate.getMinutes();
  var currDay = currDate.getDay();
  var currMonth = currDate.getMonth();
  return [currHrs, currMins, currDay, currMonth];
}


export function checkOpenStatusHelper(codeName) {
  
  // get current time
  let [hrs, mins, day, month] = getTime();
  let decimalHrs = hrs + (mins / 60);
  decimalHrs = Math.round(decimalHrs * 100) / 100
  
  let checkpoints = constructCheckPointsArray(DHallTimings[day][codeName]);
  
  // corner case for Grad College being closed
  if (checkpoints === 'closed') {
    return [false, 'Closed', null];
  }
  
  // indexing into DHallTimings array's right day and hall
  if (decimalHrs >= checkpoints[checkpoints.length-1]) {
    // if current hour is past last meal time (last checkpoint), next meal should be set for next morning
    mealTimings = DHallTimings[(day+1) % 7][codeName];
  } else {
    mealTimings = DHallTimings[day][codeName];
  }
  if (mealTimings === 'closed') {
    return [false, 'Closed', null];
  }
  // construct checkpoints again just in case we're checking for tomorrow's meal
  checkpoints = constructCheckPointsArray(mealTimings);
  // constructs closestMealName and closestMealTimings
  closestHr = closestCheckPoint(decimalHrs, checkpoints);
  mealLetter = closestMeal(closestHr, mealTimings);
  closestMealName = getMealNameFromLetter(mealLetter);
  closestMealTimings = mealTimings[mealLetter];
  
  if (decimalHrs >= checkpoints[checkpoints.length-1]) {
    openStatus = false;
  } else {
    if ((decimalHrs >= closestMealTimings[0]) && (decimalHrs < closestMealTimings[1])) {
      openStatus = true
    } else {
      openStatus = false
    }
  }
  
  return [openStatus, closestMealName,closestMealTimings];
}

export function returnClosestMealIndex(codeName) {
  
  // get current time
  let [hrs, mins, day, month] = getTime();
  let decimalHrs = hrs + (mins / 60);
  decimalHrs = Math.round(decimalHrs * 100) / 100
  
  let checkpoints = constructCheckPointsArray(DHallTimings[day][codeName]);

  if (decimalHrs >= checkpoints[checkpoints.length-1]) {  
    mealTimings = DHallTimings[(day+1) % 7][codeName];
  } else {
    mealTimings = DHallTimings[day][codeName];
  }

  checkpoints = constructCheckPointsArray(mealTimings);
  closestHr = closestCheckPoint(decimalHrs, checkpoints);
  mealLetter = closestMeal(closestHr, mealTimings);
  return getTabIndexFromMealLetter(mealLetter);
  
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
function closestCheckPoint(value, array) {
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
function closestMeal(value, object) {
  let mealName = Object.keys(object).find(key => object[key].includes(value))
  return mealName
}

// constructs array of hour 'checkpoints' from an object of arrays
function constructCheckPointsArray(object) {
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

export function getTabIndexFromMealLetter(letter) {
  switch (letter) {
    case 'b':
      return 0;
    case 'br':
      return 1;
    case 'l':
      return 1;
    case 'd':
      return 2;
  }
}