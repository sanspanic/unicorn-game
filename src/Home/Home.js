import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>HOmepage!</div>
      <Link to="/game">Start game</Link>
    </>
  );
};

export default Home;
