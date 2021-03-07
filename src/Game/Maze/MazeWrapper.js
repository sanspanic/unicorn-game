import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import MazeGrid from "./MazeGrid";

const MazeWrapper = () => {
  const { gameData } = useContext(GameContext);
  return (
    <div>
      <h2 className="text-center py-10 font-mono">
        Help {gameData.name} reach the rainbow!{" "}
      </h2>
      <div className="mx-auto sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <MazeGrid />
      </div>
    </div>
  );
};

export default MazeWrapper;
