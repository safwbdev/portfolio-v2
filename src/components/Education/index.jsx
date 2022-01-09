import React from "react";
import SectionHeader from "../SectionHeader";
import EduDesktop from "./EduDesktop";
import EduMobile from "./EduMobile";
import { EDUCATION_TITLE } from "../../constants/lang";
import useStyles from "./style"

const Index = ({ data }) => {
  const classes = useStyles();
  return (
    <>

      <div className={classes.eduSection} id="education">
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
