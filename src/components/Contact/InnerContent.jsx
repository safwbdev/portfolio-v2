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

const InnerContent = ({ email, phone, linkedInlink, githubLink }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="inner-content"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      <div className="contact-info">
        {email && (
          <div className="contact-block">
            <div className="icon-wrapper">
              <a href={`mailto:${email}`}>
                <i className="fa fa-fw fa-envelope"></i>
              </a>
            </div>
            <div className="details">
              <a href={`mailto:${email}`}>
                <h5 className="heading">{CONTACT_EMAIL}</h5>
                <span>{email}</span>
              </a>
            </div>
          </div>
        )}
        {phone && (
          <div className="contact-block">
            <div className="icon-wrapper">
              <a href={`tel:${phone}`}>
                <i className="fa fa-fw fa-phone"></i>
              </a>
            </div>
            <div className="details">
              <a href={`tel:${phone}`}>
                <h5 className="heading">{CONTACT_CALL}</h5>
                <span>{phone}</span>
              </a>
            </div>
          </div>
        )}
        {linkedInlink && (
          <div className="contact-block">
            <div className="icon-wrapper">
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-linkedin"></i>
              </a>
            </div>
            <div className="details">
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="heading">{CONTACT_SEE}</h5>
                <span>{CONTACT_LINKEDIN}</span>
              </a>
            </div>
          </div>
        )}
        {githubLink && (
          <div className="contact-block">
            <div className="icon-wrapper">
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
            </div>
            <div className="details">
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="heading">{CONTACT_CHECK}</h5>
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
