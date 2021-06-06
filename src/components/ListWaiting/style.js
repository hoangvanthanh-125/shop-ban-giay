import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapdonhangdanggiao: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "auto",
  },
  danggiao: {
    minHeight: "100vh",
  },

  columProduct: {
    width: "20%",
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));
