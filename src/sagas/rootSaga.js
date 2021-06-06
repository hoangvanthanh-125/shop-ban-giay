
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { call, delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { addListCommentSuccess, fetchListCommentSuccess } from '../actions/comments';
import { setCurrentIndex } from '../actions/pagination';
import { addList, FbAddListCancel, FbAddListComment, FBaddToCart, FBfetchCart, FbFetchListCancel, FbFetchListCheckOut, FBfetchListComment, FbFetchListDaNhan, FBfetchListNoiBat, FBfetchListProduct, FBfetchListSale, FbFetchListWaiting, FBfetchProduct, FBfetchTypeProduct, FbSetListCheckOut, FbSetListDaNhan, FbSetListWaiting, FBUpdateListCart } from '../apis/products';
import * as cartActions from './../actions/cart';
import * as modalActions from './../actions/modal';
import * as productsActions from './../actions/products';
import * as uiActions from './../actions/ui';
import * as cartTypes from './../constant/cart';
import * as TypeCmt from './../constant/comments';
import * as TypesProducts from './../constant/products';
function* fetchListSaga({ payload }){
  
  const nextIndex = yield select(state => state.pagination.nextIndex);
  console.log(nextIndex);
  const {sortby,desc,minPrice,maxPrice} = payload;
 yield put(uiActions.showLoading());
 const fbRes = yield call(FBfetchListProduct,sortby,desc,minPrice,maxPrice,nextIndex);
 var lastItem = fbRes.docs[fbRes.docs.length -1];
 
  yield put(setCurrentIndex(lastItem?.data().price));
 yield put(productsActions.fetchListSuccess(fbRes.docs));
 yield put(uiActions.hideLoading());
}
function* addProductSaga ({ payload }){
  const { name,description,price,listImg,mainImg } = payload;
  
  yield put(uiActions.showLoading());
  const res = yield call (addList,{
    name,
    description,
    price,
    mainImg,
    listImg
  });
  const { data,status} = res;
  
  if(status === 201){
    yield put(productsActions.addProductSuccess(data));
    yield put(modalActions.hideModal());
  }
  yield put(uiActions.hideLoading());
}
function* fetchProductSaga ({ payload }){
  yield put(uiActions.showLoading());
  const { id } = payload;
   const res = yield call(FBfetchProduct,id);
   const  data  = res;
   yield put(productsActions.fetchProductSuccess(data));
   yield put(uiActions.hideLoading());
  
}
function* fetchCartSaga(){
  const uid = yield select(state => state?.userReducer?.user?.uid);
  const res = yield call(FBfetchCart,uid)// console.log(res.data());
   yield put(cartActions.fetchCartSuccess(res?.data()?.listCart));
}
function* addCartSaga( {payload} ) {

  const { cartProduct } = payload;
  const listCart = yield select(state => state.cart.listCart);
  const uid = yield select(state => state.userReducer.user.uid);
  const currentProduct = yield select(state => state.products.currentProduct);
  const newProduct = {
    cartItem:{
      name:currentProduct.data().name,
      price:currentProduct.data().price,
      sale:currentProduct.data().sale,
      listImg:[...currentProduct.data().listImg],
      mainImg:currentProduct.data().mainImg,
      id:currentProduct.id,
      realPrice:currentProduct.data().realPrice
    },
    quantity:1,
    size:cartProduct.size,
    color:cartProduct.color
  }
 if(typeof listCart !== 'undefined'){
  const index = listCart?.findIndex(item => item?.cartItem?.id === currentProduct?.id && item?.size === cartProduct?.size && item?.color === cartProduct?.color);
  if(index >= 0 ){
    const uid = yield select(state => state?.userReducer?.user?.uid);
    var currentQuantity = listCart[index].quantity;
    var newList = [...listCart.slice(0,index),{...listCart[index],quantity:currentQuantity+1},...listCart.slice(index+1)];
    yield call(FBUpdateListCart,newList,uid)
    yield put(cartActions.addCartSuccess(newProduct));
 }
  else{
     yield call(FBaddToCart,{
      cartItem:{
        name:currentProduct.data().name,
        price:currentProduct.data().price,
        sale:currentProduct.data().sale,
        listImg:[...currentProduct.data().listImg],
        mainImg:currentProduct.data().mainImg,
        id:currentProduct.id,
        realPrice:currentProduct.data().realPrice
        
      },
      quantity:1,
      color:cartProduct.color,
      size:cartProduct.size
     },uid);
 
  yield put(cartActions.addCartSuccess(newProduct));
  }
}
}

function* updateCartSaga({ payload }){
  const { cartProduct,number } = payload;
  const uid = yield select(state => state.userReducer.user.uid);
  const listCart = yield select(state=>state.cart.listCart);
  if(typeof listCart !== 'undefined'){
    const index = listCart.findIndex(item => item.cartItem.id === cartProduct.cartItem.id
      &&item.color === cartProduct.color && item.size === cartProduct.size);
    var currentQuantity = listCart[index].quantity;
    var newList = [...listCart.slice(0,index),{...listCart[index],quantity:currentQuantity+number},...listCart.slice(index+1)];
    yield put(cartActions.updateCartSuccess(cartProduct,number));
    yield call(FBUpdateListCart,newList,uid)
  }
}

function* deleteCartSaga({ payload }){
  const { cartProduct } = payload;
  const uid = yield select(state => state.userReducer.user.uid);
  const listCart = yield select(state=>state.cart.listCart);
  if(typeof listCart !== 'undefined'){
    const index = listCart.findIndex(item => item.cartItem.id === cartProduct.cartItem.id&&
      item.color === cartProduct.color && item.size === cartProduct.size);
    var newList = [...listCart.slice(0,index),...listCart.slice(index+1)];
    yield call(FBUpdateListCart,newList,uid)
    yield put(cartActions.deleteCartSuccess(cartProduct));
}
}
function* fetchTypeProductSaga({ payload }){
  const listCheckOut = yield select (state => state.cart.listCheckOut);
  
    const { typeProduct,sortBy,desc} = payload;
  yield put(uiActions.showLoading());
 const fbRes = yield call(FBfetchTypeProduct,typeProduct,sortBy,desc);
 
 yield put(productsActions.fetchTypeProductSuccess(fbRes.docs));
 yield put(uiActions.hideLoading());
  
}

function* fetchListCheckOutSaga(){
  yield put(uiActions.showLoading());
  yield delay(1000);
  const uid = yield select(state => state.userReducer.user.uid);
  const res = yield call(FbFetchListCheckOut,uid);
  yield put(cartActions.FBfetchListCheckOutSuccess(res.data().listCheckOut));
  yield put(uiActions.hideLoading());
 


}
function* setListCheckOutSaga({ payload }){
 
  const uid = yield select(state => state.userReducer.user.uid);
  const  { listCheckOut } = payload;
  yield call(FbSetListCheckOut,listCheckOut,uid)
  const res = yield call(FbFetchListCheckOut,uid);
  yield put(cartActions.FBfetchListCheckOutSuccess(res.data().listCheckOut));
  
  
}
function* setListWaitingSaga( {payload }){
  const uid = yield select(state => state.userReducer.user.uid);
  const {listWaiting} = payload;
  
  const res = yield call(FbFetchListWaiting,uid);
 
  const newList = listWaiting.concat(res.data().listWaiting);
  yield call(FbSetListWaiting,newList,uid);
  // yield put(modalActions.showModal())
  yield put(modalActions.showModal());
  yield put(modalActions.changeModalTitle("Đặt thành công"));
  yield put(modalActions.changeModalContent(<div>
    <h1>Bạn đã đặt đơn hàng</h1>
   <Link style={{textDecoration:'none'}} to='/info'>
     <Button style={{fontSize:13}} variant='contained' color='primary'>Đơn hàng</Button>
   </Link>
    <Link style={{textDecoration:'none'}} to='/'>
     <Button style = {{marginLeft:'10px'}} variant='outlined'>Trang chủ</Button>
    </Link>
  </div>))


}
function* fetchListWaitingSaga (){
  yield put(uiActions.showLoading());
  yield delay(1000);
  const uid = yield select(state => state.userReducer.user.uid);
  const res = yield call(FbFetchListWaiting,uid);
  yield put(cartActions.FBfetchListWaitingSuccess(res.data().listWaiting));
  yield put(uiActions.hideLoading());
 
}
function* addListDaNhanSaga( {payload} ){
  const uid = yield select(state => state.userReducer.user.uid);
  const {productDanhan} = payload;
  const res = yield call(FbFetchListDaNhan,uid);
  const newList = [productDanhan].concat(res.data().listDaNhan);
  yield call(FbSetListDaNhan,newList,uid);
  yield put(cartActions.FBaddListDaNhanSuccess(productDanhan));
  const waiting = yield call(FbFetchListWaiting,uid);
  const listWaiting = waiting.data().listWaiting;
  const index = listWaiting.findIndex(item => item.cartItem.id === productDanhan.cartItem.id);
  
  const newListwaiting= [...listWaiting.slice(0,index),...listWaiting.slice(index + 1)];
  yield call(FbSetListWaiting,newListwaiting,uid);
  yield put(cartActions.FBfetchListWaitingSuccess(newListwaiting));

}
function* fetchListDaNhanSaga(){
 // console.log('success');
  const uid = yield select(state => state.userReducer.user.uid);
  const res = yield call(FbFetchListDaNhan,uid);
  yield put(cartActions.FBfetListDaNhanSuccess(res.data().listDaNhan));

}
function* addListCancelSaga({payload}){
  const uid = yield select(state => state.userReducer.user.uid);
  const {productCancel} = payload;
  const res = yield call(FbFetchListCancel,uid);
  const newList = [productCancel].concat(res.data().listCancel);
  yield call(FbAddListCancel,newList,uid);
  yield put(cartActions.FBaddLisrCancelSuccess(productCancel));
  const waiting = yield call(FbFetchListWaiting,uid);
  const listWaiting = waiting.data().listWaiting;
  const index = listWaiting.findIndex(item => item.cartItem.id === productCancel.cartItem.id);
  
  const newListwaiting= [...listWaiting.slice(0,index),...listWaiting.slice(index + 1)];
  yield call(FbSetListWaiting,newListwaiting,uid);
  yield put(cartActions.FBfetchListWaitingSuccess(newListwaiting));

}
function* fetchListCancelSaga(){
  // console.log('success');
  const uid = yield select(state => state.userReducer.user.uid);
  const res = yield call(FbFetchListCancel,uid);
  yield put(cartActions.FBfetchListCancelSuccess(res.data().listCancel));
}
function* deleteProductCancelSaga({payload}){
  const  { productCancel} = payload;
  const uid = yield select(state => state.userReducer.user.uid);
  const cancel = yield call(FbFetchListCancel,uid);
  const listCancel = cancel.data().listCancel;
  const index = listCancel.findIndex(item => item.cartItem.id === productCancel.cartItem.id);
  const newListCancel = [...listCancel.slice(0,index),...listCancel.slice(index+1)];
  
  yield call(FbAddListCancel,newListCancel,uid);
  yield put(cartActions.FBfetchListCancelSuccess(newListCancel));
  const waiting = yield call(FbFetchListWaiting,uid);
  const listWaiting = waiting.data().listWaiting;
  const newListWaiting = [productCancel].concat(listWaiting);
  yield call(FbSetListWaiting,newListWaiting,uid);
  yield put(cartActions.FBfetchListWaitingSuccess(newListWaiting));
}
function* addListCommentSaga( {payload} ){
  const id = yield select(state =>state.products.currentProduct.id);
 const {commentItem} = payload;
 const comment = yield call(FBfetchListComment,id);
 const listComment = comment.data().listComment;
 const newListComment = [commentItem].concat(listComment);
 
 yield call(FbAddListComment,newListComment,id);
 yield put(addListCommentSuccess(commentItem));
}
function* fetchListComentSaga({payload}){
  
   const {id} = payload;
  console.log(id);
  const res = yield call(FBfetchListComment,id);
  const listComment = res.data().listComment;
  yield put (fetchListCommentSuccess(listComment));
}
function* fetchListNoiBatSaga() {
 
  const res = yield call(FBfetchListNoiBat);
  const listNoiBat = res.docs;
  yield put(productsActions.fetchListNoiBatSuccess(listNoiBat));
}
function* fetchListSaleSaga(){
  const res = yield call(FBfetchListSale);
  const listSale = res.docs;
  yield put(productsActions.fetchListSaleSuccess(listSale));
}
function* rootSaga() {
   yield takeLatest(TypesProducts.FETCH_LIST,fetchListSaga);
   yield takeLatest(TypesProducts.ADD_PRODUCT,addProductSaga);
   yield takeLatest(TypesProducts.FETCH_PRODUCT,fetchProductSaga);
   yield takeLatest(cartTypes.FETCH_CART,fetchCartSaga);
   yield takeEvery(cartTypes.ADD_CART,addCartSaga);
   yield takeLatest(cartTypes.UPDATE_CART,updateCartSaga);
   yield takeLatest(cartTypes.DELETE_CART,deleteCartSaga);
   yield takeLatest(TypesProducts.FETCH_TYPE_PRODUCT,fetchTypeProductSaga);
   yield takeLatest(cartTypes.FETCH_LIST_CHECKOUT,fetchListCheckOutSaga);
   yield takeLatest(cartTypes.SET_LIST_CHECKOUT,setListCheckOutSaga);
   yield takeLatest(cartTypes.SET_LIST_WAITING,setListWaitingSaga);
   yield takeLatest(cartTypes.FETCH_LIST_WAITING,fetchListWaitingSaga);
   yield takeLatest(cartTypes.ADD_LIST_DANHAN,addListDaNhanSaga);
   yield takeLatest(cartTypes.FETCH_LIST_DANHAN,fetchListDaNhanSaga);
   yield takeLatest(cartTypes.ADD_LIST_CANCEL,addListCancelSaga);
   yield takeLatest(cartTypes.FETCH_LIST_CANCEL,fetchListCancelSaga);
   yield takeLatest(cartTypes.DELETE_PRODUCT_CANCEL,deleteProductCancelSaga);
   yield takeLatest(TypeCmt.ADD_LIST_COMMENT,addListCommentSaga);
   yield takeLatest(TypeCmt.FETCH_LIST_COMMENT,fetchListComentSaga);
   yield takeLatest(TypesProducts.FETCH_LIST_NOIBAT,fetchListNoiBatSaga);
   yield takeLatest(TypesProducts.FETCH_LIST_SALE,fetchListSaleSaga)
}
export default rootSaga;