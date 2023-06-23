import React from "react";
import { WORK_SUBTITLE, WORK_TITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";
import style from "./Work.module.scss";

const Work = ({ data }) => (
  <div className={style.workSection} id="experience">
    <div className={style.container}>
      <SectionHeader title={WORK_TITLE} subtitle={WORK_SUBTITLE} />
      <WorkDesktop data={data} />
      <WorkMobile data={data} />
    </div>
  </div>
);
export default Work;
