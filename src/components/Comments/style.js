import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cmt: {
    marginLeft: 20,
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  button: {
    outlinel: "none",
    border: "none",
    cursor: "pointer",
    width: 70,
    height: 50,
    background: "black",
    color: "white",
    boxShadow: "3px 3px 3px grey",
  },
  input: {
    border: "1px solid gray",
    width: 250,
    height: 70,
    outline: "none",
    borderRadius: 13,
    marginBottom: 20,
    marginRight: 20,
    boxShadow: "3px 3px 3px gray",
    marginTop: 10,
  },
  starColor: {
    color: "#fed330",
    cursor: "pointer",
  },
}));
