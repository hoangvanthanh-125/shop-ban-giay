import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    marginTop: 8,
    marginLeft: 20,
    width: 200,
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      width: 180,
    },

    border: "1px solid lightGrey",
    height: 270,
    "&:hover": {
      cursor: "pointer",
      border: "solid 1px green",
      opacity: 0.8,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 29,
    },
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    height: "80%",
    maxHeight: "80%",
    minHeight: "80%",
  },
  background: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    width: "100%",
    height: "70%",
    backgroundColor: "red",
  },
  CardActions: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    bottom: 15,
  },
  icon: {
    color: "red",
    fontSize: 30,
  },
  imageIcon: {
    width: "10%",
    height: "50%",
    border: "1px solid lightGray",
    marginRight: -30,
  },
  activeImage: {
    border: "2px solid green",
  },
  iconLeft: {
    display: "none",
    position: "absolute",
    left: "-5%",
    zIndex: 10,
    top: "30%",
  },
  iconRight: {
    display: "none",
    position: "absolute",
    right: "-5%",
    zIndex: 10,
    top: "30%",
  },
  cardContent: {
    position: "relative",
    pading: 0,
    height: "80%",
    maxHeight: "80%",
  },
  iconL: {
    fontSize: 60,
    color: "gray",
  },
  iconR: {
    fontSize: 60,
    color: "gray",
  },
  show: {
    display: "block",
  },
  link: {
    textDecoration: "none",
    padding: 0,
  },
  nameproduct: {
    color: "black",
    fontWeight: 500,

    fontSize: "small",
  },
  priceCl: {
    color: "red",
  },
  sale: {
    width: "40px",
    height: "40px",
    borderRadius: "30px",
    backgroundColor: "red",
    position: "absolute",
    top: "2px",
    right: 2,
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
      fontSize: "x-small",
    },
  },
  salePrice: {
    color: "lightGrey",
    fontSize: "11px",
    textDecoration: "line-through",
  },
  price: {
    color: "red",
    textDecoration: "none !impotant",
    forntSize: "15px",
    marginLeft: 2,
  },
  donvi: {
    fontSize: 10,
    textDecoration: "underline",
  },
  wrapPrice: {
    display: "flex",
    flexDirection: "column",
  },
}));
