import * as typeCmt from  './../constant/comments'
export const addListComment = (commentItem) => {
  return {
    type:typeCmt.ADD_LIST_COMMENT,
    payload:{
      commentItem
    }
  }
}
export const addListCommentSuccess = (commentItem) => {
  return {
    type:typeCmt.ADD_LIST_COMMENT_SUCCESS,
    payload:{
      commentItem
    }
  }
}
export const fetchListComment = (id) => ({
 type:typeCmt.FETCH_LIST_COMMENT,
 payload:{
   id
 }
})
export const fetchListCommentSuccess = (listComment) => ({
  type:typeCmt.FETCH_LIST_COMMENT_SUCCESS,
  payload:{
    listComment
  }
 })
 