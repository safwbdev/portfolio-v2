import React, { useState } from "react";
import { HEADER_BRAND } from "../../constants/lang";
import { links } from "./linkData";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { motion } from "framer-motion";
import { headerVariants } from "../../constants/variants";

const Index = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <motion.header variants={headerVariants} initial="hidden" animate="visible">
      <div className="brand">
        <a href="/">{HEADER_BRAND}</a>
      </div>
      <ul className="nav-links">
        {links &&
          links.map((link, index) => {
            return (
              <li className="nav-link" key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            );
          })}
      </ul>
      <div className="mobile-nav">
        <Button
          aria-controls="simple-menu"
          className="hamburger"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <i className="fa fa-bars"></i>
        </Button>
        <Menu
          id="simple-menu"
          className="mobile-menu"
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
