import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sectionHeader: {
    marginBottom: "50px",
    textAlign: "center",
    "& h3": {
      fontSize: "2.5rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
    },
    "& h4": {
      fontSize: "1rem",
      color: "#5093e5",
      fontWeight: 400,
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
}));
