import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  email: {
    color: "blue",
    marginRight: 10,
  },
  cmtItem: {
    wordWrap: "break-word",
    width: "100%",
    maxWidth: "100%",
    border: "1px solid lightgray",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    boxShadow: "2px 2px 2px lightgray",
    position: "relative",
  },
  deleteCmt: {
    position: "absolute",
    top: 12,
    right: 12,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },
  time: {
    color: "Gray",
    fontSize: "small",
  },
  tetxt: {
    fontSize: "small",
  },
}));
