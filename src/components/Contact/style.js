import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contactSection: {
    padding: "350px 0",
    // backgroundImage: "linear-gradient(360deg, #5f034a, #234160)",
    backgroundImage: `linear-gradient(
      360deg,
      #a856c9 0%,
      #a856c9 3%,
      #8c4aad 3%,
      #8c4aad 11%,
      #703d91 11%,
      #703d91 20%,
      #553176 20%,
      #553176 49%,
      #39255a 49%,
      #39255a 71%,
      #1d183e 71%,
      #1d183e 72%,
      #111 72%,
      #111 100%
    ),
    linear-gradient(
      67.5deg,
      #a856c9 0%,
      #a856c9 3%,
      #8c4aad 3%,
      #8c4aad 11%,
      #703d91 11%,
      #703d91 20%,
      #553176 20%,
      #553176 49%,
      #39255a 49%,
      #39255a 71%,
      #1d183e 71%,
      #1d183e 72%,
      #111 72%,
      #111 100%
    ),
    linear-gradient(
      112.5deg,
      #a856c9 0%,
      #a856c9 3%,
      #8c4aad 3%,
      #8c4aad 11%,
      #703d91 11%,
      #703d91 20%,
      #553176 20%,
      #553176 49%,
      #39255a 49%,
      #39255a 71%,
      #1d183e 71%,
      #1d183e 72%,
      #111 72%,
      #111 100%
    ),
    linear-gradient(
      315deg,
      #a856c9 0%,
      #a856c9 3%,
      #8c4aad 3%,
      #8c4aad 11%,
      #703d91 11%,
      #703d91 20%,
      #553176 20%,
      #553176 49%,
      #39255a 49%,
      #39255a 71%,
      #1d183e 71%,
      #1d183e 72%,
      #111 72%,
      #111 100%
    ),
    linear-gradient(360deg, #5f034a, #234160)`,
    backgroundBlendMode: "overlay, overlay, overlay, overlay, normal",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0 100px 0",
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

    // "& a, & span": {
    //     //   fontSize: "1rem",
    //     color: "#ffffff",
    //     fontWeight: "bold",
    //     transform: "translate3d(0, 0, 0)",
    //     //   -webkit-transition: all 0.3s linear 0s,
    //     //   -o-transition: all 0.3s linear 0s,
    //     //   -moz-transition: all 0.3s linear 0s,
    //     transition: "all 0.3s linear 0s",
    // },

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
  contactDetails: {
    // "& a, & span": {
    //   //   fontSize: "1rem",
    //   color: "#ffffff",
    //   fontWeight: "bold",
    //   transform: "translate3d(0, 0, 0)",
    //   //   -webkit-transition: all 0.3s linear 0s,
    //   //   -o-transition: all 0.3s linear 0s,
    //   //   -moz-transition: all 0.3s linear 0s,
    //   transition: "all 0.3s linear 0s",
    // },
    // "a:hover": {
    //   opacity: "0.7",
    // },
    // "& h5": {
    //   color: "#b7b7b7",
    //   fontSize: "1.25rem",
    //   textTransform: "uppercase",
    //   [theme.breakpoints.up("sm")]: {
    //     padding: "10px 0",
    //   },
    // },
  },
  //   contactHeading: {
  //     "& a": {
  //       color: "red",
  //     },

  // "& a": {
  //   //   border: "1px solid red",
  //   fontSize: "1.25rem",
  // },
  //   },
}));
