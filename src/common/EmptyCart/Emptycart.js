import { Grid } from '@material-ui/core';
import React from 'react';
import useStyle from './style'
function Emptycart(props) {
  const classes = useStyle();
  return (
    <Grid container className={classes.wrapper}>  
      <Grid className={classes.emtyCart} item md={12} sm={12} xs={12}>
      <img className={classes.emtyCartImg} src ='https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png' alt='Loading' />
      </Grid>
     
    </Grid>
  );
}

export default Emptycart;