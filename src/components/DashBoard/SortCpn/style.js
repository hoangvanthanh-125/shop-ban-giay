import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  select: {
    height: 35,
    borderRadius: 5,
    border: "1px gray solid",
    cursor: "pointer",
  },
  option: {
    padding: "10px",
    cursor: "pointer",
  },
  active: {
    background: "gray",
  },
}));
