import React, { useEffect } from "react";
import Social from "../Social";
import {
    titleVariants,
    subTitleVariants,
    socialVariants1,
  } from "../../constants/variants";
import {
    PROFILE_TITLE,
    PROFILE_SUBTITLE,
    PROFILE_GREETING,
    PROFILE_DOWNLOAD,
  } from "../../constants/lang";
  import { motion, useAnimation } from "framer-motion";
  import { useInView } from "react-intersection-observer";

const Index = ({data}) => {
    const {name, role, userImage, githubLink, desc,
        linkedInlink, downloadUrl, fileName} = data[0];

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
                <h3 className="heading">{PROFILE_TITLE}</h3>
                <h4 className="subheading">{PROFILE_SUBTITLE}</h4>
              </motion.div>
            );
          };
        const Main = () => {
            return (
              <section className="hero main-bg" >
                <div className="inner-text">
                  <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {name}
                  </motion.h1>
                  <motion.h2
                    variants={subTitleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {role}
                  </motion.h2>
                </div>
                <div className="scroll-down">
                  <a href="#about">
                    <span></span>
                  </a>
                </div>
        
                <motion.span
                  variants={socialVariants1}
                  initial="hidden"
                  animate="visible"
                >
                <Social github={githubLink} linkedin={linkedInlink} />
                </motion.span>
              </section>
            );
          };


        const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <section className="nav-section" id="about">
        <div className="container">
          <SectionHeader />
          <motion.div
            className="about-content"
            ref={ref}
            animate={controls}
            variants={titleVariants}
            initial="hidden"
          >
            <div className="image-wrapper">
              <img
                src={userImage.asset.url}
                alt={PROFILE_SUBTITLE}
                width="100%"
                height="100%"
              />
            </div>
            <div className="text-content">
              <h3 className="content-heading">{PROFILE_GREETING}</h3>
              <p>{desc}</p>
              <hr />
              <div className="text-content-footer">
                <div className="button-wrapper">
                  <a
                    href={downloadUrl}
                    download={fileName}
                    className="primary-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PROFILE_DOWNLOAD}
                  </a>
                </div>
                <Social github={githubLink} linkedin={linkedInlink} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
          return (
            <>
              <Main />
              <About />
            </>
          );
}
export default Index