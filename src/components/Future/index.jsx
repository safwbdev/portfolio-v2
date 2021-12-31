import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FUTURE_TITLE,
  FUTURE_SUBTITLE,
  FUTURE_LEARNING,
  FUTURE_PLANNING,
} from "../../constants/lang";
import SectionHeader from "../SectionHeader";

const Future = ({ learning, future }) => {

  const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

  const FutureDesktop = () => {
    return (
      <div
        className="future-grid"
      >
        <div className="future-item">
          <div className="title-wrapper">
            <div className="title">
              <h2>{FUTURE_LEARNING}</h2>
              <ul>
                {learning &&
                  learning.map(({ name }, index) => {
                    return <li key={index}>{name}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div className="future-item">
          <div className="title-wrapper">
            <div className="title">
              <h2>{FUTURE_PLANNING}</h2>
              <ul>
                {future &&
                  future.map(({ name }, index) => {
                    return <li key={index}>{name}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
    className="nav-section" 
    id="future" 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 300 },
    }}>
      <div className="container">
        <SectionHeader title={FUTURE_TITLE} subtitle={FUTURE_SUBTITLE} noAnimation />
        <FutureDesktop />
      </div>
    </motion.div>
  );
};
export default Future;
