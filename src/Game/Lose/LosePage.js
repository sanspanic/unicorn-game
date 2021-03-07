import React, { useContext } from "react";
import GameContext from "../../Context/GameContext";
import Skull from "../../Assets/Imgs/Skull.png";

const LosePage = () => {
  const { playAgain } = useContext(GameContext);

  return (
    <div className="flex flex-col justify-evenly items-center p-10 h-screen">
      <div className="font-mono text-xl text-center">You lost! :(</div>
      <img className="sm:w-9/12 md:w-5/12 lg:w-3/12" src={Skull}></img>
      <button
        className="shadow-xl py-2 px-3 border-4 border-purple-700 rounded gradient-pink text-white font-mono"
        onClick={playAgain}
      >
        Restart
      </button>
    </div>
  );
};

export default LosePage;
