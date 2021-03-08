import React, { useRef } from "react";
import AudioContext from "./AudioContext";
import Bump from "../Assets/Audio/bump.wav";
import Move from "../Assets/Audio/move.wav";
import Lose from "../Assets/Audio/lose.wav";
import Win from "../Assets/Audio/win.wav";

const AudioContextProvider = ({ children }) => {
  const bumpAudio = useRef();
  const moveAudio = useRef();
  const loseAudio = useRef();
  const winAudio = useRef();

  //plays when unicorn makes illegal move
  const playIllegal = () => {
    bumpAudio.current.play();
  };

  //plays when unicorn makes legal move
  const playLegal = () => {
    moveAudio.current.play();
  };

  //plays on game over
  const playGameOver = () => {
    loseAudio.current.play();
  };

  //plays on game won
  const playGameWon = () => {
    winAudio.current.play();
  };

  return (
    <AudioContext.Provider
      value={{ playLegal, playIllegal, playGameOver, playGameWon }}
    >
      <audio ref={bumpAudio}>
        <source src={Bump}></source>
      </audio>
      <audio ref={moveAudio}>
        <source src={Move}></source>
      </audio>
      <audio ref={loseAudio}>
        <source src={Lose}></source>
      </audio>
      <audio ref={winAudio}>
        <source src={Win}></source>
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
