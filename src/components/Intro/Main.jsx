import React from "react";
import Social from "../Social/Social";
import {
  titleVariants,
  subTitleVariants,
  socialVariants1,
} from "../../constants/variants";
import { motion } from "framer-motion";
import style from "./Main.module.scss";

const Main = ({ name, role, githubLink, linkedInlink }) => {

  return (
    <section className={style.hero}>
      <div className={style.innerText}>
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
      <div className={style.scrollDown}>
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
