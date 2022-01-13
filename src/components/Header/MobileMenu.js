import React, { useState } from "react";

import { links } from "../../constants/linkData";
import { Menu, MenuItem, Fab } from "@material-ui/core";

import useStyles from "./style";

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.mobileNav}>
      <Fab
        aria-controls="simple-menu"
        className={classes.hamburger}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className="fa fa-bars"></i>
      </Fab>
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
  );
};
export default MobileMenu;
