import * as modalTypes from "./../constant/modal";
var initialState = {
  showModal: false,
  title: "",
  component: null,
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case modalTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        title: "",
        component: null,
      };
    case modalTypes.CHANGE_TITLE_MODAL:
      const { title } = action.payload;
      return {
        ...state,
        title: title,
      };
    case modalTypes.CHANGE_CONTENT_MODAL:
      return {
        ...state,
        component: action.payload.component,
      };

    default:
      return state;
  }
};
export default modalReducer;
