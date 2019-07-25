import React, {Component} from 'react';

export default function constructDiningUrl(dHallName) {

  let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?sName=Princeton+University+Campus+Dining';

  return base + dateConstructor() + dHallConstructor(dHallName);
}

// constructs date portion of url as per today's date
function dateConstructor() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  month++;
  let date = d.getDate();
  return `&dtdate=${month}%2F${date}%2F${year}`
}

function dHallConstructor(dHallName) {
  let locNum, locName;
  switch (dHallName) {
    case 'Wu / Wilcox':
      locNum = '02';
      locName = '%20Butler+%26+Wilson+Colleges&naFlag=1'
      break;
    case 'CJL':
      locNum = '05';
      locName = 'Center+for+Jewish+Life&naFlag=1'
      break;
    case 'Forbes':
      locNum = '03';
      locName = 'Forbes+College&naFlag=1'
      break;
    case 'Rocky / Mathey':
      locNum = '01';
      locName = 'Rockefeller+%26+Mathey+Colleges&naFlag=1'
      break;
    case 'Whitman':
      locNum = '08';
      locName = 'Whitman+College&naFlag=1'
      break;
    case 'Graduate College':
      locNum = '04';
      locName = 'Graduate+College&naFlag=1'
      break;
    default:
      locNum = '02';
      locName = '%20Butler+%26+Wilson+Colleges&naFlag=1'
  }
  
  return `&locationNum=${locNum}&locationName=${locName}`  
}

// backup URL Constructor function for dummy testing
function URLConstructor() {
  let base = 'https://menus.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?myaction=read&sName=Princeton+University+Campus+Dining';
  let date = '&dtdate=7%2F25%2F2019';
  let dhall = '&locationNum=02&locationName=%20Butler+%26+Wilson+Colleges&naFlag=1'
  return base + date + dhall;
}