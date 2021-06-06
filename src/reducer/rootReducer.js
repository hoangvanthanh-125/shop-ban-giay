import { combineReducers } from "redux";
import products from "./productsReducer";
import ui from "./uiReducer";
import modalReducer from "./modalReducer";
import cart from "./cartReducer";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userReducer";
import pagination from "./paginationReducer";
import search from "./searchReducer";
import filterPrice from "./filterPriceReducer";
const rootReducers = combineReducers({
  products,
  ui,
  modalReducer,
  cart,
  form: formReducer,
  userReducer,
  pagination,
  search,
  filterPrice,
});
export default rootReducers;
