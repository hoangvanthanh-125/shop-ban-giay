import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
  columProduct: {
    width: "20%",
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  huy: {
    minHeight: "100vh",
  },
}));
