import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    padding: "20px 20px 0",
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
    transition: "all 0.3 ease",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    "& a": {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "1rem",
      transition: "all 0.3 ease",
    },
  },
  navLinks: {
    display: "none",
    listStyle: "none",
    margin: 0,
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navLink: {
    display: "inline-block",
    marginRight: "20px",
    "&:last-child": {
      marginRight: 0,
    },
  },
  navLinkText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "all 0.3 ease",

    "&:hover": {
      color: "#5093e5",
    },
    "&.active": {
      color: "#5093e5",
    },
  },
  mobileNav: {
    position: "relative",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  mobileMenu: {
    "& .MuiMenu-paper": {
      top: "unset !important",
      left: "unset !important",
      bottom: "5.5em",
      right: "0.5em",
      borderRadius: "8px",
      "& ul": {
        border: "1px solid #252525",
        padding: 0,
        background: "#101010",
        borderRadius: 0,

        "& .MuiListItem-button:not(:last-child)": {
          borderBottom: "1px solid #b7b7b7",
        },
        "& .MuiListItem-button a": {
          color: "1px solid #ffffff",
        },
      },
    },
  },
  hamburger: {
    background: "#5093e5",
    border: "none",
    color: "#ffffff",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
    },
  },
}));
