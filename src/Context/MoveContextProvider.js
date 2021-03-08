import React, { useState, useContext, useEffect } from "react";
import MoveContext from "./MoveContext";
import UnicornApi from "../API/UnicornApi";
import GameContext from "./GameContext";
import { getSpritePositions } from "../Game/Maze/mazeHelpers";

const MoveContextProvider = ({ children }) => {
  const [spritePositions, setSpritePositions] = useState({});
  const { gameData, setGameData } = useContext(GameContext);
  const [mazeId, setMazeId] = useState("");

  //sets focus on maze grid to enable hotkeys
  //unfortunately useRef didn't work so I'm using, inappropriately, useEffect
  useEffect(() => {
    if (mazeId === "") return;
    console.log("SELECTING DOM ELEMENT TO FOCUS, mazeId: ", mazeId);
    const Maze = document.querySelector("[tabindex='-1']");
    Maze.focus();
  }, [mazeId]);

  //handles move
  const handleMove = (direction) => {
    const move = async (data) => {
      try {
        const res = await UnicornApi.makeMove(data, mazeId);
        console.log("MADE A MOVE: ", res);
        //if (res.state === "won") setGameState("won");
        if (res["state-result"] === "Move accepted") {
          updatePositions();
        } else {
          //TODO: handle illegal move
        }
        checkForGameOver(res);
      } catch (e) {
        console.log(e);
      }
    };
    move({ direction });
  };

  //updates positions of sprites following a move
  const updatePositions = async () => {
    try {
      const res = await UnicornApi.getMazeCurrentState(mazeId);
      setSpritePositions(getSpritePositions(res));
      console.log("UPDATED SPRITE POSITIONS AFTER MOVE: ", spritePositions);
    } catch (e) {
      console.log(e);
    }
  };

  //checks if game is won or lost
  const checkForGameOver = (res) => {
    if (res.state === "won") {
      setGameData({ ...gameData, status: "won" });
    } else if (res.state === "over") {
      setGameData({ ...gameData, status: "over" });
    }
  };

  return (
    <MoveContext.Provider
      value={{
        handleMove,
        updatePositions,
        checkForGameOver,
        mazeId,
        setMazeId,
        spritePositions,
        setSpritePositions,
      }}
    >
      {children}
    </MoveContext.Provider>
  );
};

export default MoveContextProvider;
