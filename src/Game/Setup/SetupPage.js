import React, { useState, useContext } from "react";
import GameContext from "../../Context/GameContext";

const SetupPage = () => {
  const { setGameData } = useContext(GameContext);
  const initialState = { name: "Pinkie Pie", difficulty: "0", size: "15" };
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <select
          id="name"
          name="name"
          className="px-4 py-3 rounded-xl"
          onChange={handleChange}
        >
          <option value="Pinkie Pie">Pinkie Pie</option>
          <option value="Twilight Sparkle">Twilight Sparkle</option>
          <option value="Fluttershy">Fluttershy</option>
          <option value="Applejack">Applejack</option>
          <option value="Rainbow Dash">Rainbow Dash</option>
          <option value="Rarity">Rarity</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <input
          type="range"
          id="difficulty"
          name="difficulty"
          min="0"
          max="10"
          onChange={handleChange}
          value={formData.difficulty}
        ></input>
      </div>
      <div>
        <label htmlFor="size">Size</label>
        <input
          type="range"
          id="size"
          name="size"
          min="15"
          max="25"
          onChange={handleChange}
          value={formData.size}
        ></input>
      </div>
      <button>Start! </button>
    </form>
  );
};

export default SetupPage;
