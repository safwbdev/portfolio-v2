import React from "react";
import { PROJECT_CLIENT_SUBTITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";
import ProjectSlider from "./ProjectSlider";

const Projects = ({ title, data }) => {
  return (
    <section id="portfolio">
      <div className="nav-section">
        <div className="container">
          <SectionHeader title={title} />
          <ProjectSlider data={data} />
          <p className="tnc">{PROJECT_CLIENT_SUBTITLE}</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
