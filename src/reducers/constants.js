
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