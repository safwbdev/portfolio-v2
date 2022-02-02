import React from "react";
import Main from "./Main";
import About from "./About";

const Intro = ({ data, getDownloadUrl }) => {
  const { name, role, userImage, githubLink, desc, linkedInlink, fileUpload } = data[0];

  return (
    <>
      <Main
        name={name}
        role={role}
        githubLink={githubLink}
        linkedInlink={linkedInlink}
      />
      <About
        userImage={userImage}
        githubLink={githubLink}
        desc={desc}
        linkedInlink={linkedInlink}
        downloadLink={getDownloadUrl(fileUpload.asset._ref)}
      />
    </>
  );
};
export default Intro;
