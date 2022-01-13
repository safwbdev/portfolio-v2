import React from "react";
import SectionHeader from "../SectionHeader";
import InnerContent from "./InnerContent";
import { CONTACT_SUBTITLE, CONTACT_TITLE } from "../../constants/lang";
import useStyles from "./style"

const Contact = ({ data }) => {
  const classes = useStyles()
  const { email, phone, linkedInlink, githubLink } = data[0];

  return (
    <div className={classes.contactSection} id="contact">
      <div className="container">
        <SectionHeader title={CONTACT_TITLE} subtitle={CONTACT_SUBTITLE} />
        <InnerContent
          email={email}
          phone={phone}
          linkedInlink={linkedInlink}
          githubLink={githubLink}
        />
      </div>
    </div>
  );
};

export default Contact;