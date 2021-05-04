import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import sanityClient from "./client.js";

function App() {
  const [mainData, setMain] = useState(null);
  const [skillData, setSkill] = useState(null);
  const [workData, setWork] = useState(null);
  const [eduData, setEdu] = useState(null);

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

    //SKILLS
    sanityClient
      .fetch(
        `*[_type == "skills"]{
          name,
          icon,
          skillType
      }`
      )
      .then((data) => setSkill(data))
      .catch(console.error);

    //WORK
    sanityClient
      .fetch(
        `*[_type == "work"]{
            companyName,
            role,
            startDate,
            endDate,
            tasks
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
              eduImage,
        }`
      )
      .then((data) => setEdu(data))
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      {!mainData ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Main data={mainData[0]} />
          <Skills data={skillData} />
          <Work data={workData} />
          <Education data={eduData} />
        </div>
      )}
    </div>
  );
}

export default App;
