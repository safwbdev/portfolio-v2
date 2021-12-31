import React from "react";
import Main from "./Main";
import About from "./About";

const Intro = ({ data }) => {
  const { name, role, userImage, githubLink, desc, linkedInlink } = data[0];

  return (
    <>
      <Main
        name={name}
        role={role}
        userImage={userImage}
        githubLink={githubLink}
        desc={desc}
        linkedInlink={linkedInlink}
      />
      <About
        userImage={userImage}
        githubLink={githubLink}
        desc={desc}
        linkedInlink={linkedInlink}
      />
    </>
  );
};
export default Intro;
