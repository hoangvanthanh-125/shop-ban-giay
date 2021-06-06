import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  cell: {
    color: "red",
    fontSize: 15,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  totalMoney: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  total: {
    fontSize: "35px",
    fontWeight: 600,
  },
  money: {
    color: "red",
    marginLeft: "20px",
    fontSize: "25px",
  },
  dong: {
    color: "red",
    marginLeft: 5,
    textDecoration: "underline",
  },
  wrapper: {
    minHeight: "100vh",
  },
}));
