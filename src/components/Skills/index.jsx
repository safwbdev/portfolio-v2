import React from "react";
import { SKILL_TITLE } from "../../constants/lang";
import SectionHeader from "../SectionHeader"
import SkillDesktop from "./SkillDesktop";
import SkillMobile from "./SkillMobile";
import style from "./Skill.module.scss";

const Skills =( props )=> {
      const skillData = [
        {title:"Essentials", data:props.essential}, 
        {title:"UI Libraries", data:props.library},
        {title:"Tools", data:props.tools},
        {title:"Technical", data:props.technical}, 
        {title:"Frameworks", data:props.framework}, 
        {title:"Database", data:props.database},
        // {title:"OS", data:props.os},
      ];

   return (
        <>
          <section className={style.skillSection} id="skills">
            <div className={style.container}>
              <SectionHeader title={SKILL_TITLE} />
              <SkillDesktop data={skillData} />
              <SkillMobile data={skillData} />
            </div>
          </section>
        </>
      );
}
export default  Skills