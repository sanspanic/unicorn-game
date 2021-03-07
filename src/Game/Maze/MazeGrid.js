import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../Context/GameContext";
import UnicornApi from "../../API/UnicornApi";
import { addProps } from "./mazeHelpers";
import { v4 as uuid } from "uuid";
import GridCell from "./GridCell";
import "./Maze.css";

const MazeGrid = () => {
  const { gameData } = useContext(GameContext);
  const [mazeGrid, setMazeGrid] = useState([]);
  const [mazeId, setMazeId] = useState("");

  //determines size of maze based on user input saved in context
  const gridStyle = {
    gridTemplateColumns: `repeat(${gameData.size}, minmax(0, 1fr))`,
  };

  //starts new game
  useEffect(() => {
    //retrieves maze ID and saves it to localStorage
    const getMazeID = async (data) => {
      try {
        const res = await UnicornApi.getNewMaze(data);
        window.localStorage.setItem("mazeId", res);
        setMazeId(res);
        console.log("NEW MAZE ID RETRIEVED: ", res);
        //getMazeID(res);
        //setUpMaze(res);
      } catch (e) {
        console.log(e);
      }
    };

    getMazeID({
      "maze-width": parseInt(gameData.size),
      "maze-height": parseInt(gameData.size),
      "maze-player-name": gameData.name,
      difficulty: parseInt(gameData.difficulty),
    });
  }, []);

  //sets up new maze grid outline after maze ID changes
  useEffect(() => {
    const setUpNewMaze = async () => {
      try {
        //retrieves array where each array item represents 1 maze grid cell
        const res = await UnicornApi.getMazeCurrentState();
        //adds east, south borders + index number to array items
        const completeGridData = addProps(res.data, parseInt(gameData.size));
        console.log(
          "COMPLETE GRID DATA AFTER HELPER FUNCTION: ",
          completeGridData
        );
        setMazeGrid(completeGridData);
      } catch (e) {
        console.log(e);
      }
    };
    setUpNewMaze();
  }, [mazeId]);

  return (
    <div className="Maze-grid mx-auto" style={gridStyle}>
      {mazeGrid.map((arr) => (
        <GridCell
          key={uuid()}
          borders={arr.slice(0, arr.length)}
          index={arr[arr.length - 1]}
        />
      ))}
    </div>
  );
};

export default MazeGrid;
