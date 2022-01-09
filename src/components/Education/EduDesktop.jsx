import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EduBox from "./EduBox";
import useStyles from "./style"

const EduDesktop = ({ data }) => {
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={classes.eduGrid}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      }}
    >
      {data &&
        data.map((edu, index) => {
          return <EduBox data={edu} key={index} />;
        })}
    </motion.div>
  );
};

export default EduDesktop;
