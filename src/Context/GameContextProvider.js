import React, { useContext, useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const initialState = {
    status: "setup",
    difficulty: 0,
    size: 15,
  };
  const [gameData, setGameData] = useState(initialState);

  return (
    <GameContext.Provider value={{ gameData, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
