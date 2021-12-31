import React from "react";
import Social from "../Social/Social";
import {
  titleVariants,
  subTitleVariants,
  socialVariants1,
} from "../../constants/variants";
import { motion } from "framer-motion";

const Main = ({ name, role, githubLink, linkedInlink }) => {
  return (
    <section className="hero main-bg">
      <div className="inner-text">
        <motion.h1 variants={titleVariants} initial="hidden" animate="visible">
          {name}
        </motion.h1>
        <motion.h2
          variants={subTitleVariants}
          initial="hidden"
          animate="visible"
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
        <Social github={githubLink} linkedin={linkedInlink} />
      </motion.span>
    </section>
  );
};

export default Main;
