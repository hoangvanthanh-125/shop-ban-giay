import * as typesUi from "./../constant/ui";
var initialState = {
  showLoading: false,
  showSideBar: false,
};
function uiReducer(state = initialState, action) {
  switch (action.type) {
    case typesUi.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case typesUi.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case typesUi.SHOW_SIDEBAR:
      return {
        ...state,
        showSideBar: true,
      };
    case typesUi.HIDE_SIDEBAR:
      return {
        ...state,
        showSideBar: false,
      };
    default:
      return state;
  }
}

export default uiReducer;
