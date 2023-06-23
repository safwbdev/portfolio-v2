import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillSection from "./SkillSection";
import style from "./Skill.module.scss";

const SkillDesktop = ({ data }) => {
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
      className={style.skillGrid}
    >
        {data &&
          data.map(({title, data}, index) => {
            return <SkillSection key={index} data={data} title={title} />;
          })}
    </motion.div>
  );
};

export default SkillDesktop;
