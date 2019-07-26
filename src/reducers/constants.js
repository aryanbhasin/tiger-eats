import {PLACES_DATA} from 'TigerEats/src/assets/data/places-data.js';

export const initialSearchState = {
  searchTerm: '',
  searchResults: PLACES_DATA,
}

export const initialMealsState = {
  halls: [
    {
      wucox: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    },
    {
      cjl: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    },
    {
      whitman: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    },
    {
      forbes: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    },
    {
      roma: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    },
    {
      grad: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
      }
    }
  ],
  connectionError: ''
}