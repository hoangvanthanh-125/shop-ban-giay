import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  column: {},
  nameproduct: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
    },
    [theme.breakpoints.up("md")]: {
      width: 100,
      height: 100,
    },
  },
  button: {
    width: 30,
    height: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 20,
      height: 20,
    },

    border: "none",
    background: "red",
    color: "white",
  },
  columnprice: {
    display: "flex",
    // [theme.breakpoints.down('xs')]:{
    //   flexDirection:'column'
    // }
  },
  buttonQuantity: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 30,
      height: 20,
    },
    border: "none",
    background: "blue",
    color: "white",
  },
  wrapNameImg: {
    display: "flex",
    flexDirection: "column",
  },
  tuongTrungMau: {
    width: 30,
    height: 30,
    borderRadius: 30,
    border: "2px solid violet",
  },
  wrapAllNameSizeColor: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  colorSize: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  mau: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "x-small",
    },
  },
}));
