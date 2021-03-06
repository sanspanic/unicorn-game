import React, { useContext } from "react";
import GameContext from "../Context/GameContext";

const Game = () => {
  const { gameData } = useContext(GameContext);
  return (
    <div>
      {gameData.status === "setup" && <Setup />}
      {gameData.status === "win" && <Win />}
      {gameData.status === "lose" && <Lose />}
      {gameData.status === "active" && <Maze />}
    </div>
  );
};

export default Game;
