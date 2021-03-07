import React, { useState, useContext } from "react";
import GameContext from "../../Context/GameContext";
import Form from "./Form";
import SmallUnicorn from "../../Assets/Imgs/smallUnicorn.png";
import Maze from "../../Assets/Imgs/Maze.png";

const SetupPage = () => {
  const { setGameData } = useContext(GameContext);
  const initialState = { name: "Pinkie Pie", difficulty: 0, size: 15 };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameData({ ...formData, status: "active" });
    setFormData(initialState);
    //type === "snacks" ? history.push("/snacks") : history.push("/drinks");
  };

  return (
    <div>
      <h1 className="font-mono text-4xl text-center py-10 text-pink-600 font-black">
        Game Setup
      </h1>
      <div className="md:px-10 grid grid-cols-8 gap-4 items-center">
        <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-3">
          <div className="grid grid-cols-2 gap-4 items-center py-5">
            <p className="font-mono text-sm md:text-base">
              Help the <span className="text-pink-600">Unicorn</span> navigate
              the maze towards the Rainbow.
            </p>
            <img className="w-10/12" src={Maze}></img>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center py-5">
            <img className="w-6/12" src={SmallUnicorn}></img>
            <p className="font-mono text-sm md:text-base">
              Beware of the Skull Monster! 💀
            </p>
          </div>
        </div>
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default SetupPage;
