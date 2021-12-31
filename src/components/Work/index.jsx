import React from "react";
import { WORK_TITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";

import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

const Work = ({ data }) => {
  return (
    <>
      <div className="nav-section" id="experience">
        <div className="container">
          <SectionHeader title={WORK_TITLE} />
          <WorkDesktop data={data} />
          <WorkMobile data={data} />
        </div>
      </div>
    </>
  );
};
export default Work;
