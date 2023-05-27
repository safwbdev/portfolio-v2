import React from "react";
import style from "./ArcadePage.module.scss";

const ArcadePage = () => {
  const games = [
    {
      name: "Breakout",
      image: "https://placehold.co/600x400",
      ghLink: "",
      demoLink: "",
    },
    {
      name: "Tertris",
      image: "https://placehold.co/600x400",
      ghLink: "",
      demoLink: "",
    },
    {
      name: "Asteroids",
      image: "https://placehold.co/600x400",
      ghLink: "",
      demoLink: "",
    },
    {
      name: "Wack a mole",
      image: "https://placehold.co/600x400",
      ghLink: "",
      demoLink: "",
    },
  ];
  return (
    <div className={style.arcadePage}>
      <h1>Stef's Arcade(WIP)</h1>
      <div className={style.gamesContainer}>
        {games.map((game) => (
          <div className={style.gameBox}>
            <img src={game.image} alt="" />
            <div className={style.title}>{game.name}</div>
            <div className={style.links}>
              <a target="_blank" rel="noreferrer" href={game.demoLink}>
                Play
              </a>
              <a target="_blank" rel="noreferrer" href={game.ghLink}>
                GH
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArcadePage;
