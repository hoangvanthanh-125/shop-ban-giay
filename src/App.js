import { CssBaseline, ThemeProvider } from '@material-ui/core';
import firebase from 'firebase';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Switch
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { setUser } from './actions/user';
import UserLayoutRoute from './common/layout/UserLayoutRoute';
import Loading from './common/loading/Loading';
import theme from './common/theme';
import { USER_ROUTE } from './constant/router';
import ModalCpn from './modalCpn/index';

function App() {

  
  const dispath= useDispatch();
  const config = {
    apiKey: "AIzaSyChEZIrMLSKi40OdeaFc2DWjXAbDqW66x0",
    authDomain: "shop-ban-giay.firebaseapp.com",
    databaseURL: "https://shop-ban-giay-default-rtdb.firebaseio.com",
    projectId: "shop-ban-giay",
    storageBucket: "shop-ban-giay.appspot.com",
    messagingSenderId: "215310375705",
    appId: "1:215310375705:web:8c342ae486568c0b420388",
    measurementId: "G-HRN4TS51N4"
  };
  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  const renderUserRoute= () => {
     var xhtml = null;
     xhtml = USER_ROUTE.map(item => {
       return (
         <UserLayoutRoute 
           name={item.name}
           key={item.path}
           Component={item.component} 
           exact={item.exact} 
           path={item.path} 
         />
       )
     })
     return xhtml;
  }
 
  useEffect(() => {
    const name = {
      name:'lol',
     
    }
    
    firebase.firestore().collection('carts').doc('123').collection('123').add(name);
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
     if(user){
       //console.log(user.displayName);

     }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     // console.log(user);
     dispath(setUser(user))
    } else {
      dispath(setUser(null));
    }
  });
 
  
  return (
   
    <Router>
     
    <ThemeProvider theme = {theme} >
      <CssBaseline />
      <ToastContainer
        autoClose={1500} />
      <Loading />
      <div className="App">
       
        <Switch>
          {renderUserRoute()}
        </Switch>
            
      </div>
      <ModalCpn />
    </ThemeProvider>
    </Router>
   
  );
}

export default App;
