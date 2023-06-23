import React from "react";
import { WORK_TITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";
import style from "./Work.module.scss";

const Work = ({ data }) => {
  return (
    <>
      <div 
      className={style.workSection} 
      id="experience"
      >
        <div className={style.container}>
          <SectionHeader title={WORK_TITLE} />
          <WorkDesktop data={data} />
          <WorkMobile data={data} />
        </div>
      </div>
    </>
  );
};
export default Work;
