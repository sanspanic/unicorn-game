import { HotKeys } from "react-hotkeys";
import React, { useContext, useRef } from "react";
import MoveContext from "../../Context/MoveContext";

const Keys = ({ children }) => {
  const { handleMove } = useContext(MoveContext);
  const keyMap = {
    MOVE_UP: ["up", "w"],
    MOVE_DOWN: ["down", "s"],
    MOVE_LEFT: ["left", "a"],
    MOVE_RIGHT: ["right", "d"],
  };

  const handlers = {
    MOVE_UP: (event) => {
      console.log("Move up hotkey called!");
      handleMove("north");
    },
    MOVE_DOWN: (event) => {
      console.log("Move down hotkey called!");
      handleMove("south");
    },
    MOVE_LEFT: (event) => {
      console.log("Move left hotkey called!");
      handleMove("west");
    },
    MOVE_RIGHT: (event) => {
      console.log("Move right hotkey called!");
      handleMove("east");
    },
  };

  return (
    <HotKeys className="outline-none" keyMap={keyMap} handlers={handlers}>
      {children}
    </HotKeys>
  );
};

export default Keys;
