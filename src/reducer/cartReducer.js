import { ToastFuncSuccess } from "../common/ToasFunc";
import * as cartTypes from "./../constant/cart";

var initialState = {
  listCart: [],
  listCheckOut: [],
  listWaiting: [],
  listDaNhan: [],
  listCancel: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.FETCH_CART: {
      //console.log('fetchCart');
      return {
        ...state,
      };
    }
    case cartTypes.FETCH_CART_SUCCESS:
      var { data } = action.payload;
      return {
        ...state,
        listCart: data,
      };
    case cartTypes.ADD_CART: {
      return {
        ...state,
      };
    }
    case cartTypes.ADD_CART_SUCCESS: {
      ToastFuncSuccess("Thêm thành công", {
        autoClose: 1500,
      });
      var { listCart } = state;
      var { cartProduct } = action.payload;
      const index = listCart.findIndex(
        (item) =>
          item.cartItem.id === cartProduct.cartItem.id &&
          item.color === cartProduct.color &&
          item.size === cartProduct.size
      );
      if (index >= 0) {
        const newNumber = listCart[index].quantity + 1;
        listCart[index].quantity = newNumber;
        const newlist = [
          ...listCart.slice(0, index),
          { ...listCart[index], quantity: newNumber },
          ...listCart.slice(index + 1),
        ];
        return {
          ...state,
          listCart: newlist,
        };
      }
      const newList = [cartProduct].concat(listCart);
      return {
        ...state,
        listCart: newList,
      };
    }
    case cartTypes.UPDATE_CART: {
      return {
        ...state,
      };
    }
    case cartTypes.UPDATE_CART_SUCCESS: {
      const { cartProduct, number } = action.payload;
      // console.log(cartProduct);
      const { listCart } = state;
      const index = state.listCart.findIndex(
        (item) =>
          item.cartItem.id === cartProduct.cartItem.id &&
          item.color === cartProduct.color &&
          item.size === cartProduct.size
      );

      const newItem = {
        ...listCart[index],
        quantity: listCart[index].quantity + number,
      };
      //console.log( newItem);
      const newList = [...listCart.slice(0, index)]
        .concat([newItem])
        .concat([...listCart.slice(index + 1)]);
      //console.log(newList);

      return {
        ...state,
        listCart: newList,
      };
    }
    case cartTypes.DELETE_CART: {
      return {
        ...state,
      };
    }
    case cartTypes.DELETE_CART_SUCCESS: {
      ToastFuncSuccess("Xóa thành công", {
        autoClose: 1500,
      });
      const { cartProduct } = action.payload;
      const { listCart } = state;
      const index = listCart.findIndex(
        (item) =>
          item.cartItem.id === cartProduct.cartItem.id &&
          item.color === cartProduct.color &&
          item.size === cartProduct.size
      );
      const newList = [
        ...listCart.slice(0, index),
        ...listCart.slice(index + 1),
      ];
      return {
        ...state,
        listCart: newList,
      };
    }
    case cartTypes.FETCH_LIST_CHECKOUT: {
      return {
        ...state,
      };
    }
    case cartTypes.FETCH_LIST_CHECKOUT_SUCCESS: {
      const { listCheckOut } = action.payload;
      return {
        ...state,
        listCheckOut: listCheckOut,
      };
    }
    case cartTypes.SET_LIST_CHECKOUT: {
      return {
        ...state,
      };
    }
    case cartTypes.SET_LIST_WAITING: {
      return {
        ...state,
      };
    }
    case cartTypes.FETCH_LIST_WAITING: {
      return {
        ...state,
      };
    }
    case cartTypes.FETCH_LIST_WAITING_SUCCESS: {
      const { listWaiting } = action.payload;
      return {
        ...state,
        listWaiting: listWaiting,
      };
    }
    case cartTypes.SET_LIST_DANHAN: {
      return { ...state };
    }
    case cartTypes.FETCH_LIST_DANHAN: {
      return { ...state };
    }
    case cartTypes.FETCH_LIST_DANHAN_SUCCESS: {
      const { listDaNhan } = action.payload;
      // console.log(listDaNhan);
      return {
        ...state,
        listDaNhan: listDaNhan,
      };
    }
    case cartTypes.ADD_LIST_DANHAN: {
      return {
        ...state,
      };
    }
    case cartTypes.ADD_LIST_DANHAN_SUCCESS: {
      const { productDanhan } = action.payload;
      const { listDaNhan } = state;
      const newList = [productDanhan].concat(listDaNhan);
      return {
        ...state,
        listDaNhan: [...newList],
      };
    }
    case cartTypes.ADD_LIST_CANCEL: {
      return { ...state };
    }
    case cartTypes.ADD_LIST_CANCEL_SUCCESS: {
      const { productCancel } = action.payload;
      const newListCancel = [productCancel].concat(state.listCancel);
      return {
        ...state,
        listCancel: [...newListCancel],
      };
    }
    case cartTypes.FETCH_LIST_CANCEL: {
      return { ...state };
    }
    case cartTypes.FETCH_LIST_CANCEL_SUCCESS: {
      const { listCancel } = action.payload;
      return {
        ...state,
        listCancel: listCancel,
      };
    }
    case cartTypes.DELETE_PRODUCT_CANCEL: {
      return state;
    }
    default:
      return state;
  }
};
export default cartReducer;
