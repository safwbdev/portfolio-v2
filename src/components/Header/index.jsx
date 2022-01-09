import React, { useState } from "react";
import { HEADER_BRAND } from "../../constants/lang";
import { links } from "../../constants/linkData";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { motion } from "framer-motion";
import { headerVariants } from "../../constants/variants";
import useStyles from "./style"

const Index = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const classes = useStyles()

  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <div className={classes.mobileNav}>
        <Button
          aria-controls="simple-menu"
          className={classes.hamburger}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <i className="fa fa-bars"></i>
        </Button>
        <Menu
          id="simple-menu"
          className={classes.mobileMenu}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {links &&
            links.map((link, index) => {
              return (
                <MenuItem key={index} onClick={handleClose}>
                  <a href={link.url}>{link.label}</a>
                </MenuItem>
              );
            })}
        </Menu>
      </div>
    </motion.header>
  );
};
export default Index;
