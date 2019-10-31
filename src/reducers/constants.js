import {EATERY_DATA} from 'TigerEats/src/assets/data/eatery-data.js';

export const initialSearchState = {
  searchTerm: '',
  searchResults: EATERY_DATA,
}

export const initialLocationState = {
  coordinates: {
    latitude: '',
    longitude: '',
  },
  error: 'null'
}

export const initialLinksList = {
  list: {}
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