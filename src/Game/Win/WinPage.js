import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";

const WinPage = () => {
  const { playAgain } = useContext(GameContext);

  return (
    <>
      <div>You won!</div>
      <button onClick={playAgain}>Play again!</button>
    </>
  );
};

export default WinPage;
