import React, { useState, useEffect, createContext, useContext } from "react";
import { GameControllerContext } from "./GameControllerProvider";

let TimeContext = createContext();

function TimeContextProvider({ children }) {
  const [time, setTime] = useState(0);

  const COUNTDOWN = 1120;
  const { isGameOver, isGameStarted, gameWon, setGameWon, setIsGameOver } =
    useContext(GameControllerContext);

  useEffect(() => {
    let interval;
    const isGameWon = () => {
      if (time >= COUNTDOWN) {
        setGameWon(false);
        setIsGameOver(true);
      } else if (isGameOver && time < COUNTDOWN) {
        setGameWon(true);
      }
    };
    if (!isGameOver && isGameStarted && !gameWon) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
      isGameWon();
      //GameController sets the isGameStarted to false on game end
    } else if (isGameOver && !isGameStarted) {
      isGameWon();
      clearInterval(interval);
    } else if (!gameWon && isGameOver) {
      clearInterval(interval);
    }else if(!isGameOver && !isGameStarted && !gameWon){
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isGameOver, isGameStarted, time, setGameWon, setIsGameOver, gameWon]);

  return (
    <TimeContext.Provider value={{ time, gameWon, COUNTDOWN }}>
      {children}
    </TimeContext.Provider>
  );
}
export { TimeContextProvider, TimeContext };
