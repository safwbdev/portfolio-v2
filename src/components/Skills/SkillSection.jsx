import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./Skill.module.scss";

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
        className={style.skillContent}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h4 className={style.title}>{title}</h4>
        <div className="skillset">

        {data &&
          data.map(({ name }, index) => (
              <span key={index} className={style.stack}>
                {name}
              </span>
            )
          )}
          </div>
      </motion.div>
    );
  };

  export default SkillSection