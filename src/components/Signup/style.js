import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  background: {
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1,0,auto",
    textAlign: "center",
    padding: 10,
    minHeight: "100vh",
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  fullWidth: {
    width: "100%",
  },
});
