import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import firebase from "firebase";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchListCommentSuccess } from "../../actions/comments";
import { ToastFuncSuccess } from "../../common/ToasFunc";
import "./commentItem.css";
import useStyles from "./style";
const keyRandom = () => {
  return Math.random() * 100000000;
};
function CommentItem(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { email, text, timeCmt, quantityStar, productId } =
    props.item;
  let listStar = [];
  if (quantityStar > 0) {
    for (let i = 0; i < quantityStar; i++) {
      listStar.push(
        <StarIcon key={keyRandom()} style={{ color: "#fed330" }} />
      );
    }
    for (let i = quantityStar; i < 5; i++) {
      listStar.push(
        <StarBorderIcon key={keyRandom()} style={{ color: "#fed330" }} />
      );
    }
  }
  const handleDeleteCmt = () => {
    firebase
      .firestore()
      .collection("comments")
      .doc(productId)
      .update({
        listComment: firebase.firestore.FieldValue.arrayRemove(props.item),
      })
      .then((snap) =>
        firebase.firestore().collection("comments").doc(productId).get()
      )
      .then((res) => dispatch(fetchListCommentSuccess(res.data().listComment)))
      .then(() => ToastFuncSuccess("Xóa thành công"));
  };
  return (
    <div className={classes.cmtItem}>
      <span className={classes.email}>{email}</span>
      {quantityStar > 0 ? (
        <div style={{ marginBottom: "5px" }}>{listStar}</div>
      ) : (
        ""
      )}
      <h3 className={classes.tetxt}>{text}</h3>
      <h5 className={classes.time}>{timeCmt}</h5>
      {email === firebase.auth().currentUser?.email ? (
        <span onClick={() => handleDeleteCmt()} className={classes.deleteCmt}>
          <DeleteIcon />
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default CommentItem;
