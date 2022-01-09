import React from "react";
import Social from "../Social/Social";
import {
  titleVariants,
  subTitleVariants,
  socialVariants1,
} from "../../constants/variants";
import { motion } from "framer-motion";
import useStyles from "./style";

const Main = ({ name, role, githubLink, linkedInlink }) => {

  const classes = useStyles()
  return (
    <section className={classes.hero}>
      <div className={classes.innerText}>
        <motion.h1 variants={titleVariants} initial="hidden" animate="visible" className={classes.title}>
          {name}
        </motion.h1>
        <motion.h2
          variants={subTitleVariants}
          initial="hidden"
          animate="visible"
          className={classes.subtitle}
        >
          {role}
        </motion.h2>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span></span>
        </a>
      </div>

      <motion.span
        variants={socialVariants1}
        initial="hidden"
        animate="visible"
      >
        <Social github={githubLink} linkedin={linkedInlink} isHero />
      </motion.span>
    </section>
  );
};

export default Main;
