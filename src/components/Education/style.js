import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  eduSection: {
    padding: "100px 0",
    height: "100vh",
    "& .container": {
      padding: 0,
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
  eduGrid: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "10px",
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  eduSlider: {
    marginBottom: "100px",
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    "& .slick-list": {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    "& .slick-track": {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    "& .slick-slide": {
      border: "1px solid #5093e5",
      borderRadius: "10px",
      marginRight: "10px",
    },
    "& .slick-slide > div": {
      display: "flex",
      justifyContent: "center",
    },
  },
  eduItem: {
    padding: "10px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      display: "inline-block",
    },
  },
  imageSide: {
    position: "relative",
    width: "100%",
    flex: "0 0 15%",
    maxWidth: "15%",
    [theme.breakpoints.down("sm")]: {
      flex: "unset",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "unset",
      width: "100%",
      textAlign: "center",
    },
    " & img": {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "100%",
        width: "40%",
      },
    },
  },
  detailSide: {
    position: "relative",
    width: "100%",
    flex: "0 0 75%",
    maxWidth: "75%",
    [theme.breakpoints.down("sm")]: {
      flex: "unset",
      maxWidth: "unset",
    },
  },
  titleWrapper: {
    paddingLeft: "15px",
    height: "5rem",
    display: "flex",
    alignItems: "center",
    textAlign: "left",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: 0,
      textAlign: "center",
      height: "unset",
    },
  },
  title: {
    "& h2": {
      marginBottom: "5px",
    },
  },
  yearField: {
    fontSize: "1.1em",
    marginBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",
    },
    "& span": {
      color: "#5093e5",
    },
  },
  institute: {
    color: "#5093e5",
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  company: {
    color: "#5093e5",
    fontSize: "1em",
  },
  location: {
    color: "#ffffff",
    fontSize: "0.8em",
  },
}));
