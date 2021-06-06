import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    marginTop: 15,
  },
  allImage: {
    height: "100%",
  },
  intro: {
    marginTop: 20,
    marginLeft: 25,
    border: " dashed 1px green",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 5,
    },
  },

  action: {
    textAlign: "center",
    marginTop: 0,
    [theme.breakpoints.up("md")]: {
      height: 400,
      maxHeight: "100%",
      minHeight: "100%",
    },
  },
  imageIcon: {
    border: "1px solid lightGray",
    marginRight: 10,
    [theme.breakpoints.up("md")]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: 50,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 70,
      height: 70,
    },
  },
  button: {
    marginRight: 10,
    marginTop: 10,
  },
  mainImg: {
    [theme.breakpoints.up("md")]: {
      width: 500,
      maxWidth: 500,
      minWidth: 500,
      height: 480,
      maxHeight: "100%",
      minHeight: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 400,
      maxHeight: "100%",
      minHeight: "100%",
    },
  },
  active: {
    border: "solid 2px green",
  },
  imgsize: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  priceCl: {
    color: "red",
    fontSize: 40,
  },
  salePrice: {
    color: "lightGrey",
    fontSize: "20px",
    textDecoration: "line-through",
  },
  price: {
    color: "red",
    fontSize: 40,
    marginLeft: 5,
  },
  donvi: {
    fontSize: 20,
    textDecoration: "underline",
  },
  columProduct: {
    width: "20%",
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  danggiao: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  icon: {
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
    },
  },
  wrapNameEmail: {
    padding: 20,
    border: "1px solid lightgray",
    borderRadius: 10,
    margin: 20,
    boxShadow: "3px 3px 3px lightgray",
  },
}));
