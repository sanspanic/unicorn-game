import React, { useContext } from "react";
import GameContext from "../Context/GameContext";
import Home from "../Home/Home";
import WinPage from "./Win/WinPage";
import LosePage from "./Lose/LosePage";
import MazeWrapper from "./Maze/MazeWrapper";
import "./Game.css";
import SetupPage from "./Setup/SetupPage";

const Game = () => {
  const { gameData } = useContext(GameContext);
  return (
    <div>
      {gameData.status === "setup" && <SetupPage />}
      {gameData.status === "active" && <MazeWrapper />}
      {gameData.status === "won" && <WinPage />}
      {gameData.status === "over" && <LosePage />}
    </div>
  );
};

export default Game;
