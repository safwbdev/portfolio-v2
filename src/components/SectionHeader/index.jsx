import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useStyles from "./style";

const SectionHeader = ({ title, subtitle, noAnimation }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
const classes = useStyles();  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animvariant = noAnimation
    ? {}
    : {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300 },
      };
  return (
    <motion.div
      className={classes.sectionHeader}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animvariant}
    >
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
    </motion.div>
  );
};

export default SectionHeader;
