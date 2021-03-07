import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";

const LosePage = () => {
  const { playAgain } = useContext(GameContext);
  return (
    <div>
      YA LOST
      <button onClick={playAgain}>Play again! </button>
    </div>
  );
};

export default LosePage;
