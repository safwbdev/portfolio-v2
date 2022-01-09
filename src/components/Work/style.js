import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  workSection: {
    padding: "100px 0",
  },
  // DESKTOP
  workGrid: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "50px",
    display: "grid",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  //ITEM
  workItem: {
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
    "& img": {
      width: "100%",
      borderRadius: "8px",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "100%",
        width: "40%",
        marginBottom: "20px",
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
    padding: "0 15px",
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
      marginBottom: "10px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "5px",
      },
    },
  },
  role: {
    fontSize: "1.3em",
    marginBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      marginBottom: "5px",
    },
  },
  duration: {
    fontSize: "1.1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  company: {
    color: "#5093e5",
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
      color: "#5093e5",
    },
  },

  location: {
    color: "#ffffff",
    fontSize: "0.8em",
    marginBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
      color: "#ffffff",
      marginBottom: "5px",
    },
  },
  taskWrapper: {
    marginTop: "30px",
    padding: "0 30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: 0,
      textAlign: "center",
      height: "unset",
    },

    "& ul": {
      lineHeight: "2em",
    },
    "& ul ::marker": {
      color: "#5093e5",
    },

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: 0,
      textAlign: "center",
      height: "unset",
    },
  },

  //Slider

  workSlider: {
    marginBottom: "100px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "& .slick-list": {
        display: "flex",
      },
      "& .slick-track": {
        display: "flex",
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
  },

  // MODAL

  workModal: {
    "& .MuiDialog-paper": {
      backgroundColor: "#252525",
      border: "1px solid #5093e5",
      borderRadius: "10px",
      color: "#ffffff",
    },
  },
  workModalTitle: {
    textAlign: "center",
    lineHeight: "1.2em",
    "& div": {
      color: "#5093e5",
      fontWeight: "bold",
      marginTop: "10px",
    },
  },
  workModalContent: {
    borderRadius: "20px",
    "& hr": {
      border: "1px solid #5093e5",
      marginBottom: "20px",
    },
    "& ul": {
      lineHeight: "2em",
      paddingLeft: "20px",
    },
  },
}));
