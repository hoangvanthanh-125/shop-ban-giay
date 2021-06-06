import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addListComment, fetchListComment } from "../../actions/comments";
import CommentItem from "../CommentItem/CommentItem";
import { AsyncUser } from "./../../common/AsyncUser";
import "./Comments.css";
import useStyles from "./style";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Comments.css";
const keyRandom = () => {
  return Math.random() * 100000000;
};
function Comments(props) {
  const classes = useStyles();
  const history = useHistory();
  const id = useSelector((state) => state.products.currentProduct.id);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const listComment = useSelector((state) => state.products.listComment);
  const [quantityStar, setQuantityState] = useState(0);
  let totalStar = 0;
  let listQuantityStar = [0, 0, 0, 0, 0];
  let starTb = 0;
  const [listStar, setListStar] = useState([
    <StarBorderIcon
      key={keyRandom()}
      className={classes.starColor}
      onClick={() => clickChangeStar(0)}
    />,
    <StarBorderIcon
      key={keyRandom()}
      className={classes.starColor}
      onClick={() => clickChangeStar(1)}
    />,
    <StarBorderIcon
      key={keyRandom()}
      className={classes.starColor}
      onClick={() => clickChangeStar(2)}
    />,
    <StarBorderIcon
      key={keyRandom()}
      className={classes.starColor}
      onClick={() => clickChangeStar(3)}
    />,
    <StarBorderIcon
      key={keyRandom()}
      className={classes.starColor}
      onClick={() => clickChangeStar(4)}
    />,
  ]);

  listComment.forEach((item) => {
    for (let i = 1; i <= 5; i++) {
      if (item.quantityStar === i) {
        listQuantityStar[i - 1]++;
        totalStar++;
      }
    }
  });
  if (totalStar !== 0) {
    starTb =
      (listQuantityStar[0] * 1 +
        listQuantityStar[1] * 2 +
        listQuantityStar[2] * 3 +
        listQuantityStar[3] * 4 +
        listQuantityStar[4] * 5) /
      totalStar;
    starTb = starTb.toFixed(1);
  }
  let listStarTb = [];
  for (let i = 1; i <= Math.round(starTb); i++) {
    listStarTb.push(
      <StarIcon style={{ color: "#fed330" }} key={keyRandom()} />
    );
  }
  for (let i = 1; i <= 5 - Math.round(starTb); i++) {
    listStarTb.push(
      <StarBorderIcon style={{ color: "#fed330" }} key={keyRandom()} />
    );
  }
  const renderListTbStar = () => {
    let xhtml = null;
    if (totalStar > 0) {
      xhtml = listQuantityStar.map((item, index) => (
        <div key={index} className="wrapAllStarCss">
          <div className="wraplistStar" key={index}>
            <div className="wrapthutuStar">
              <span>{index + 1}</span>
              <StarIcon style={{ color: "#fed330" }} />
            </div>
            <div>
              {" "}
              <LinearProgress
                className="progressStar"
                variant="determinate"
                value={(item / totalStar) * 100}
              />
            </div>
          </div>
          <div className="quantityDanhgia">
            <span className="sophantram">
              {((item / totalStar) * 100).toFixed(2)} %
            </span>
            <span className="sodanhgia">{item} đánh giá</span>
          </div>
        </div>
      ));
    }
    return xhtml;
  };

  const clickChangeStar = (index) => {
    const newList = [];
    for (let i = 0; i <= index; i++) {
      newList.push(
        <StarIcon
          style={{ color: "#fed330" }}
          key={keyRandom()}
          className={classes.starColor}
          onClick={() => clickChangeStar(i)}
        />
      );
    }
    for (let i = index + 1; i < 5; i++) {
      newList.push(
        <StarBorderIcon
          style={{ color: "#fed330" }}
          key={keyRandom()}
          className={classes.starColor}
          onClick={() => clickChangeStar(i)}
        />
      );
    }
    setListStar([...newList]);
    setQuantityState(index + 1);
  };

  const renderListComment = () => {
    let xhtml = null;
    if (listComment?.length > 0) {
      xhtml = listComment.map((item) => (
        <CommentItem item={item} key={item.timeAt} />
      ));
    }
    return xhtml;
  };
  useEffect(() => {
    dispatch(fetchListComment(id));
  }, [id]);
  const changeText = (e) => {
    setText(e.target.value);
  };
  const onClickText = (e) => {
    if (e) e.preventDefault();
    if (firebase.auth().currentUser) {
      setText("");
      AsyncUser().then((e) => {
        if (text) {
          const monthNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          const dateObj = new Date();
          const month = monthNames[dateObj.getMonth()];
          const day = String(dateObj.getDate()).padStart(2, "0");
          const year = dateObj.getFullYear();
          const output = day + "\\" + month + "\\" + year;
          dispatch(
            addListComment({
              email: firebase.auth().currentUser.email,
              text: text,
              timeAt: Date.now(),
              timeCmt: output,
              photoURL: firebase.auth().currentUser.photoURL,
              commentId: `${id}-${Date.now()}`,
              quantityStar,
              productId: id,
            })
          );
          if (quantityStar == 0) {
            firebase.firestore().collection("products").doc(id).update({
              starTb: starTb,
            });
          } else
            firebase
              .firestore()
              .collection("products")
              .doc(id)
              .update({
                starTb: (starTb * totalStar + quantityStar) / (totalStar + 1),
              });
        }
      });
    } else {
      history.push("/login");
    }
  };
  return (
    <div className={classes.cmt}>
      <h1 className="titleDanhgia">Đánh giá và nhận xét</h1>
      {totalStar > 0 ? (
        <div className="đanhgiatbWrap">
          <div className="danhgiaTitle">
            <h3>Đánh giá trung bình</h3>
            <h4>{starTb}/5</h4>
            <div>{listStarTb}</div>
          </div>
          <div>{renderListTbStar()}</div>
        </div>
      ) : (
        ""
      )}
      <div>{listStar}</div>

      <form onSubmit={(e) => onClickText(e)}>
        <input
          className="inputCommentsCss"
          onChange={changeText}
          value={text}
          type="text"
        />
        <button
          type="submit"
          className="buttonSubmitComnent"
          onClick={() => onClickText()}
        >
          Đăng
        </button>
      </form>
      {renderListComment()}
    </div>
  );
}

export default Comments;
