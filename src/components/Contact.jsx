import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = ({ data }) => {
  const { email, phone, linkedInlink, githubLink } = data[0]
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
        <h3 className="heading">Contact</h3>
        <h4 className="subheading">Get in touch with me</h4>
      </motion.div>
    );
  };
  const InnerContent = () => {
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
                  <h5 className="heading">Email</h5>
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
                  <h5 className="heading">Call me</h5>
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
                  <h5 className="heading">See me on</h5>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          )}
          {githubLink && (
            <div className="contact-block">
              <div className="icon-wrapper">
                <a href={`${githubLink}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-fw fa-github"></i>
                </a>
              </div>
              <div className="details">
                <a href={`${githubLink}`} target="_blank" rel="noopener noreferrer">
                  <h5 className="heading">Check out my</h5>
                  <span>Github</span>
                </a>
              </div>
            </div>
          )}
          {/* {data.location && (
        <div className="contact-block">
          <div className="icon-wrapper">
            <i className="fa fa-fw fa-map-marker-alt"></i>
          </div>
          <div className="details">
            <h5 className="heading">Location</h5>
            <span>{data.location}</span>
          </div>
        </div>
      )} */}
        </div>
      </motion.div>
    );
  };
  return (
    <div className="nav-section" id="contact">
      <div className="container">
        <SectionHeader />
        <InnerContent />
      </div>
    </div>
  );
};

export default Index;
