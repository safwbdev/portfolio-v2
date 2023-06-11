import "../App.css";
import React, { useState, useEffect } from "react";
import {
  Header,
  Intro,
  Skills,
  Work,
  Education,
  Contact,
  Future,
  Projects,
  MobileMenu,
} from "../components";
import LoadScreen from "../components/LoadScreen";
import { motion } from "framer-motion";
import { appVariants } from "../constants/variants";
import { QUERY, DATA_TYPE, PATTERN } from "../constants/queries";
import { useNavigate } from "react-router-dom";
import { retrieveData } from "../utils";

// import { useProfileContext } from "../context/ProfileContext";

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
  const [percentageData, setPercentage] = useState(0);
  const [move, setMove] = useState(false);
  const [count, setCount] = useState([]);

  let current = 0;

  const navigate = useNavigate();

  const loadingPercent = (para) => {
    let temp = (para / 15) * 100;
    setPercentage(parseInt(temp));
  };

  const setPortfolioData = (value) => {
    switch (value.name) {
      case DATA_TYPE.CMS:
        retrieveData(value.db, setCms, setCount);
        break;
      case DATA_TYPE.DATABASE:
        retrieveData(value.db, setDatabase, setCount);
        break;
      case DATA_TYPE.DESIGN:
        retrieveData(value.db, setDesign, setCount);
        break;
      case DATA_TYPE.EDUCATION:
        retrieveData(value.db, setEdu, setCount);
        break;
      case DATA_TYPE.ESSENTIAL:
        retrieveData(value.db, setEssential, setCount);
        break;
      case DATA_TYPE.FRAMEWORK:
        retrieveData(value.db, setFramework, setCount);
        break;
      case DATA_TYPE.FUTURE:
        retrieveData(value.db, setFuture, setCount);
        break;
      case DATA_TYPE.LEARNING:
        retrieveData(value.db, setLearning, setCount);
        break;
      case DATA_TYPE.LIBRARY:
        retrieveData(value.db, setLibrary, setCount);
        break;
      case DATA_TYPE.OS:
        retrieveData(value.db, setOs, setCount);
        break;
      case DATA_TYPE.PROFILE:
        retrieveData(value.db, setMain, setCount);
        break;
      case DATA_TYPE.PROJECTS:
        retrieveData(value.db, setProject, setCount);
        break;
      case DATA_TYPE.TECHNICAL:
        retrieveData(value.db, setTechnical, setCount);
        break;
      case DATA_TYPE.TOOLS:
        retrieveData(value.db, setTools, setCount);
        break;
      case DATA_TYPE.WORK:
        retrieveData(value.db, setWork, setCount);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    QUERY.map((data) => {
      setPortfolioData(data);
      return null;
    });
  }, []);

  const keyHandler = function (event) {
    if (PATTERN.indexOf(event.key) < 0 || event.key !== PATTERN[current]) {
      current = 0;
      return;
    }
    current++;

    if (PATTERN.length === current) {
      current = 0;
      setMove(true);
    }
  };

  document.addEventListener("keydown", keyHandler, false);

  useEffect(() => {
    if (move) navigate("/arcade");
  }, [move, navigate]);

  useEffect(() => {
    if (count) {
      console.log(count.length);
      loadingPercent(count.length);
    }
    if (count.length >= 15) {
      setTimeout(setStatus(true), 1000);
    }
  }, [count]);

  // const data = useProfileContext();

  return statusData ? (
    <motion.div
      className="App"
      variants={appVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <Intro data={mainData} />
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
      <MobileMenu />
    </motion.div>
  ) : (
    <LoadScreen value={percentageData} />
  );
}

export default App;
