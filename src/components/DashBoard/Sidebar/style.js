import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
  },
  drawerPaper: {
    width: 240,
    height: "100vh",
    position: "fixed",
    top: 0,
    zIndex: 100000000000000000000,
    color: "white",
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "red",
  },
  textLink: {
    color: "white",
  },
  icon: {
    color: "white",
  },
  active: {
    backgroundColor: "gray",
  },
  hover: {
    "&:hover": {
      backgroundColor: "lightGray",
    },
  },

  list: {
    marginTop: 0,
  },
}));
