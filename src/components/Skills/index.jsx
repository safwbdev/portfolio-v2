import React from "react";
import { SKILL_TITLE } from "../../constants/lang";
import SkillSection from "./SkillSection";
import SectionHeader from "../SectionHeader"

const Skills =({essential, technical, framework, library,
    database,
    cms,
    os,
    tools,
    design})=> {

   return (
        <>
          <section className="nav-section" id="skills">
            <div className="container">
              <SectionHeader title={SKILL_TITLE} />
              <div className="skill-section">
              { essential &&  (<SkillSection title="Essentials" data={essential} />)}
              { technical &&  (<SkillSection title="Technical" data={technical} />)}
              { framework &&  (<SkillSection title="Frameworks" data={framework} />)}
              { library &&  (<SkillSection title="UI Libraries" data={library} />)}
              { database &&  (<SkillSection title="Database" data={database} />)}
              { cms &&  (<SkillSection title="Content Mangement Systems" data={cms} />)}
              { os &&  (<SkillSection title="OS" data={os} />)}
              { tools &&  (<SkillSection title="Tools" data={tools} />)}
              { design &&  (<SkillSection title="Design" data={design} />)}
              </div>
            </div>
          </section>
        </>
      );
}
export default  Skills