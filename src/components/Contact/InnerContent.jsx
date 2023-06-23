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
  CONTACT_DOWNLOAD,
  CONTACT_RESUME,
} from "../../constants/lang";
import style from "./Contact.module.scss";

const InnerContent = ({ email, phone, linkedInlink, githubLink, downloadLink }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={style.innerContent}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      <div className={style.contactInfo}>
        {email && (
          <div className={style.contactBlock}>
            <div className={style.iconWrapper}>
              <a href={`mailto:${email}`}>
                <i className="fa fa-fw fa-envelope"></i>
              </a>
            </div>
            <div className={style.contactDetails}>
              <a href={`mailto:${email}`}>
                <h5 className={style.contactHeading}>{CONTACT_EMAIL}</h5>
                <span>{email}</span>
              </a>
            </div>
          </div>
        )}
        {phone && (
          <div className={style.contactBlock}>
            <div className={style.iconWrapper}>
              <a href={`tel:${phone}`}>
                <i className="fa fa-fw fa-phone"></i>
              </a>
            </div>
            <div className={style.contactDetails}>
              <a href={`tel:${phone}`}>
                <h5 className={style.contactHeading}>{CONTACT_CALL}</h5>
                <span>{phone}</span>
              </a>
            </div>
          </div>
        )}
        {linkedInlink && (
          <div className={style.contactBlock}>
            <div className={style.iconWrapper}>
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-linkedin"></i>
              </a>
            </div>
            <div className={style.contactDetails}>
              <a
                href={`${linkedInlink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className={style.contactHeading}>{CONTACT_SEE}</h5>
                <span>{CONTACT_LINKEDIN}</span>
              </a>
            </div>
          </div>
        )}
        {githubLink && (
          <div className={style.contactBlock}>
            <div className={style.iconWrapper}>
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
            </div>
            <div className={style.contactDetails}>
              <a
                href={`${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className={style.contactHeading}>{CONTACT_CHECK}</h5>
                <span>{CONTACT_GITHUB}</span>
              </a>
            </div>
          </div>
        )}
        {downloadLink && (
          <div className={style.downloadBlock}>
            <div className={style.iconWrapper}>
              <a
                href={`${downloadLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-fw fa-file-download"></i>
              </a>
            </div>
            <div className={style.contactDetails}>
              <a
                href={`${downloadLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className={style.contactHeading}>{CONTACT_DOWNLOAD}</h5>
                <span>{CONTACT_RESUME}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InnerContent;
