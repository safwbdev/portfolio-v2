import React from "react";
import { WORK_TITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";

import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";
import useStyles from "./style"

const Work = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <div 
      className={classes.workSection} 
      id="experience"
      >
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
