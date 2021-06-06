import  * as TypesProducts from './../constant/products';

export const fetList = (sortby,desc,minPrice,maxPrice) =>{
  return {
    type: TypesProducts.FETCH_LIST,
    payload:{
      sortby,
      desc,
      minPrice,
      maxPrice
    }
  }
}

export const fetchListSuccess =(data) =>({
  type:TypesProducts.FETCH_LIST_SUCCESS,
  payload:{
    data
  }
})

export const fetListFail = (err) =>({
  type:TypesProducts.FETCH_LIST_FAIL,
  payload:{
    err
  }
})

export const addproduct = (name,description,price,mainImg,listImg) => {
  return {
    type:TypesProducts.ADD_PRODUCT,
    payload:{
      name,
      description,
      price,
      listImg,
      mainImg
    }
  }
}
export const addProductFail = (error) => {
  return {
    type:TypesProducts.ADD_PRODUCT_FAIL,
    payload:{
     error
    }
  }
}
export const addProductSuccess = (product) => {
  return {
    type:TypesProducts.ADD_PRODUCT_SUCCESS,
    payload:{
      product
    }
  }
}

export const fetchProduct = (id) => {
  return {
    type:TypesProducts.FETCH_PRODUCT,
    payload:{
      id
    }
  }
}
export const fetchProductSuccess = (currProduct) =>{
  return {
    type:TypesProducts.FETCH_PRODUCT_SUCCESS,
    payload:{
      currProduct
    }
  }
}

export const fetchTypePoduct = (typeProduct,sortBy,desc) => ({
  type:TypesProducts.FETCH_TYPE_PRODUCT,
  payload:{
    typeProduct,
    sortBy,
    desc
  }
})
export const fetchTypeProductSuccess = (listTypeProduct) => ({
  type:TypesProducts.FETCH_TYPE_PRODUCT_SUCCESS,
  payload:{
    listTypeProduct
  }
})

export const fetchListNoiBat = () => ({
  type:TypesProducts.FETCH_LIST_NOIBAT,
})
export const fetchListNoiBatSuccess = (listNoiBat) => ({
  type:TypesProducts.FETCH_LIST_NOIBAT_SUCCESS,
  payload:{
    listNoiBat
  }
})

export const fetchListSale = () => ({
  type:TypesProducts.FETCH_LIST_SALE
})
export const fetchListSaleSuccess = (listSale) => ({
  type:TypesProducts.FETCH_LIST_SALE_SUCCESS,
  payload:{
    listSale
  }
})