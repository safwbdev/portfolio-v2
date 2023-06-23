import React from "react";
import { HEADER_BRAND } from "../../constants/lang";
import { links } from "../../constants/linkData";
import { motion } from "framer-motion";
import { headerVariants } from "../../constants/variants";
import style from "./Header.module.scss";

const Index = () => {
  return (
    <motion.header variants={headerVariants} initial="hidden" animate="visible" className={style.header}>
      <div className="brand">
        <a href="/">{HEADER_BRAND}</a>
      </div>
      <ul className={style.navLinks}>
        {links &&
          links.map(({url,
            label}) => {
            return (
              <li className={style.navLink} key={label}>
                <a className={style.navLinkText} href={url}>{label}</a>
              </li>
            );
          })}
      </ul>
    </motion.header>
  );
};
export default Index;
