import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contactSection: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `linear-gradient(390deg, 
      rgb(168, 86, 201) 0%, 
      rgb(168, 86, 201) 3%,
      rgb(140, 74, 173) 3%, 
      rgb(140, 74, 173) 11%,
      rgb(112, 61, 145) 11%, 
      rgb(112, 61, 145) 20%,
      rgb(85, 49, 118) 20%, 
      rgb(85, 49, 118) 49%,
      rgb(57, 37, 90) 49%, 
      rgb(57, 37, 90) 71%,
      rgb(29, 24, 62) 71%, 
      rgb(29, 24, 62) 72%,
      rgb(1, 12, 34) 72%, 
      rgb(1, 12, 34) 100%),
      linear-gradient(67.5deg, 
      rgb(168, 86, 201) 0%, 
      rgb(168, 86, 201) 3%,
      rgb(140, 74, 173) 3%, 
      rgb(140, 74, 173) 11%,
      rgb(112, 61, 145) 11%, 
      rgb(112, 61, 145) 20%,
      rgb(85, 49, 118) 20%, 
      rgb(85, 49, 118) 49%,
      rgb(57, 37, 90) 49%, 
      rgb(57, 37, 90) 71%,
      rgb(29, 24, 62) 71%, 
      rgb(29, 24, 62) 72%,
      rgb(1, 12, 34) 72%, 
      rgb(1, 12, 34) 100%),
      linear-gradient(112.5deg, 
      rgb(168, 86, 201) 0%, 
      rgb(168, 86, 201) 3%,
      rgb(140, 74, 173) 3%, 
      rgb(140, 74, 173) 11%,
      rgb(112, 61, 145) 11%, 
      rgb(112, 61, 145) 20%,
      rgb(85, 49, 118) 20%, 
      rgb(85, 49, 118) 49%,
      rgb(57, 37, 90) 49%, 
      rgb(57, 37, 90) 71%,
      rgb(29, 24, 62) 71%, 
      rgb(29, 24, 62) 72%,
      rgb(1, 12, 34) 72%, rgb(1, 12, 34) 100%),
      linear-gradient(45deg, 
      rgb(168, 86, 201) 0%, 
      rgb(168, 86, 201) 3%,
      rgb(140, 74, 173) 3%, 
      rgb(140, 74, 173) 11%,
      rgb(112, 61, 145) 11%, 
      rgb(112, 61, 145) 20%,
      rgb(85, 49, 118) 20%, 
      rgb(85, 49, 118) 49%,
      rgb(57, 37, 90) 49%, 
      rgb(57, 37, 90) 71%,
      rgb(29, 24, 62) 71%, 
      rgb(29, 24, 62) 72%,
      rgb(1, 12, 34) 72%, 
      rgb(1, 12, 34) 100%),
      linear-gradient(90deg, 
      rgb(95, 3, 74),
      rgb(35, 65, 96))`,
    backgroundBlendMode: "overlay, overlay, overlay, overlay, normal",
    [theme.breakpoints.down("sm")]: {
      padding: "100px 0 100px 0",
      height: "100vh",
    },
  },
  innerContent: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  contactInfo: {
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: "10px",
    },
  },
  contactBlock: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    "&:hover i": {
      fontSize: "3rem",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
    },

    "& span": {
      fontSize: "1rem",
      color: "#ffffff",
      fontWeight: "bold",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    "& a": {
      fontSize: "1rem",
      color: "#ffffff",
      fontWeight: "bold",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    "a:hover": {
      opacity: "0.7",
    },
    "& h5": {
      color: "#b7b7b7",
      fontSize: "1.25rem",
      textTransform: "uppercase",
      [theme.breakpoints.up("sm")]: {
        padding: "10px 0",
      },
    },

    [theme.breakpoints.up("sm")]: {
      display: "block",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      // border: "1px solid red",
      marginBottom: "3em",
    },
  },
  downloadBlock: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",

    "&:hover i": {
      fontSize: "3rem",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
    },

    "& span": {
      fontSize: "1rem",
      color: "#ffffff",
      fontWeight: "bold",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    "& a": {
      fontSize: "1rem",
      color: "#ffffff",
      fontWeight: "bold",
      transform: "translate3d(0, 0, 0)",
      transition: "all 0.3s linear 0s",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    "a:hover": {
      opacity: "0.7",
    },
    "& h5": {
      color: "#b7b7b7",
      fontSize: "1.25rem",
      textTransform: "uppercase",
      [theme.breakpoints.up("sm")]: {
        padding: "10px 0",
      },
    },

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
  iconWrapper: {
    "& i": {
      color: "#5093e5",
      fontSize: "2.5rem",
      marginRight: "20px",
      [theme.breakpoints.up("sm")]: {
        marginRight: "0",
      },
    },
  },
}));
