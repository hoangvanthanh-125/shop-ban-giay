export const setMinMaxPrice = (min,max) => ({
  type:'SET_MIN_MAX_PRICE',
  payload:{
    min,max
  }
})
export const setvalueSort = (sortValue)  => ({
  type:'SET_VALUE_SORT',
  payload:{
    sortValue
  }
})