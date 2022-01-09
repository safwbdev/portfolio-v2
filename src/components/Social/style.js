import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  socialIcons: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  socialIconsHero: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: "0 20px 20px",
  },
  socialList: {
    margin: "0",
    padding: "0",
    listStyle: "none",
  },
  socialListItem: {
    display: "inline-block",
    marginRight: "10px",
    "&:last-child": {
      marginRight: 0,
    },
    "& a": {
      fontSize: "1.5rem",
      transition: "all 0.3s ease",
      "&:hover": { color: "#5093e5" },
    },
  },
}));
