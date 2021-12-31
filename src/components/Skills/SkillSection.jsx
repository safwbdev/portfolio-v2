import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSection = ({ title, data }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="skill-content"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h4>{title}</h4>
        <div className="skillset">

        {data &&
          data.map(({ icon, name }, index) => {
            const content = (
              <span>
                <i className={icon}></i> <>{name}</>
              </span>
            );
            return (
              <span key={index} className="stack">
                {content}
              </span>
            );
          })}
          </div>
      </motion.div>
    );
  };

  export default SkillSection