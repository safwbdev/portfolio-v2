import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  loadScreen: {
    backgroundColor: "#101010",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& h2": {
      marginLeft: "0.5em",
    },
  },
}));
