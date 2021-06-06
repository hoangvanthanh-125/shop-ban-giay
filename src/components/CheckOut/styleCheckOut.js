import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  checkout: {
    minHeight: "100vh",
  },
  listCheckOut: {
    width: "100%",

    wordBreak: "break-all",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    border: "2px gray dashed",
    borderRadius: "8px",
  },
  form: {
    marginLeft: 10,
  },
  totalMoney: {
    fontSize: "25px",
    marginTop: 20,
    marginLeft: 20,
  },
  columProduct: {
    color: "red",
    [theme.breakpoints.down("sm")]: {
      fontSize: "x-small",
    },
  },
}));
