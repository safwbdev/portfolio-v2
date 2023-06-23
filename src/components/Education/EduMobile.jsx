import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import EduBox from "./EduBox";
import style from "./Edu.module.scss";

const EduMobile = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={style.eduSlider}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      <Slider {...WORK_SETTINGS}>
        {data &&
          data.map((edu, index) => {
            return <EduBox key={index} data={edu} />;
          })}
      </Slider>
    </motion.div>
  );
};

export default EduMobile;
