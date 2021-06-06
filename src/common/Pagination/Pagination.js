
import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentIndex } from '../../actions/pagination';
import { fetList } from '../../actions/products';


function Pagination(props) {
 
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
       dispatch(setCurrentIndex(0));
    }
  },[])

  const onClickPrevious =() => {
    console.log('pre');
    dispatch(setCurrentIndex(-2));
    dispatch(fetList('price',false));
    }
    const onClickNext = () => {
     
      dispatch(fetList('price',false));
    
    }
  return (
    <div > 
      <Button onClick = {() => onClickPrevious()} variant = 'outlined' color = 'primary'>Previous</Button>
      <Button onClick = {() => onClickNext()} variant = 'outlined' color = 'primary'>Next</Button>
    </div>
  );
}

export default Pagination;