export const UPDATE_SEARCH = 'UPDATE_SEARCH';


// **************************************** ACTION CREATORS FOR SEARCH ****************************************

export function updateSearch(text, initData) {
  let searchData;
  (text === '') 
    ? searchData = initData
    : searchData = initData.filter((place) => {
        const searchTerm = text.toUpperCase();
        const placeName = place.name.toUpperCase();
        return (placeName.indexOf(searchTerm) > -1);
      })
  return {
    type: UPDATE_SEARCH,
    payload: {
      text: text,
      results: searchData
    },
  }
}