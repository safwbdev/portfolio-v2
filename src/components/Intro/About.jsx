import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Social from "../Social/Social";
import { titleVariants } from "../../constants/variants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PROFILE_TITLE,
  PROFILE_SUBTITLE,
  PROFILE_GREETING,
  PROFILE_DOWNLOAD
} from "../../constants/lang";
import useStyles from "./style";

const About = ({ userImage, githubLink, desc, linkedInlink, downloadLink }) => {
  const classes = useStyles()
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={classes.aboutSection} id="about">
      <div className="container">
        <SectionHeader title={PROFILE_TITLE} subtitle={PROFILE_SUBTITLE} />
        <motion.div
          className={classes.aboutContent}
          ref={ref}
          animate={controls}
          variants={titleVariants}
          initial="hidden"
        >
          <div className={classes.imageWrapper}>
            <img
              src={userImage.asset.url}
              className={classes.image}
              alt={PROFILE_SUBTITLE}
              width="100%"
              height="100%"
            />
          </div>
          <div className="text-content">
            <h3 className={classes.contentHeading}>{PROFILE_GREETING}</h3>
            <p className={classes.contentText}>{desc}</p>
            <hr className={classes.contentHR}/>
            <div className={classes.textContentFooter}>
              {downloadLink && (
                <div className={classes.buttonWrapper}>
                  <a
                    href={downloadLink}
                    className="primary-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PROFILE_DOWNLOAD}
                  </a>
                </div>
              )}
              <Social github={githubLink} linkedin={linkedInlink} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
