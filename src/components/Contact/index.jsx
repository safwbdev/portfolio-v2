import React from "react";
import SectionHeader from "../SectionHeader";
import InnerContent from "./InnerContent";
import { CONTACT_SUBTITLE, CONTACT_TITLE } from "../../constants/lang";
import useStyles from "./style"

const Contact = ({ data, getDownloadUrl }) => {
  const classes = useStyles()
  const { email, phone, linkedInlink, githubLink, fileUpload } = data[0];

  return (
    <div className={classes.contactSection} id="contact">
      <div className="container">
        <SectionHeader title={CONTACT_TITLE} subtitle={CONTACT_SUBTITLE} />
        <InnerContent
          email={email}
          phone={phone}
          linkedInlink={linkedInlink}
          githubLink={githubLink}
          downloadLink={getDownloadUrl(fileUpload.asset._ref)}
        />
      </div>
    </div>
  );
};

export default Contact;
