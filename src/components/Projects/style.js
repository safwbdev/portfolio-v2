import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  projectSection: {
    padding: "100px 0",
    "& .container": {
      padding: 0,
    },
  },
  portfolioItem: {
    padding: "10px",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    "& img": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  imageWrapperClient: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    "& img": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "&:before": {
      content: `"Client*"`,
      position: "absolute",
      background: "#5093e5",
      padding: "5px 10px",
      left: 0,
      zIndex: 10,
      top: "10px",
      width: "30%",
      textAlign: "center",
      fontWeight: "bold",
    },
  },
  titleWrapper: {
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  linkWrapperOne: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  linkWrapperTwo: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  link: {
    background: "#5093e5",
    width: "100%",
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
  },
  descWrapper: {
    marginBottom: "1em",
  },
  stackWrapper: {
    display: "block",
    height: "4.2em",
    paddingBottom: "10px",
  },
  stack: {
    border: "1px solid #ffffff",
    padding: "5px",
    margin: "2px",
    display: "inline-flex",
    fontSize: "0.8em",
    borderRadius: "8px",
  },
  tnc: {
    marginTop: "3em",
    textAlign: "center",
  },
}));
