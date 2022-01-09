import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CONTACT_CALL,
  CONTACT_CHECK,
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_SEE,
} from "../../constants/lang";
import useStyles from "./style"

const InnerContent = ({ email, phone, linkedInlink, githubLink }) => {
  const classes = useStyles()
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={classes.innerContent}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      <div className={classes.contactInfo}>
        {email && (
          <div className={classes.contactBlock}>
            <div className={classes.iconWrapper}>
              <a href={`mailto:${email}`}>
                <i className="fa fa-fw fa-envelope"></i>
              </a>
            </div>
            <div className={classes.contactDetails}>
              <a href={`mailto:${email}`}>
                <h5 className={classes.contactHeading}>{CONTACT_EMAIL}</h5>
                <span>{email}</span>
              </a>
            </div>
          </div>
        )}
        {phone && (
          <div className={classes.contactBlock}>
            <div className={classes.iconWrapper}>
              <a href={`tel:${phone}`}>
                <i className="fa fa-fw fa-phone"></i>
              </a>
            </div>
            <div className={classes.contactDetails}>
              <a href={`tel:${phone}`}>
                <h5 className={classes.contactHeading}>{CONTACT_CALL}</h5>
                <span>{phone}</span>
              </a>
            </div>
          </div>
        )}
        {linkedInlink && (
          <div className={classes.contactBlock}>
            <div className={classes.iconWrapper}>
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-linkedin"></i>
              </a>
            </div>
            <div className={classes.contactDetails}>
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className={classes.contactHeading}>{CONTACT_SEE}</h5>
                <span>{CONTACT_LINKEDIN}</span>
              </a>
            </div>
          </div>
        )}
        {githubLink && (
          <div className={classes.contactBlock}>
            <div className={classes.iconWrapper}>
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
            </div>
            <div className={classes.contactDetails}>
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className={classes.contactHeading}>{CONTACT_CHECK}</h5>
                <span>{CONTACT_GITHUB}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InnerContent;
