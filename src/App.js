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
  const [statusData, setStatus] = useState(false);

  const getAll = async () => {
    try {
      const data = await sanityClient.fetch(PROFILE_QUERY);
      if (data) {
        console.log("main");
        setMain(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(ESSENTIAL_QUERY);
      if (data) {
        setEssential(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(TECHNICAL_QUERY);
      if (data) {
        setTechnical(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(FRAMEWORK_QUERY);
      if (data) {
        setFramework(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(LIBRARY_QUERY);
      if (data) {
        setLibrary(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(OS_QUERY);
      if (data) {
        setOs(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(CMS_QUERY);
      if (data) {
        setCms(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(DESIGN_QUERY);
      if (data) {
        setDesign(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(DATABASE_QUERY);
      if (data) {
        setDatabase(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(TOOLS_QUERY);
      if (data) {
        setTools(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(LEARNING_QUERY);
      if (data) {
        setLearning(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(FUTURE_QUERY);
      if (data) {
        setFuture(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(WORK_QUERY);
      if (data) {
        setWork(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(EDUCATION_QUERY);
      if (data) {
        setEdu(data);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await sanityClient.fetch(PROJECTS_QUERY);
      if (data) {
        setProject(data);
      }
    } catch (error) {
      console.log(error);
    }
    setStatus(true);
  };

  useEffect(() => {
    getAll();
  }, []);

  if (!statusData) {
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
        <Contact data={mainData} />
      </motion.div>
    );
  }
}

export default App;
