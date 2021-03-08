import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Unicorn from "../Assets/Imgs/Unicorn.png";
import GameContext from "../Context/GameContext";

const Home = () => {
  const { gameData, setGameData } = useContext(GameContext);
  const startGameSetup = () => {
    setGameData({ ...gameData, status: "setup" });
  };
  return (
    <>
      <h1 className="font-black text-pink-600 text-4xl py-5 sm:py-10">
        Hi. I am a Unicorn.{" "}
      </h1>
      <div className="flex-col sm:flex-row flex gap-4">
        <div className="flex flex-col gap-8 font-mono">
          <img className="w-5/12 sm:w-3/12" src={Unicorn}></img>
          <p>
            No, I'm not a privately held startup company valued at over $1
            billion.
          </p>
          <p>
            I'm the real deal, a mystical creature of magic as well as
            Scotland's{" "}
            <a
              className="underline"
              href="https://www.visitscotland.com/about/uniquely-scottish/national-animal-unicorn/"
            >
              {" "}
              national animal
            </a>
            .
          </p>
          <p>
            I'm being hunted by a Monster. Can I{" "}
            <span className="text-pink-600 font-semibold">TRUST</span> you to{" "}
            <span className="text-pink-600 font-semibold">PILOT</span> me safely
            to the rainbow?
          </p>
          <Link to="/game">
            <button className="gradient-pink border-4 border-purple-600 text-white px-3 py-3 shadow-xl rounded">
              Start game
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
