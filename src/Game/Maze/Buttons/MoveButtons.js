import React from "react";
import {
  ArrowFatLinesUp,
  ArrowFatLinesDown,
  ArrowFatLinesLeft,
  ArrowFatLinesRight,
} from "phosphor-react";

const MoveButtons = ({ handleMove }) => {
  return (
    <div className="flex justify-center gap-10 mb-2">
      <button
        className="gradient-pink border-2 shadow-xl border-purple-600 text-white px-3 py-2 rounded bg-blue-400 p-1"
        onClick={() => handleMove("east")}
      >
        <ArrowFatLinesRight size={24} />
      </button>
      <button
        className="gradient-pink border-2 shadow-xl border-purple-600 text-white px-3 py-2 rounded bg-blue-400 p-1"
        onClick={() => handleMove("west")}
      >
        <ArrowFatLinesLeft size={24} />
      </button>
      <button
        className="gradient-pink border-2 shadow-xl rounded border-purple-600 text-white px-3 py-2 bg-blue-400 p-1"
        onClick={() => handleMove("south")}
      >
        <ArrowFatLinesDown size={24} />
      </button>
      <button
        className="gradient-pink border-2 shadow-xl  rounded border-purple-600 text-white px-3 py-2 bg-blue-400 p-1"
        onClick={() => handleMove("north")}
      >
        <ArrowFatLinesUp size={24} />
      </button>
    </div>
  );
};

export default MoveButtons;
