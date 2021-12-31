import React from "react";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";

const GetStacks = ({ skillType }) => {
  return (
    <div className="stack-wrapper">
      {skillType &&
        skillType.map((tag, index) => {
          return (
            <span key={index} className="stack">
              {tag}
            </span>
          );
        })}
    </div>
  );
};

const ProjectBox = ({
  data: { projectImage, title, desc, projectType, githubLink, demoLink, tags },
}) => {
  return (
    <div className="portfolio-item">
      <div
        className={
          projectType === "client" ? "image-wrapper client" : "image-wrapper"
        }
      >
        <img src={projectImage.asset.url} alt="" width="100%" height="100%" />
      </div>
      <div className="title-wrapper">
        <h2>
          {title} {projectType === "client" ? "*" : null}
        </h2>
      </div>
      {projectType === TYPE_CLIENT && (
        <div className="desc-wrapper">
          <p>{desc}</p>
        </div>
      )}
      {projectType === TYPE_PERSONAL && <GetStacks skillType={tags} />}

      <div className={`link-wrapper ${githubLink && demoLink ? "two" : "one"}`}>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>{" "}
            {projectType === TYPE_PERSONAL ? PROJECT_DEMO : PROJECT_VISIT}
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {PROJECT_GITHUB}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
