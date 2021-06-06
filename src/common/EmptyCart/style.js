import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  emtyCart:{
  
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  emtyCartImg:{
  
    width:450,
    height:400,
    [theme.breakpoints.down('xs')]:{
      width:'100%',
      height:370
     },
  },
  wrapper:{
    background:'white',
    minHeight:'100vh'
  }
}))