import React from "react";
import SectionHeader from "../SectionHeader";
import EduDesktop from "./EduDesktop";
import EduMobile from "./EduMobile";
import { EDUCATION_TITLE } from "../../constants/lang";

const Index = ({ data }) => {
  return (
    <>
      <div className="nav-section" id="education">
        <div className="container">
          <SectionHeader title={EDUCATION_TITLE} />
          <EduDesktop data={data} />
          <EduMobile data={data} />
        </div>
      </div>
    </>
  );
};
export default Index;
