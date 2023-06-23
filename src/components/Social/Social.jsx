import React from "react";
import { FBICON, GHICON, INICON, LIICON, TWICON } from "../../constants/icons";
import style from "./Social.module.scss";

const Social = ({ github, linkedin, isHero }) => {

  const clastest = isHero ? style.socialIconsHero : style.socialIcons;

  const socialLinks = [
    { icon: FBICON, url: null },
    { icon: TWICON, url: null },
    { icon: INICON, url: null },
    { icon: LIICON, url: linkedin },
    { icon: GHICON, url: github },
  ];
  return (
    <div className={clastest}>
      <ul className={style.socialList}>
        {socialLinks &&
          socialLinks.map(({ url, icon }, index) => {
            if (url) {
              return (
                <li className={style.socialListItem} key={index}>
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
