import React from 'react';
import { useSelector } from 'react-redux';
import loading from './../../acsset/image/Loading.gif'
import useStyles from './style'
function Loading(props) {
  const classes = useStyles();
  const showLoading = useSelector(state => state.ui.showLoading);
  return (
    showLoading ?
     <div className={classes.body}>
      <img className={classes.image} src = {loading} alt="Loading" />
    </div> : ''
  );
}

export default Loading;