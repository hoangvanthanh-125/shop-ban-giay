import { makeStyles } from "@material-ui/core";

export default makeStyles (theme => ({
  column:{
   
  },
  nameproduct:{
     display:'flex',
     flexDirection:'column'
  },
  img:{
    [theme.breakpoints.down('xs')]:{
      width:40,
      height:40
    },
    [theme.breakpoints.up('sm')]:{
         width:100,
         height:100
    }
  },
  button:{
     width:30,
     height:20,
    [theme.breakpoints.down('xs')]:{
      fontSize:10,
      width:20,
      height:20
    },
    
    border:'none',
    background:'black',
    color:'white'
    
  },
  columnprice:{
    display:'flex',
    
  },
  buttonQuantity:{
    [theme.breakpoints.down('xs')]:{
      fontSize:10,
      width:30,
      height:20
    },
    border:'none',
  background:'white',
  color:"black",
  
    
  },
 ro:{
   marginTop:100,
   width:'100%',
   
  
   
 }
  
}))