import React, {Component} from 'react';

export default function constructDiningUrl(dHallName, inputDate, inputMonth, inputYear) {

  let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?';
  return base + dateConstructor(inputDate, inputMonth, inputYear) + dHallConstructor(dHallName);
  // return CJLUrl();
}

// constructs date portion of url as per today's date
function dateConstructor(inputDate, inputMonth, inputYear) {
  // console.log(inputDate + " " + inputMonth + " " + inputYear);

  return `dtdate=${inputMonth}%2F${inputDate}%2F${inputYear}`
}

function dHallConstructor(dHallName) {
  let locNum, locName;
  switch (dHallName) {
    case 'Rocky / Mathey':
      locNum = '01';
      locName = 'Rockefeller+%26+Mathey+Colleges&naFlag=1'
      break;
    case 'Wu / Wilcox':
      locNum = '02';
      locName = '%20Butler+%26+Wilson+Colleges&naFlag=1'
      break;
    case 'Forbes':
      locNum = '03';
      locName = 'Forbes+College&naFlag=1'
      break;
    case 'Graduate College':
      locNum = '04';
      locName = 'Graduate+College&naFlag=1'
      break;
    case 'Center for Jewish Life':
      locNum = '05';
      locName = 'Center+for+Jewish+Life&naFlag=1'
      break;
    case 'Whitman':
      locNum = '08';
      locName = 'Whitman+College&naFlag=1'
      break;
    
    default:
      locNum = '02';
      locName = '%20Butler+%26+Wilson+Colleges&naFlag=1'
  }
  
  return `&locationNum=${locNum}`  
}

// backup URL Constructor function for dummy testing
function URLConstructor() {
  let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining';
  let date = '&dtdate=12%2F09%2F2019';
  let dhall = '&locationNum=02&locationName=%20Butler+%26+Wilson+Colleges&naFlag=1'
  return base + date + dhall;
}

// URL Constructor for CJL testing
function CJLUrl() {
  return 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?dtdate=11%2F22%2F2019&locationNum=01';
}