var initialState = {
  searchText: "",
  listSearch: [],
};
function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TEXT_SEARCH":
      const { text } = action.payload;
      state.searchText = text;
      return state;
    case "SET_LIST_SEARCH":
      const { listSearch } = action.payload;
      return {
        ...state,
        listSearch: listSearch,
      };

    default:
      return state;
  }
}

export default SearchReducer;
