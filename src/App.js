// import "./App.css";
import "./styles/index.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Future from "./components/Future";
import Projects from "./components/Projects";
import sanityClient from "./client.js";
import {
  PROFILE_QUERY,
  ESSENTIAL_QUERY,
  TECHNICAL_QUERY,
  FRAMEWORK_QUERY,
  LIBRARY_QUERY,
  DATABASE_QUERY,
  CMS_QUERY,
  OS_QUERY,
  TOOLS_QUERY,
  WORK_QUERY,
  DESIGN_QUERY,
  EDUCATION_QUERY,
  FUTURE_QUERY,
  LEARNING_QUERY,
  PROJECTS_QUERY,
} from "./constants/queries";
import { PROFILE_LOADING } from "./constants/lang";
import { motion } from "framer-motion";
import { appVariants } from "./constants/variants";

function App() {
  const [mainData, setMain] = useState(null);
  const [workData, setWork] = useState(null);
  const [eduData, setEdu] = useState(null);
  const [essentialData, setEssential] = useState(null);
  const [technicalData, setTechnical] = useState(null);
  const [frameworkData, setFramework] = useState(null);
  const [libraryData, setLibrary] = useState(null);
  const [databaseData, setDatabase] = useState(null);
  const [cmsData, setCms] = useState(null);
  const [osData, setOs] = useState(null);
  const [toolsData, setTools] = useState(null);
  const [designData, setDesign] = useState(null);
  const [learningData, setLearning] = useState(null);
  const [futureData, setFuture] = useState(null);
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    //MAIN
    sanityClient
      .fetch(PROFILE_QUERY)
      .then((data) => setMain(data))
      .catch(console.error);

    //Essential SKILLS
    sanityClient
      .fetch(ESSENTIAL_QUERY)
      .then((data) => setEssential(data))
      .catch(console.error);

    //TECHNICAL SKILLS
    sanityClient
      .fetch(TECHNICAL_QUERY)
      .then((data) => setTechnical(data))
      .catch(console.error);

    //FRAMEWORK SKILLS
    sanityClient
      .fetch(FRAMEWORK_QUERY)
      .then((data) => setFramework(data))
      .catch(console.error);

    //LIBARIES SKILLS
    sanityClient
      .fetch(LIBRARY_QUERY)
      .then((data) => setLibrary(data))
      .catch(console.error);

    //OS SKILLS
    sanityClient
      .fetch(OS_QUERY)
      .then((data) => setOs(data))
      .catch(console.error);

    //CMS SKILLS
    sanityClient
      .fetch(CMS_QUERY)
      .then((data) => setCms(data))
      .catch(console.error);

    //DESIGN SKILLS
    sanityClient
      .fetch(DESIGN_QUERY)
      .then((data) => setDesign(data))
      .catch(console.error);

    //DATABASE SKILLS
    sanityClient
      .fetch(DATABASE_QUERY)
      .then((data) => setDatabase(data))
      .catch(console.error);

    //TOOLS SKILLS
    sanityClient
      .fetch(TOOLS_QUERY)
      .then((data) => setTools(data))
      .catch(console.error);

    //LEARNING SKILLS
    sanityClient
      .fetch(LEARNING_QUERY)
      .then((data) => setLearning(data))
      .catch(console.error);

    //FUTURE SKILLS
    sanityClient
      .fetch(FUTURE_QUERY)
      .then((data) => setFuture(data))
      .catch(console.error);

    //WORK
    sanityClient
      .fetch(WORK_QUERY)
      .then((data) => setWork(data))
      .catch(console.error);

    //EDUCATION
    sanityClient
      .fetch(EDUCATION_QUERY)
      .then((data) => setEdu(data))
      .catch(console.error);

    //PROJECTS
    sanityClient
      .fetch(PROJECTS_QUERY)
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  if (!workData) {
    return (
      <div className="loadscreen">
        <h2>{PROFILE_LOADING}</h2>
      </div>
    );
  } else {
    return (
      <motion.div
        className="App"
        variants={appVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <Main data={mainData} />
        <Projects title="Projects" data={projectData} />
        <Skills
          essential={essentialData}
          technical={technicalData}
          framework={frameworkData}
          library={libraryData}
          database={databaseData}
          cms={cmsData}
          os={osData}
          tools={toolsData}
          design={designData}
        />
        <Future learning={learningData} future={futureData} />
        <Work data={workData} />
        <Education data={eduData} />
        <Contact data={mainData[0]} />
      </motion.div>
    );
  }
}

export default App;
