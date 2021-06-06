import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    marginTop: 15,
    minHeight: "100vh",
  },
  allImage: {
    height: "100%",
  },
  intro: {
    marginTop: 20,
    marginLeft: 25,
    border: "solid 1px lightgray",
    boxShadow: "5px 5px 5px lightgray",
    marginRight: "5px",
    padding: "10px 0",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 5,
      marginRight: 0,
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
    borderRadius: "5px",
    boxShadow: "3px 3px 3px lightgray",
    marginRight: 10,
    [theme.breakpoints.up("md")]: {
      width: 50,
      height: 50,
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
    margin: "auto",
    boxShadow: "3px 3px 3px lightgray",
    borderRadius: 10,
    [theme.breakpoints.up("md")]: {
      width: 590,
      minWidth: 500,
      height: 480,
      maxWidth: "100%",
      minHeight: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 400,
      maxHeight: "100%",
      minHeight: "100%",
    },
  },
  wrapMainImage: {
    display: "flex",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: 590,
      minWidth: 500,
      height: 480,
      maxWidth: "100%",
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
    border: "solid 2px teal",
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
  itemColor: {
    width: 40,
    height: 40,
    borderRadius: 40,
    cursor: "pointer",
  },
  wrapColor: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  activeColor: {
    border: "3px solid violet",

    opacity: 1,
  },
  noActive: {},
  wrapSelectColor: {
    marginBottom: 20,
  },
  IconButton: {
    width: 40,
    height: 40,
    background: "white",
    boxShadow: "3px 3px 3px gray",
    position: "absolute",
    right: "3%",
    top: "45%",
  },
  IconButtonleft: {
    width: 40,
    height: 40,
    background: "white",
    boxShadow: "3px 3px 3px gray",
    position: "absolute",
    left: "3%",
    top: "45%",
  },
}));
