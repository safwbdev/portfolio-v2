import React from "react";
const Social = ({ github,
    linkedin }) => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", url: null },

    { icon: "fab fa-twitter", url: null },

    { icon: "fab fa-instagram", url: null },

    { icon: "fab fa-linkedin", url: linkedin },

    { icon: "fab fa-github", url: github },
  ];
  return (
    <div className="social-icons">
      <ul>
        {socialLinks &&
          socialLinks.map(({ url, icon }, index) => {
            if (url) {
              return (
                <li key={index}>
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
