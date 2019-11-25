
export const initialSearchState = {
  searchTerm: '',
  searchResults: {},
}

export const initialLocationState = {
  coordinates: {
    latitude: '',
    longitude: '',
  },
  error: 'null'
}

export const initialLinksState = {
  list: {}
}

export const initialEateryState = {
  data: {}
}

export const initialMealsState = {
  halls: [
    {
      wucox: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    },
    {
      cjl: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    },
    {
      whitman: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    },
    {
      forbes: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    },
    {
      roma: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    },
    {
      grad: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
      }
    }
  ],
  connectionError: ''
}