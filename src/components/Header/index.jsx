import React from "react";
import { HEADER_BRAND } from "../../constants/lang";
import { links } from "../../constants/linkData";
import { motion } from "framer-motion";
import { headerVariants } from "../../constants/variants";
import useStyles from "./style"

const Index = () => {
  const classes = useStyles();

  return (
    <motion.header variants={headerVariants} initial="hidden" animate="visible" className={classes.header}>
      <div className="brand">
        <a href="/">{HEADER_BRAND}</a>
      </div>
      <ul className={classes.navLinks}>
        {links &&
          links.map(({url,
            label}) => {
            return (
              <li className={classes.navLink} key={label}>
                <a className={classes.navLinkText} href={url}>{label}</a>
              </li>
            );
          })}
      </ul>
    </motion.header>
  );
};
export default Index;
