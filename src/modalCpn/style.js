import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  modal: {
    overflow: "auto",
    height: "auto",
    display: "block",
    position: "relative",
    width: "600px",
    maxHeight: "80%",
    maxWidth: "80%",
    backgroundColor: "white",
    outline: "none",
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    boxShadow: theme.shadows[5],
    paddingBottom: 20,
  },
  header: {
    zIndex: 99,
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    padding: 9,
    color: "white",
  },
  content: {
    padding: 15,
  },
  wrap: {
    position: "relative",
  },
  icon: {
    cursor: "pointer",
    fontSize: "large",
  },
  title: {
    fontWeight: 700,
  },
}));
