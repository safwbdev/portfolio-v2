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
    backgroundBlendMode: "overlay, overlay, normal",
  },

  scrollDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  skillSection: {
    padding: "100px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 100px 0",
    },
  },
  skillContent: {
    textAlign: "center",
    display: "block",
    margin: "60px 0",
  },
  title: {
    color: "#5093e5",
    marginBottom: "10px",
    fontSize: "1.5em",
  },
  stack: {
    padding: "8px",
    color: "#ffffff",
    background: "#5093e5",
    margin: "6px 4px",
    borderRadius: "50px",
    fontWeight: "400",
    display: "inline-block",
    cursor: "default !important",
    "&:hover": {
      color: "#5093e5",
      background: "#ffffff",
      transform: "translate3d(0, 0, 0)",
      // -webkit-transition: "all 0.3s linear 0s",
      // -o-transition: "all 0.3s linear 0s",
      // -moz-transition: "all 0.3s linear 0s",
      transition: "all 0.3s linear 0s",
    },
  },
}));
