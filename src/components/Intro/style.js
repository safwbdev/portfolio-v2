import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `linear-gradient(0deg, #3b3b3b, #c5c5c5), 
    linear-gradient(
        45deg,
        #9f74d6 0%,
        #9f74d6 25%,
        #825fad 25%,
        #825fad 45%,
        #654a84 45%,
        #654a84 50%,
        #48365a 50%,
        #48365a 52%,
        #2b2131 52%,
        #2b2131 61%,
        #0e0c08 61%,
        #0e0c08 100%
      ),
      linear-gradient(
        135deg,
        #9f74d6 0%,
        #9f74d6 25%,
        #825fad 25%,
        #825fad 45%,
        #654a84 45%,
        #654a84 50%,
        #48365a 50%,
        #48365a 52%,
        #2b2131 52%,
        #2b2131 61%,
        #0e0c08 61%,
        #0e0c08 100%
      );`,
    backgroundBlendMode: "overlay, overlay, normal",
  },
  innerText: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "5rem",
    },
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "400",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },

  scrollDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  scrollDownLink: {
    paddingTop: "60px",
  },
  scrollDownLinkArea: {
    position: "absolute",
    bottom: "10em",
    left: "50%",
    width: "30px",
    height: "50px",
    marginLeft: "-15px",
    border: "2px solid #fff",
    borderRadius: "50px",
    boxSizing: "border-box",

    "&::before": {
      position: "absolute",
      top: "10px",
      left: "50%",
      content: "",
      width: "6px",
      height: "6px",
      marginLeft: "-3px",
      backgroundColor: "#fff",
      borderRadius: "100%",
      // webkitAnimation: "sdb10 2s infinite",
      // animation: "sdb10 2s infinite",
      boxSizing: "border-box",
    },
  },

  // ABOUT
  aboutSection: {
    padding: "100px 0",
  },
  aboutContent: {
    marginBottom: "30px",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },

  imageWrapper: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      width: "100%",
      flex: "0 0 40%",
      maxWidth: "40%",
      paddingRight: "70px",
    },
  },
  image: {
    borderRadius: "8px",
  },
  contentHeading: {
    fontSize: "1.5rem",
    margin: "20px 0",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  contentText: {
    marginBottom: "16px",
    color: "#b7b7b7",
    lineHeight: "1.5em",
  },
  contentHR: {
    margin: "30px 0",
    border: "1px solid #5093e5",
  },
}));
