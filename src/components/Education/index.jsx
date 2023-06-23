import React from "react";
import SectionHeader from "../SectionHeader";
import EduDesktop from "./EduDesktop";
import EduMobile from "./EduMobile";
import { EDUCATION_SUBTITLE, EDUCATION_TITLE } from "../../constants/lang";
import style from "./Edu.module.scss";

const Index = ({ data }) => (
      <div className={style.eduSection} id="education">
        <div className={style.container}>
          <SectionHeader title={EDUCATION_TITLE} subtitle={EDUCATION_SUBTITLE} />
          <EduDesktop data={data} />
          <EduMobile data={data} />
        </div>
      </div>
  );
export default Index;
