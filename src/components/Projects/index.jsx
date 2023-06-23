import React from "react";
// import { PROJECT_CLIENT_SUBTITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";
import ProjectSlider from "./ProjectSlider";
import style from "./Projects.module.scss";

const Projects = ({ title, data }) => {
  return (
    <section id="portfolio" className={style.projectSection}>
        <div className={style.container}>
          <SectionHeader title={title} />
          <ProjectSlider data={data} />
          {/* <p className={style.tnc}>{PROJECT_CLIENT_SUBTITLE}</p> */}
        </div>
    </section>
  );
};
export default Projects;
