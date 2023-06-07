import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import style from "./ArcadePage.module.scss";
import Slider from "react-slick";
import { GAME_PROJECT_SETTINGS } from "./constants/sliderSettings";
import { QUERY } from "./constants/queries";

const ArcadePage = () => {
  const [projectData, setProject] = useState(null);

  const getAll = async (query, setData) => {
    try {
      const data = await sanityClient.fetch(query);
      if (data) setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll(QUERY.games, setProject);
  }, []);

  return (
    <div className={style.arcadePage}>
      <h1>Stef's Arcade(WIP)</h1>
      <Slider {...GAME_PROJECT_SETTINGS} className={style.slider}>
        {projectData &&
          projectData.map((game) => (
            <div className={style.gameOuter}>
              <div className={style.gameBox}>
                <img src={game.projectImage.asset.url} alt="" />
                <div className={style.title}>{game.title}</div>
                <p style={{ textAlign: "center" }}>{game.desc}</p>
                <div className={style.links}>
                  {game.demoLink !== "" && (
                    <a target="_blank" rel="noreferrer" href={game.demoLink}>
                      &gt; Press Start
                    </a>
                  )}
                  {game.githubLink !== "" && (
                    <a target="_blank" rel="noreferrer" href={game.demoLink}>
                      &gt; Source
                    </a>
                  )}
                  {game.demoLink === "" && game.githubLink === "" && (
                    <>
                      <span>Coming soon</span>
                      <span>&nbsp;</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ArcadePage;
