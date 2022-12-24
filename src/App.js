import "./App.css";
// import "./styles/index.scss";
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
} from "./components";
import LoadScreen from "./components/LoadScreen";
import sanityClient from "./client.js";
import { motion } from "framer-motion";
import { appVariants } from "./constants/variants";
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

  function getDownloadUrl(ref) {
    let formatUri = ref.replace("file-", "");
    let convertUri = formatUri.replace("-", ".");
    let fullUrl = `https://cdn.sanity.io/files/${process.env.REACT_APP_API_KEY}/production/${convertUri}?dl`;
    return fullUrl;
  }

  const loadingPercent = (para) => {
    let temp = (para / 15) * 100;
    setPercentage(parseInt(temp));
  };
  useEffect(() => {
    const getAll = async () => {
      let count = 0;
      try {
        const data = await sanityClient.fetch(PROFILE_QUERY);
        if (data) {
          setMain(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(ESSENTIAL_QUERY);
        if (data) {
          setEssential(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(TECHNICAL_QUERY);
        if (data) {
          setTechnical(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(FRAMEWORK_QUERY);
        if (data) {
          setFramework(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(LIBRARY_QUERY);
        if (data) {
          setLibrary(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(OS_QUERY);
        if (data) {
          setOs(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(CMS_QUERY);
        if (data) {
          setCms(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(DESIGN_QUERY);
        if (data) {
          setDesign(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(DATABASE_QUERY);
        if (data) {
          setDatabase(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(TOOLS_QUERY);
        if (data) {
          setTools(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(LEARNING_QUERY);
        if (data) {
          setLearning(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(FUTURE_QUERY);
        if (data) {
          setFuture(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(WORK_QUERY);
        if (data) {
          setWork(data);
          count++;
          // console.log(data);
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(EDUCATION_QUERY);
        if (data) {
          setEdu(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await sanityClient.fetch(PROJECTS_QUERY);
        if (data) {
          setProject(data);
          count++;
          loadingPercent(count);
        }
      } catch (error) {
        console.log(error);
      }

      if (count >= 15) {
        setTimeout(setStatus(true), 2000);
      }
    };
    getAll();
  }, []);

  return statusData ? (
    <motion.div
      className="App"
      variants={appVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <Intro data={mainData} getDownloadUrl={getDownloadUrl} />
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
      <Contact data={mainData} getDownloadUrl={getDownloadUrl} />
      <MobileMenu />
    </motion.div>
  ) : (
    <LoadScreen value={percentageData} />
  );
}

export default App;
