import React from "react";
import GameCard from "../molecules/GameCard";

const GamesSection = ({ gamesInfo }) => (
  <div id="games" className="container">
    <div className="row">
      {gamesInfo.map((game, index) => (
        <GameCard
          key={index}
          href={game.href}
          src={game.src}
          alt={game.alt}
          logoSrc={game.logoSrc}
          logoAlt={game.logoAlt}
        />
      ))}
    </div>
  </div>
);

export default GamesSection;