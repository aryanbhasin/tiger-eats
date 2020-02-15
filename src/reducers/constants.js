
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
        date: new Date(),
      }
    },
    {
      cjl: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
        date: new Date(),
      }
    },
    {
      whitman: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
        date: new Date(),
      }
    },
    {
      forbes: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
        date: new Date(),
      }
    },
    {
      roma: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
        date: new Date(),
      }
    },
    {
      grad: {
        meals: [],
        dishes: [],
        error: '',
        loading: true,
        closed: false,
        date: new Date(),
      }
    }
  ],
  connectionError: '',
  dates: {
    wucox: new Date(),
    cjl: new Date(),
    whitman: new Date(),
    forbes: new Date(),
    roma: new Date(),
    grad: new Date()
  }
}