import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import ProductsForm from './../../components/ProductsForm/ProductsForm'
import { useDispatch } from 'react-redux';
import * as modalActions from './../../actions/modal'
import firebase from 'firebase'
import * as productsActions from './../../actions/products'
Adminpage.propTypes = {
  
};

function Adminpage(props) {
  const [listA,setListA] = useState([])
    const list= ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-aFjfFjPvnCIW0CMTtYZh6PWwr6Xwi7c0g&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTgcBUWTC4PA2T-XMyIu4yzWFDQgymhn2Pw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZRsj1jCcvp7yZVURuMJGMaWQQW3yM4aX-Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-AsU7X8qndyHv220bx3axk7k6blUMOZuYQ&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoPLLTUpMr4K5RQW77jE1Xl8R5usp5HbOoQ&usqp=CAU'];
const xoaA= (()=> {

})
const themnhieu = () => {
 
  for(let i=0;i<20;i++){
    var listImg = [].concat(list[i]).concat(list[i+1]||list[i-1]).concat(list[i+3]||list[i-3]).concat(list[i+2]||list[i-2]);
    const newProduct = {
     mainImg:list[i],
     listImg,
     sale:i+10,
     name:`Adidas ${i}`,
     price:parseInt(`401${i}4${i}`),
     description:`hi`,
     type:'Adidas',
     listComment:[],
     realPrice:price-price*sale/100
    }
     firebase.firestore().collection('products').add(
       newProduct
     ).then(e => {dispatch(productsActions.addproduct(name,description,price,mainImg,listImg))
       firebase.firestore().collection('comments').doc(e.id).set({
         listComment:[]
       })
     })
     .catch(err => console.log(new Error('Loi')))
    
   }
   
  }
  const { price,description ,mainImg,name,image1,image2,image3,image4,sale,type} = props;
 
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(modalActions.showModal());
      dispatch(modalActions.changeModalTitle("Thêm sản phẩm"));
      dispatch(modalActions.changeModalContent(<ProductsForm />));
  }
  return (
    <div>
        <Grid container>
        <Grid item md={12} xs={12} sm={12} >
          <Button
            onClick={() => handleClick()}
            variant='contained'color='primary'>
            Thêm sản phẩm
          </Button>
          {/* <button onClick={() => themnhieu()}>Thêm nhiều sp</button>
          <button onCLick ={() => xoaA()}>Xóa</button> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Adminpage;