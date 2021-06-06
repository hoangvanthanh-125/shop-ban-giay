var initialState = {
  nextIndex: 10,
  previousIndex: 0,
};
function PaginationReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INDEX": {
      const { index } = action.payload;
      console.log(index);
      return {
        ...state,

        nextIndex: index,
      };
    }
    default:
      return state;
  }
}

export default PaginationReducer;
