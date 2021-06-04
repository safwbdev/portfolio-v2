import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_TITLE } from "../constants/lang";

const Index =({essential, technical, framework, library,
    database,
    cms,
    os,
    tools,
    design})=> {

    const SectionHeader = () => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }
        }, [controls, inView]);
        return (
          <motion.div
            className="section-header"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 300 },
            }}
          >
            <h3 className="heading">{SKILL_TITLE}</h3>
          </motion.div>
        );
      };

      const SkillSection = ({ title, data }) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }
        }, [controls, inView]);
        return (
          <motion.div
            className="skill-content"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 300 },
            }}
          >
            <h4>{title}</h4>
            <div className="skillset">

            {data &&
              data.map(({ icon, name }, index) => {
                const content = (
                  <span>
                    <i className={icon}></i> <>{name}</>
                  </span>
                );
                return (
                  <span key={index} className="stack">
                    {content}
                  </span>
                );
              })}
              </div>
          </motion.div>
        );
      };

    // return (
    //     <div>
    //         <h1>Skills sets</h1>
    //       {/* {technical && technical.map((skill, index)=>(<p index={index}>{skill.name}</p>))  } */}
    //     </div>
    // )
    return (
        <>
          <section className="nav-section" id="skills">
            <div className="container">
              <SectionHeader />
              <div className="skill-section">
              { essential ? <SkillSection title="Essentials" data={essential} /> : null}
              { technical ? <SkillSection title="Technical" data={technical} /> : null}
              { framework ? <SkillSection title="Frameworks" data={framework} /> : null}
              { library ? <SkillSection title="UI Libraries" data={library} /> : null}
              { database ? <SkillSection title="Database" data={database} /> : null}
              { cms ? <SkillSection title="Content Mangement Systems" data={cms} /> : null}
              { os ? <SkillSection title="OS" data={os} /> : null}
              { tools ? <SkillSection title="Tools" data={tools} /> : null}
              { design ? <SkillSection title="Design" data={design} /> : null}
              </div>
            </div>
          </section>
        </>
      );
}
export default  Index