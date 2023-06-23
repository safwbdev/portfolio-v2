import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkBox from "./WorkBox";
import style from "./Work.module.scss";

const WorkDesktop = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={style.workGrid}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      {data &&
        data.map((data, index) => {
          return <WorkBox data={data} key={index} isSlider={false} />;
        })}
    </motion.div>
  );
};

export default WorkDesktop;
