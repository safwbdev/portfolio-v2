import React from "react";
import style from "./ArcadePage.module.scss";
import Slider from "react-slick";
import { GAME_PROJECT_SETTINGS } from "./constants/sliderSettings";
import { games } from "./constants/games";

const ArcadePage = () => {
  return (
    <div className={style.arcadePage}>
      <h1>Stef's Arcade(WIP)</h1>
      <Slider {...GAME_PROJECT_SETTINGS} className={style.slider}>
        {games.map((game) => (
          <div className={style.gameOuter}>
            <div className={style.gameBox}>
              <img src={game.image} alt="" />
              <div className={style.title}>{game.name}</div>
              <div className={style.links}>
                {game.demoLink !== "" && (
                  <a target="_blank" rel="noreferrer" href={game.demoLink}>
                    &gt; Press Start
                  </a>
                )}
                {game.ghLink !== "" && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://github.com/${game.ghLink}`}
                  >
                    &gt; Source
                  </a>
                )}
                {game.demoLink === "" && game.ghLink === "" && (
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
