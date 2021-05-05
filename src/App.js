// import "./App.css";
import "./styles/index.scss";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import sanityClient from "./client.js";

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

  useEffect(() => {
    //MAIN
    sanityClient
      .fetch(
        `*[_type == "user"]{
          name,
          role,
          phone,
          email,
          location,
          githubLink,
          linkedInlink,
          desc,
          userImage{
            asset->{
                _id,
                url
            },
            alt
          }         
      }`
      )
      .then((data) => setMain(data))
      .catch(console.error);

    //TECHNICAL SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "essential"]{
            name,
            icon,
            skillType
        }`
      )
      .then((data) => setEssential(data))
      .catch(console.error);

    //TECHNICAL SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "technical"]{
            name,
            icon,
            skillType
        }`
      )
      .then((data) => setTechnical(data))
      .catch(console.error);

    //FRAMEWORK SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "framework"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setFramework(data))
      .catch(console.error);

    //LIBARIES SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "library"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setLibrary(data))
      .catch(console.error);

    //OS SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "os"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setOs(data))
      .catch(console.error);

    //CMS SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "cms"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setCms(data))
      .catch(console.error);

    //DESIGN SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "design"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setDesign(data))
      .catch(console.error);

    //DATABASE SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "database"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setDatabase(data))
      .catch(console.error);

    //TOOLS SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills" && skillType == "tools"]{
              name,
              icon,
              skillType
          }`
      )
      .then((data) => setTools(data))
      .catch(console.error);

    //WORK
    sanityClient
      .fetch(
        `*[_type == "work"]{
            companyName,
            role,
            startDate,
            endDate,
            tasks,
            companyImage{
              asset->{
                  _id,
                  url
              },
              alt
            }
      }`
      )
      .then((data) => setWork(data))
      .catch(console.error);

    //EDUCATION
    sanityClient
      .fetch(
        `*[_type == "education"]{
              schoolName,
              field,
              location,
              startDate,
              endDate,
              eduImage{
                asset->{
                    _id,
                    url
                },
                alt
              }
        }`
      )
      .then((data) => setEdu(data))
      .catch(console.error);
  }, []);

  // console.log(technicalData);

  return (
    <div className="App">
      {!mainData ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Main data={mainData[0]} />
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
          <Work data={workData} />
          <Education data={eduData} />
          <Contact data={mainData[0]} />
        </div>
      )}
    </div>
  );
}

export default App;
