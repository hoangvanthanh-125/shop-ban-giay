import * as cartTypes from './../constant/cart';

export const addCart = (cartProduct) => ({
  type:cartTypes.ADD_CART,
  payload:{
    cartProduct
  }
})
export const addCartSuccess = (cartProduct) => ({
  type:cartTypes.ADD_CART_SUCCESS,
  payload:{
    cartProduct
  }
})
export const deleteCart = (cartProduct) => ({
  type:cartTypes.DELETE_CART,
  payload:{
    cartProduct
  }
})
export const updateCart = (cartProduct,number) => ({
  type:cartTypes.UPDATE_CART,
  payload:{
    cartProduct,
    number
  }
})
export const updateCartSuccess = (cartProduct,number) => ({
  type:cartTypes.UPDATE_CART_SUCCESS,
  payload:{
    cartProduct,
    number
  }
})

// export const fetchCart = () => ({
//   type:cartTypes.FETCH_CART,
// })

export const fetchCartSuccess = ( data ) => ({
  type:cartTypes.FETCH_CART_SUCCESS,
  payload:{
    data
  }
})
export const deleleCart = (cartProduct) => ({
  type:cartTypes.DELETE_CART,
  payload:{
    cartProduct
  }
})
export const deleteCartSuccess = (cartProduct) => ({
  type:cartTypes.DELETE_CART_SUCCESS,
  payload:{
    cartProduct
  }
})

export const FBfetchCart = () => {
  return {
    type:cartTypes.FETCH_CART
  }
}

export const FBfetchListCheckOut = () => {
  return {
    type:cartTypes.FETCH_LIST_CHECKOUT
  }
}
export const FBfetchListCheckOutSuccess = (listCheckOut) => {
  return {
    type:cartTypes.FETCH_LIST_CHECKOUT_SUCCESS,
    payload:{
      listCheckOut
    }
  }
}
export const FBsetListCheckOut = (listCheckOut) => {
  return {
    type:cartTypes.SET_LIST_CHECKOUT,
    payload:{
      listCheckOut
    }
  }
}
export const FBsetListCheckOutSuccess = (listCheckOut) => {
  return {
    type:cartTypes.SET_LIST_CHECKOUT_SUCCESS,
    payload:{
      listCheckOut
    }
  }
}

export const FBsetListWaiting = (listWaiting) => ({
  type:cartTypes.SET_LIST_WAITING,
  payload:{
    listWaiting
  }
})
export const FBsetListWaitingSuccess = (listWaiting) => ({
  type:cartTypes.SET_LIST_WAITING_SUCCESS,
  payload:{
    listWaiting
  }
})

export const FBfetchListWaiting = () => ({
  type:cartTypes.FETCH_LIST_WAITING,
})
export const FBfetchListWaitingSuccess = (listWaiting) => ({
  type:cartTypes.FETCH_LIST_WAITING_SUCCESS,
  payload:{
    listWaiting
  }
})

export const FBsetListDaNhan = (listDaNhan) => ({
  type:cartTypes.SET_LIST_DANHAN,
  payload:{
    listDaNhan
  }

})
export const FBfetchListDaNhan = () => ({
  type:cartTypes.FETCH_LIST_DANHAN,
})
export const FBfetListDaNhanSuccess = (listDaNhan) => ({
  type:cartTypes.FETCH_LIST_DANHAN_SUCCESS,
  payload:{
    listDaNhan
  }
})

export const FBaddListDaNhan = (productDanhan) => ({
  type:cartTypes.ADD_LIST_DANHAN,
  payload:{productDanhan},
})
export const FBaddListDaNhanSuccess = (productDanhan) => ({
  type:cartTypes.ADD_LIST_DANHAN_SUCCESS,
  payload:{
    productDanhan
  }
})
export const FBaddLisrCancel = (productCancel) => ({
  type:cartTypes.ADD_LIST_CANCEL,
  payload:{
    productCancel
  }
})
export const FBaddLisrCancelSuccess = (productCancel) => ({
  type:cartTypes.ADD_LIST_CANCEL_SUCCESS,
  payload:{
    productCancel
  }
})
export const FBfetchListCancel = () => {
  return {
    type:cartTypes.FETCH_LIST_CANCEL,
  }
}
export const FBfetchListCancelSuccess = (listCancel) => {
  return {
    type:cartTypes.FETCH_LIST_CANCEL_SUCCESS,
    payload:{
      listCancel
    }
  }
}
export const FBdeleteProductCancel = (productCancel) => {
  return {
    type:cartTypes.DELETE_PRODUCT_CANCEL,
    payload:{
      productCancel
    }
  }
}