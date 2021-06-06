import { makeStyles } from "@material-ui/core";

export default  makeStyles(theme =>({
  body:{
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    zIndex:99,
    background:"white",
    
  },
  image:{
    position:"absolute",
    top:'27%',
    left:0,
    right:0,
    marginLeft:'auto',
    marginRight:'auto',
  }
}))