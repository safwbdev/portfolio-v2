import React, { useState } from "react";
import { links } from "../../constants/linkData";
import { Menu, MenuItem, Fab } from "@material-ui/core";
import useStyles from "./style";

const MobileMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const icon = Boolean(anchorEl) ? "fa-times" : "fa-bars";
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  


  return (
    <div className={classes.mobileNav}>
      <Fab
        aria-controls="mobile-menu"
        className={classes.hamburger}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className={`fas ${icon}`}></i>
      </Fab>
      <Menu
        id="mobile-menu"
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
