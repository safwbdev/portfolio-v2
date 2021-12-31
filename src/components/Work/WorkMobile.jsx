import React, { useEffect } from "react";
import Slider from "react-slick";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkBox from "./WorkBox";

const WorkMobile = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="work-slider"
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
          data.map((work, index) => {
            return (
              <WorkBox data={work} key={index} getId={index} isSlider={true} />
            );
          })}
      </Slider>
    </motion.div>
  );
};

export default WorkMobile;
