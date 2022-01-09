import React from "react";
import useStyles from "./style";

const Social = ({ github,
    linkedin, isHero }) => {
  
      const classes = useStyles();

      const clastest = isHero ? classes.socialIconsHero : classes.socialIcons;

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: null },

    { icon: "fab fa-twitter", url: null },

    { icon: "fab fa-instagram", url: null },

    { icon: "fab fa-linkedin", url: linkedin },

    { icon: "fab fa-github", url: github },
  ];
  return (
    <div className={clastest}>
      <ul className={classes.socialList}>
        {socialLinks &&
          socialLinks.map(({ url, icon }, index) => {
            if (url) {
              return (
                <li className={classes.socialListItem} key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};
export default Social;
