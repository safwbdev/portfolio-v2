import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionHeader = ({ title, subtitle, noAnimation }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
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
      className="section-header"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animvariant}
    >
      {title && <h3 className="heading">{title}</h3>}
      {subtitle && <h4 className="subheading">{subtitle}</h4>}
    </motion.div>
  );
};

export default SectionHeader;
