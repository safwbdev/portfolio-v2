import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  futureContainer: {
    height: "100vh",
    padding: "100px 0",
    "& .container": {
      backgroundColor: "#5093e5",
      padding: "100px 0",
      borderRadius: "8px",
    },
    "& .subheading ": {
      color: "#101010",
    },
    "& ul": {
      marginLeft: "2em",
    },
    "& ul li": {
      lineHeight: "2em",
      display: "inline-block",
      listStyle: "none",
      fontSize: "1.2em",
    },
    "& ul li:not(:last-child):after": {
      content: `","`,
      marginRight: "0.2em",
    },
  },
  futureGrid: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: "30px",
    },
  },
  futureItem: {
    textAlign: "center",
  },
}));
