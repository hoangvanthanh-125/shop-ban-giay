import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  sort: {
    marginBottom: 10,
  },
  control: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  filter: {
    display: "flex",
  },
  wrapProduct: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
}));
