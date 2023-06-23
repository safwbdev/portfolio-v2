import React from "react";
import SectionHeader from "../SectionHeader";
import ProjectSlider from "./ProjectSlider";
import style from "./Projects.module.scss";

const Projects = ({ title, data }) => (
  <section id="portfolio" className={style.projectSection}>
    <div className={style.container}>
      <SectionHeader title={title} subtitle={title} />
      <ProjectSlider data={data} />
    </div>
  </section>
);

export default Projects;
