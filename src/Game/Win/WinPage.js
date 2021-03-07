import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";

const WinPage = () => {
  const { gameData, setGameData } = useContext(GameContext);

  //restarts game by setting gameData.status back to "setup"
  const handlePlayAgain = () => {
    setGameData({ ...gameData, status: "setup" });
  };

  return (
    <>
      <div>You won!</div>
      <button onClick={handlePlayAgain}>Play again!</button>
    </>
  );
};

export default WinPage;
