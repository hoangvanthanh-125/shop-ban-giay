const initialState = {
  user: null,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return {
        ...state,
        user: user,
      };
    default:
      return state;
  }
}
export default userReducer;
