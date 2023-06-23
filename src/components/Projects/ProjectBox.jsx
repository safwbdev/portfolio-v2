import React from "react";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";
import style from "./Projects.module.scss";

const GetStacks = ({ skillType }) => {

  return (
    <div className={style.stackWrapper}>
      {skillType &&
        skillType.map((tag, index) => {
          return (
            <span key={index} className={style.stack}>
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
  const projectClass =  projectType === "client" ? style.imageWrapperClient : style.imageWrapper;
  const linkClasses = githubLink && demoLink ? style.linkWrapperTwo : style.linkWrapperOne
  return (
    <div className={style.portfolioItem}>
      <div className={projectClass} >
        <img src={projectImage.asset.url} alt="" width="100%" height="100%" />
      </div>
      <div className={style.titleWrapper}>
        <h2>
          {title} {projectType === "client" ? "*" : null}
        </h2>
      </div>
      {projectType === TYPE_CLIENT && (
        <div className={style.descWrapper}>
          <p>{desc}</p>
        </div>
      )}
      {projectType === TYPE_PERSONAL && <GetStacks skillType={tags} />}

      <div className={linkClasses}>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className={style.link}>
            <i className="fas fa-external-link-alt"></i>{" "}
            {projectType === TYPE_PERSONAL ? PROJECT_DEMO : PROJECT_VISIT}
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={style.link}>
            <i className="fab fa-github"></i> {PROJECT_GITHUB}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
