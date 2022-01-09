import React from "react";
import { PROJECT_CLIENT_SUBTITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";
import ProjectSlider from "./ProjectSlider";
import useStyles from "./style"
const Projects = ({ title, data }) => {
  const classes = useStyles();
  return (
    <section id="portfolio" className={classes.projectSection}>
      {/* <div className="nav-section"> */}
        <div className="container">
          <SectionHeader title={title} />
          <ProjectSlider data={data} />
          <p className={classes.tnc}>{PROJECT_CLIENT_SUBTITLE}</p>
        </div>
      {/* </div> */}
    </section>
  );
};
export default Projects;
