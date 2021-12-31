import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PERSONAL_PROJECT_SETTINGS } from "../../constants/sliderSettings";
import ProjectBox from "./ProjectBox";

const ProjectSlider = ({ data }) => {
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
    >
      <Slider {...PERSONAL_PROJECT_SETTINGS}>
        {data &&
          data.map((project, index) => {
            return <ProjectBox key={index} data={project} />;
          })}
      </Slider>
    </motion.div>
  );
};

export default ProjectSlider;
