var initialState = {
  minPrice: null,
  maxPrice: null,
  sortValue: 0,
};
const FilterPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MIN_MAX_PRICE": {
      const { min, max } = action.payload;
      return {
        ...state,
        minPrice: min,
        maxPrice: max,
      };
    }
    case "SET_VALUE_SORT": {
      const { sortValue } = action.payload;
      return {
        ...state,
        sortValue: sortValue,
      };
    }

    default:
      return state;
  }
};
export default FilterPriceReducer;
