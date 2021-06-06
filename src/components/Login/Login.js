import React, { useState } from "react";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ToastFunc } from "../../common/ToasFunc";
function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const uiConfig = {
    signInFlow: "rederect",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],

    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  const loginfaceBook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("business_management");
    firebase.auth().languageCode = "it";
    provider.setCustomParameters({
      display: "popup",
    });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
      })
      .catch((error) => {
        ToastFunc(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((e) => {
        history.push("/");
      })
      .catch(function (error) {
        ToastFunc(error);
      });
  };
  const onChangeEemail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <div className={classes.content}>
                <h3>Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={onChangeEemail}
                  />
                  <TextField
                    fullWidth
                    label="PassWord"
                    type="password"
                    value={pass}
                    onChange={onChangePass}
                  />
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Đăng nhập
                  </Button>
                </form>
                <Link to="/signup">Bạn chưa có tài khoản ?</Link>
              </div>
            </CardContent>
          </Card>
          <div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
            <Button
              onClick={() => loginfaceBook()}
              variant="contained"
              color="primary"
            >
              Login Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
