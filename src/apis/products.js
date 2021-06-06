import firebase from 'firebase';
import qs from 'query-string';
import axiosService from './../common/api/axiosService';
import { API_ENDPOINT } from './../constant/index';
const url = '/thanhShop'
const CART_URL = 'https://603636dac3d42700172e6655.mockapi.io/thanh/cart';

export const getList = (params = {}) => {
  let queryParam ='';
  if(Object.keys(params).length > 0){
    queryParam=`?${qs.stringify(params)}`
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParam}`);
}
export const addList = (data) =>{
  return axiosService.post(`${API_ENDPOINT}${url}`,data)
}
export const updateTask = (data,taskId) =>{
  return axiosService.put(`${API_ENDPOINT}${url}/${taskId}`,data)
}
export const deleteTask = (taskId) =>{
  return axiosService.delete(`${API_ENDPOINT}${url}/${taskId}`)
}
export const fetchProduct = (id) =>{
  return axiosService.get(`${API_ENDPOINT}${url}/${id}`);
}
export const fetchCart = () => {
  return axiosService.get(CART_URL);
}
export const addCart = (data) => {
  return axiosService.post(`${CART_URL}`,data);
}
export const addSameCart = (data,id) => {
  return axiosService.put(`${CART_URL}/${id}`,data)

}
export const deleteCart = (id) =>{
  return axiosService.delete(`${CART_URL}/${id}`)
}



export const FBfetchListProduct = (sortBy,desc,minPrice,maxPrice,currentIndex) => {
 if(minPrice && maxPrice){
  if(desc == false)
  {
    return firebase.firestore().collection('products').where('price','>=',minPrice).where('price','<=',maxPrice).orderBy(sortBy).startAfter(currentIndex||0).limit(2).get();
  }
  else return firebase.firestore().collection('products').where('price','>=',minPrice).where('price','<=',maxPrice).orderBy(sortBy,'desc').startAfter(currentIndex||0).limit(2).get();
 }
 else {
  if(desc == false)
  {
    return firebase.firestore().collection('products').where('price','>=',0).orderBy(sortBy).startAfter(currentIndex||0).limit(2).get();
  }
  else return firebase.firestore().collection('products').orderBy(sortBy,'desc').startAfter(currentIndex||0).limit(2).get();
 }
}
export const FBfetchProduct = (id) => {
  return firebase.firestore().collection('products').doc(`${id}`).get();
}
export const FBaddToCart = (data,uid) => {
  
  return firebase.firestore().collection('carts').doc(`${uid}`).update({
    listCart: firebase.firestore.FieldValue.arrayUnion(data)
  })
}

export const FBaddSameToCart = (data,uid,idProduct) => {
  return firebase.firestore().collection('carts').doc(`${uid}`).collection(`${uid}`).doc(`${idProduct}`).set(data);
}


export const FBfetchCart = (uid) => {
  return firebase.firestore().collection('carts').doc(`${uid}`).get();
}

export const FBUpdateListCart = (data,uid) => {
  
  return firebase.firestore().collection('carts').doc(`${uid}`).update({
    listCart: [...data]
  })
}

export const FBfetchTypeProduct = (typeProduct,sortBy,desc) => {

  if(desc == false)
  {
    return firebase.firestore().collection('products').where('type','==',typeProduct).get();
  }
  else return firebase.firestore().collection('products').where('type','==',typeProduct).get();
}

export const  FbSetListCheckOut = (data,uid) => {
  return firebase.firestore().collection('checkOut').doc(`${uid}`).update({
    listCheckOut:[...data]
  })
}
export const FbFetchListCheckOut = (uid) => {
  return firebase.firestore().collection('checkOut').doc(`${uid}`).get();
}
export const  FbSetListWaiting = (data,uid) => {
  return firebase.firestore().collection('waiting').doc(`${uid}`).update({
    listWaiting:[...data]
  })
}
export const FbFetchListWaiting = (uid) => {
  return firebase.firestore().collection('waiting').doc(`${uid}`).get();
}
export const  FbSetListDaNhan = (data,uid) => {
  return firebase.firestore().collection('daNhan').doc(`${uid}`).update({
    listDaNhan:[...data]
  })
}
export const FbFetchListDaNhan = (uid) => {
  return firebase.firestore().collection('daNhan').doc(`${uid}`).get();
}

export const FbAddListCancel = (data,uid) => {
  return firebase.firestore().collection('cancel').doc(`${uid}`).update({
    listCancel:[...data]
  })
}
export const FbFetchListCancel = (uid) => {
  return firebase.firestore().collection('cancel').doc(`${uid}`).get();
}

export const FbAddListComment = (data,idProduct) => {
  return firebase.firestore().collection('comments').doc(`${idProduct}`).update({
    listComment:[...data]
  })
}
export const FBfetchListComment = (idProduct) => {
  return firebase.firestore().collection('comments').doc(idProduct).get();
};

export const FBfetchListNoiBat = () => {
  return firebase.firestore().collection('products').orderBy('starTb','desc').limit(10).get();

}
export const FBfetchListSale = () => {
  return firebase.firestore().collection('products').orderBy('sale','desc').limit(10).get();

}