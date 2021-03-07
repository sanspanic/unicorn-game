import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../Context/GameContext";
import UnicornApi from "../../API/UnicornApi";
import { addProps, getSpritePositions } from "./mazeHelpers";
import { v4 as uuid } from "uuid";
import GridCell from "./GridCell";
import "./Maze.css";
import MoveButtons from "./Buttons/MoveButtons";

const MazeGrid = () => {
  const { gameData } = useContext(GameContext);
  const [mazeGrid, setMazeGrid] = useState([]);
  const [mazeId, setMazeId] = useState("");
  const [spritePositions, setSpritePositions] = useState({});

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
        setMazeId(res);
        console.log("NEW MAZE ID RETRIEVED: ", res);
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

  //draws new maze after maze ID changes
  useEffect(() => {
    const setUpNewMaze = async () => {
      try {
        //retrieves array where each array item represents 1 maze grid cell
        const res = await UnicornApi.getMazeCurrentState(mazeId);
        console.log("GRID DATA BEFORE HELPER FUNCTION: ", res.data);
        //adds east, south borders + index number to array items
        const completeGridData = addProps(res.data, parseInt(gameData.size));
        console.log(
          "COMPLETE GRID DATA AFTER HELPER FUNCTION: ",
          completeGridData
        );
        //update state based on API call result
        setMazeGrid(completeGridData);
        setSpritePositions(getSpritePositions(res));
        console.log("SPRITE POSITIONS AFTER API CALL: ", spritePositions);
      } catch (e) {
        console.log(e);
      }
    };
    setUpNewMaze();
  }, [mazeId]);

  //handles move
  const handleMove = (direction) => {
    const move = async (data) => {
      try {
        const res = await UnicornApi.makeMove(data, mazeId);
        console.log("MADE A MOVE: ", res);
        //if (res.state === "won") setGameState("won");
        if (res["state-result"] === "Move accepted") {
          updatePositions();
        } else {
          //TODO: handle illegal move
        }
      } catch (e) {
        console.log(e);
      }
    };
    move({ direction });
  };

  //updates positions of sprites following a move
  const updatePositions = async () => {
    try {
      const res = await UnicornApi.getMazeCurrentState(mazeId);
      setSpritePositions(getSpritePositions(res));
      console.log("UPDATED SPRITE POSITIONS AFTER MOVE: ", spritePositions);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MoveButtons handleMove={handleMove} />
      <div className="Maze-grid mx-auto text-center" style={gridStyle}>
        {mazeGrid.map((arr) => (
          <GridCell
            key={uuid()}
            borders={arr.slice(0, arr.length)}
            index={arr[arr.length - 1]}
            spritePositions={spritePositions}
          />
        ))}
      </div>
    </>
  );
};

export default MazeGrid;
