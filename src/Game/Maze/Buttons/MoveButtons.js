import React from "react";

const MoveButtons = ({ handleMove }) => {
  return (
    <div className="flex justify-center gap-10 mb-2">
      <button
        className="border-2 border-blue-300 rounded bg-blue-400 p-1"
        onClick={() => handleMove("east")}
      >
        Move right
      </button>
      <button
        className="border-2 border-blue-300 rounded bg-blue-400 p-1"
        onClick={() => handleMove("west")}
      >
        Move left
      </button>
      <button
        className="border-2 rounded border-blue-300 bg-blue-400 p-1"
        onClick={() => handleMove("south")}
      >
        Move down
      </button>
      <button
        className="border-2 rounded border-blue-300 bg-blue-400 p-1"
        onClick={() => handleMove("north")}
      >
        Move up
      </button>
    </div>
  );
};

export default MoveButtons;
