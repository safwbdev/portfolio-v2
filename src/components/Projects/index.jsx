import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TYPE_CLIENT, TYPE_PERSONAL } from "../../constants/types";
import {
  PERSONAL_PROJECT_SETTINGS,
//   CLIENT_PROJECT_SETTINGS,
} from "../../constants/sliderSettings";
import {
  PROJECT_VISIT,
  PROJECT_DEMO,
  PROJECT_GITHUB,
  PROJECT_CLIENT_SUBTITLE
} from "../../constants/lang";

const Index = ({title, data}) => {
    const settings = PERSONAL_PROJECT_SETTINGS;

  const SectionHeader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="section-header"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h3 className="heading">{title}</h3>
        {/* <h4 className="subheading">{props.subtitle}</h4> */}
      </motion.div>
    );
  };
  const GetStacks = ({ skillType }) => {
      console.log(skillType)
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
        <div className={projectType === "client" ? "image-wrapper client" : "image-wrapper"}>
                <img src={projectImage.asset.url} alt="" width="100%" height="100%" />
        </div>
        <div className="title-wrapper">
          <h2>{title} {projectType === "client" ? "*" : null}</h2>
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
  const GetSlides = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <Slider {...settings}>
          {data &&
            data.map((project, index) => {
              return <ProjectBox key={index} data={project} />;
            })}
        </Slider>
      </motion.div>
    );
  };
  return (
    <section id="portfolio">
      <div className="nav-section">
        <div className="container">
          <SectionHeader />
          <GetSlides />
          <p className="tnc">{PROJECT_CLIENT_SUBTITLE}</p>
        </div>
      </div>
    </section>
  );
};
export default Index;
