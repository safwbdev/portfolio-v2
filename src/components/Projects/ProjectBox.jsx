import React from "react";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
} from "../../constants/lang";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";
import useStyles from "./style"

const GetStacks = ({ skillType }) => {
  const classes = useStyles();
  return (
    <div className={classes.stackWrapper}>
      {skillType &&
        skillType.map((tag, index) => {
          return (
            <span key={index} className={classes.stack}>
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
  const classes = useStyles();
  const projectClass =  projectType === "client" ? classes.imageWrapperClient : classes.imageWrapper;
  const linkClasses = githubLink && demoLink ? classes.linkWrapperTwo : classes.linkWrapperOne
  return (
    <div className={classes.portfolioItem}>
      <div className={projectClass} >
        <img src={projectImage.asset.url} alt="" width="100%" height="100%" />
      </div>
      <div className={classes.titleWrapper}>
        <h2>
          {title} {projectType === "client" ? "*" : null}
        </h2>
      </div>
      {projectType === TYPE_CLIENT && (
        <div className={classes.descWrapper}>
          <p>{desc}</p>
        </div>
      )}
      {projectType === TYPE_PERSONAL && <GetStacks skillType={tags} />}

      <div className={linkClasses}>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <i className="fas fa-external-link-alt"></i>{" "}
            {projectType === TYPE_PERSONAL ? PROJECT_DEMO : PROJECT_VISIT}
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <i className="fab fa-github"></i> {PROJECT_GITHUB}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
