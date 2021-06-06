import { Button, Card, CardContent, TextField } from "@material-ui/core";
import firebase from "firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastFunc, ToastFuncSuccess } from "../../common/ToasFunc";
import { useStyles } from "./style";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        const uid = res.user.uid;

        firebase.firestore().collection("users").doc(`${uid}`).set({
          name: name,
          email: res.user.email,
          uid: res.user.uid,
        });
        firebase.firestore().collection("carts").doc(`${uid}`).set({
          listCart: [],
        });
        firebase.firestore().collection("checkOut").doc(`${uid}`).set({
          listCheckOut: [],
        });
        firebase.firestore().collection("waiting").doc(`${uid}`).set({
          listWaiting: [],
        });
        firebase.firestore().collection("daNhan").doc(`${uid}`).set({
          listDaNhan: [],
        });
        firebase.firestore().collection("cancel").doc(`${uid}`).set({
          listCancel: [],
        });
        ToastFuncSuccess("Đăng kí thành công");
        history.push("/login");
      })
      .catch(function (error) {
        ToastFunc(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  const onChangeEemail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className={classes.background}>
      <div className={classes.SignUp}>
        <Card>
          <CardContent>
            <div className={classes.content}>
              <h3>Đăng Kí</h3>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={email}
                  onChange={onChangeEemail}
                  fullWidth
                  label="Email"
                />
                <TextField
                  value={name}
                  onChange={onChangeName}
                  fullWidth
                  label="Name"
                  type="text"
                />
                <TextField
                  value={pass}
                  onChange={onChangePass}
                  fullWidth
                  label="PassWord"
                  type="password"
                />
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Đăng kí
                </Button>
                <Link to="/login">Bạn đã có tài khoản ?</Link>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
