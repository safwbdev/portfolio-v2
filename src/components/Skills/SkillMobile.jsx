import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_SETTINGS } from "../../constants/sliderSettings";
// import ProjectBox from "./ProjectBox";
import SkillSection from "./SkillSection";
import style from "./Skill.module.scss";

const SkillMobile = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  console.log(data);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
      className={style.skillSlider}
    >
      <Slider {...SKILL_SETTINGS}>
        {data &&
          data.map(({title, data}, index) => {
            return <SkillSection key={index} data={data} title={title} />;
          })}
      </Slider>
    </motion.div>
  );
};

export default SkillMobile;
